import { CartService } from './../../services/cart.service';
import { Cart, ProductList } from './../../interface/interface.component';
import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  products: ProductList[];
  productId: string;
  index: number;
  product: ProductList;
  cartValue: number = 0;
  cart: Cart[];
  cartItem: Cart;
  constructor(
    private _snackBar: MatSnackBar,
    private _productListService: ProductListService,
    private _cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) {
    this.products = _productListService.getProducts();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      this.index = this.products.findIndex((x) => x.id == params.get('id'));
      console.log(this.index, this.productId);
      this.product = this.products[this.index];
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
  addToCart() {
    if (this.products[this.index].availableQuantity != 0) {
      this._productListService.sendProductList(
        this.products[this.index],
        'addToCart'
      );
      this._cartService.sendCartValue(true);
      let item = this.assignToCart(this.index, 'Add');
      this._cartService.sendCartItem(item);

      this._cartService.sendCartPrice(this.products[this.index].price, true);
      this.openSnackBar('Selected Product Added to Cart.');
    }
  }
  removeFromCart() {
    this._productListService.sendProductList(
      this.products[this.index],
      'removeFromCart'
    );
    let item = this.assignToCart(this.index, 'Delete');
    this._cartService.sendCartItem(item);
    this._cartService.sendCartPrice(this.products[this.index].price, false);
    this._cartService.sendCartValue(false);
    this.openSnackBar('Selected Product Removed from Cart.');
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
