import { Router } from "express";
import { htmlFragment as html } from "lit-ntml";
import { BaseTemplate } from "../../../components/base";
import { NavbarTemplate } from "../../../components/nav";
import { ProductTemplate } from "../../../components/product";
import { SearchTemplate } from "../../../components/search";
import fs from "fs";
import { checkCookie, controllers } from "../../../dependency";

const router = Router()

router.get('/', async (req, res, next) => {
    try {
        let products = await controllers.product.read({});
        let page = html`
        ${NavbarTemplate(checkCookie(req))}
        <div clas="container-fluid">
            ${SearchTemplate()}
            <div class="row d-flex border-light mt-5 justify-content-center">
                ${products.map(a => ProductTemplate(a))}
            </div>
        </div>
        `
        res.contentType("html").send(await BaseTemplate(page))
    } catch (e) {
        next(e)
    }
})

let dirs = fs.readdirSync(__dirname);

for(let dir of dirs) {
    dir = "/" + dir.replace(/(\.ts)$|(\.js)$/gi, "")
    if (dir.includes(".map"))
        continue
    let r = require( "." + dir);
    if (typeof r.default == "function")
        router.use(dir, r.default)
}

export default router;