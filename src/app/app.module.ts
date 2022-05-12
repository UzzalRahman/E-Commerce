import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { ProductListService } from './services/product-list.service';
import { MatButtonModule } from '@angular/material/button';
import { ProductDetailComponent } from './dashboard/product-detail/product-detail.component';
import { CartService } from './services/cart.service';
import { AddNewProductComponent } from './products/add-new-product/add-new-product.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { MatMenuModule } from '@angular/material/menu';
import { CartMenuComponent } from './header/cart-menu/cart-menu.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SeliseContactsComponent } from './office/selise-contacts/selise-contacts.component';
import { CalculatePriceComponent } from './office/calculate-price/calculate-price.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailComponent,
    AddNewProductComponent,
    DeleteProductComponent,
    EditProductComponent,
    CartMenuComponent,
    SeliseContactsComponent,
    CalculatePriceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,

    MatToolbarModule,
    MatBadgeModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
  ],
  providers: [ProductListService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
