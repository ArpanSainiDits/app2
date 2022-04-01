import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe, PuniaPipe } from './custom.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    CustomPipe,
    PuniaPipe
  
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule, 
    RouterModule,
    FormsModule

  ],exports: [

  ]
})
export class DashboardModule { }
