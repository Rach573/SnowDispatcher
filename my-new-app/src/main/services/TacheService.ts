import { PrismaClient } from '@prisma/client';
import type { Tache, MailPriorite, StaffHierarchie } from '../../shared/types/DatabaseModels';

/**
 * Service chargé de la gestion des tickets (tâches). Il calcule la priorité
 * des mails en fonction de la hiérarchie du staff et crée les enregistrements
 * correspondants dans la table `taches`.
 */
export class TacheService {
  private prisma: PrismaClient;

  constructor(prisma?: PrismaClient) {
    this.prisma = prisma ?? new PrismaClient();
  }

  /**
   * Calcule la priorité d'un mail selon le statut hiérarchique de son expéditeur.
   * Cette méthode peut être rendue publique pour être testée séparément.
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
   * Retourne toutes les tâches existantes. Par défaut, on renvoie l'ensemble
   * des colonnes correspondant au type `Tache`.
   */
  async getAll(): Promise<Tache[]> {
    const tasks = await this.prisma.taches.findMany();
    return tasks as unknown as Tache[];
  }

  /**
   * Crée une nouvelle tâche en se basant sur un mail existant et un agent IT.
   * La priorité est calculée automatiquement, et le mail est marqué comme
   * assigné à l'agent.
   */
  async createTache(mailId: number, agentUserId: number): Promise<{ id: number }> {
    // Récupérer le mail et son expéditeur
    const mail = await this.prisma.mail.findUnique({
      where: { id: mailId },
      include: { expediteur_staff: true },
    });
    if (!mail) {
      throw new Error(`Mail ${mailId} introuvable`);
    }

    // Calcul de la priorité selon la hiérarchie du staff
    const staff = (mail as any).expediteur_staff as { statut_hierarchique: StaffHierarchie | null } | null;
    const priorite = this.computePriorite(staff?.statut_hierarchique ?? null);

    // Mettre à jour le mail pour indiquer qu'il est géré par agentUserId
    await this.prisma.mail.update({
      where: { id: mailId },
      data: { handler_user_id: agentUserId },
    });

    // Créer la tâche dans la base
    const created = await this.prisma.taches.create({
      data: {
        mail_id: mailId,
        agent_user_id: agentUserId,
        statut_tache: 'Assigné',
        priorite_calculee: priorite,
        date_attribution: new Date().toISOString(),
      },
    });

    return { id: created.id };
  }
}