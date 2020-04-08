import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestHeadersService {

  constructor() { }
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  user_id: number;

  setHttpHeaders(jwt) {
    this.httpHeader =  {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "JWT " + jwt
      })
    }
  }

  setCustomer(user_id: number){
    this.user_id =  user_id
  }
}
