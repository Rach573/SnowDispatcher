// src/main/services/MailService.ts
import { MailRepository } from '../repositories/MailRepository';
import { TacheRepository } from '../repositories/TacheRepository';
import type { Mail } from '../../shared/types/DatabaseModels';
import type { AuthUser } from '../../shared/types/Auth';

/**
 * Service responsible for business logic related to mails.
 * Uses MailRepository for data access.
 */
export class MailService {
  private repository: MailRepository;
  private tacheRepository: TacheRepository;

  constructor() {
    this.repository = new MailRepository();
    this.tacheRepository = new TacheRepository();
  }

  /**
   * Retrieves the list of mails not yet assigned to a ticket.
   */
  async getAllMails(): Promise<Mail[]> {
    return await this.repository.findUnassignedMails();
  }

  /**
   * Retrieves a complete listing of mails for admin usage.
   */
  async getAdminMails(): Promise<Mail[]> {
    return await this.repository.findAllMails();
  }

  /**
   * Assigns a mail to an IT agent.
   */
  async assignMail(mailId: number, agentUserId: number): Promise<void> {
    await this.repository.assignToHandler(mailId, agentUserId);
  }

  /**
   * Deletes a mail (and cascaded tickets if any).
   */
  async deleteMail(mailId: number): Promise<void> {
    await this.repository.deleteById(mailId);
  }

  /**
   * Changes the handler for an existing mail and its linked tickets.
   */
  async reassignMail(mailId: number, agentUserId: number): Promise<void> {
    await this.repository.assignToHandler(mailId, agentUserId);
    await this.tacheRepository.reassignAgentForMail(mailId, agentUserId);
  }

  /**
   * Retrieves a single mail with its relations for detail view.
   * Only admins or the assigned agent can view the content.
   */
  async getMailDetail(mailId: number, actor: AuthUser): Promise<Mail> {
    const mail = await this.repository.findById(mailId);
    if (!mail) {
      throw new Error('Mail introuvable.');
    }

    if (actor.role !== 'admin') {
      if (mail.handler_user_id !== actor.id) {
        throw new Error("Vous n'avez pas accès à ce mail.");
      }
    }

    return mail;
  }
}
