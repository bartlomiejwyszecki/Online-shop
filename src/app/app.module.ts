import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { TestComponent } from './main';
import { BlueDirective, RedText } from "./main";
import { ApplicationComponent } from "./components/application/application";
import { CarouselComponent } from "./components/carousel/carousel";
import { FooterComponent } from "./components/footer/footer";
import { NavbarComponent } from "./components/navbar/navbar";
import { ProductItemComponent } from "./components/product-item/product-item";
import { SearchComponent } from "./components/search/search";
import { StarsComponent } from "./components/stars/stars";
import { ProductService } from "./data/data";
import { HomeComponent } from "./components/home/home";
import { ProductDetailComponent } from "./components/product-details/product-detail";
import { FilterPipe } from './components/filter/filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent, TestComponent, BlueDirective, RedText, ApplicationComponent,
    CarouselComponent, FooterComponent, NavbarComponent, ProductItemComponent, 
    SearchComponent, StarsComponent, HomeComponent, ProductDetailComponent, FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products/:productId', component: ProductDetailComponent }
    ]),
    ReactiveFormsModule, FormsModule,
    MDBBootstrapModule.forRoot(),
    NgbModule
  ],
  providers: [ ProductService, 
             { provide: LocationStrategy, useClass: HashLocationStrategy } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
