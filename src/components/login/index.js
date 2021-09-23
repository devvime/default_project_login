import Raven from '../../raven/index.js'

const component = () => {
    return (
        /*html*/
        `<section class="login">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 anime" data-delay="200">
                        <div class="wrapper-login">
                            <div class="row no-gutters">
                                <div class="col-lg-8 col-image">
                                    <img src="/images/background.svg" />
                                </div>
                                <div class="col-lg-4 col-login">
                                    <div class="box-login">
                                        <div class="content">
                                            <h1>POST<br/> DESIGN</h1>
                                            <p>Welcome to Post Design</p>
                                            <form>
                                                <input id="user" type="email" name="user" placeholder="Email de usuário..." required>
                                                <input id="password" type="password" name="password" placeholder="Senha..." required>
                                                <button type="button" id="login">LOGIN</button>
                                                <button type="button" id="register">REGISTER</button>
                                                <p class="forget-password">Forgot Password?</p>
                                            </form>
                                            <img src="/images/load-01.gif" class="load" />
                                        </div>
                                    </div>
                                    <div class="box-register">
                                        <div class="content">
                                            <h1>REGISTER</h1>
                                            <form>
                                                <input id="data-name" type="text" name="name" placeholder="Seu nome..." required>
                                                <input id="data-user" type="email" name="user" placeholder="Email de usuário..." required>
                                                <input id="data-password" type="password" name="password" placeholder="Senha..." required>
                                                <button type="button" id="register-user">REGISTER</button>
                                                <img src="/images/back.svg" class="back-login" />
                                            </form>
                                            <img src="/images/load-01.gif" class="load" />
                                        </div>
                                    </div>
                                    <div class="box-forget-pass">
                                        <div class="content">
                                            <h1>Forgot<br/> Password</h1>
                                            <form>
                                                <input type="email" name="user" placeholder="Email de usuário..." required>
                                                <button type="button">RESET</button>
                                                <img src="/images/back.svg" class="back-login" />
                                            </form>
                                            <img src="/images/load-01.gif" class="load" />
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    )
}

function login() {
    if (localStorage.getItem('user_token')) {
        location.href = '/dashboard'
    } else {
        Raven.render(component)

        $(document).ready(function() {
            $("#register").on("click", function() {
                $(".box-login").fadeOut()
                setTimeout(() => {
                    $(".box-register").fadeIn()
                    $(".box-register").css("display", "flex")
                }, 500)
            })

            $(".forget-password").on("click", function() {
                $(".box-login").fadeOut()
                setTimeout(() => {
                    $(".box-forget-pass").fadeIn()
                    $(".box-forget-pass").css("display", "flex")
                }, 500)
            })

            $(".back-login").on("click", function() {
                $(".box-register").fadeOut()
                $(".box-forget-pass").fadeOut()
                setTimeout(() => {
                    $(".box-login").fadeIn()
                    $(".box-login").css("display", "flex")
                }, 500)
            })

            $("#login").on('click', function() {
                userLogin()
            })

            $("#password").on('keyup', function(event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    userLogin()
                }
            })

            $("#register-user").on('click', function() {
                let name = $("#data-name").val()
                let user = $("#data-user").val()
                let pass = $("#data-password").val()
                if (name === '') {
                    swal('Ops', 'Digite seu nome!', 'warning')
                    return
                }
                if (user === '') {
                    swal('Ops', 'Digite seu e-mail de usuário!', 'warning')
                    return
                }
                if (pass === '') {
                    swal('Ops', 'Digite sua senha!', 'warning')
                    return
                }
                $.post(`${window.apiURL}/user`, {
                    name: name,
                    email: user,
                    password: pass
                }).then(response => {
                    $(".load").fadeIn()
                    response.success &&
                        swal('Boa!', response.success, 'success')
                    response.error &&
                        swal('Ops', response.error, 'error')
                    $(".load").fadeOut()

                })
            })
        })
    }
}

function userLogin() {
    let user = $("#user").val()
    let pass = $("#password").val()
    if (user === '') {
        swal('Ops', 'Digite seu e-mail de usuário!', 'warning')
        return
    }
    if (pass === '') {
        swal('Ops', 'Digite sua senha!', 'warning')
        return
    }
    $.post(`${window.apiURL}/auth`, {
        email: user,
        password: pass
    }).then(response => {
        $(".load").fadeIn()
        if (response.success) {
            localStorage.setItem('user_token', response.success.token)
            location.href = '/dashboard'
        }
        response.error &&
            swal('Ops', response.error, 'error')
        $(".load").fadeOut()

    })
}

export default login