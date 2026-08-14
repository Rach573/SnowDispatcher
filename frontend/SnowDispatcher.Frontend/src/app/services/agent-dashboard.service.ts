import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environnement/environnement';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AgentDashboardService {
  private apiUrl = `${environment.backendUrl}/api/agent`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAssignedMails(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/mails?userId=${userId}`, { headers: this.authService.getAuthHeaders() });
  }

  markAsTreated(taskId: number, userId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/tasks/${taskId}/treated?userId=${userId}`, {}, { headers: this.authService.getAuthHeaders() });
  }
}
