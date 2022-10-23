import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AccesseriesComponent } from '../accesseries/accesseries.component';
import { LaptopComponent } from '../laptop/laptop.component';
import { MobileComponent } from '../mobile/mobile.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @ViewChild('container', {read : ViewContainerRef,static : true})
  container !: ViewContainerRef

  components  = [MobileComponent,LaptopComponent,AccesseriesComponent]

  constructor() { }

  ngOnInit(): void {
    //initial components show 
    this.container.createComponent(this.components[0])
  }

  Trigger(id : number){
    // first clear components
    this.container.clear();
    //then create the components to pass the id 
    this.container.createComponent(this.components[id])
  }

}
