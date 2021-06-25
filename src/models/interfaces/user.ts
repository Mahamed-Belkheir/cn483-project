import BaseInterface from "./base";

export interface User {
	id: number
	email: string
	password: string
	first_name: string
	last_name: string
}

export interface UserModelInterface extends BaseInterface<User> {
    comparePassword(password: string, hash: string): Promise<boolean>
}