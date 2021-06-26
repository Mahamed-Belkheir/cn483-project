import { Model, BaseModel } from "./base";
import { User, UserModelInterface } from "../interfaces/user";
import argon2 from "argon2";
import { CartItem } from "../interfaces/carti-tem";

export class UserObjectionModel extends Model implements User {
    id: number
    email: string
    password: string
    first_name: string
    last_name: string
    cart: CartItem[]

    static tableName = "users";
}

export class UserModel extends BaseModel<User> implements UserModelInterface {
    model = UserObjectionModel

    async create(data: Omit<User, "id">) {
        data.password = await argon2.hash(data.password);
        data.email = data.email.toLowerCase();
        return super.create(data)
    }

    async update(id: number, data: Partial<User>) {
        if (data.password)
            data.password = await argon2.hash(data.password);
        if (data.email)
            data.email = data.email.toLowerCase();
        return super.update(id, data)
    }

    comparePassword(password: string, hash: string) {
        return argon2.verify(hash, password)
    }
}
