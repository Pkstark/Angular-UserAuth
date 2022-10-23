import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/_Service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth : AuthService,private router : Router) { }

  formdata = {
    username : "",
    email : "",
    password : "",
    confrimpass : ""
  }

  matchpass="";
  Submit = false

  ngOnInit(): void {
    this.auth.canAuth();
  }

  handleSubmit(){
    this.auth.Register(this.formdata.username,this.formdata.email,this.formdata.password).subscribe({
      next : data => {
        if(data.status === 1){
          this.auth.StoreCustomerId(data.register.customerId)
          alert(data.message)
          this.auth.canAuth();
        }
        if(data.status === 0){
          alert(data.error)
        }
      }
    })
  }

}
