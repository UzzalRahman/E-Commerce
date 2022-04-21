import { Cart } from './../interface/interface.component';
import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Update Cart Icon
  private value: number = 0;
  private totalPrice: number = 0;
  cartItem: Cart[] = [];
  _cartValue = new BehaviorSubject<number>(0);
  _cartPrice = new BehaviorSubject<number>(0);
  _cartItem = new BehaviorSubject<Cart[]>([]);

  sendCartValue(isadded: boolean) {
    if (isadded) this.value++;
    else if (!isadded) this.value--;
    this._cartValue.next(this.value);
  }
  sendCartPrice(price: number, action: boolean) {
    if (action) this.totalPrice += price;
    else this.totalPrice -= price;
    this._cartPrice.next(this.totalPrice);
  }

  sendCartItem(newItem: Cart) {
    const index = this.cartItem.findIndex((x) => x.id === newItem.id);

    if (newItem.action == 'Add') {
      if (index == -1) {
        this.cartItem.push(newItem);
      } else {
        this.cartItem[index].TotalItemInCart++;
        this.cartItem[index].availableQuantity--;
      }
    } else if (newItem.action == 'Delete') {
      if (
        index != -1 &&
        this.cartItem[index].totalQuantity -
          this.cartItem[index].availableQuantity >
          1
      ) {
        this.cartItem[index].TotalItemInCart--;
        this.cartItem[index].availableQuantity++;
      } else if (index != -1) {
        this.cartItem.splice(index, 1);
      }
    }
    console.log('cartItem 2', this.cartItem.length, this.cartItem);
    this._cartItem.next(this.cartItem);
  }

  constructor() {}
}
