import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SignUpService } from './sign-up.service';
import { RestHeadersService } from '../rest-headers.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private signupService: SignUpService,
    private restHeaderService: RestHeadersService) { }
    @Output()
    display = new EventEmitter<string>();
    show:string= "signup";
    
  ngOnInit() {
  }


  openLogin(){}

  
  signUpFormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])
  });


  createUser(user: CreateUser) {
    this.signupService.createUser(user.password, user.userName, user.firstName, user.lastName, user.email).subscribe(
      data => {
        console.log('user has been successfully added ', data);
        let userDetails: user[] = data.filter(data => { return (data.email && data.email == user.email)})
        let userId = userDetails.length > 0 ? userDetails[0].id : '';
        console.log('==============> userId ', userId);
        this.signupService.createCustomer(user.email, user.firstName, user.lastName, user.phone, user.address, userId).subscribe(
          data => {
            console.log('customer has been successfully added, ', data);
            this.display.emit("login")
            
          },
          error => {console.log('customer addition fialed, ', error);
          }
         
      )},
      error => {console.log('user login failed ',error)}

    )

    

    
  }
}
  export interface CreateUser {
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
  }

  export interface user { 
    id:number;
    password:string;
    last_login:null;
    is_superuser:boolean;
    username:string;
    first_name:string;
    last_name:string;
    email:string;
    is_staff:false;
    is_active:true;
    date_joined:string;
    groups:any[];
    user_permissions:any[];
  }
  



