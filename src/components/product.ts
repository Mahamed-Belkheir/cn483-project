import { htmlFragment as html } from "lit-ntml"
import { Product } from "../models/interfaces/product"


export const ProductTemplate = (product: Product) => {
    return html`
        <div class="col-sm-12 col-md-2 col-lg-2 d-flex m-3 justify-content-center">
            <div class="card" style="width: 14rem;">
                <img src="${product.image_url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">${product.price +" LYD"}</p>
                    <a href="/product/${product.id}" class="btn btn-primary">View Product</a>
                </div>
            </div>
        </div>
    `
}