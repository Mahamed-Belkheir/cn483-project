import { Model, BaseModel } from "./base";
import { User, UserModelInterface } from "../interfaces/user";

export class UserObjectionModel extends Model implements User {
    id: number
    email: string
    password: string
    first_name: string
    last_name: string

    static tableName = "users";
    static jsonSchema = {
        type: "object",
        attributes: {
            id: { type: "number" },
            email: { type: "string" },
            password: { type: "string" },
            first_name: { type: "string" },
            last_name: { type: "string" },
        }
    }
}

export class UserModel extends BaseModel<User> implements UserModelInterface {
    model = UserObjectionModel
}
