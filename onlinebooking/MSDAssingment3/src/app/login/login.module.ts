import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialStylesModule } from '../material-styles/material-styles.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserHomeModule } from '../user-home/user-home.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialStylesModule,
    FormsModule,
    ReactiveFormsModule,
    UserHomeModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
