import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_Service/auth.service';
import {} from 'materialize-css'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router) { }

  CreAuth = this.auth.isAuthentication();

  ngOnInit(): void {
  }

  logoutUser(){
    this.auth.removeCustomerId();
    this.auth.canAccess();
    alert("Logout Successfully")
  }

  Trigger(){

  }

}
