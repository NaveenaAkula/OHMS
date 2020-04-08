import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home.component';
import { MaterialStylesModule } from '../material-styles/material-styles.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewBookingModule } from '../new-booking/new-booking.module';

@NgModule({
  declarations: [UserHomeComponent],
  imports: [
    CommonModule,
    MaterialStylesModule,
    FormsModule,
    ReactiveFormsModule,
    NewBookingModule
  ],
  exports: [UserHomeComponent]
})
export class UserHomeModule { }
