import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private loggedIn = false;
  login() { this.loggedIn = true;}

  logout() { this.loggedIn = false; }

  isAuthenticated(): boolean { return this.loggedIn; }
}

