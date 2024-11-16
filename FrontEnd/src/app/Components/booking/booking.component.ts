import { Component, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/Services/Globals/globals.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(public globalService: GlobalsService) { 

  this.seatRows = this.globalService.getSeatInfo
  }

  ngOnInit(): void {
  }
  selectedMovie = this.globalService.selectedMovie;
  seatRows: any[] = [];

  selectedSeats: string[] = [];
  totalPayment = 0;
  
  onSelectSeat(seat: any) {
    if (!seat.booked) {
      if (this.selectedSeats.includes(seat.number)) {
        this.selectedSeats = this.selectedSeats.filter(s => s !== seat.number);
      } else {
        this.selectedSeats.push(seat.number);
      }
      this.calculateTotal();
    }
  }

  calculateTotal() {
    this.totalPayment = this.selectedSeats.length * this.selectedMovie.price;
  }
}
