import BaseInterface from "./base";
import { CartItem } from "./carti-tem";

export interface Order {
	id: number
	user_id: number
	timestamp: Date
	total: number
	items: CartItem[]
}

export interface OrderModelInterface extends BaseInterface<Order> {

}