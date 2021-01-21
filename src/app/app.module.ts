import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from "./components/home/home";
import { ProductDetailComponent } from "./components/product-details/product-detail";


@NgModule({
  declarations: [
    AppComponent, TestComponent, BlueDirective, RedText, ApplicationComponent,
    CarouselComponent, FooterComponent, NavbarComponent, ProductItemComponent, 
    SearchComponent, StarsComponent, HomeComponent, ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products/:productId', component: ProductDetailComponent }
    ])
  ],
  providers: [ ProductService, 
             { provide: LocationStrategy, useClass: HashLocationStrategy } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
