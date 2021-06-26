import { Router } from "express";
import { controllers, qufl } from "../../../dependency";
import { htmlFragment as html } from "lit-ntml";
import { NavbarTemplate } from "../../../components/nav";
import { BaseTemplate } from "../../../components/base";
import { OrderTemplate } from "../../../components/order";
const router = Router()

router.get('/', qufl.auth({ aud: "user" }), async (req, res, next) => {
    try {
        let orders = await controllers.order.read({user_id: +req.qufl.sub})
        let page = html`
            ${NavbarTemplate(true)}
            <div class="container">

                <div class="row d-flex mt-5 justify-content-center">
                    <h3>Orders history</h3>
                </div>
                ${OrderTemplate(orders)}
            </div>
        `
        res.contentType('html').send(await BaseTemplate(page));
    } catch (e) {
        next(e)
    }
})

export default router;