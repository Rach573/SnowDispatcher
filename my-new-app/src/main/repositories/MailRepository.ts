// src/main/repositories/MailRepository.ts
import { prisma } from './prisma/client';
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
    const mails = await prisma.mail.findMany({
      where: {
        handler_user_id: null,
      },
    });
    return mails as unknown as Mail[];
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
