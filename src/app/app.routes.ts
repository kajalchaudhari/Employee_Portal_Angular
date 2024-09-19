import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

export const routes: Routes = [
{ path: '', redirectTo: 'add-employee', pathMatch: 'full' } ,
{path:"add-employee",component:AddEmployeeComponent},
{path:"update-employee/:id",component:UpdateEmployeeComponent},
{path:"employee-list",component:EmployeeListComponent,},
{path:"delete-employee/:id",component:DeleteEmployeeComponent}


];

