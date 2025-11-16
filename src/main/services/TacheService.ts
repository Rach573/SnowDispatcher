// src/main/services/TacheService.ts
import { TacheRepository } from '../repositories/TacheRepository';
import { MailRepository } from '../repositories/MailRepository';
import type { Tache, MailPriorite, StaffHierarchie, MailStatut } from '../../shared/types/DatabaseModels';
import type { AuthUser } from '../../shared/types/Auth';

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
   * Normalizes DB tasks and sorts them by priority (desc) then date.
   */
  private normalizeAndSort(tasksFromDb: Tache[]): Tache[] {
    // Define ranking for DB priority values (Prisma stores e.g. 'Alerte_Rouge')
    const priorityRank: Record<string, number> = {
      Alerte_Rouge: 3,
      Urgent: 2,
      Normale: 1,
    };

    const rank = (p: string | null | undefined) => (p ? (priorityRank[p] ?? 0) : 0);
    const arrivalTime = (t: Tache): number => {
      const mailObj = (t as unknown as { mail?: { date_reception?: Date | string | null } }).mail;
      const mailDate = mailObj?.date_reception;
      if (mailDate instanceof Date) {
        return mailDate.getTime();
      }
      if (typeof mailDate === 'string') {
        const ts = new Date(mailDate).getTime();
        return Number.isNaN(ts) ? 0 : ts;
      }
      if (t.date_attribution) {
        const ts = new Date(t.date_attribution).getTime();
        return Number.isNaN(ts) ? 0 : ts;
      }
      return 0;
    };

    // Sort by priority (desc) then by date_attribution (desc)
    const sorted = tasksFromDb.slice().sort((a, b) => {
      const pr = rank(b.priorite_calculee as unknown as string) - rank(a.priorite_calculee as unknown as string);
      if (pr !== 0) return pr;
      return arrivalTime(b) - arrivalTime(a);
    });

    // Normalize priorite_calculee for UI (convert 'Alerte_Rouge' -> 'Alerte Rouge')
    const humanize = (p: string | null | undefined) => {
      if (!p) return 'Normale';
      if (p === 'Alerte_Rouge') return 'Alerte Rouge';
      return p;
    };

    const normalized: Tache[] = sorted.map((t) => {
      const agentObj = (t as unknown as { agent?: { username?: string } }).agent;
      const mailObj = (t as unknown as { mail?: any }).mail;
      const normalizedMail = mailObj
        ? {
            ...mailObj,
            date_reception:
              mailObj.date_reception instanceof Date
                ? mailObj.date_reception.toISOString()
                : mailObj.date_reception ?? null,
            expediteur: mailObj.expediteur ?? null,
          }
        : null;
      return {
        ...t,
        // t may include a joined `agent` object from Prisma; expose agent_username directly
        agent_username: agentObj?.username ?? null,
        priorite_calculee: humanize(t.priorite_calculee as unknown as string) as unknown as Tache['priorite_calculee'],
        mail: normalizedMail,
      } as Tache;
    });

    return normalized;
  }

  /**
   * Computes the priority of a mail based on the sender's hierarchical status.
   */
  computePriorite(statut: StaffHierarchie | null): MailPriorite {
    switch (statut) {
      case 'Leader':
        return 'Alerte Rouge';
      case 'N':
      case 'N+1':
        return 'Urgent';
      case 'Employe Lambda':
      case 'Employe_Lambda':
      default:
        return 'Normale';
    }
  }

  /**
   * Returns all existing tasks.
   */
  async getAll(): Promise<Tache[]> {
    const tasksFromDb = await this.tacheRepository.findAll();
    return this.normalizeAndSort(tasksFromDb);
  }

  /**
   * Returns tickets assigned to a specific agent.
   */
  async getByAgent(filters: { agentUserId?: number | null; agentUsername?: string | null }): Promise<Tache[]> {
    const tasksFromDb = await this.tacheRepository.findByAgent(filters);
    return this.normalizeAndSort(tasksFromDb);
  }

  /**
   * Creates a new task based on an existing mail and an IT agent.
   */
  async createTache(mailId: number, agentUserId: number): Promise<{ id: number; priorite: MailPriorite }> {
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

    return { id: created.id, priorite };
  }

  /**
   * Updates the status of an existing ticket. Agents can only update their own tasks.
   */
  async updateStatut(tacheId: number, statut: MailStatut, actor: AuthUser): Promise<void> {
    const allowed: MailStatut[] = ['Nouveau', 'Assigne', 'Resolu'];
    if (!allowed.includes(statut)) {
      throw new Error('Statut invalide.');
    }

    const task = await this.tacheRepository.findById(tacheId);
    if (!task) {
      throw new Error('Tache introuvable.');
    }

    if (actor.role !== 'admin' && task.agent_user_id !== actor.id) {
      throw new Error('Vous ne pouvez modifier que vos propres tickets.');
    }

    await this.tacheRepository.updateStatut(tacheId, statut);
  }
}
