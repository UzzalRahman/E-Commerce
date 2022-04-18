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
  };
  isImageHovered: boolean;
  cartValue: number;
  cartItem: Cart;
  constructor(
    service: ProductListService,
    private route: Router,
    private cartService: CartService
  ) {
    this.products = service.getProducts();
  }

  ngOnInit(): void {}
  goToRoute(_route: ProductList) {
    this.route.navigate(['./dashboard/' + _route.id + '/product-detail']);
  }
  assignToCart(index: number) {
    this.newItem.TotalItemInCart = 3;
    this.newItem.action = 'Add';
    this.newItem.id = this.products[index].id;
    console.log(this.newItem.id);
  }
  addToCart(index: number) {
    console.log(index);
    if (this.products[index].availableQuantity != 0) {
      this.products[index].availableQuantity--;
      // this.assignToCart(index);
      // let cartItem: Cart = this.products[index];
      // this.cart.push(cartItem);
      this.cartService.sendCartValue(true);
      this.assignToCart(index);
      this.cartService.sendCartItem(this.newItem);
    }
  }
}
