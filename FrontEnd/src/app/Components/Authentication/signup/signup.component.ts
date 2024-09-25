import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

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

  submitHandler() {
  }

}
