import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { products } from '../products';
@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.scss'],
})
export class TravelDetailsComponent implements OnInit {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  addToCart(product) {
    window.alert('Your Travel has been added to the cart! please Check out :)');

    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.product = products[+params.get('productId')];
    });
  }
}
