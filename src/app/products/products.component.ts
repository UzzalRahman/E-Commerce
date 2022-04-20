import { ProductList } from './../interface/interface.component';
import { ProductListService } from './../services/product-list.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList: ProductList[] = [];
  displayedColumns: string[] = ['Name', 'Price', 'Quantity', 'Edit', 'Delete'];
  constructor(
    private route: Router,
    private _productListService: ProductListService
  ) {}
  dataSource = this.productList;
  ngOnInit(): void {
    this._productListService._productList$.subscribe((products) => {
      this.productList = [...products];
    });
  }
  goToAddProduct() {
    this.route.navigate(['./add-product']);
  }
  deleteProduct(product: ProductList) {
    this._productListService.sendProductList(product, 'Delete');
  }
  editProduct(product: ProductList) {
    this.route.navigate(['./edit-product']);
  }
}
