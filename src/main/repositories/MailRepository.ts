// src/main/repositories/MailRepository.ts
import { prisma } from './prisma/client';
import { logger } from '../utils/logger';
import type { Mail } from '../../shared/types/DatabaseModels';

/**
 * Repository responsible for Mail data access operations.
 * Encapsulates all Prisma interactions for the Mail table.
 */
export class MailRepository {
  /**
   * Retrieves all mails that have not been assigned to a handler yet.
   */
  async findUnassignedMails(): Promise<Mail[]> {
    logger.info('MailRepository.findUnassignedMails: executing prisma.mail.findMany({ handler_user_id: null })');
    const mails = await prisma.mail.findMany({
      where: {
        handler_user_id: null,
      },
    });
    logger.info(`MailRepository.findUnassignedMails: returned ${mails.length} rows`);
    return mails as unknown as Mail[];
  }

  /**
   * Create a new mail record.
   */
  async createMail(data: {
    objet: string;
    contenu: string | null;
    date_reception: string;
    expediteur_staff_id: number | null;
    categorie_id: number | null;
    privacy_id: number | null;
    handler_user_id: number | null;
  }): Promise<{ id: number }> {
    const created = await prisma.mail.create({
      data,
    });
    return { id: created.id };
  }

  /**
   * Try to find a mail by a uniqueness heuristic (subject + reception date).
   */
  async findByUnique(objet: string, dateReception: string): Promise<Mail | null> {
    const mail = await prisma.mail.findFirst({
      where: {
        objet,
        date_reception: new Date(dateReception),
      },
    });
    return mail as unknown as Mail | null;
  }

  /**
   * Updates a mail to assign it to a specific handler (agent IT).
   */
  async assignToHandler(mailId: number, handlerUserId: number): Promise<void> {
    await prisma.mail.update({
      where: { id: mailId },
      data: { handler_user_id: handlerUserId },
    });
  }

  /**
   * Finds a mail by its ID.
   */
  async findById(mailId: number): Promise<Mail | null> {
    const mail = await prisma.mail.findUnique({
      where: { id: mailId },
    });
    return mail as unknown as Mail | null;
  }
}
