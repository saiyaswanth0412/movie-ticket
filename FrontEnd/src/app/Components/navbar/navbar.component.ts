import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/AuthenticationService/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
    localStorage.clear();
    window.location.href = '/login';
  }
}
