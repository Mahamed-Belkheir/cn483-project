import { Model, BaseModel } from "./base";
import { Order, OrderModelInterface } from "../interfaces/order";
import { Product } from "../interfaces/product";

export class OrderObjectionModel extends Model implements Order {
    id: number
    user_id: number
    timestamp: Date
    total: number
    items: Product[]

    static tableName = "orders";
}

export class OrderModel extends BaseModel<Order> implements OrderModelInterface {
    model = OrderObjectionModel
}
