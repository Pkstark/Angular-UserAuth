import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth : AuthService,private router : Router) { }

  formdata = {
    email:"",
    password : ""
  }

  submit=false;

  ngOnInit(): void {
    this.auth.canAuth();
  }

  handleSubmit(){
    this.auth.Login(this.formdata.email,this.formdata.password).subscribe({
      next : data => {
        if(data.status === 1){
          this.auth.StoreCustomerId(data.data.customerId);
          alert(data.message);
          this.auth.canAuth();
        }
        if(data.status === 0){
          alert(data.error)
        }
      }
    })
  }

}
