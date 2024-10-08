import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/AuthenticationService/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }
  email: string = '';
  password: string = '';
  show: boolean = false;
  picLoading: boolean = false;
  mobile: string='';
  name: string = '';

  handleClick() {
    this.show = !this.show;
  }

  submitSignUp() {
    this.authService.signUp({ email: this.email, password: this.password,mobile:this.mobile,name:this.name })
    .subscribe({
      next: (response) => {
        if (response && response.token) {
          this.authService.setLoggedIn(true, "token");
        }
      },
      error: err => {
        console.error('Sigup failed', err);
      }
    });
  }

}
