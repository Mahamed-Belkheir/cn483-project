import { Router } from "express";
import { htmlFragment as html } from "lit-ntml";
import { BaseTemplate } from "../../../components/base";
import { NavbarTemplate } from "../../../components/nav";
import { SignupTemplate } from "../../../components/signup";
import { checkCookie, controllers } from "../../../dependency";
import { validate } from "../../../validation";


const router = Router()

router.get('/', async (req, res) => {
    let page = html`
        ${NavbarTemplate(checkCookie(req))}
        ${SignupTemplate()}
    `
    res.contentType("html").send(await BaseTemplate(page))
    
})

router.post('/', async (req, res) => {
    try {
        validate.user(req.body);
        console.log(req.body)
        await controllers.user.signup(req.body)
        res.redirect("/signin")
    } catch(e) {
        console.error(e)
        let page = html`
            ${NavbarTemplate(checkCookie(req))}
            ${SignupTemplate(e)}
        `
        res.contentType("html").send(await BaseTemplate(page))
    }
})

export default router;