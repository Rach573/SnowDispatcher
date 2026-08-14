import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmailDashboardComponent } from './email-dashboard.component';

const routes: Routes = [
  { path: '', component: EmailDashboardComponent }
];

@NgModule({
  declarations: [EmailDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmailDashboardModule { }
