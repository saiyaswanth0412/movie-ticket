import { Component, OnInit, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookingConfirmationComponent } from 'src/app/Common/booking-confirmation/booking-confirmation.component';
import { GlobalsService } from 'src/app/Services/Globals/globals.service';
import { PurchaseService } from 'src/app/Services/purchase/purchase.service';
import { SpinnerService } from 'src/app/Services/spinner.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  constructor(public globalService: GlobalsService, public purchaseService: PurchaseService, public spinnerService: SpinnerService,public dialog: MatDialog,private router:Router) { 

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

  onBookNow(){
    this.spinnerService.show();
    const screen_id = this.globalService.selectedScreenID;
    this.purchaseService.Purchase(screen_id,this.selectedSeats).subscribe({
      next: (resp) => {
        this.globalService.displayMessage('Seats Booked Successfully',2000);
          this.openConfirmationDialog();
      },
      error:(error) => {
        this.spinnerService.hide();
        console.log(error);
        if(error.status=='400')
        this.globalService.displayMessage("Error booking seats\n"+error?.error?.error);
        else this.globalService.displayMessage("Error booking seats\n"+error?.message);
      },
      complete: () => {
        this.spinnerService.hide();
      }
    })
    console.log('Selected Seats:', this.selectedSeats);
  }

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(BookingConfirmationComponent, {
      width: '300px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(['/movies']);
      
    });
  }
  

}
