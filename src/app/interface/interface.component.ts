export interface ProductList {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  availableQuantity: number;
  totalQuantity: number;
}
export interface Cart extends ProductList {
  action: string;
  TotalItemInCart: number;
}
