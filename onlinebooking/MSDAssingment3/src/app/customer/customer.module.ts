import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialStylesModule } from '../material-styles/material-styles.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [CustomerDetailsComponent,],
  imports: [
    CommonModule,
    MaterialStylesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomerDetailsComponent
  ]
})
export class CustomerModule { }
