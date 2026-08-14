import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentDashboardService } from '../../services/agent-dashboard.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-email-dashboard',
  templateUrl: './email-dashboard.component.html',
  styleUrls: ['./email-dashboard.component.css']
})
export class EmailDashboardComponent implements OnInit {
  mails: any[] = [];
  loading = false;
  currentUser: any;
  updatingTaskId: number | null = null;

  constructor(
    private agentDashboardService: AgentDashboardService,
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
    this.loadMails();
  }

  get pendingMails(): any[] {
    return this.mails.filter(mail => mail.status !== 'Résolu');
  }

  loadMails(): void {
    if (!this.currentUser?.userId) {
      this.mails = [];
      return;
    }

    this.loading = true;
    this.agentDashboardService.getAssignedMails(this.currentUser.userId).subscribe(
      (data: any[]) => {
        this.mails = data;
        this.loading = false;
      },
      error => {
        console.error('Erreur lors du chargement des mails attribues:', error);
        this.mails = [];
        this.loading = false;
      }
    );
  }

  markAsTreated(mail: any): void {
    if (!mail.taskId || !this.currentUser?.userId) {
      return;
    }

    this.updatingTaskId = mail.taskId;
    this.agentDashboardService.markAsTreated(mail.taskId, this.currentUser.userId).subscribe(
      () => {
        this.updatingTaskId = null;
        this.loadMails();
      },
      error => {
        this.updatingTaskId = null;
        alert('Erreur lors du passage en traite');
        console.error('Erreur:', error);
      }
    );
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
