import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environnement/environnement';
import { AuthService } from './auth.service';
import { Stat } from '../models/stat.models';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = `${environment.backendUrl}/api/admin`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getMailAssignments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/mail-assignments`, { headers: this.authService.getAuthHeaders() });
  }

  assignMail(mailId: number, agentUserId: number | null): Observable<any> {
    const query = agentUserId === null ? '' : `?agentUserId=${agentUserId}`;
    return this.http.put<any>(`${this.apiUrl}/mails/${mailId}/assign${query}`, {}, { headers: this.authService.getAuthHeaders() });
  }

  getAgents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/agents`, { headers: this.authService.getAuthHeaders() });
  }

  getAgentMails(agentUserId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/agents/${agentUserId}/mails`, { headers: this.authService.getAuthHeaders() });
  }

  updateAgentPassword(agentUserId: number, password: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/agents/${agentUserId}/password`, { password }, { headers: this.authService.getAuthHeaders() });
  }

  deleteAgent(agentUserId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/agents/${agentUserId}`, { headers: this.authService.getAuthHeaders() });
  }

  addAgent(username: string, password: string, staffId: number | null): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/agents`, { username, password, staffId }, { headers: this.authService.getAuthHeaders() });
  }

  getMailStatsByPriority(): Observable<Stat[]> {
    return this.http.get<Stat[]>(`${this.apiUrl}/stats/by-priority`, { headers: this.authService.getAuthHeaders() });
  }

  getMailStatsByStatus(): Observable<Stat[]> {
    return this.http.get<Stat[]>(`${this.apiUrl}/stats/by-status`, { headers: this.authService.getAuthHeaders() });
  }
  getMailStatsByChildren(): Observable<Stat[]> {
    return this.http.get<Stat[]>(`${this.apiUrl}/stats/by-children`, { headers: this.authService.getAuthHeaders() });
  }
}
