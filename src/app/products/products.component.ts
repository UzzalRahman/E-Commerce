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
  ) {
    this.productList = this._productListService.getProducts();
  }
  dataSource = this.productList;
  ngOnInit(): void {}
  goToAddProduct() {
    this.route.navigate(['./add-product']);
  }
  deleteProduct(product: ProductList) {
    console.log(product.title);
    const index = this.productList.indexOf(product, 0);
    this.productList.splice(index, 1);
  }
}
