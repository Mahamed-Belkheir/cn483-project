import { Model, BaseModel } from "./base";
import { Order, OrderModelInterface } from "../interfaces/order";
import { CartItem } from "../interfaces/carti-tem";

export class OrderObjectionModel extends Model implements Order {
    id: number
    user_id: number
    timestamp: Date
    total: number
    items: CartItem[]

    static tableName = "orders";
}

export class OrderModel extends BaseModel<Order> implements OrderModelInterface {
    model = OrderObjectionModel
}
