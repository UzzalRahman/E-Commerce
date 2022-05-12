import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductList } from 'src/app/interface/interface.component';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  products: ProductList[] = [];
  product: ProductList;
  productId: string;
  productIndex: number;
  constructor(
    private _snackBar: MatSnackBar,
    private _productListService: ProductListService,
    private _route: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.products = _productListService.getProducts();
  }
  addProduct = new FormGroup({
    productName: new FormControl(''),
    productPrice: new FormControl(''),
    productQuantity: new FormControl(''),
    productDescription: new FormControl(''),
    productImageLink: new FormControl(''),
  });
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      this.productIndex = this.products.findIndex(
        (x) => x.id == params.get('id')
      );
      this.product = this.products[this.productIndex];
    });
    this.initiateFormValue(this.product);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
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
    this.product.title = this.addProduct.value.productName!;
    this.product.price = this.addProduct.value.productPrice;
    this.product.availableQuantity = this.addProduct.value.productQuantity;
    this.product.description = this.addProduct.value.productDescription;
    this.product.image = this.addProduct.value.productImageLink;
    this.product.totalQuantity = this.addProduct.value.productQuantity;
    this._productListService.sendProductList(this.product, 'Edit');
    this.openSnackBar('Product saved successfully.');
    this._route.navigate(['./product']);
  }
}
