import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { RestHeadersService } from '../rest-headers.service';
import { CustomerDetailsService } from '../customer/customer-details/customer-details.service';
import { CustomerDetails } from '../customer/customer-details/customer-details.model';
import { UserHomeComponent } from '../user-home/user-home.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
    private restHeaderService: RestHeadersService,
    private customerDetails: CustomerDetailsService) { }

    fullName
    show:string= "login";
    @Output()
    display = new EventEmitter<string>();

    @Output()
    fullCustomer = new EventEmitter<CustomerDetails>();
    
// openLogin(){
//     this.display = 'Login';
//     this.loginFormGroup.updateValueAndValidity();
//     this.loginFormGroup.reset();
//     // this.loginFormGroup.validator.
//   }


  ngOnInit() {
  }
  hide= true;

  loginFormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
customer:CustomerDetails

  Login() {
    this.loginService.login(this.loginFormGroup.get('userName').value, this.loginFormGroup.get('password').value).subscribe(
      (data) =>{
        console.log('data from the service ', data)
        if(data && data.token) {
          this.restHeaderService.setHttpHeaders(data.token);
          let jwtUser: jwtUser = JSON.parse(atob(data.token.split('.')[1]));
          let email = jwtUser.email;
          let user_id = jwtUser.user_id;
          console.log('------------------> ', jwtUser.username);
          console.log('------------------> ', data.token);
          console.log('---------------->', user_id);
          this.restHeaderService.setCustomer(user_id)
          if("instructor" == jwtUser.username) {
            this.loginService.getCustomerByUserId(user_id).subscribe(data => {
              console.log('--------------------><------------------, ', data);
              this.fullCustomer.emit(data)
              this.customer = data;
              this.display.emit('SuperUser');
            },error => {
              this.display.emit('SuperUser');
              console.log('Customer search failed');
            });
          } else {
            this.loginService.getCustomerByUserId(user_id).subscribe(data => {
              console.log('--------------------><------------------, ', data);
              this.fullCustomer.emit(data)
              this.customer = data;
              this.display.emit('Customer');

            },error => {
              this.display.emit('Customer');
              console.log('Customer search failed');
            });
          }
        }
      }, error => {
        this.display.emit('login');
      }
    )
  }

}



export class jwtUser {
  user_id:any;
  username:string;
  exp:string;
  email:string;
  orig_iat:any;
  }