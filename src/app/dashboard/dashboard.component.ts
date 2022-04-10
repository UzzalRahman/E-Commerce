import { ProductList } from './../interface/interface.component';
import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  products: ProductList[];
  isImageHovered = true;
  constructor(service: ProductListService) {
    this.products = service.getProducts();
  }

  ngOnInit(): void {}
}
