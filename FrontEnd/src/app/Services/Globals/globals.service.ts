import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Endpoint } from 'src/app/Config/endpoints';
import { SpinnerService } from '../spinner.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor(private http:HttpClient,private spinnerService:SpinnerService, private snackBar:MatSnackBar) { }
  private genreSubject = new BehaviorSubject<string>('All');
  selectedGenere$ = this.genreSubject.asObservable();
  selectedMovie: any = {};
  selectedTheatreID:any = null;
  selectedScreenID:any = null;
  getSeatInfo:any = [];
  set selectedGenere(value: string) {
    this.genreSubject.next(value);
  }

  get selectedGenere(): string {
    return this.genreSubject.getValue();
  }

  getSeatStatus(screenId:any){
    this.spinnerService.show();
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${Endpoint.getScreenSeatsInfo}?screen_id=${screenId}`, { headers});
  }

  public displayMessage(message: string,duration:number = 3000) {
    this.snackBar.open(message, 'Close', {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
