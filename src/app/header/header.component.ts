import { ProductList } from './../interface/interface.component';
import { ProductListService } from 'src/app/services/product-list.service';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartValue: number;
  productList: ProductList[];
  constructor(
    private route: Router,
    private cartService: CartService,
    _productListService: ProductListService
  ) {
    this.productList = _productListService.getProducts();
  }

  ngOnInit(): void {
    this.cartService._cartValue$.subscribe((value) => {
      this.cartValue = value;
    });
  }
  showCartItem() {}
  GoToRoute(new_route: string) {
    this.route.navigate([new_route]);
  }
  openMenu() {}
}
