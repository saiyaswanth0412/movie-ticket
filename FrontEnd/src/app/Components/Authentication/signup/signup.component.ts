import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/AuthenticationService/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthenticationService,public snackBar: MatSnackBar,private router: Router) { }

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
        if (response && response.userId  ) {
          this.authService.setLoggedIn(true,  response.token);
          this.displayMessage("SignUp successful");
          this.router.navigate(['/movies'])
        }
      },
      error: err => {
        console.error('Sigup failed', err);
      }
    });
  }
  private displayMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
