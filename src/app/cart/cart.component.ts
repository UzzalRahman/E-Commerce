import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../interface/interface.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItem: Cart[] = [];
  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this._cartService._cartItem$.subscribe((cart) => {
      this.cartItem = cart;
      console.log('cart inside ng ', this.cartItem.length);
    });
  }
  showCartItem() {
    this._cartService._cartItem$.subscribe((cart) => {
      this.cartItem = cart;
      console.log('cart inside fn ', this.cartItem.length);
    });
    console.log('cart outside ng ', this.cartItem.length);
  }
}
