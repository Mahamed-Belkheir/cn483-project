import { BadRequest, NotFound, Unauthorized } from "../exceptions";
import { UserModelInterface, User } from "../models/interfaces/user"


export class UserController {
    constructor(
        private users: UserModelInterface,
    ) {}

    public async signin(details: { email: string, password: string }) {
        let [user] = await this.users.read({email: details.email});
        if (!user) throw new NotFound("email");
        if (!await this.users.comparePassword(details.password, user.password)) {
            throw new Unauthorized("wrong password");
        }
        return { ...user, password: undefined };
    }

    public async signup(userData: Omit<User, "id">) {
        let [user] = await this.users.read({email: userData.email});
        if (user) throw new BadRequest("email already in use");
        await this.users.create(user);
    }
}