import { htmlFragment as html } from "lit-ntml"

export const NavbarTemplate = (isAuth: boolean) => {
    return html`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand ms-2" href="/">Exempli Commerce</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    ${(!isAuth) ?
                        html`
                        <li class="nav-item">
                            <a class="nav-link" href="/signin">Signin</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/signup">Signup</a>
                        </li>` :
                        html`
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Cart</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/signout">Signout</a>
                        </li>
                        `
                        }
                </ul>
            </div>
        </div>
    </nav>
    `
}
