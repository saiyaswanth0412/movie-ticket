import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

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
        }
      },
      error: err => {
        console.error('Login failed', err);
      }
    });
  }

  setGuestUser() {
    this.email = 'guestuser@gmail.com';
    this.password = 'guest';
  }

}
