import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RouterModule

  ]
})
export class LoginModule { }
