import { Model, BaseModel } from "./base";
import { CartItem, CartItemModelInterface } from "../interfaces/carti-tem";
import { Product } from "../interfaces/product";

export class CartItemObjectionModel extends Model implements CartItem {
    id: number
    user_id: number
    product_id: number
    quantity: number
    product: Product

    static tableName = "user_cart_products";
    static jsonSchema = {
        type: "object",
        attributes: {
            id: { type: "number" },
            user_id: { type: "number" },
            product_id: { type: "number" },
            quantity: { type: "number" },
        }
    }
    static relationMappings = {
        product: {
            relation: Model.HasOneRelation,
            modelClass: "product",
            join: {
                from: "user_cart_products.product_id",
                to: "products.id",
            }
        }
    }
}

export class CartItemModel extends BaseModel<CartItem> implements CartItemModelInterface {
    model = CartItemObjectionModel
    async clear(userId: number) {
        await this.model.query().where({user_id: userId}).delete();
    }
}
