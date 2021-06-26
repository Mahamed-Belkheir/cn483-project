import { htmlFragment as html } from "lit-ntml";
import { Order } from "../models/interfaces/order";

export const OrderTemplate = (orders: Order[]) => {
    console.log(orders)
    return html`
     <div class="row d-flex mt-5 justify-content-center">
            <div class="col border justify-content-between">
                ${orders.map(order => {
                    let a = order.timestamp
                    return html`
                    <div class="row d-flex border border-dark border-2 justify-content-between p-2">
                    <div class="col d-flex justify-content-center fw-bold">Order: ${order.id}</div>
                    <div class="col d-flex justify-content-center fw-bold"></div>
                    <div class="col d-flex justify-content-center fw-bold"></div>
                    <div class="col d-flex justify-content-center fw-bold">Time: ${`${a.getDate()}/${(a.getMonth())}/${(a.getFullYear()+"")} ${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}`}</div>   
                    <div class="col d-flex justify-content-center fw-bold">Total: ${order.total}</div>   
                </div>
                    ${order.items.map(item => {
                        console.log(item)
                        return html`
                        <div class="row d-flex border justify-content-between p-2">
                            <div class="col d-flex justify-content-center">${item.product!.name}</div>
                            <div class="col d-flex justify-content-center">${item.product!.price} LYD</div>
                            <div class="col d-flex justify-content-center">${item.quantity}</div>
                            <div class="col d-flex justify-content-center">${item.quantity * item.product!.price} LYD</div>
                        </div>
                    `
                    })}
                </div>
            `
                })}
        </div>
    </div>
    `
}