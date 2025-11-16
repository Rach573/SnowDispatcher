import { google, gmail_v1 } from 'googleapis';
import { Buffer } from 'node:buffer';
import { MailRepository } from '../repositories/MailRepository';
import { StaffRepository } from '../repositories/StaffRepository';
import { logger } from '../utils/logger';
import type { MailSyncResult } from './types';

type GmailConfig = {
  clientId?: string;
  clientSecret?: string;
  redirectUri?: string;
  refreshToken?: string;
  userEmail?: string;
  labelId?: string;
  query?: string;
  maxResults?: number;
};

type GmailMessage = {
  id: string;
  subject: string;
  snippet: string | null;
  receivedAt: string;
  fromName: string | null;
  fromAddress: string | null;
};

/**
 * GmailSyncService connects to the Gmail API, retrieves unread messages
 * and inserts them in the MailRepository while avoiding duplicates.
 */
export class GmailSyncService {
  private repo: MailRepository;
  private staffRepo: StaffRepository;
  private cfg: GmailConfig;

  constructor(repo?: MailRepository, cfg?: GmailConfig, staffRepo?: StaffRepository) {
    this.repo = repo ?? new MailRepository();
    this.staffRepo = staffRepo ?? new StaffRepository();
    this.cfg = cfg ?? {
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      redirectUri: process.env.GMAIL_REDIRECT_URI,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      userEmail: process.env.GMAIL_USER_EMAIL,
      labelId: process.env.GMAIL_LABEL_ID,
      query: process.env.GMAIL_QUERY,
      maxResults: process.env.GMAIL_MAX_RESULTS ? Number(process.env.GMAIL_MAX_RESULTS) : undefined,
    };
  }

  /**
   * Determines whether the service has enough config to run.
   */
  isConfigured(): boolean {
    const hasClientId = Boolean(this.cfg.clientId);
    const hasClientSecret = Boolean(this.cfg.clientSecret);
    const hasRedirectUri = Boolean(this.cfg.redirectUri);
    const hasRefreshToken = Boolean(this.cfg.refreshToken);
    
    if (!hasClientId || !hasClientSecret || !hasRedirectUri || !hasRefreshToken) {
      logger.warn('GmailSyncService.isConfigured: Missing required configuration:', {
        hasClientId,
        hasClientSecret,
        hasRedirectUri,
        hasRefreshToken,
      });
      return false;
    }
    
    return true;
  }

  /**
   * Fetches new Gmail messages and stores them in the database.
   */
  async sync(): Promise<MailSyncResult> {
    if (!this.isConfigured()) {
      logger.info('GmailSyncService.sync: configuration incomplete, skipping Gmail sync');
      return { inserted: 0, mailIds: [] };
    }

    const gmail = this.buildClient();
    if (!gmail) {
      logger.error('GmailSyncService.sync: failed to build Gmail client');
      return { inserted: 0, mailIds: [] };
    }

    const messages = await this.fetchMessages(gmail);
    let inserted = 0;
    const insertedIds: number[] = [];

    for (const message of messages) {
      try {
        const exists = await this.repo.findByUnique(message.subject, message.receivedAt);
        if (exists) {
          await this.markAsRead(gmail, message.id);
          continue;
        }

        const staff = message.fromAddress ? await this.staffRepo.findByEmail(message.fromAddress) : null;
        const created = await this.repo.createMail({
          objet: message.subject || '(no subject)',
          contenu: message.snippet,
          date_reception: message.receivedAt,
          expediteur_staff_id: staff?.id ?? null,
          categorie_id: null,
          privacy_id: null,
          handler_user_id: null,
        });

        inserted++;
        insertedIds.push(created.id);
        await this.markAsRead(gmail, message.id);
      } catch (err) {
        logger.error(`GmailSyncService.sync: failed to persist message ${message.id}`, err as Error);
      }
    }

    logger.info(`GmailSyncService.sync: finished with ${inserted} insertions`);
    return { inserted, mailIds: insertedIds };
  }

  private buildClient(): gmail_v1.Gmail | null {
    try {
      logger.info('GmailSyncService.buildClient: Creating OAuth2 client');
      
      const oauth2Client = new google.auth.OAuth2(
        this.cfg.clientId,
        this.cfg.clientSecret,
        this.cfg.redirectUri,
      );

      oauth2Client.setCredentials({
        refresh_token: this.cfg.refreshToken,
      });
      
      logger.info('GmailSyncService.buildClient: Gmail client created successfully');

      return google.gmail({
        version: 'v1',
        auth: oauth2Client,
      });
    } catch (err) {
      logger.error('GmailSyncService.buildClient: failed to instantiate Gmail client', err as Error);
      return null;
    }
  }

