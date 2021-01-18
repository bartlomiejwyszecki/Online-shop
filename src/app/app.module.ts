import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
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


@NgModule({
  declarations: [
    AppComponent, TestComponent, BlueDirective, RedText, ApplicationComponent,
    CarouselComponent, FooterComponent, NavbarComponent, ProductItemComponent, 
    SearchComponent, StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ProductService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
