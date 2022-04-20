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
    this._cartValue.next(this.value);
  }
  sendCartPrice() {
    //this.totalPrice=0;
    for (let item of this.cartItem) {
      this.totalPrice += item.price;
    }
    this._cartPrice.next(this.totalPrice);
  }

  sendCartItem(newItem: Cart) {
    console.log('newItem: ', newItem);
    console.log('cartItem 1', this.cartItem.length, this.cartItem);
    // const index = this.cartItem.indexOf(newItem, 0);
    const index = this.cartItem.findIndex((x) => x.id === newItem.id);
    console.log('index of newItem in cartItem array: ', index);
    if (index != -1) console.log(newItem.id, this.cartItem[0].id);

    if (newItem.action == 'Add') {
      if (index == -1) this.cartItem.push(newItem);
      else this.cartItem[index].TotalItemInCart++;
    } else if (newItem.action == 'Delete') {
      if (index != -1 && this.cartItem[index].TotalItemInCart > 0)
        this.cartItem[index].TotalItemInCart--;
      else if (index != -1) this.cartItem.splice(index, 1);
    }
    console.log('cartItem 2', this.cartItem.length, this.cartItem);
    this._cartItem.next(this.cartItem);
  }

  constructor() {}
}
