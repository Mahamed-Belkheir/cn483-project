import BaseInterface from "./base";

export interface Product {
	id: number
	name: string
	description: string
	price: number
	image_url: string
}

export interface ProductModelInterface extends BaseInterface<Product> {

}