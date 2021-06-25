import BaseInterface from "./base";

export interface Cart {
    id: number
    user_id: number
}

export interface CartModelInterface extends BaseInterface<Cart> {

}