import BaseInterface from "./base";

export interface Order {
	id: number
	user_id: number
	timestamp: Date
	total: number
	items: string
}

export interface OrderModelInterface extends BaseInterface<Order> {

}