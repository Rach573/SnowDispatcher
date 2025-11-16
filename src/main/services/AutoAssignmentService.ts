import { MailRepository } from '../repositories/MailRepository';
import { UserRepository, type AgentWorkload } from '../repositories/UserRepository';
import { TacheService } from './TacheService';
import type { AssignmentNotification } from '../../shared/types/Events';

/**
 * Applies the business rule that automatically assigns freshly synchronized mails to agents.
 */
export class AutoAssignmentService {
  private mailRepository: MailRepository;
  private userRepository: UserRepository;
  private tacheService: TacheService;

  constructor(
    mailRepository?: MailRepository,
    userRepository?: UserRepository,
    tacheService?: TacheService,
  ) {
    this.mailRepository = mailRepository ?? new MailRepository();
    this.userRepository = userRepository ?? new UserRepository();
    this.tacheService = tacheService ?? new TacheService();
  }

  /**
   * Assigns each provided mail (if still unassigned) to the least loaded agent.
   * Returns notifications describing the assignments performed.
   */
  async assignMails(mailIds: number[]): Promise<AssignmentNotification[]> {
    const uniqueIds = Array.from(new Set(mailIds)).filter((id) => typeof id === 'number' && id > 0);
    if (uniqueIds.length === 0) return [];

    const agents = await this.userRepository.findAgentsWithOpenTaskCount();
    if (agents.length === 0) return [];

    const notifications: AssignmentNotification[] = [];

    const pickAgent = (): AgentWorkload | null => {
      if (agents.length === 0) return null;
      agents.sort((a, b) => {
        if (a.openTasks !== b.openTasks) return a.openTasks - b.openTasks;
        return a.id - b.id;
      });
      return agents[0] ?? null;
    };

    for (const mailId of uniqueIds) {
      const agent = pickAgent();
      if (!agent) break;

      const mail = await this.mailRepository.findById(mailId);
      if (!mail) continue;
      if (!mail.expediteur) {
        // Ignore mails without a known staff sender
        continue;
      }
      if (typeof mail.handler_user_id === 'number') {
        // already assigned elsewhere
        continue;
      }

      try {
        const tache = await this.tacheService.createTache(mailId, agent.id);
        notifications.push({
          tacheId: tache.id,
          mailId,
          agentUserId: agent.id,
          agentUsername: agent.username ?? null,
          priority: tache.priorite,
          mailObjet: mail.objet,
          expediteurNom: mail.expediteur?.nom_complet ?? null,
          expediteurMail: mail.expediteur?.adresse_mail ?? null,
        });
        agent.openTasks += 1;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('AutoAssignmentService.assignMails: failed to create task for mail', mailId, error);
      }
    }

    return notifications;
  }
}
