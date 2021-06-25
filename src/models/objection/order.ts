import { Model, BaseModel } from "./base";
import { Order, OrderModelInterface } from "../interfaces/order";

export class OrderObjectionModel extends Model implements Order {
    id: number
    user_id: number
    timestamp: Date
    total: number
    items: string

    static tableName = "orders";
    static jsonSchema = {
        type: "object",
        attributes: {
            id: { type: "number" },
            user_id: { type: "number" },
            timestamp: { type: "string", format: "datetime" },
            total: { type: "number" },
            items: { type: "string" },
        }
    }
}

export class OrderModel extends BaseModel<Order> implements OrderModelInterface {
    model = OrderObjectionModel
}
