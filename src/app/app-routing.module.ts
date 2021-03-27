import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelComponent } from './travel/travel.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
 {path: "", component: HomeComponent}, 
 
 {path: "Blog", component: BlogComponent},
 {path: "Travel", component: TravelComponent},
 {path: 'products/:productId', component: TravelDetailsComponent},
 {path: 'cart', component: CartComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
