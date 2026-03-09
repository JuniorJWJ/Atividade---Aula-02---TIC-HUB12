import { CartItem } from "../interfaces/CartItem";
import { Product } from "./Product";

export class Cart {
  private items: CartItem[] = [];

  addItem(product: Product, quantity: number): void {
    if (quantity <= 0) {
      throw new Error("Cart: a quantidade deve ser maior que zero.");
    }

    const productAlreadyInCart = this.items.some(
      (item) => item.product.id === product.id
    );

    if (productAlreadyInCart) {
      this.items = this.items.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      return;
    }

    this.items.push({ product, quantity });
  }

  getTotalItems(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getFinalPrice(): number {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  getItems(): CartItem[] {
    return [...this.items];
  }
}
