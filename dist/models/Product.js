"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        if (!name.trim()) {
            throw new Error("Product: o nome do produto não pode ser vazio.");
        }
        if (price < 0) {
            throw new Error("Product: o preço não pode ser negativo.");
        }
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map