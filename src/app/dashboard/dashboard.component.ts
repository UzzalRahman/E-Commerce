import { CartService } from './../services/cart.service';
import { ProductList, Cart } from './../interface/interface.component';
import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { Router } from '@angular/router';

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
    private _productservice: ProductListService,
    private route: Router,
    private cartService: CartService
  ) {
    this.products = _productservice.getProducts();
  }

  ngOnInit(): void {}
  goToRoute(product: ProductList) {
    this.route.navigate(['./dashboard/' + product.id + '/product-detail']);
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
      this._productservice.sendProductList(this.products[index], 'addToCart');
      this.cartService.sendCartValue(true);
      let item = this.assignToCart(index, 'Add');
      this.cartService.sendCartItem(item);

      this.cartService.sendCartPrice(this.products[index].price, true);
    }
  }
  removeFromCart(index: number) {
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
