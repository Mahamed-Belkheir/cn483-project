import { htmlFragment as html } from "lit-ntml"

export const SearchTemplate = () => {
    return html`
    <div class="row-2 d-flex justify-content-center">
            <form class="d-flex mt-4 w-50 justify-content-around">
                <input class="form-control me-2" type="search" placeholder="Search Products..." aria-label="Search">
                <button class="btn btn-outline-dark" type="submit">Search</button>
            </form>
    </div>
    `
}
