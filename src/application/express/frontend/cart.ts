import { Router } from "express";
import { controllers, qufl } from "../../../dependency";
import { htmlFragment as html } from "lit-ntml";
import { NavbarTemplate } from "../../../components/nav";
import { CartTemplate } from "../../../components/cart";
import { BaseTemplate } from "../../../components/base";
const router = Router()

router.get('/', qufl.auth({ aud: "user" }), async (req, res, next) => {
    try {
        let items = await controllers.cartitem.getUserCart(+req.qufl.sub)

        let page = html`
            ${NavbarTemplate(true)}
            <div class="container">

                <div class="row d-flex mt-5 justify-content-center">
                    <h3>Cart</h3>
                </div>
                ${CartTemplate(items)}
            </div>
        `
        res.contentType('html').send(await BaseTemplate(page));
    } catch (e) {
        next(e)
    }
})


router.get('/remove/:id', qufl.auth({ aud: "user" }), async (req, res, next) => {
    try {
        await controllers.cartitem.removeItem(+req.qufl.sub, +req.params.id)
        let items = await controllers.cartitem.getUserCart(+req.qufl.sub)
        let page = html`
            ${NavbarTemplate(true)}
            <div class="container">
                <div class="alert alert-success"> Item removed from cart </div>
                <div class="row d-flex mt-5 justify-content-center">
                    <h3>Cart</h3>
                </div>
                ${CartTemplate(items)}
            </div>
        `
        res.contentType('html').send(await BaseTemplate(page));
    } catch (e) {
        next(e)
    }
})

router.get('/buy', qufl.auth({ aud: "user" }), async (req, res, next) => {
    try {
        let items = await controllers.cartitem.getUserCart(+req.qufl.sub)

        await controllers.order.create({
            items: JSON.parse(JSON.stringify(items)),
            timestamp: new Date(),
            total: items.reduce((total, i) => total + (i.quantity * i.product!.price), 0),
            user_id: +req.qufl.sub
        })
        await controllers.cartitem.clearUserCart(+req.qufl.sub);
        let page = html`
            ${NavbarTemplate(true)}
            <div class="container">
                <div class="alert alert-success"> Order created! </div>
                <div class="row d-flex mt-5 justify-content-center">
                    <h3>Cart</h3>
                </div>
                ${CartTemplate([])}
            </div>
        `
        res.contentType('html').send(await BaseTemplate(page));
    } catch (e) {
        next(e)
    }
})


export default router;