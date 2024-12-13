import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Endpoint } from '../../Config/endpoints';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(this.checkLocalStorage());

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(Endpoint.logIn, credentials, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
  signUp(credentials: {
    email: string;
    password: string;
    name: string;
    mobile: string;
  }): Observable<any> {
    return this.http.post<any>(Endpoint.signUp, credentials, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
  }

  setLoggedIn(isLoggedIn: boolean, token: string) {
    this.loggedIn.next(isLoggedIn);
    localStorage.setItem('isLoggedIn', String(isLoggedIn));
    localStorage.setItem('token', token);
  }

  isAuthenticated(): boolean {
    return this.loggedIn.value;
  }

  getLoggedInStatus(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  private checkLocalStorage(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true' ? true : false;
  }
}
