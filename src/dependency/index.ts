import { OrderModel } from '../models/objection/order'
import {OrderController} from '../controllers/order'
import { CartModel } from '../models/objection/cart'
import {CartController} from '../controllers/cart'
import { UserModel } from '../models/objection/user'
import {UserController} from '../controllers/user'
import { ProductModel } from '../models/objection/product'
import { ProductController } from '../controllers/product'
export const models = {
	order:	new OrderModel(),

	cart:	new CartModel(),

	user:	new UserModel(),

	product: new ProductModel(),
}

export const services = {

}

export const controllers = {
	order: new OrderController(models.order),

	cart: new CartController(models.cart),

	user: new UserController(models.user),

	product: new ProductController(models.product),

}