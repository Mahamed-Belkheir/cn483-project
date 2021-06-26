import { htmlFragment as html } from "lit-ntml";
import { CartItem } from "../models/interfaces/carti-tem";

export const CartTemplate = (items: CartItem[]) => {
    let total = 0;
    return html`
    <div class="row d-flex mt-5 justify-content-center">
            <div class="col border justify-content-between">
                <div class="row d-flex border border-dark border-2 justify-content-between p-2">
                    <div class="col d-flex justify-content-center fw-bold">Name</div>
                    <div class="col d-flex justify-content-center fw-bold">Price</div>
                    <div class="col d-flex justify-content-center fw-bold">Quantity</div>
                    <div class="col d-flex justify-content-center fw-bold">Total</div>   
                    <div class="col d-flex justify-content-center fw-bold"></div>   
                </div>
                ${items.map(item => {
                    total += item.quantity * item.product!.price
                    return html`
                        <div class="row d-flex border justify-content-between p-2">
                            <div class="col d-flex justify-content-center">${item.product!.name}</div>
                            <div class="col d-flex justify-content-center">${item.product!.price} LYD</div>
                            <div class="col d-flex justify-content-center">${item.quantity}</div>
                            <div class="col d-flex justify-content-center">${item.quantity * item.product!.price} LYD</div>
                            <div class="col d-flex justify-content-center">
                                <a href="/cart/remove/${item.id}" class="justify-content-center btn btn-light border btn-sm">remove</a>
                            </div>
                        </div>
                    `
                })}
            </div>
        </div>
        <div class="row d-flex mt-5 justify-content-center">
            <div class="row d-flex border border justify-content-between p-2">
                <div class="col d-flex justify-content-center fw-bold">Total:</div>
                <div class="col d-flex justify-content-center fw-bold">${total} LYD</div>
                <a href="/cart/buy" class="w-25 justify-content-center btn btn-sm ${total > 0 ? "btn-success" : "border disabled"}">Buy</a>  
            </div>
        </div>
    </div>
    `
}