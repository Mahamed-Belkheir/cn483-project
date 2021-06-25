import BaseInterface from "./base";
import { Product } from "./product";

export interface Order {
	id: number
	user_id: number
	timestamp: Date
	total: number
	items: Product[]
}

export interface OrderModelInterface extends BaseInterface<Order> {

}