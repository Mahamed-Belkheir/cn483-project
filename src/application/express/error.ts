import { htmlFragment as html } from "lit-ntml";
import { BaseTemplate } from "../../components/base";
import { NavbarTemplate } from "../../components/nav";
import { checkCookie } from "../../dependency";
import { ValidationError } from "../../exceptions";


export default async function (err:any, req:any, res:any, _2:any) {
    let page = html`
    ${NavbarTemplate(checkCookie(req))}
    ${(()=>{
        if (err instanceof ValidationError) {
            return html`${err.listOfErrors.map((a:any) => html`
                <div class="alert alert-danger mt-3">
                    ${a.field ? a.field + " " + a.error : a.error}
                </div>
            `)}`
        } 
        return html`
            <div class="alert alert-danger mt-3">
                ${err.message}
            </div>`
    })()}
    `
    res.contentType("html").send(await BaseTemplate(page))
}
