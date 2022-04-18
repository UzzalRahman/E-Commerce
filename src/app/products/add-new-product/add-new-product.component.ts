import { ProductListService } from './../../services/product-list.service';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductList } from 'src/app/interface/interface.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss'],
})
export class AddNewProductComponent implements OnInit {
  productList: ProductList[] = [];
  newItem: ProductList = {
    id: '',
    title: '',
    description: '',
    image: '',
    price: 0,
    availableQuantity: 0,
  };
  constructor(
    private _productListService: ProductListService,
    private _route: Router
  ) {
    this.productList = _productListService.getProducts();
  }

  ngOnInit(): void {}
  addProduct = new FormGroup({
    productName: new FormControl(''),
    productPrice: new FormControl(''),
    productQuantity: new FormControl(''),
    productDescription: new FormControl(''),
    productImageLink: new FormControl(''),
  });

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
  addNewProduct() {
    this.newItem.id = this.newGuid();
    this.newItem.title = this.addProduct.value.productName;
    this.newItem.price = this.addProduct.value.productPrice;
    this.newItem.availableQuantity = this.addProduct.value.productQuantity;
    this.newItem.description = this.addProduct.value.productDescription;
    this.newItem.image = this.addProduct.value.productImageLink;
    this._route.navigate(['./product']);
  }
}
