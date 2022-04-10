import { ProductList } from '../interface/interface.component';

export class ProductListService {
  products: ProductList[] = [
    {
      title: 'SELISE Branded T-Shirt',
      description: 'SELISE Branded T-Shirt',
      image:
        'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone13-Pro-alpine-green-hero-2up-220308_big_carousel.jpg.slideshow-xlarge_2x.jpg',
      price: 1,
      availableQuantity: 1,
      itemQuantityInCart: 1,
    },
    {
      title: 'SELISE Branded Mask',
      description: 'SELISE Branded Mask',
      image:
        'https://images.pq-mobile.ch/500_26c0c6d6778c830ff1bf-9a4711d5593dcfb2971b15a445c7e425.jpeg',
      price: 1,
      availableQuantity: 1,
      itemQuantityInCart: 1,
    },
    {
      title: 'SELISE Branded T-Shirt',
      description: 'SELISE Branded T-Shirt',
      image:
        'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone13-Pro-alpine-green-hero-2up-220308_big_carousel.jpg.slideshow-xlarge_2x.jpg',
      price: 1,
      availableQuantity: 1,
      itemQuantityInCart: 1,
    },
    {
      title: 'SELISE Branded Mask',
      description: 'SELISE Branded Mask',
      image:
        'https://images.pq-mobile.ch/500_26c0c6d6778c830ff1bf-9a4711d5593dcfb2971b15a445c7e425.jpeg',
      price: 1,
      availableQuantity: 1,
      itemQuantityInCart: 1,
    },
  ];
  getProducts() {
    return this.products;
  }
}
