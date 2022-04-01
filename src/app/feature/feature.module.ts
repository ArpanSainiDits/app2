import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { FeatureRoutingModule } from './feature-routing.module';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './components/login/admin/admin.component';
import { UserComponent } from './components/dashboard/user/user.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
  

    
  ],
  imports: [
    CommonModule, 
    RouterModule,
  ],
  exports:[
  ]
})
export class FeatureModule { }
