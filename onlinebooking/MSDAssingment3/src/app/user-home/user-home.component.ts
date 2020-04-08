import { Component, OnInit, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomerDetails } from '../customer/customer-details/customer-details.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})

export class UserHomeComponent {

  constructor() { }

 display = 'userHome';

 setDisplay(display) {
   this.display = display;
 }

}
