import { Model, BaseModel } from "./base";
import { Cart, CartModelInterface } from "../interfaces/cart";

export class CartObjectionModel extends Model implements Cart {
    id: number
    user_id: number

    static tableName = "carts";
    static jsonSchema = {
        type: "object",
        attributes: {
            id: { type: "number" },
            user_id: { type: "number" },
        }
    }
}

export class CartModel extends BaseModel<Cart> implements CartModelInterface {
    model = CartObjectionModel
}
