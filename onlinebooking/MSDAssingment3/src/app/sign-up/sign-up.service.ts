import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestHeadersService } from '../rest-headers.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private httpClient: HttpClient, private restHeadersService: RestHeadersService) {

   }
   readonly createUserhttpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic aW5zdHJ1Y3RvcjptYXZlcmljazFh'
    })
  };

  createUser(password: string, userName: string, firstName: string, lastName: string, email: string): Observable<user[]> {
    let requestBody = {
      "password": password,
      "last_login": null,
      "is_superuser": false,
      "username": userName,
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "is_staff": true,
      "is_active": true,
      "groups": [],
      "user_permissions": [],
     
  }
  return this.httpClient.post<user[]>(environment.host + 'proxy', requestBody, this.createUserhttpOptions);
  }

  createCustomer(email, firstName, lastName, phone, address, user): Observable<any> {
    let requestBody = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      phone_number: phone,
      user: user,
      address: address
    }

    return this.httpClient.post<any>(environment.host + 'customer', requestBody, this.createUserhttpOptions);
  }

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
