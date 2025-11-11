import { PrismaClient } from '@prisma/client';
import type { Mail } from '../../shared/types/DatabaseModels';

/**
 * Service responsable des opérations liées aux mails non assignés.
 * Centralise l'utilisation de Prisma et permet de facilement
 * tester chaque opération de manière isolée.
 */
export class MailService {
  private prisma: PrismaClient;

  constructor(prisma?: PrismaClient) {
    // Permet d'injecter un Prisma client pour les tests ou de créer un nouveau par défaut
    this.prisma = prisma ?? new PrismaClient();
  }

  /**
   * Récupère la liste des mails non encore assignés à un ticket.
   */
  async getAllMails(): Promise<Mail[]> {
    const mails = await this.prisma.mail.findMany({
      where: {
        handler_user_id: null,
      },
    });
    return mails as unknown as Mail[];
  }

  /**
   * Marque un mail comme traité en lui assignant un agent IT.
   * Cela n'est qu'un exemple, l'assignation réelle se fait via le TicketService.
   */
  async assignMail(mailId: number, agentUserId: number): Promise<void> {
    await this.prisma.mail.update({
      where: { id: mailId },
      data: { handler_user_id: agentUserId },
    });
  }
}