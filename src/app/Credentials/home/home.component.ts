import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_Service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth : AuthService,private router : Router) { }

  Credentials = this.auth.showCredentials();

  ngOnInit(): void {
  }

  Addtodo(){
    if(this.auth.isAuthentication()){
      this.router.navigate(['/dashboard'])
    }else{
      alert("Your Not Registered with us! Please Login (or) Register")
      this.router.navigate(["/login"])
    }
  }

}
