import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private apiUrl = 'http://localhost:3000/api/movie';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl}`, { headers });
  }

  getMovie(movieId:any): Observable<any> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`http://localhost:3000/api/movie/${movieId}`, { headers });
  }
}
