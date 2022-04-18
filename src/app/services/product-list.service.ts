import { ProductList } from '../interface/interface.component';

export class ProductListService {
  products: ProductList[] = [
    {
      id: '1',
      title: 'SELISE Branded T-Shirt',
      description: 'SELISE Branded T-Shirt',
      image:
        'https://images.pq-mobile.ch/500_19f3ec39e16728203ba3-68a41245c72cf1186796bc036bbe9ea8.jpeg',
      price: 1,
      availableQuantity: 100,
    },
    {
      id: '2',
      title: 'SELISE Branded Mask',
      description: 'SELISE Branded Mask',
      image:
        'https://images.pq-mobile.ch/500_26c0c6d6778c830ff1bf-9a4711d5593dcfb2971b15a445c7e425.jpeg',
      price: 1,
      availableQuantity: 100,
    },
    {
      id: '3',
      title: 'SELISE Branded T-Shirt',
      description: 'SELISE Branded T-Shirt',
      image:
        'https://images.pq-mobile.ch/500_19f3ec39e16728203ba3-68a41245c72cf1186796bc036bbe9ea8.jpeg',
      price: 1,
      availableQuantity: 50,
    },
    {
      id: '4',
      title: 'SELISE Branded Mask',
      description: 'SELISE Branded Mask',
      image:
        'https://images.pq-mobile.ch/500_26c0c6d6778c830ff1bf-9a4711d5593dcfb2971b15a445c7e425.jpeg',
      price: 1,
      availableQuantity: 50,
    },
  ];
  getProducts() {
    return this.products;
  }
}
