"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    constructor() {
        this.items = [];
    }
    addItem(product, quantity) {
        if (quantity <= 0) {
            return;
        }
        const itemExists = this.items.some((item) => item.product.id === product.id);
        if (itemExists) {
            this.items = this.items.map((item) => item.product.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item);
            return;
        }
        this.items.push({ product, quantity });
    }
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }
    getFinalPrice() {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
    getItems() {
        return this.items;
    }
}
exports.Cart = Cart;
//# sourceMappingURL=Cart.js.map