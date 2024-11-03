import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/AuthenticationService/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private  auth:AuthenticationService) { }

  ngOnInit(): void {
    this.auth.logout();
  }

}
