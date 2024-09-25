import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email: string = '';
  password: string = '';
  show: boolean = false;
  picLoading: boolean = false;

  handleClick() {
    this.show = !this.show;
  }

  submitHandler() {
  }

  setGuestUser() {
    this.email = 'guestuser@gmail.com';
    this.password = 'guest';
  }

}
