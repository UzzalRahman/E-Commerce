import { CartService } from './../../services/cart.service';
import { Cart, ProductList } from './../../interface/interface.component';
import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  products: ProductList[];
  productId: string;
  productIndex: number;
  product: ProductList;
  cartValue: number = 0;
  cart: Cart[];
  cartItem: Cart;
  constructor(
    _productListService: ProductListService,
    cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) {
    this.products = _productListService.getProducts();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      this.productIndex = this.products.findIndex(
        (x) => x.id == params.get('id')
      );
      console.log(this.productIndex, this.productId);
      this.product = this.products[this.productIndex];
    });
  }
  assignToCart() {
    // this.cartItem.itemQuantityInCart = 0;
    this.cartItem.title = this.product.title;
    this.cartItem.id = this.product.id;
    this.cartItem.price = this.product.price;
  }
  addToCart() {
    console.log(this.productIndex);
    if (this.products[this.productIndex].availableQuantity != 0) {
      this.products[this.productIndex].availableQuantity--;
      this.assignToCart();
      this.cart.push(this.cartItem);
      // this.product.availableQuantity--;
      console.log('cart value' + this.cart.length);
    }
  }
  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
