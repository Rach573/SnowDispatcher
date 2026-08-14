import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environnement/environnement';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${environment.backendUrl}/api`;

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tasks`);
  }

  createTask(mailId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tasks/create?mailId=${mailId}`, {});
  }

  assignTaskToAgent(taskId: number, agentId: number | null): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/tasks/${taskId}/assign?agentId=${agentId}`, {});
  }

  deleteTask(taskId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/tasks/${taskId}`);
  }
}
