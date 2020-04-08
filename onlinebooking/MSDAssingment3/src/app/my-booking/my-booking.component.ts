import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MyBookingService } from './my-booking.service';
import { BookingDetails } from '../new-booking/new-booking.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RestHeadersService } from '../rest-headers.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {

  constructor(private myBookingService : MyBookingService, private restHeaderService: RestHeadersService) { }

  ngOnInit() {
    this.myBooking()
  }

  @Output()
  goBack: EventEmitter<String> = new EventEmitter<String>();
  
  booking: BookingDetails[] = null;

  cancelBooking(){
    this.goBack.emit('userHome');
  }

  bookingDetails: MatTableDataSource<BookingDetails>;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

displayedColumns: string[] = ['checkIn','checkOut','no_of_adults','no_of_children', 'reservation_date_time', 
                                'totalPrice','room'];

  myBooking(){
    this.myBookingService.getBooking().subscribe(
      (data)=>{
        if( data && data.length>0){
          console.log("bookings", data)
         this.booking = data.filter(booking => booking.customer== this.restHeaderService.user_id);
          this.bookingDetails = new MatTableDataSource(this.booking);
          this.bookingDetails.paginator = this.paginator;
          this.bookingDetails.sort = this.sort;
        }
      },error=>{
        console.log("my bookings are having issues")
        
        
      }
    );
  }

}
