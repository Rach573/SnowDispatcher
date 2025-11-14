// src/main/services/MailService.ts
import { MailRepository } from '../repositories/MailRepository';
import type { Mail } from '../../shared/types/DatabaseModels';

/**
 * Service responsible for business logic related to mails.
 * Uses MailRepository for data access.
 */
export class MailService {
  private repository: MailRepository;

  constructor() {
    this.repository = new MailRepository();
  }

  /**
   * Retrieves the list of mails not yet assigned to a ticket.
   */
  async getAllMails(): Promise<Mail[]> {
    return await this.repository.findUnassignedMails();
  }

  /**
   * Assigns a mail to an IT agent.
   */
  async assignMail(mailId: number, agentUserId: number): Promise<void> {
    await this.repository.assignToHandler(mailId, agentUserId);
  }
}