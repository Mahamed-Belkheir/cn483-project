import { Router } from "express";
import { htmlFragment as html } from "lit-ntml";
import { BaseTemplate } from "../../../components/base";
import { NavbarTemplate } from "../../../components/nav";
import { ProductViewTemplate } from "../../../components/product-view";
import { SearchTemplate } from "../../../components/search";
import { checkCookie, controllers } from "../../../dependency";

const router = Router()

router.get('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let [product] = await controllers.product.read({id: +id});
        if (!product) return res.redirect('/');
        let page = html`
        ${NavbarTemplate(checkCookie(req))}
        <div clas="container-fluid">
            ${SearchTemplate()}
            <div class="row d-flex border-light mt-5 justify-content-center">
                ${ProductViewTemplate(product)}
            </div>
        </div>
        `
        res.contentType("html").send(await BaseTemplate(page))
    } catch (e) {
        next(e)
    }
})

export default router;