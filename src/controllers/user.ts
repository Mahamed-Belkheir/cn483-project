import { UserModelInterface, User } from "../models/interfaces/user"


export class UserController {
    constructor(
        private users: UserModelInterface,
    ) {}

    public async read(query: Partial<User>) {
        return this.users.read(query);
    }

    public async create(data: Omit<User, "id">) {
        await this.users.create(data);
    }

    public async update(id: number, query: Partial<User>) {
        await this.users.update(id, query);
    }

    public async delete(id: number) {
        await this.users.delete(id);
    }
}