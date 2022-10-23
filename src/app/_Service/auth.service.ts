import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,private http : HttpClient) { }

  isAuthentication():Boolean{
    if (sessionStorage.getItem("customerid") !== null) {
      return true
    }
    return false
  }

  canAccess(){
    if (!this.isAuthentication()) {
      this.router.navigate(["/login"])
    }
  }
  canAuth () {
    if(this.isAuthentication()){
      this.router.navigate(["/dashboard"])
    }
  }

  showCredentials():Boolean{
    if(!this.isAuthentication()){
      return true
    }
    return false
  }

  Register (username : string,email : string,password : string){

    return this.http.post<{message : string,status : number, register : {customerId : string},error : string}>("http://localhost:8000/register",{username,email,password})
  }

  Login(email : string, password : string){
    return this.http.post<{status : number, message : string, error : string, data : {customerId : string}}>("http://localhost:8000/login",{email,password})
  }

  StoreCustomerId( customerid : string){
    sessionStorage.setItem("customerid",customerid)
  }

  removeCustomerId(){
    sessionStorage.removeItem("customerid");
    
  }

  getUsername () {
    let customerid = sessionStorage.getItem("customerid");

    return this.http.post<{data : {username : string,_id : string}}>("http://localhost:8000/getusername",{customerId : customerid})
  }

  // Todo Added

  TodoAdded (todo : string){
    let customerId = sessionStorage.getItem("customerid");
    return this.http.post<{status : number,message : string, result : {_id : string},error : string}>("http://localhost:8000/addtodo",{customerId,todo})
  }

  TodoGet() {
    let customerId = sessionStorage.getItem("customerid");
    return this.http.post<{result : []}>("http://localhost:8000/gettodo",{customerId})
  }

  TodoUpdated(data : {todo : string}){
    let id = sessionStorage.getItem("id");

    return this.http.put<{status : number, message : string,error : string}>(`http://localhost:8000/todoupdate/${id}`,{todo : data.todo})
  }

  TodoDeleted( id : string) {
    return this,this.http.post<{status : number, message : string,error : string}>(`http://localhost:8000/tododelete/${id}`,{})
  }
}
