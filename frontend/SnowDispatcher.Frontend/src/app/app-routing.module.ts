import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { 
    path: 'dashboard', 
    loadChildren: () => import('./components/email-dashboard/email-dashboard.module').then(m => m.EmailDashboardModule),
    canActivate: [AuthGuard],
    data: { requireAgent: true }
  },
  { 
    path: 'staff', 
    loadChildren: () => import('./components/staff-management/staff-management.module').then(m => m.StaffManagementModule),
    canActivate: [AuthGuard],
    data: { requireAdmin: true }
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./components/admin-panel/admin-panel.module').then(m => m.AdminPanelModule),
    canActivate: [AuthGuard],
    data: { requireAdmin: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
