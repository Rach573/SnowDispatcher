import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../../services/staff.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.css']
})
export class StaffManagementComponent implements OnInit {
  staffMembers: any[] = [];
  loading = false;
  currentUser: any;
  groupedStaff: { [key: string]: any[] } = {};

  constructor(
    private staffService: StaffService,
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
    this.loadStaff();
  }

  loadStaff(): void {
    this.loading = true;
    this.staffService.getAllStaff().subscribe(
      (data: any[]) => {
        this.staffMembers = data;
        this.groupStaff();
        this.loading = false;
      },
      error => {
        console.error('Erreur lors du chargement du staff:', error);
        this.loading = false;
      }
    );
  }

  groupStaff(): void {
    this.groupedStaff = {};
    const hierarchies = ['Leader', 'N+1', 'Employé Lambda'];
    
    for (const hierarchy of hierarchies) {
      this.groupedStaff[hierarchy] = this.staffMembers.filter(s => s.statutHierarchique === hierarchy);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  navigateToAdmin(): void {
    if (this.authService.isAdmin()) {
      this.router.navigate(['/admin']);
    }
  }
}
