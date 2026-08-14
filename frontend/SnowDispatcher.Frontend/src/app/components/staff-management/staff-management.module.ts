import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StaffManagementComponent } from './staff-management.component';

const routes: Routes = [
  { path: '', component: StaffManagementComponent }
];

@NgModule({
  declarations: [StaffManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StaffManagementModule { }
