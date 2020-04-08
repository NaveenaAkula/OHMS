import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestHeadersService } from '../rest-headers.service';
import { getRootComponents } from '@angular/core/src/render3/discovery_utils';
import { Observable } from 'rxjs';
import { RoomDetails, BookingDetails } from './new-booking.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewBookingService {

  constructor(private httpClient: HttpClient, private restHeadersService: RestHeadersService) { }

  getRoom(): Observable<RoomDetails[]>{
    return this.httpClient.get<RoomDetails[]>(environment.host + 'room', this.restHeadersService.httpHeader)
}

  bookRoom(bookingDetails:BookingDetails): Observable<any>{
    bookingDetails.customer = this.restHeadersService.user_id;
    return this.httpClient.post<BookingDetails>(environment.host + 'booking',bookingDetails, this.restHeadersService.httpHeader)
    
}

updateRoom(roomDetails:RoomDetails): Observable<any>{
  let id = roomDetails.room_no;
  roomDetails.availability=false;
  return this.httpClient.put<RoomDetails>(environment.host + 'room/' + id + '/',roomDetails, this.restHeadersService.httpHeader)
}



}






