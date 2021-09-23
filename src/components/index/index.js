import Raven from '../../raven/index.js'

const component = () => {
    return (
        /*html*/
        `<section clas="index">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <div class="jumbotron" data-delay="200">
                            <h1 class="display-3">Raven JS <span><img src="/@raven/images/raven.png" /></span></h1>
                            <p class="lead">Micro framework (Router Simple Javascript with basic componentization)</p>
                            <hr class="my-2">
                            <p>More info</p>
                            <div class="row">
                                <div class="col-md-2">
                                    <img src="https://avatars.githubusercontent.com/u/36117649?v=4" class="profile" />
                                </div>
                                <div class="col-md-10 buttons">
                                    <p><strong>Victor Alves Mendes</strong></p>
                                    <a href="https://github.com/devvime" target="_blank">
                                        <img src="/@raven/images/github-light.png" />
                                    </a>
                                    <a href="https://www.instagram.com/viimee" target="_blank">
                                        <img src="/@raven/images/instagram-light.png" />
                                    </a>
                                </div>
                            </div>
                        </div>                      
                    </div>                 
                </div>
            </div>
        </section>`
    )
}

function index() {

    Raven.loadStyle("/public/@raven/css/style.css")

    $(document).ready(function() {
        Raven.render(component)
    })

}

export default index