"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Role_1 = require("../enums/Role");
class User {
    constructor(id, username, email, role) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.role = role;
        if (!username.trim()) {
            throw new Error("User: o nome de usuário não pode ser vazio.");
        }
        if (!email.includes("@")) {
            throw new Error("User: informe um e-mail válido.");
        }
    }
    getRoleLabel() {
        return this.role === Role_1.Role.ADMIN ? "Administrador" : "Cliente";
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map