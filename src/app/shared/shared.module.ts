import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from './components/common/common.component';
import { PipePipe } from './pipe.pipe';



@NgModule({
  declarations: [
    CommonComponent,
    PipePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
