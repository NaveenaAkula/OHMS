import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../customer/customer-details/customer-details.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  display: string= "home";
  fullName;
  

  ngOnInit() {
  }

  setFullCustomer(customer: CustomerDetails){
    console.log('*******************HOME****************CUSTOMER*********** ', customer)
    this.fullName = `${customer.first_name} ${customer.last_name}`
  }
  

  onToggleSidenav(){}

  displayComponet(component){
    console.log("entering child component",component)
    this.display = component;
  }

  openSignUp(event){
    console.log('************SIGNUP EVENT EMITTING METHOD***********', event)
    this.display = event
  }

  openLogin(event){
    console.log('************LOGIN EVENT EMITTING METHOD***********', event)
    this.display=event
  }
  
}

