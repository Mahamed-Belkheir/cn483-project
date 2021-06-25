import { CartModelInterface, Cart } from "../models/interfaces/cart"


export class CartController {
    constructor(
        private carts: CartModelInterface,
    ) {}

    public async read(query: Partial<Cart>) {
        return this.carts.read(query);
    }

    public async create(data: Omit<Cart, "id">) {
        await this.carts.create(data);
    }

    public async update(id: number, query: Partial<Cart>) {
        await this.carts.update(id, query);
    }

    public async delete(id: number) {
        await this.carts.delete(id);
    }
}