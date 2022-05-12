import { CartService } from './../services/cart.service';
import { ProductList, Cart } from './../interface/interface.component';
import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  products: ProductList[];
  alreadyAdded: boolean = true;
  isImageHovered: boolean;
  cartValue: number;
  cartItem: Cart;
  constructor(
    private _snackBar: MatSnackBar,
    private _productListService: ProductListService,
    private _route: Router,
    private _cartService: CartService
  ) {
    this.products = _productListService.getProducts();
  }

  ngOnInit(): void {}
  goToRoute(product: ProductList) {
    this._route.navigate(['./dashboard/' + product.id + '/product-detail']);
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
  addToCart(index: number) {
    if (this.products[index].availableQuantity != 0) {
      this._productListService.sendProductList(
        this.products[index],
        'addToCart'
      );
      this._cartService.sendCartValue(true);
      let item = this.assignToCart(index, 'Add');
      this._cartService.sendCartItem(item);

      this._cartService.sendCartPrice(this.products[index].price, true);
      this.openSnackBar('Selected Product Added to Cart.');
    }
  }
  removeFromCart(index: number) {
    this._productListService.sendProductList(
      this.products[index],
      'removeFromCart'
    );
    let item = this.assignToCart(index, 'Delete');
    this._cartService.sendCartItem(item);
    this._cartService.sendCartPrice(this.products[index].price, false);
    this._cartService.sendCartValue(false);
    this.openSnackBar('Selected Product Removed from Cart.');
  }
}
