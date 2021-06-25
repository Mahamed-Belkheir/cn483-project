import { Model, BaseModel } from "./base";
import { Product, ProductModelInterface } from "../interfaces/product";

export class ProductObjectionModel extends Model implements Product {
    id: number
    name: string
    description: string
    price: number
    image_url: string

    static tableName = "products";
    static jsonSchema = {
        type: "object",
        attributes: {
            id: { type: "number" },
            name: { type: "string" },
            description: { type: "string" },
            price: { type: "number" },
            image_url: { type: "string" },
        }
    }
}

export class ProductModel extends BaseModel<Product> implements ProductModelInterface {
    model = ProductObjectionModel
}
