import { async } from 'regenerator-runtime'
import Raven from '../../raven/index.js'
import header from './includes/header.js'
import aside from './includes/sidebar.js'

const component = () => {
    return (
        /*html*/
        `<section clas="dashboard">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12" id="header"></div>
                </div>
            </div>
            <div id="aside"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 offset-md-1" id="content"></div>                 
                </div>
            </div>
        </section>`
    )
}

async function authVerify() {
    let token = localStorage.getItem('user_token')
    let verified = []
    if (token != null) {
        await $.ajax({
            type: "GET",
            url: `${window.apiURL}/auth/verify`,
            dataType: 'json',
            headers: { Authorization: 'Bearer ' + token },
            success: function(response) {
                if (response.success) {
                    verified = response.success
                }
            }
        })
    } else {
        location.href = '/login'
    }

    return verified
}

function dashboard() {
    authVerify().then(result => {
        Raven.render(component)
        $(document).ready(function() {
            Raven.include('#header', header(`${result.hello} ${result.data.name}`))
            Raven.include('#aside', aside)
            init()
        })
    })

}

function init() {
    $("#aside").on('mouseover', function() {
        $(this).css('left', '0')
    })
    $("#aside").on('mouseout', function() {
        $(this).css('left', '-200px')
    })
    menu()
}

function menu() {
    $("#btn_dashboard").click(function() {
        location.href = '/dashboard'
    })
    $("#btn_logout").click(function() {
        localStorage.removeItem('user_token')
        location.reload()
    })
}

export default dashboard