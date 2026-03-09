"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        if (!name.trim()) {
            throw new Error("Category: o nome da categoria não pode ser vazio.");
        }
    }
    getDisplayName() {
        return this.name.trim();
    }
}
exports.Category = Category;
//# sourceMappingURL=Category.js.map