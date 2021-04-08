import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  
  checkoutForm;
  total:number;
 

  constructor(private cartService: CartService,private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({

      name: '',
      familyname:'',
      address: '',
      email:''
      
    });
   }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  onSubmit(customerData) {

    
  
    console.warn('Your order has been submitted', customerData);
  
  
    this.items = this.cartService.clearCart();
  
    this.checkoutForm.reset();
  
  }
  
getTotal() {
  let total = 0;
  for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].price) {
          total += this.items[i].price;
          this.total = total;
      }
  }
 
  return (total);
} 

 
}
