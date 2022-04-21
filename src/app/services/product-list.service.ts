import { Subject, BehaviorSubject } from 'rxjs';
import { ProductList } from '../interface/interface.component';

export class ProductListService {
  products: ProductList[] = [
    {
      id: '1001',
      title: 'SELISE Branded T-Shirt',
      description: 'SELISE Branded T-Shirt',
      image:
        'https://images.pq-mobile.ch/500_19f3ec39e16728203ba3-68a41245c72cf1186796bc036bbe9ea8.jpeg',
      price: 1000,
      availableQuantity: 100,
      totalQuantity: 100,
    },
    {
      id: '1002',
      title: 'SELISE Branded Mask',
      description: 'SELISE Branded Mask',
      image:
        'https://images.pq-mobile.ch/500_26c0c6d6778c830ff1bf-9a4711d5593dcfb2971b15a445c7e425.jpeg',
      price: 500,
      availableQuantity: 100,
      totalQuantity: 100,
    },
    {
      id: '1003',
      title: 'SELISE Branded T-Shirt',
      description: 'SELISE Branded T-Shirt',
      image:
        'https://images.pq-mobile.ch/500_19f3ec39e16728203ba3-68a41245c72cf1186796bc036bbe9ea8.jpeg',
      price: 2000,
      availableQuantity: 50,
      totalQuantity: 50,
    },
    {
      id: '1004',
      title: 'SELISE Branded Mask',
      description: 'SELISE Branded Mask',
      image:
        'https://images.pq-mobile.ch/500_26c0c6d6778c830ff1bf-9a4711d5593dcfb2971b15a445c7e425.jpeg',
      price: 1500,
      availableQuantity: 50,
      totalQuantity: 50,
    },
  ];
  private _productListSource = new BehaviorSubject<ProductList[]>(
    this.products
  );
  _productList$ = this._productListSource.asObservable();

  sendProductList(newItem: ProductList, action: string) {
    const index = this.products.indexOf(newItem, 0);
    if (action == 'Delete') {
      this.products.splice(index, 1);
    } else if (action == 'Edit') {
      this.products[index].availableQuantity = newItem.availableQuantity;
      this.products[index].description = newItem.description;
      this.products[index].image = newItem.image;
      this.products[index].price = newItem.price;
      this.products[index].title = newItem.title;
      this.products[index].totalQuantity = newItem.totalQuantity;
    } else if (action == 'addToCart') {
      this.products[index].availableQuantity--;
    } else if (action == 'removeFromCart') {
      this.products[index].availableQuantity++;
    }
    this._productListSource.next(this.products);
  }
  getProducts() {
    return this.products;
  }
}
