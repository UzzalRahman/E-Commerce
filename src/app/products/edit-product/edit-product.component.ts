import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductList } from 'src/app/interface/interface.component';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  @Input() currentProduct;

  productList: ProductList[] = [];
  constructor(
    private _productListService: ProductListService,
    private _route: Router
  ) {
    this.productList = _productListService.getProducts();
  }
  addProduct = new FormGroup({
    productName: new FormControl(''),
    productPrice: new FormControl(''),
    productQuantity: new FormControl(''),
    productDescription: new FormControl(''),
    productImageLink: new FormControl(''),
  });
  ngOnInit(): void {
    // this.initiateFormValue(this.currentProduct);
    console.log(this.currentProduct);
  }

  initiateFormValue(currentProduct: ProductList) {
    this.addProduct.get('productName').setValue(currentProduct.title);
    this.addProduct.get('productPrice').setValue(currentProduct.price);
    this.addProduct
      .get('productQuantity')
      .setValue(currentProduct.availableQuantity);
    this.addProduct
      .get('productDescription')
      .setValue(currentProduct.description);
    this.addProduct.get('productImageLink').setValue(currentProduct.image);
  }

  editProduct() {
    this.currentProduct.title = this.addProduct.value.productName!;
    this.currentProduct.price = this.addProduct.value.productPrice;
    this.currentProduct.availableQuantity =
      this.addProduct.value.productQuantity;
    this.currentProduct.description = this.addProduct.value.productDescription;
    this.currentProduct.image = this.addProduct.value.productImageLink;

    this._route.navigate(['./product']);
  }
}
