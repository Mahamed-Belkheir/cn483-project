import { Router } from "express";
import { htmlFragment as html } from "lit-ntml";
import { BaseTemplate } from "../../../components/base";
import { NavbarTemplate } from "../../../components/nav";
import { SigninTemplate } from "../../../components/signin";
import { checkCookie, controllers, cookieMaxAge, qufl } from "../../../dependency";
import { validate } from "../../../validation";


const router = Router()

router.get('/', async (req, res) => {
    
    let page = html`
        ${NavbarTemplate(checkCookie(req))}
        ${SigninTemplate()}
    `
    res.contentType("html").send(await BaseTemplate(page))
    
})

router.post('/', async (req, res) => {
    try {
        validate.signin(req.body);
        let user = await controllers.user.signin(req.body)
        let {token} = await qufl.signToken({ sub: String(user.id), aud: "user", payload: user })
        res.cookie(qufl.cookieKey(), token, {
            httpOnly: true,
            maxAge:  cookieMaxAge,
            secure: true,
            path: "/",
        })
        res.redirect("/")
    } catch(e) {
        let page = html`
            ${NavbarTemplate(checkCookie(req))}
            ${SigninTemplate(e)}
        `
        res.contentType("html").send(await BaseTemplate(page))
    }
})

export default router;