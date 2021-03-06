import { htmlFragment as html } from "lit-ntml"
import { ValidationError } from "../exceptions";

export const SigninTemplate = (error?: Error) => {
    return html`
    <div class="container-fluid">
            <div class="row">
                <div class="col d-flex justify-content-center w-50">
                    <form method="POST" action="/signin" class="border p-5 mt-5">
                        <h4 class="d-flex justify-content-center mb-5">Sign Into Your Account</h4>
                        <div class="mb-3">
                            <input type="email" name="email" class="form-control" placeholder="Email Address" id="email" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <input type="password" name="password" class="form-control" placeholder="Password" id="password">
                        </div>

                        <div class="d-flex mt-5 flex-column">
                            <button type="submit"  class="mt-3 btn btn-primary btn">Sign in</button>
                            <a href="/signup" class="mt-3 btn btn-light btn-sm border">Sign up</a>
                        </div>
                        ${(()=>{
                            if (error) {
                                if (error instanceof ValidationError) {
                                    return html`${error.listOfErrors.map((a:any) => html`
                                        <div class="alert alert-danger mt-3">
                                            ${a.field ? a.field + " " + a.error : a.error}
                                        </div>
                                    `)}`
                                } 
                                return html`
                                    <div class="alert alert-danger mt-3">
                                        ${error.message}
                                    </div>
                                `
                            } else {
                                return "";
                            }
                        })()}
                    </form>
                </div>
            </div>
        </div>
    `
}
