import type { Product } from "../../interfaces/domain/product";
import type { CartItem } from "../../interfaces/app/state";

export type CartProduct = Product & { quantity: number };

export function getCartProducts(cartItems: CartItem[], products: Product[]): CartProduct[] {
  return cartItems
    .map((item) => {
      const product = products.find((product) => product.id === item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter((item): item is CartProduct => item !== null);
}

export function getCartTotal(cartProducts: CartProduct[]): number {
  return cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function normalizeQuantity(value: number): number {
  return Math.max(1, value);
}
