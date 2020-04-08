import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { MaterialStylesModule } from '../material-styles/material-styles.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    MaterialStylesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SignUpComponent]
})
export class SignUpModule { }
