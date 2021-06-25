import { Router } from "express";
import { controllers } from "../../../../dependency"
import { validate } from "../../../../validation";

const router = Router()

//@ts-ignore
router.post('/signin', async (req, res, next) => {
    try {
        validate.signin(req.body);
        let data = await controllers.user.signin(req.body);
        res.send({
            status: 'success',
            data
        })
    } catch (e) {
        next(e)
    }
})

//@ts-ignore
router.post('/signup', async (req, res, next) => {
    try {
        validate.user(req.body);
        await controllers.user.signup(req.body);
        res.send({
            status: 'success'
        })
    } catch (e) {
        next(e)
    }
})

export default router;