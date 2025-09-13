export interface CartItem {
  id: string; // item id in the cart (often same as product/variant id)
  productId?: string;
  title?: string;
  price?: number;
  image?: string;
  quantity: number;
  color?: string;
  size?: string;
  subtotal?: number;
}
export interface Cart {
  id: string;
  items: CartItem[];
  subtotal?: number;
  shipping?: number;
  total?: number;
}
