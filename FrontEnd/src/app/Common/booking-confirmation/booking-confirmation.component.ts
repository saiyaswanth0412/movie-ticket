import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(public dialogRef: MatDialogRef<BookingConfirmationComponent>) { }

  close(): void {
    this.dialogRef.close();
  }

}
