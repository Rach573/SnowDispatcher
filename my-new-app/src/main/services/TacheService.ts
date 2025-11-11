// src/main/services/TacheService.ts
import { prisma } from '../repositories/prisma/client'; // MODIFIÉ : Importer l'instance unique
import type { Tache, MailPriorite, StaffHierarchie } from '../../shared/types/DatabaseModels';

/**
 * Service chargé de la gestion des tickets (tâches).
 */
export class TacheService {
  // Supprimé : On n'a plus besoin d'un constructeur ou d'un 'this.prisma'
  // private prisma: PrismaClient;

  /**
   * Calcule la priorité d'un mail selon le statut hiérarchique de son expéditeur.
   */
  computePriorite(statut: StaffHierarchie | null): MailPriorite {
    switch (statut) {
      case 'Leader':
        return 'Alerte Rouge';
      case 'N+1':
        return 'Urgent';
      default:
        return 'Normale';
    }
  }

  /**
   * Retourne toutes les tâches existantes.
   */
  async getAll(): Promise<Tache[]> {
    // MODIFIÉ : Utilise l'instance 'prisma' importée
    const tasks = await prisma.taches.findMany();
    return tasks as unknown as Tache[];
  }

  /**
   * Crée une nouvelle tâche en se basant sur un mail existant et un agent IT.
   */
  async createTache(mailId: number, agentUserId: number): Promise<{ id: number }> {
    // Récupérer le mail (sans relations) — l'include provoque une erreur de typing
    // MODIFIÉ : Utilise l'instance 'prisma' importée
    const mail = await prisma.mail.findUnique({
      where: { id: mailId },
    });
    if (!mail) {
      throw new Error(`Mail ${mailId} introuvable`);
    }

    // Calcul de la priorité
    // Récupérer l'expéditeur staff séparément pour éviter les problèmes de typing sur 'include'
    const staff = (mail as any).expediteur_staff_id
      ? await prisma.staff.findUnique({
          where: { id: (mail as any).expediteur_staff_id },
        })
      : null;
    const priorite = this.computePriorite((staff as any)?.statut_hierarchique ?? null);

    // Mettre à jour le mail
    // MODIFIÉ : Utilise l'instance 'prisma' importée
    await prisma.mail.update({
      where: { id: mailId },
      data: { handler_user_id: agentUserId },
    });

    // Créer la tâche
    // Ajuster la valeur de priorité pour correspondre aux valeurs d'énum Prisma (ex: "Alerte_Rouge")
    const prioritePrisma = (() => {
      switch (priorite) {
        case 'Alerte Rouge':
          return 'Alerte_Rouge';
        case 'Urgent':
          return 'Urgent';
        default:
          return 'Normale';
      }
    })();

    // MODIFIÉ : Utilise l'instance 'prisma' importée
    const created = await prisma.taches.create({
      data: {
        mail_id: mailId,
        agent_user_id: agentUserId,
        statut_tache: 'Assigne',
        priorite_calculee: prioritePrisma,
        date_attribution: new Date().toISOString(),
      },
    });

    return { id: created.id };
  }
}