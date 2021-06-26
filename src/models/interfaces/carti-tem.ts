import BaseInterface from "./base";
import { Product } from "./product";

export interface CartItem {
	id: number
	user_id: number
	product_id: number
	quantity: number
	product?: Product
}

export interface CartItemModelInterface extends BaseInterface<CartItem> {
	clear(userId: number): Promise<void>
}