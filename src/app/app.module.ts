import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { BlogComponent } from './blog/blog.component';
import { TravelComponent } from './travel/travel.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HomeComponent,
    HomeContentComponent,
    BlogComponent,
    TravelComponent,
    TravelDetailsComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
