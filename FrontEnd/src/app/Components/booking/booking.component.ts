import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedMovie = {
    title: 'Devara Part 1',
    rating: 9.0,
    status: 'Ongoing',
    year: 2024,
    genre: 'Action, Adventure, Drama',
    description: 'NTR Jr returns in the epic action-adventure set in the coastal regions.',
    date: '05/05/2023',
    time: '15:40:00',
    price: 60,
  };

  seatRows = [
    [
      { number: 'A1', booked: false },
      { number: 'A2', booked: false },
      { number: 'A3', booked: true }, 
      { number: 'A4', booked: false },
      { number: 'A5', booked: false },
      { number: 'A6', booked: false },
      { number: 'A7', booked: false },
      { number: 'A8', booked: false },
      { number: 'A9', booked: false },
      { number: 'A10', booked: false },
    ],
    [
      { number: 'B1', booked: false },
      { number: 'B2', booked: false },
      { number: 'B3', booked: true }, 
      { number: 'B4', booked: false },
      { number: 'B5', booked: false },
      { number: 'B6', booked: false },
      { number: 'B7', booked: false },
      { number: 'B8', booked: false },
      { number: 'B9', booked: false },
      { number: 'B10', booked: false },
    ],
    [
      { number: 'B1', booked: false },
      { number: 'B2', booked: false },
      { number: 'B3', booked: true }, 
      { number: 'B4', booked: false },
      { number: 'B5', booked: false },
      { number: 'B6', booked: false },
      { number: 'B7', booked: false },
      { number: 'B8', booked: false },
      { number: 'B9', booked: false },
      { number: 'B10', booked: false },
    ],
  ];

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
