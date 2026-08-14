import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environnement/environnement';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.backendUrl}/api`;
  private currentUserSubject = new BehaviorSubject<any>(this.getStoredUser());
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return new Observable(observer => {
      this.http.post(`${this.apiUrl}/login`, { username, password }).subscribe(
        (response: any) => {
          const user = {
            username: response.username || username,
            role: response.role,
            userId: response.userId,
            token: response.token
          };
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSubject.next(user);
          observer.next(response);
          observer.complete();
        },
        error => observer.error(error)
      );
    });
  }

  logout(): void {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value?.token;
  }

  isAdmin(): boolean {
    return this.currentUserSubject.value?.role === 'admin';
  }

  isAgent(): boolean {
    return this.currentUserSubject.value?.role === 'agent';
  }

  getCurrentUser(): any {
    return this.currentUserSubject.value;
  }

  getAuthHeaders(): HttpHeaders {
    const token = this.currentUserSubject.value?.token;
    if (!token) {
      return new HttpHeaders();
    }

    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  private getStoredUser(): any {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      return null;
    }

    try {
      const user = JSON.parse(storedUser);
      return user?.token ? user : null;
    } catch {
      localStorage.removeItem('user');
      return null;
    }
  }

}

