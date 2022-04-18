import { ProductListService } from './../../services/product-list.service';
import { ProductList } from './../../interface/interface.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent implements OnInit {
  product: ProductList;
  productList: ProductList[];
  constructor(private _productListService: ProductListService) {
    this.productList = this._productListService.getProducts();
  }

  ngOnInit(): void {}
  deleteProduct(product: ProductList) {
    const index = this.productList.indexOf(product, 0);
    this.productList.splice(index, 1);
  }
}
