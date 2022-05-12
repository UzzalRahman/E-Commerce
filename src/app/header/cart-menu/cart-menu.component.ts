import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart, ProductList } from 'src/app/interface/interface.component';
import { ProductListService } from 'src/app/services/product-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.scss'],
})
export class CartMenuComponent implements OnInit {
  cartItem: Cart[];
  totalPrice: number;
  cartValue: number;
  products: ProductList[];

  constructor(
    private _snackBar: MatSnackBar,
    private _cartService: CartService,
    private _productservice: ProductListService
  ) {}
  ngOnInit(): void {
    this._cartService._cartItem.subscribe((cart) => {
      this.cartItem = cart;
    });
    this._cartService._cartPrice.subscribe((_totalPrice) => {
      this.totalPrice = _totalPrice;
    });
    this._cartService._cartValue.subscribe((value) => {
      this.cartValue = value;
    });
    this._productservice._productList$.subscribe((product) => {
      this.products = product;
    });
  }
  openSnackBar(message: string) {
    this._snackBar.open(message);
  }
  assignToCart(index: number, _action) {
    let newItem: Cart = {
      id: this.products[index].id,
      action: _action,
      TotalItemInCart: 1,
      title: this.products[index].title,
      description: this.products[index].description,
      image: this.products[index].image,
      price: this.products[index].price,
      availableQuantity: this.products[index].availableQuantity,
      totalQuantity: this.products[index].totalQuantity,
    };
    return newItem;
  }

  removeFromCart(_index: number) {
    let index = this.products.findIndex(
      (x) => x.id === this.cartItem[_index].id
    );
    this._productservice.sendProductList(
      this.products[index],
      'removeFromCart'
    );
    let item = this.assignToCart(index, 'Delete');
    this._cartService.sendCartItem(item);
    this._cartService.sendCartPrice(this.products[index].price, false);
    this._cartService.sendCartValue(false);
    this.openSnackBar('Selected Product Removed from Cart.');
  }
  addToCart(_index: number) {
    let index = this.products.findIndex(
      (x) => x.id === this.cartItem[_index].id
    );
    if (this.products[index].availableQuantity != 0) {
      this._productservice.sendProductList(this.products[index], 'addToCart');
      this._cartService.sendCartValue(true);
      let item = this.assignToCart(index, 'Add');
      this._cartService.sendCartItem(item);

      this._cartService.sendCartPrice(this.products[index].price, true);
      this.openSnackBar('Selected Product Added to Cart.');
    }
  }
}
