import { OrderModelInterface, Order } from "../models/interfaces/order"


export class OrderController {
    constructor(
        private orders: OrderModelInterface,
    ) {}

    public async read(query: Partial<Order>) {
        return this.orders.read(query);
    }

    public async create(data: Omit<Order, "id">) {
        await this.orders.create(data);
    }

    public async update(id: number, query: Partial<Order>) {
        await this.orders.update(id, query);
    }

    public async delete(id: number) {
        await this.orders.delete(id);
    }
}