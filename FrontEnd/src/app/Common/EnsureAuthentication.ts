import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../Services/AuthenticationService/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class EnsureAuthentication implements CanActivate {
  
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    if(this.authService.isAuthenticated()) return true;
    else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
}
