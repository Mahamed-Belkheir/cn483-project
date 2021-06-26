import { Router } from "express";
import { qufl } from "../../../dependency";


const router = Router();


router.get('/', async (_, res, next) => {
    try {
        res.clearCookie(qufl.cookieKey())
        res.redirect("/");
    } catch (e) {
        next
    }
})

export default router;