  private async fetchMessages(gmail: gmail_v1.Gmail): Promise<GmailMessage[]> {
    try {
      const maxResults =
        typeof this.cfg.maxResults === 'number' && Number.isFinite(this.cfg.maxResults) && this.cfg.maxResults > 0
          ? this.cfg.maxResults
          : 10;

      logger.info('GmailSyncService.fetchMessages: Fetching messages', {
        userEmail: this.cfg.userEmail ?? 'me',
        labelId: this.cfg.labelId,
        query: this.cfg.query ?? 'in:inbox is:unread',
        maxResults,
      });

      const listRes = await gmail.users.messages.list({
        userId: this.cfg.userEmail ?? 'me',
        labelIds: this.cfg.labelId ? [this.cfg.labelId] : undefined,
        q: this.cfg.query ?? 'in:inbox is:unread',
        maxResults,
      });

      const ids = listRes.data.messages ?? [];
      logger.info(`GmailSyncService.fetchMessages: Found ${ids.length} messages`);
      
      const messages: GmailMessage[] = [];

      for (const entry of ids) {
        if (!entry.id) continue;
        const fullMessage = await gmail.users.messages.get({
          userId: this.cfg.userEmail ?? 'me',
          id: entry.id,
          format: 'full',
        });

        if (!fullMessage.data) continue;
        const headers = fullMessage.data.payload?.headers ?? [];
        const subject = this.headerValue(headers, 'Subject') ?? '(no subject)';
        const dateHeader = this.headerValue(headers, 'Date');
        const receivedAt = dateHeader
          ? new Date(dateHeader).toISOString()
          : fullMessage.data.internalDate
            ? new Date(Number(fullMessage.data.internalDate)).toISOString()
            : new Date().toISOString();

        const body = this.extractBody(fullMessage.data.payload) ?? fullMessage.data.snippet ?? null;
        const fromHeader = this.headerValue(headers, 'From');
        const { name: fromName, address: fromAddress } = this.parseAddress(fromHeader);

        messages.push({
          id: entry.id,
          subject,
          snippet: body,
          receivedAt,
          fromName,
          fromAddress,
        });
      }

      return messages;
    } catch (err) {
      logger.error('GmailSyncService.fetchMessages: failed to list gmail messages', err as Error);
      return [];
    }
  }

  private headerValue(
    headers: gmail_v1.Schema$MessagePartHeader[] | undefined,
    name: string,
  ): string | null {
    if (!headers) return null;
    const header = headers.find((h) => h.name?.toLowerCase() === name.toLowerCase());
    return header?.value ?? null;
  }

  private parseAddress(raw: string | null): { name: string | null; address: string | null } {
    if (!raw) return { name: null, address: null };
    const addressMatch = raw.match(/<([^>]+)>/);
    if (addressMatch) {
      const address = addressMatch[1]?.trim().toLowerCase() ?? null;
      const namePart = raw.replace(addressMatch[0], '').trim();
      const cleanedName = namePart.replace(/^"|"$/g, '').replace(/^'|'$/g, '');
      return {
        name: cleanedName.length > 0 ? cleanedName : null,
        address,
      };
    }
    const normalized = raw.trim().toLowerCase();
    return { name: null, address: normalized.length ? normalized : null };
  }

  private extractBody(part?: gmail_v1.Schema$MessagePart | null): string | null {
    if (!part) return null;

    if (part.mimeType === 'text/plain' || part.mimeType === 'text/html') {
      const decoded = this.decodeBody(part.body?.data);
      if (decoded) return decoded;
    }

    if (part.parts) {
      for (const nested of part.parts) {
        const nestedBody = this.extractBody(nested);
        if (nestedBody) return nestedBody;
      }
    }

    return this.decodeBody(part.body?.data);
  }

  private decodeBody(data?: string | null): string | null {
    if (!data) return null;
    try {
      const normalized = data.replace(/-/g, '+').replace(/_/g, '/');
      return Buffer.from(normalized, 'base64').toString('utf8');
    } catch (err) {
      logger.warn('GmailSyncService.decodeBody: failed to decode body', err as Error);
      return null;
    }
  }

  private async markAsRead(gmail: gmail_v1.Gmail, messageId: string): Promise<void> {
    try {
      await gmail.users.messages.modify({
        userId: this.cfg.userEmail ?? 'me',
        id: messageId,
        requestBody: {
          removeLabelIds: ['UNREAD'],
        },
      });
    } catch (err) {
      logger.warn(`GmailSyncService.markAsRead: failed to mark ${messageId} as read`, err as Error);
    }
  }
}
