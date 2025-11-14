import type { Mail } from '../../shared/types/DatabaseModels';
import { MailRepository } from '../repositories/MailRepository';
import { logger } from '../utils/logger';

type OutlookConfig = {
  clientId?: string;
  clientSecret?: string;
  tenantId?: string;
  mailbox?: string; // e.g. user@domain.com
};

/**
 * Service de synchronisation (placeholder) pour récupérer les mails depuis Outlook.
 *
 * Implémentation minimale / mock : si les variables d'environnement ne sont pas renseignées,
 * la méthode `sync()` générera quelques mails factices pour faciliter le développement.
 *
 * Pour un vrai connecteur, on implémenterait l'authentification OAuth/MSAL ou un client IMAP
 * et on récupérerait les nouveaux messages, puis on les insérerait via MailRepository.
 */
export class OutlookSyncService {
  private repo: MailRepository;
  private cfg: OutlookConfig;

  constructor(repo?: MailRepository, cfg?: OutlookConfig) {
    this.repo = repo ?? new MailRepository();
    this.cfg = cfg ?? {
      clientId: process.env.OUTLOOK_CLIENT_ID,
      clientSecret: process.env.OUTLOOK_CLIENT_SECRET,
      tenantId: process.env.OUTLOOK_TENANT_ID,
      mailbox: process.env.OUTLOOK_MAILBOX,
    };
  }

  /**
   * Synchronise la boite et renvoie le nombre de nouveaux mails insérés.
   */
  async sync(): Promise<number> {
    logger.info('OutlookSyncService.sync: starting sync');

    // Placeholder: if no config, return mock mails or 0 based on environment
    const hasConfig = !!(this.cfg.clientId && this.cfg.clientSecret && this.cfg.mailbox);

    let fetched: Array<Partial<Mail>> = [];

    if (!hasConfig) {
      // Démo / mock : créer 0-2 mails factices aléatoires
      const now = new Date();
      const rnd = Math.random();
      if (rnd > 0.6) {
        fetched.push({
          objet: `Test sync ${now.toISOString()}`,
          contenu: 'Mail généré par le service de synchronisation (mock).',
          date_reception: now.toISOString(),
          expediteur_staff_id: null,
          categorie_id: null,
          privacy_id: null,
          handler_user_id: null,
        });
      }
    } else {
      // TODO: implémenter récupération réelle via Microsoft Graph / IMAP
      // pour l'instant on laisse fetched vide si config fournie mais non implémentée
      logger.info('OutlookSyncService.sync: config present but real connector not implemented yet');
      fetched = [];
    }

    let inserted = 0;
    for (const f of fetched) {
      try {
        // Avoid duplicates by checking objet + date_reception
        const exists = await this.repo.findByUnique(f.objet ?? '', f.date_reception ?? '');
        if (!exists) {
          // createMail expects more fields; coerce minimal set
          await this.repo.createMail({
            objet: f.objet ?? '(no subject)',
            contenu: f.contenu ?? null,
            date_reception: f.date_reception ?? new Date().toISOString(),
            expediteur_staff_id: f.expediteur_staff_id ?? null,
            categorie_id: f.categorie_id ?? null,
            privacy_id: f.privacy_id ?? null,
            handler_user_id: null,
          } as any);
          inserted++;
        }
      } catch (e) {
        logger.error('OutlookSyncService.sync: error inserting mail', e as Error);
      }
    }

    logger.info(`OutlookSyncService.sync: finished, inserted=${inserted}`);
    return inserted;
  }
}
