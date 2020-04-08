import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialStylesModule } from '../material-styles/material-styles.module';
import { LoginModule } from '../login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { SignUpModule } from '../sign-up/sign-up.module';
import { UserHomeModule } from '../user-home/user-home.module';
import { SuperUserHomeModule } from '../super-user-home/super-user-home.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MaterialStylesModule,
    LoginModule,
    HttpClientModule,
    SignUpModule,
    UserHomeModule,
    SuperUserHomeModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
