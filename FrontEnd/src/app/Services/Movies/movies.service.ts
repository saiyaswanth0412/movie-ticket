import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private apiUrl = 'http://localhost:3000/api/movie';

  constructor(private http: HttpClient) {}

  getMovies():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}`)
  }
}
