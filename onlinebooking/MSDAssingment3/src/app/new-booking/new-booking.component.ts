import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewBookingService } from './new-booking.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CustomerDetails } from '../customer/customer-details/customer-details.model';
import { RestHeadersService } from '../rest-headers.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { error } from 'protractor';

export interface Select {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css']
})
export class NewBookingComponent implements OnInit {

  constructor(private newBookingService: NewBookingService, private restHeaderService: RestHeadersService, private dialog: MatDialog) { }

  selectedRooms: RoomDetails[];
  customer: CustomerDetails;  
  ngOnInit() {
    this.selectedRooms =  [];
  }

  @Output()
  goBack: EventEmitter<String> = new EventEmitter<String>();

  selectedRoom(event, selectedRoom: RoomDetails) {
    let isChecked: boolean = event.toElement.checked;
    console.log('****************, ', event.toElement.checked);
    
    
    if(isChecked) {
      this.selectedRooms.push(selectedRoom);
    } else {
      if(this.selectedRooms && this.selectedRooms.length > 0){
        this.selectedRooms = this.selectedRooms.filter(x => x.room_no != selectedRoom.room_no)
      }
    }
    console.log('********************, ', this.selectedRooms);
  }

  cancelBooking(){
    this.goBack.emit('userHome');
  }
  

  booking(){
   let count: number = 0;
   
    
    this.selectedRooms.forEach(
      room => {
        
        let bookingDetails: BookingDetails = new BookingDetails(
          Number(this.userNewRoomSelectionFormGroup.get('children').value),
          Number(this.userNewRoomSelectionFormGroup.get('adults').value),
          new Date().toISOString(),
          new Date((String(this.userNewRoomSelectionFormGroup.get('checkIn').value))).toISOString(),
          new Date((String(this.userNewRoomSelectionFormGroup.get('checkOut').value))).toISOString(),
          room.price,
          room.room_no
        );
        this.newBookingService.bookRoom(bookingDetails).subscribe(
          data=>{
            console.log("booking is successful",data)
            count = count + 1;
            if(count == 1) {
              this.openDialog('Your booking has been successfully submitted!! pay at the hotel')
            }
            this.newBookingService.updateRoom(room).subscribe(
              (data)=>{
                console.log("room details", data)

              },error=>{
                console.log("room details error")
              }
            )
          }, error=>{
            console.log("booking failed",error)
            if(count == 0){
              this.openDialog('Sorry! there is a technical error at our end.');
            }
          });
       

      }
    )

  }

  Rooms: Select[] = [
    {value:'1', viewValue: '1'},
    {value:'2', viewValue: '2'},
    {value:'3', viewValue: '3'},
    {value:'4', viewValue: '4'},
    {value:'5', viewValue: '5'},
    {value:'6', viewValue: '6'},
  ];
  adults: Select[] = [
    {value:'1', viewValue: '1'},
    {value:'2', viewValue: '2'},
    {value:'3', viewValue: '3'},
    {value:'4', viewValue: '4'},
    {value:'5', viewValue: '5'},
    {value:'6', viewValue: '6'},
  ]

  children: Select[] = [
    {value:'1', viewValue: '1'},
    {value:'2', viewValue: '2'},
    {value:'3', viewValue: '3'},
    {value:'4', viewValue: '4'},
    {value:'5', viewValue: '5'},
    {value:'6', viewValue: '6'},
  ]

  userNewRoomSelectionFormGroup = new FormGroup({
  
    checkIn: new FormControl('', [Validators.required]),
    checkOut: new FormControl('', [Validators.required]),
    rooms: new FormControl('', [Validators.required]),
    adults: new FormControl('', [Validators.required]),
    children: new FormControl('', [Validators.required]),
  });
roomDetail: RoomDetails;
roomDetails: MatTableDataSource<RoomDetails>;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  // addBookingDetails(userNewRoomSelectionFormGroup: asdfdsaf){
  //   this.x = userNewRoomSelectionFormGroup;
  //  console.log( "***********userNewRoomSelectionFormGroup***********", this.userNewRoomSelectionFormGroup.value);

  // }
  displayedColumns: string[] = ['room_type','bedOption','price','view', 'availability', 
                                'room_start_date','room_end_date'];

  getRooms(){
    this.newBookingService.getRoom().subscribe(
      
      data=>{
        let checkIn = this.userNewRoomSelectionFormGroup.get('checkIn').value;
        let checkOut = this.userNewRoomSelectionFormGroup.get('checkOut').value;
        if(data.length > 0) {  
          console.log('Rooms details ', data);
          let room: RoomDetails[] = data.filter(room => room.availability !== false);
          this.roomDetails = new MatTableDataSource(Array.from(room.values()));
          this.roomDetails.paginator = this.paginator;
          this.roomDetails.sort = this.sort;
          
      }
    },error=>{
      console.log('something went wrong with room details')
    }

    );

  
  }



  openDialog(message: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30rem',
      data: {message: message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result.event);
      if(result.event === 'Ok') {
        this.goBack.emit('userHome');
      }
    });
  }

  cancel() {
    this.goBack.emit('BookingById');
  }

}


export interface RoomDetails{
  room_no: string;
  room_type: string;
  availability: boolean;
  bedOption: string;
  price: number;
  view: string;
  totalRooms: number;
  room_start_date: Date;
  room_end_date: Date;
  created_date: Date;
  updated_date: Date;
}

export class BookingDetails{

  customer: number;
   no_of_children: number;
   no_of_adults:number;
   reservation_date_time: string;
   checkIn: string;
   checkOut: string;
   totalPrice: number;
   room:string;

  constructor(
    no_of_children: number,
    no_of_adults:number,
   reservation_date_time: string,
   checkIn: string,
   checkOut: string,
   totalPrice: number,
   room:string
  ){
    this.no_of_adults = no_of_adults;
    this.no_of_children = no_of_children;
    this.reservation_date_time = reservation_date_time;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
    this.totalPrice = totalPrice;
    this.room = room;
  }
  
}