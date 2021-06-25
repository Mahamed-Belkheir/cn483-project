import { Router } from "express";
import fs from "fs";

const router = Router()

let dirs = fs.readdirSync(__dirname);

for(let dir of dirs) {
    dir = "/" + dir.replace(/.js|.ts/gi, "")
    if (dir.includes(".map"))
        continue
    let r = require( "." + dir);
    if (typeof r.default == "function")
        router.use(dir, r.default)
}

export default router;