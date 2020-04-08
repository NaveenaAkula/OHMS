import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestHeadersService } from '../rest-headers.service';
import { Observable } from 'rxjs';
import { BookingDetails } from '../new-booking/new-booking.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyBookingService {

  constructor(private httpClient: HttpClient, private restHeadersService: RestHeadersService) { }

  getBooking(): Observable<BookingDetails[]>{

    return this.httpClient.get<BookingDetails[]>(environment.host + 'booking', this.restHeadersService.httpHeader)
}
}