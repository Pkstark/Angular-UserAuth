import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/_Service/auth.service';
import {} from 'materialize-css'
import { MobileComponent } from '../products/mobile/mobile.component';
import { LaptopComponent } from '../products/laptop/laptop.component';
import { ShirtsComponent } from '../products/shirts/shirts.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth : AuthService) { }
  user = {
    username : "",
  }

  usertodo = {
    todo : ""
  }

  usertodo1 = {
    todo : ""
  }

  ids = "";

  gettodoList : any;

  ngOnInit(): void {
    this.auth.canAccess();
    this.getName();
    this.getTodo();
  }


  getName () {
    if(this.auth.isAuthentication()){
      this.auth.getUsername().subscribe({
        next : data => {
          this.user.username = data.data.username;
          sessionStorage.setItem("id",data.data._id)
        }
      })
    }
  }

  AddTodo(){
    this.auth.TodoAdded(this.usertodo.todo).subscribe({
      next : data => {
        if(data.status === 1){
          alert(data.message)
          this.getTodo();
          this.usertodo.todo = "";
        }
        if(data.status === 0){
          alert(data.error)
        }
      }
    })
  }

  getTodo(){
    this.auth.TodoGet().subscribe({
      next : data => {
        this.gettodoList = data.result
      }
    })
  }

  updateTodo(data : {todo : string,_id : string,customerId : string}){
    sessionStorage.setItem("id",data._id)
    this.usertodo1.todo = data.todo
    console.log(this.usertodo1)
    var elems = document.querySelectorAll('.modal');
    var inis = M.Modal.init(elems, {})
  }

  updatedTodo(){

    this.auth.TodoUpdated(this.usertodo1).subscribe({
      next : data => {
        if(data.status === 1){
          alert(data.message)
          this.getTodo()
        }
        if(data.status === 0){
          alert(data.error)
        }
      }
    })

  }

  deleteTodo(id : string){
    
    this.ids = id
    var elems = document.querySelectorAll('.modal');
    var inis = M.Modal.init(elems, {})
  }

  deletedTodos(){
    this.auth.TodoDeleted(this.ids).subscribe({
      next : data => {
        if(data.status === 1){
          alert(data.message);
          this.getTodo();
        }
        if(data.status === 0){
          alert(data.error);
        }
      }
    })
  }
}
