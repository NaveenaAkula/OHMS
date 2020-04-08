import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBookingComponent } from './new-booking.component';
import { MaterialStylesModule } from '../material-styles/material-styles.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyBookingComponent } from '../my-booking/my-booking.component';
import { DialogModule } from '../dialog/dialog.module';

@NgModule({
  declarations: [NewBookingComponent,MyBookingComponent],
  imports: [
    CommonModule,
    MaterialStylesModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule
  ],
  exports: [
    NewBookingComponent,
    MyBookingComponent,
    
  ]
})
export class NewBookingModule { }
