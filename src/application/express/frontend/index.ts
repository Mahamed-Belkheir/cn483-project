import { Router } from "express";
import { htmlFragment as html } from "lit-ntml";
import { BaseTemplate } from "../../../components/base";
import { NavbarTemplate } from "../../../components/nav";
import { ProductTemplate } from "../../../components/product";
import { SearchTemplate } from "../../../components/search";
import fs from "fs";

const router = Router()

router.get('/', async (_, res, next) => {
    try {
        let page = html`
        ${NavbarTemplate(false)}
        <div clas="container-fluid">
            ${SearchTemplate()}
            <div class="row d-flex border-light mt-5 justify-content-center">
                ${[{id: 1, name: "apple", description: "red delicious species, fresh from farm", price: 100, image_url: "https://ezsai.com/wp-content/uploads/2021/02/firefox_2018-07-10_07-50-11.png"}].map(a => ProductTemplate(a))}
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