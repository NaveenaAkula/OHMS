import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperUserHomeComponent } from './super-user-home.component';

@NgModule({
  declarations: [SuperUserHomeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SuperUserHomeComponent
  ]
})
export class SuperUserHomeModule { }
