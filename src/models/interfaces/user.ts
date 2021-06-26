import BaseInterface from "./base";
import { CartItem } from "./carti-tem";

export interface User {
	id: number
	email: string
	password: string
	first_name: string
	last_name: string
	cart?: CartItem[]	
}

export interface UserModelInterface extends BaseInterface<User> {
    comparePassword(password: string, hash: string): Promise<boolean>
}