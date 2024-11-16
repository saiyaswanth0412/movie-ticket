import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { SpinnerService } from 'src/app/Services/spinner.service';
import { Router } from '@angular/router';
import { GlobalsService } from 'src/app/Services/Globals/globals.service';
import { Endpoint } from 'src/app/Config/endpoints';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-now-dialog',
  templateUrl: './book-now-dialog.component.html',
  styleUrls: ['./book-now-dialog.component.css'],
})
export class BookNowDialogComponent implements OnInit {
  screens: any[] = [];
  selectedScreen: string = '';

  constructor(
    public dialogRef: MatDialogRef<BookNowDialogComponent>,
    private http: HttpClient,
    public spinnerService: SpinnerService,
    private router: Router,
    private globalService: GlobalsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fetchScreens();
  }

  fetchScreens(): void {
   
    this.spinnerService.show();
    const apiUrl = `${Endpoint.getScreen}?theatre_id=${this.globalService.selectedTheatreID}`;
    this.http.get<any>(apiUrl).subscribe({
      next: (response) => {
        this.screens = response;
      },
      error: (error) => {
        console.error('Error fetching screens:', error);
        this.spinnerService.hide();
      },
      complete: () => {
        console.log('Screens fetch complete');
        this.spinnerService.hide();
      }
    });
  }
  

  close(): void {
    this.dialogRef.close();
  }

  bookScreen(): void {
    if (this.selectedScreen) {
      alert(`Screen "${this.selectedScreen}" has been booked!`);
      this.dialogRef.close();
    } else {
      alert('Please select a screen before booking!');
    }
  }
  navigateToBooking(screenId: any): void {
    this.globalService.selectedScreenID = screenId;
    this.globalService.getSeatStatus(screenId).subscribe({
      next: (resp) => {
        this.globalService.getSeatInfo = resp.seatResults;
      },
      error:(error) => {
        this.globalService.displayMessage('Error fetching seat status',2000);
        this.spinnerService.hide();
      },
      complete: () => {
        this.spinnerService.hide();
        this.router.navigate([`/booking/${screenId}`]);
      }
    })
    this.dialogRef.close()
  }
}
