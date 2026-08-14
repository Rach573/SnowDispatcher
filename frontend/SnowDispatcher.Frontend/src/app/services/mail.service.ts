import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environnement/environnement';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private apiUrl = `${environment.backendUrl}/api`;

  constructor(private http: HttpClient) {}

  getAllMails(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/mails`);
  }

  getMailById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/mails/${id}`);
  }
}
