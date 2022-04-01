import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './feature/components/dashboard/dashboard.module';
import { FeatureModule } from './feature/feature.module';
// import { FeatureModule } from './feature/feature.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    DashboardModule,
    FeatureModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
