// src/main/services/MailService.ts
import { prisma } from '../repositories/prisma/client'; // MODIFIÉ : Importer l'instance unique
import type { Mail } from '../../shared/types/DatabaseModels';

/**
 * Service responsable des opérations liées aux mails non assignés.
 */
export class MailService {
  // Supprimé : On n'a plus besoin d'un constructeur ou d'un 'this.prisma'
  // private prisma: PrismaClient;

  /**
   * Récupère la liste des mails non encore assignés à un ticket.
   */
  async getAllMails(): Promise<Mail[]> {
    // MODIFIÉ : Utilise l'instance 'prisma' importée
    const mails = await prisma.mail.findMany({
      where: {
        handler_user_id: null,
      },
    });
    return mails as unknown as Mail[];
  }

  /**
   * Marque un mail comme traité en lui assignant un agent IT.
   */
  async assignMail(mailId: number, agentUserId: number): Promise<void> {
    // MODIFIÉ : Utilise l'instance 'prisma' importée
    await prisma.mail.update({
      where: { id: mailId },
      data: { handler_user_id: agentUserId },
    });
  }
}