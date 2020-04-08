import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestHeadersService } from 'src/app/rest-headers.service';
import { Observable } from 'rxjs';
import { CustomerDetails } from './customer-details.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService{

  constructor(private httpClient: HttpClient, private restHeadersService: RestHeadersService) {
  }

  getCustomer(): Observable<CustomerDetails[]> {
    return this.httpClient.get<CustomerDetails[]>(environment.host + 'customer', this.restHeadersService.httpHeader);
  }
  
  getCustomerById(id: number): Observable<CustomerDetails> {
    return this.httpClient.get<CustomerDetails>(environment.host + 'customer/' + id, this.restHeadersService.httpHeader);
  }

  deleteCustomer(customer: CustomerDetails): Observable<any> {
    return this.httpClient.delete<any>(environment.host + 'customer/' + customer.id, this.restHeadersService.httpHeader);
  }
}
