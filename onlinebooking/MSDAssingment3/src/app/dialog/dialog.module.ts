import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../dialog/dialog.component';
import { MaterialStylesModule } from '../material-styles/material-styles.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    MaterialStylesModule,
    FormsModule,
  ],
  entryComponents: [DialogComponent],
  
})
export class DialogModule { }
