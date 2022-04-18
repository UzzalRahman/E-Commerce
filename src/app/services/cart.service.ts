import { Cart } from './../interface/interface.component';
import { Subject } from 'rxjs';

export class CartService {
  // Update Cart Icon
  private value: number = 0;
  private cartItem: Cart[] = [];
  private _cartValueSource = new Subject<number>();
  private static _cartItemSource = new Subject<Cart[]>();

  _cartValue$ = this._cartValueSource.asObservable();

  sendCartValue(isadded: boolean) {
    console.log('value ', this.value);
    if (isadded) this.value++;
    this._cartValueSource.next(this.value);
  }

  // Update Cart

  _cartItem$ = CartService._cartItemSource.asObservable();

  sendCartItem(newItem: Cart) {
    if (newItem.action == 'Add') {
      this.cartItem.push(newItem);
      console.log('cart Item length: ', this.cartItem.length);
    } else if (newItem.action == 'Delete') {
    }
    CartService._cartItemSource.next(this.cartItem);
  }
  constructor() {}
}
