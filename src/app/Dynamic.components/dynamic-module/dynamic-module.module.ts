import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from '../mobile/mobile.component';
import { LaptopComponent } from '../laptop/laptop.component';
import { AccesseriesComponent } from '../accesseries/accesseries.component';
import { ProductComponent } from '../product/product.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports : [MobileComponent,LaptopComponent,AccesseriesComponent,ProductComponent]
})
export class DynamicModuleModule { }
