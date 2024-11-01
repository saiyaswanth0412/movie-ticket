import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/AuthenticationService/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService,private router: Router,public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  email: string = '';
  password: string = '';
  show: boolean = false;
  picLoading: boolean = false;


  handleClick() {
    this.show = !this.show;
  }

  submitLogin() {
    this.authService.login({ email: this.email, password: this.password })
    .subscribe({
      next: (response) => {
        if (response && response.token) {
          this.authService.setLoggedIn(true, response.token);
          this.displayMessage("Login successful");
          this.router.navigate(['/movies'])
        }
      },
      error: err => {
        this.displayMessage("Invalid Credentials");
      }
    });
  }

  setGuestUser() {
    this.email = 'guestuser@gmail.com';
    this.password = 'guest';
  }

  private displayMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

}
