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
  newItem: Cart = {
    id: '',
    action: '',
    TotalItemInCart: 0,
    title: '',
    description: '',
    image: '',
    price: 0,
    availableQuantity: 0,
    totalQuantity: 0,
  };
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
  goToRoute(_route: ProductList) {
    this.route.navigate(['./dashboard/' + _route.id + '/product-detail']);
  }
  assignToCart(index: number, _totalItemInCart) {
    let newItem: Cart = {
      id: this.products[index].id,
      action: 'Add',
      TotalItemInCart: 0,
      title: this.products[index].title,
      description: '',
      image: '',
      price: 0,
      availableQuantity: this.products[index].availableQuantity,
      totalQuantity: 0,
    };
    return newItem;
    // this.newItem.TotalItemInCart = 1;
    // this.newItem.action = 'Add';
    // this.newItem.id = this.products[index].id;
    // this.newItem.title = this.products[index].title;
    // this.newItem.availableQuantity = this.products[index].availableQuantity;
    // this.newItem.description = this.products[index].description;
    // this.newItem.image = this.products[index].image;
    // this.newItem.price = this.products[index].price;
    // this.newItem.totalQuantity = this.products[index].totalQuantity;
  }
  addToCart(index: number) {
    if (this.products[index].availableQuantity != 0) {
      this._productservice.sendProductList(this.products[index], 'add to cart');
      // this.assignToCart(index);
      // let cartItem: Cart = this.products[index];
      // this.cart.push(cartItem);
      this.cartService.sendCartValue(true);
      let item = this.assignToCart(index, 1);
      this.cartService.sendCartItem(item);

      this.cartService.sendCartPrice();
    }
  }
  removeFromCart(index: number) {
    this._productservice.sendProductList(
      this.products[index],
      'remove from cart'
    );
    this.cartService.sendCartItem(this.newItem);
    this.cartService.sendCartPrice();
  }
}
