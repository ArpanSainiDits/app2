import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FootersComponent } from './components/footers/footers.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FootersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
