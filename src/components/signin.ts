import { htmlFragment as html } from "lit-ntml"
import { ValidationError } from "../exceptions";

export const SigninTemplate = (error?: Error) => {
    return html`
    <div class="container-fluid">
            <div class="row">
                <div class="col d-flex justify-content-center w-50">
                    <form class="border p-5 mt-5">
                        <h4 class="d-flex justify-content-center mb-5">Sign Into Your Account</h4>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Email Address" id="email" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Password" id="password">
                        </div>

                        <div class="d-flex mt-5 flex-column">
                            <button type="submit" class="mt-3 btn btn-primary btn">Sign in</button>
                            <button type="submit" class="mt-3 btn btn-light btn-sm border">Sign up</button>
                        </div>
                        ${(()=>{
                            if (error) {
                                if (error instanceof ValidationError) {
                                    return html`${error.listOfErrors.map((a:any) => html`
                                        <div class="alert alert-danger">
                                            ${a.error}
                                        </div>
                                    `)}`
                                } 
                                return html`
                                    <div class="alert alert-danger">
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
