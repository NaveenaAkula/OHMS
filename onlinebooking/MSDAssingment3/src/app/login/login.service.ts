import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestHeadersService } from '../rest-headers.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerDetails } from '../customer/customer-details/customer-details.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private restHeadersService: RestHeadersService) { 

  }
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  readonly createUserhttpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic aW5zdHJ1Y3RvcjptYXZlcmljazFh'
    })
  };

  login(userName: any, password: any): Observable<jwtResponse> {
    let requestBody = {
        "username": userName,
        "password": password
      }
    return this.httpClient.post<jwtResponse>(environment.host + 'api-token-auth/', requestBody, this.httpOptions);
  }


  getCustomerByUserId(userId):Observable<CustomerDetails> {
    return this.httpClient.get<CustomerDetails>(environment.host + 'customerById/' + userId, this.restHeadersService.httpHeader);
  }

  
}
export class jwtResponse {
  token: string;
}
