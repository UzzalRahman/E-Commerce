import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../interface/interface.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  subscription: Subscription = new Subscription();
  cartItem: Cart[] = [];
  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    let sub = this._cartService._cartItem.subscribe((cart) => {
      this.cartItem = cart;
      // console.log('Inside Cart ', cart.length);
      // for (let item of cart) {
      //   console.log(item);
      // }
    });
    this.subscription.add(sub);
  }

  showCartItem() {
    // console.log('Outside Cart ', this.cartItem.length);
    // for (let item of this.cartItem) {
    //   console.log(item);
    // }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('Unsubscribe');
  }
}
