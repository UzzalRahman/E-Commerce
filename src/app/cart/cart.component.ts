import { CartService } from './../services/cart.service';
import { ProductList, Cart } from './../interface/interface.component';
import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: ProductList[];
  alreadyAdded: boolean = true;
  isImageHovered: boolean;
  cartValue: number;
  cartItem: Cart[];
  constructor(
    private _productservice: ProductListService,
    private _cartService: CartService,
    private route: Router,
    private cartService: CartService
  ) {
    this.products = _productservice.getProducts();
  }

  ngOnInit(): void {
    this._cartService._cartItem.subscribe((cart) => {
      this.cartItem = cart;
      console.log(this.cartItem.length);
    });
  }
  goToDashboard() {
    this.route.navigate(['./dashboard']);
  }
  goToRoute(product: ProductList) {
    this.route.navigate(['./dashboard/' + product.id + '/product-detail']);
  }
  convertCartIndexToProductIndex(_index: number) {
    let index = this.products.findIndex(
      (x) => x.id === this.cartItem[_index].id
    );
    return index;
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
  addToCart(_index: number) {
    let index = this.convertCartIndexToProductIndex(_index);
    if (this.products[index].availableQuantity != 0) {
      this._productservice.sendProductList(this.products[index], 'addToCart');
      this.cartService.sendCartValue(true);
      let item = this.assignToCart(index, 'Add');
      this.cartService.sendCartItem(item);

      this.cartService.sendCartPrice(this.products[index].price, true);
    }
  }
  removeFromCart(_index: number) {
    let index = this.convertCartIndexToProductIndex(_index);
    this._productservice.sendProductList(
      this.products[index],
      'removeFromCart'
    );
    let item = this.assignToCart(index, 'Delete');
    this.cartService.sendCartItem(item);
    this.cartService.sendCartPrice(this.products[index].price, false);
    this.cartService.sendCartValue(false);
  }
}
