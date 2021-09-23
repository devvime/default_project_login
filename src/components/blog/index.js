import Raven from '../../raven/index.js'

const component = () => {
    return (
        /*html*/
        `<div class="container">
            <div class="row">
                <div class="col-lg-12 anime" data-delay="200">
                    <h1 class="display-1">Blog</h1>
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </div>`
    )
}

function blog() {
    Raven.render(component)
}

export default blog