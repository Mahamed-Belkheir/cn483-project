import { htmlFragment as html } from "lit-ntml"
import { Product } from "../models/interfaces/product"

export const ProductViewTemplate = (product: Product) => {
    return html`
        <div class="row ms-5 d-flex m-3 justify-content-center">
            <div class="col-2 ms-5">
                <img src=${product.image_url}>
            </div>
            <div class="col-6"> 
                <div class="row">
                    <h1>${product.name}</h1>
                </div>
                <div class="row">
                    <p>${product.description}</p>
                </div>
                <div class="row">
                    <p>${product.price +" LYD"}</p>
                </div>
                <form class="d-flex align-items-center">
                    <input class="form-control" style="width: 5rem; height: 20%" type="number" min="1" max="50" value="1" name="quantity">
                    <button type="submit" class="btn ms-2 btn-success"> Add to Cart</button>
                </form>
            </div>
            
        </div>
    `
}