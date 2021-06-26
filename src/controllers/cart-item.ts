import { Forbidden, NotFound } from "../exceptions";
import { CartItemModelInterface } from "../models/interfaces/carti-tem";

export class CartItemController {
    constructor(
       private cartItems: CartItemModelInterface
       
    ) {}

    async addItem(userId: number, productId: number, quantity: number) {
        await this.cartItems.create({
            user_id: userId,
            product_id: productId,
            quantity
        })
    }

    async getUserCart(userId: number) {
        return this.cartItems.read({ user_id: userId }, ["product"]);
    }

    async removeItem(userId: number, itemId: number) {
        let [item] = await this.cartItems.read({ id: itemId })
        if (!item) throw new NotFound("item");
        if (item.user_id !== userId) throw new Forbidden("user does not own cart item");
        await this.cartItems.delete(itemId);
    }

    async clearUserCart(userId: number) {
        await this.cartItems.clear(userId);
    }
}