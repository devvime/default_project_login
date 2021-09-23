import Raven from '../../raven/index.js'

const component = (data) => {
    return (
        /*html*/
        `<div class="container">
            <div class="row">
                <div class="col-lg-12 text-light">
                    <h1 class="display-1">Blog</h1>
                    <p>${data}</p>
                </div>
            </div>
        </div>`
    )
}

function readBlog(data) {
    Raven.render(component(data))
}

export default readBlog