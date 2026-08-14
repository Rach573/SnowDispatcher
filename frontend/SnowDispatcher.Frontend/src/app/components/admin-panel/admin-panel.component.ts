import { Component, OnInit, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { AuthService } from '../../services/auth.service';
import { Stat } from '../../models/stat.models';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  mailAssignments = signal<any[]>([]);
  totalMails = computed(() => {
  return this.mailAssignments().length;
  });
  treatedMails = computed(() => {
  return this.mailAssignments()
    .filter(mail => mail.status === 'Résolu')
    .length;
  });
  remainingMails = computed(() => {
    return this.mailAssignments().length - this.treatedMails();
  });
  agents: any[] = [];
  selectedAgent: any = null;
  selectedAgentMails: any[] = [];
  loadingAssignments = false;
  loadingAgents = false;
  loadingAgentMails = false;
  currentUser: any;
  activeTab: string = 'assignments';
  assignmentFilter: string = 'all';
  mailSearchTerm: string = '';
  assigningMailId: number | null = null;
  selectedStatView: 'priority' | 'status' | 'children' = 'priority';
  stats: Stat[] = [];
  loadingStats = false;
  statsError = '';

  constructor(
    private adminService: AdminService,
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
    this.loadAssignments();
    this.loadAgents();
  }

  get assignedMails(): any[] {
    return this.mailAssignments().filter(mail => !!mail.agentUserId);
  }

  get unassignedMails(): any[] {
    return this.mailAssignments().filter(mail => !mail.agentUserId);
  }

  get visibleMails(): any[] {
    const search = this.mailSearchTerm.trim().toLowerCase();

    return this.mailAssignments()
      .filter(mail => {
        if (this.assignmentFilter === 'todo' && mail.agentUserId) {
          return false;
        }

        if (this.assignmentFilter === 'assigned' && !mail.agentUserId) {
          return false;
        }

        if (!search) {
          return true;
        }

        return [
          mail.subject,
          mail.body,
          mail.senderName,
          mail.senderEmail,
          mail.agentName,
          mail.agentUsername
        ].some(value => (value || '').toLowerCase().includes(search));
      })
      .sort((a, b) => new Date(a.receivedAt).getTime() - new Date(b.receivedAt).getTime());
  }

  get sortedAgents(): any[] {
    return [...this.agents].sort((a, b) => a.activeMailCount - b.activeMailCount);
  }

  get statsTotal(): number {
    return this.stats.reduce((total, stat) => total + stat.count, 0);
  }

  getStatPercentage(count: number): number {
    return this.statsTotal === 0 ? 0 : Math.round((count / this.statsTotal) * 100);
  }

  loadAssignments(): void {
    this.loadingAssignments = true;
    this.adminService.getMailAssignments().subscribe(
      data => {
        this.mailAssignments.set(data);
        this.loadingAssignments = false;
      },
      error => {
        console.error('Erreur lors du chargement des attributions:', error);
        this.mailAssignments.set([]);
        this.loadingAssignments = false;
      }
    );
  }

  loadAgents(): void {
    this.loadingAgents = true;
    this.adminService.getAgents().subscribe(
      data => {
        this.agents = data;
        this.loadingAgents = false;
      },
      error => {
        console.error('Erreur lors du chargement des agents:', error);
        this.agents = [];
        this.loadingAgents = false;
      }
    );
  }

  assignMail(mailId: number, rawAgentUserId: string): void {
    const agentUserId = rawAgentUserId ? Number(rawAgentUserId) : null;
    this.assigningMailId = mailId;

    this.adminService.assignMail(mailId, agentUserId).subscribe(
      () => {
        this.loadAssignments();
        if (this.selectedAgent) {
          this.selectAgent(this.selectedAgent);
        }
        this.loadAgents();
        this.assigningMailId = null;
      },
      error => {
        alert('Erreur lors de l attribution du mail');
        console.error('Erreur:', error);
        this.assigningMailId = null;
      }
    );
  }

  getAgentLabel(agent: any): string {
    const count = agent.activeMailCount === 1 ? '1 mail' : `${agent.activeMailCount} mails`;
    return `${agent.nomComplet || agent.username} - ${count}`;
  }

  selectAgent(agent: any): void {
    this.selectedAgent = agent;
    this.loadingAgentMails = true;
    this.adminService.getAgentMails(agent.userId).subscribe(
      data => {
        this.selectedAgentMails = data;
        this.loadingAgentMails = false;
      },
      error => {
        console.error('Erreur lors du chargement des mails de l agent:', error);
        this.selectedAgentMails = [];
        this.loadingAgentMails = false;
      }
    );
  }

  updatePassword(agent: any): void {
    const password = prompt(`Nouveau mot de passe pour ${agent.nomComplet || agent.username}`);
    if (!password) {
      return;
    }

    this.adminService.updateAgentPassword(agent.userId, password).subscribe(
      () => alert('Mot de passe mis a jour'),
      error => {
        alert('Erreur lors de la mise a jour du mot de passe');
        console.error('Erreur:', error);
      }
    );
  }

  addAgent(): void {
    const username = prompt('Nom d utilisateur pour le nouvel agent');
    if (!username) {
      return;
    }

    const password = prompt(`Mot de passe pour ${username}`);
    if (!password) {
      return;
    }

    const staffIdInput = prompt(`ID du staff pour ${username} (laisser vide si aucun)`);
    const staffId = staffIdInput ? Number(staffIdInput) : null;

    this.adminService.addAgent(username, password, staffId).subscribe(
      () => {
        alert('Agent ajouté');
        this.loadAgents();
      },
      error => {
        alert('Erreur lors de l ajout de l agent');
        console.error('Erreur:', error);
      }
    );
  } 

  deleteAgent(agent: any): void {
    const name = agent.nomComplet || agent.username;
    if (!confirm(`Supprimer l agent "${name}" ? Ses mails seront desattribues.`)) {
      return;
    }

    this.adminService.deleteAgent(agent.userId).subscribe(
      () => {
        if (this.selectedAgent?.userId === agent.userId) {
          this.selectedAgent = null;
          this.selectedAgentMails = [];
        }
        this.loadAgents();
        this.loadAssignments();
      },
      error => {
        alert('Erreur lors de la suppression de l agent');
        console.error('Erreur:', error);
      }
    );
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;

    if (tab === 'stats' && this.stats.length === 0) {
      this.loadMailStatsByPriority();
    }
  }

  loadMailStatsByPriority(): void {
    this.selectedStatView = 'priority';
    this.loadStats(this.adminService.getMailStatsByPriority());
  }
  
  loadMailStatsByStatus(): void {
    this.selectedStatView = 'status';
    this.loadStats(this.adminService.getMailStatsByStatus());
  }

  loadMailStatsByChildren(): void {
    this.selectedStatView = 'children';
    this.loadStats(this.adminService.getMailStatsByChildren());
  }

  retryStats(): void {
    if (this.selectedStatView === 'status') {
      this.loadMailStatsByStatus();
    } else if (this.selectedStatView === 'children') {
      this.loadMailStatsByChildren();
    } else {
      this.loadMailStatsByPriority();
    }
  }

  private loadStats(request: import('rxjs').Observable<Stat[]>): void {
    this.loadingStats = true;
    this.statsError = '';

    request.subscribe(
      data => {
        this.stats = data;
        this.loadingStats = false;
      },
      error => {
        this.stats = [];
        this.statsError = 'Impossible de charger les statistiques.';
        this.loadingStats = false;
        console.error('Erreur lors du chargement des statistiques:', error);
      }
    );
  }
}
