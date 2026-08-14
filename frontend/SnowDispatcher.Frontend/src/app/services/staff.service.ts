import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environnement/environnement';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private apiUrl = `${environment.backendUrl}/api`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllStaff(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/staff`, { headers: this.authService.getAuthHeaders() });
  }

  addStaff(nomComplet: string, adresseMail: string, statutHierarchique: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/staff`, {
      nom_complet: nomComplet,
      adresse_mail: adresseMail,
      statut_hierarchique: statutHierarchique
    }, { headers: this.authService.getAuthHeaders() });
  }

  deleteStaff(staffId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/staff/${staffId}`, { headers: this.authService.getAuthHeaders() });
  }
}
