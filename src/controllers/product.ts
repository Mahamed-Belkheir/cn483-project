import { ProductModelInterface, Product } from "../models/interfaces/product"


export class ProductController {
    constructor(
        private products: ProductModelInterface,
    ) {}

    public async read(query: Partial<Product>) {
        return this.products.read(query);
    }

    public async create(data: Omit<Product, "id">) {
        await this.products.create(data);
    }

    public async update(id: number, query: Partial<Product>) {
        await this.products.update(id, query);
    }

    public async delete(id: number) {
        await this.products.delete(id);
    }
}