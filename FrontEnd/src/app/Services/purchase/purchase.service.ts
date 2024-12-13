import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private apiUrl = 'http://localhost:3000/api/booking/seatSelection';

  constructor(private http: HttpClient) {
    
  }
  Purchase(screen_id: number, selectedSeats: any[]): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const body = { screen_id, selectedSeats };
    return this.http.post<any>(`${this.apiUrl}`, body, { headers });
  }
  
  
}
