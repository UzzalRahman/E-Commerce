import { EditProductComponent } from './products/edit-product/edit-product.component';
import { AddNewProductComponent } from './products/add-new-product/add-new-product.component';
import { ProductDetailComponent } from './dashboard/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonotfoundComponent } from './donotfound/donotfound.component';

export const appRoute: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard/:id/product-detail',
    component: ProductDetailComponent,
  },
  {
    path: 'product',
    component: ProductsComponent,
  },
  {
    path: 'add-product',
    component: AddNewProductComponent,
  },
  {
    path: 'edit-product',
    component: EditProductComponent,
  },

  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '**',
    component: DonotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
