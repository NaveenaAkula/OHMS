import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { MaterialStylesModule } from './material-styles/material-styles.module';

// import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    
    
    // CustomerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    MaterialStylesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
