// src/main/services/TacheService.ts
import { TacheRepository } from '../repositories/TacheRepository';
import { MailRepository } from '../repositories/MailRepository';
import type { Tache, MailPriorite, StaffHierarchie } from '../../shared/types/DatabaseModels';

/**
 * Service responsible for business logic related to tasks/tickets.
 * Uses TacheRepository and MailRepository for data access.
 */
export class TacheService {
  private tacheRepository: TacheRepository;
  private mailRepository: MailRepository;

  constructor() {
    this.tacheRepository = new TacheRepository();
    this.mailRepository = new MailRepository();
  }

  /**
   * Computes the priority of a mail based on the sender's hierarchical status.
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
   * Returns all existing tasks.
   */
  async getAll(): Promise<Tache[]> {
    return await this.tacheRepository.findAll();
  }

  /**
   * Creates a new task based on an existing mail and an IT agent.
   */
  async createTache(mailId: number, agentUserId: number): Promise<{ id: number }> {
    // Retrieve the mail
    const mail = await this.mailRepository.findById(mailId);
    if (!mail) {
      throw new Error(`Mail ${mailId} not found`);
    }

    // Calculate priority
    const expediteurStaffId = mail.expediteur_staff_id;
    const staff = expediteurStaffId
      ? await this.tacheRepository.findStaffById(expediteurStaffId)
      : null;
    const priorite = this.computePriorite(staff?.statut_hierarchique ?? null);

    // Update the mail
    await this.mailRepository.assignToHandler(mailId, agentUserId);

    // Adjust priority value to match Prisma enum values (e.g., "Alerte_Rouge")
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

    // Create the task
    const created = await this.tacheRepository.create({
      mail_id: mailId,
      agent_user_id: agentUserId,
      statut_tache: 'Assigne',
      priorite_calculee: prioritePrisma,
      date_attribution: new Date().toISOString(),
    });

    return { id: created.id };
  }
}