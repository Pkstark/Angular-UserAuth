import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Credentials/login/login.component';
import { RegisterComponent } from './Credentials/register/register.component';
import { DashboardComponent } from './Credentials/dashboard/dashboard.component';
import { HomeComponent } from './Credentials/home/home.component';
import { NavbarComponent } from './Credentials/navbar/navbar.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MobileComponent } from './Credentials/products/mobile/mobile.component';
import { LaptopComponent } from './Credentials/products/laptop/laptop.component';
import { ShirtsComponent } from './Credentials/products/shirts/shirts.component';
import { AccesseriesComponent } from './Dynamic.components/accesseries/accesseries.component';
import { ProductComponent } from './Dynamic.components/product/product.component';

const routes:Routes = [
  {path : "" , component : HomeComponent},
  {path : "register" , component : RegisterComponent},
  {path : "login" , component : LoginComponent},
  {path : "dashboard" , component : DashboardComponent},
  {path : "product" , component : ProductComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    MobileComponent,
    LaptopComponent,
    ShirtsComponent,
    AccesseriesComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
