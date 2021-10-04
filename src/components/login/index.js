import Raven from '../../raven/index.js'

const e = React.createElement;

const component = () => {
    return (
        e('section', { className: 'login' },
            e('div', { className: 'container' },
                e('div', { className: 'row' },
                    e('div', { className: 'col-xl-12 anime', 'data-delay': '200' },
                        e('div', { className: 'wrapper-login' },
                            e('div', { className: 'row no-gutters' },
                                e('div', { className: 'col-lg-8 col-image' },
                                    e('img', { src: '/images/background.svg' }, null)
                                ),
                                e('div', { className: 'col-lg-4 col-login' },
                                    e('div', { className: 'box-login' },
                                        e('div', { className: 'content' },
                                            e('h1', null,
                                                e('span', null, 'POST '),
                                                e('br', null, null),
                                                e('span', null, 'DESIGN')
                                            ),
                                            e('p', null, 'Welcome to Post Design'),
                                            e('form', null,
                                                e('input', { id: 'user', type: 'email', name: 'user', placeholder: 'Email de usuário...' }),
                                                e('input', { id: 'password', type: 'password', name: 'password', placeholder: 'Senha...' }),
                                                e('button', { type: 'button', id: 'login' }, 'LOGIN'),
                                                e('button', { type: 'button', id: 'register' }, 'REGISTER'),
                                                e('p', { className: 'forget-password' }, 'Forgot Password?')
                                            ),
                                            e('img', { src: '/images/load-01.gif', className: 'load' }, null)
                                        )
                                    ),
                                    e('div', { className: 'box-register' },
                                        e('div', { className: 'content' },
                                            e('h1', null, 'REGISTER'),
                                            e('form', null,
                                                e('input', { id: 'data-name', type: 'text', name: 'name', placeholder: 'Seu nome...' }),
                                                e('input', { id: 'data-user', type: 'email', name: 'user', placeholder: 'Email de usuário...' }),
                                                e('input', { id: 'data-password', type: 'password', name: 'password', placeholder: 'Senha...' }),
                                                e('button', { type: 'button', id: 'register-user' }, 'REGISTER'),
                                                e('img', { src: '/images/back.svg', className: 'back-login' })
                                            ),
                                            e('img', { src: '/images/load-01.gif', className: 'load' }, null)
                                        )
                                    ),
                                    e('div', { className: 'box-forget-pass' },
                                        e('div', { className: 'content' },
                                            e('h1', null,
                                                e('span', null, 'Forgot '),
                                                e('br', null, null),
                                                e('span', null, 'Password')
                                            ),
                                            e('form', null,
                                                e('input', { id: 'data-user', type: 'email', name: 'user', placeholder: 'Email de usuário...' }),
                                                e('button', { type: 'button', id: 'reset-password' }, 'RESET'),
                                                e('img', { src: '/images/back.svg', className: 'back-login' })
                                            ),
                                            e('img', { src: '/images/load-01.gif', className: 'load' }, null)
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    )
}

function login() {
    if (localStorage.getItem('user_token')) {
        location.href = '/dashboard'
    } else {
        ReactDOM.render(e(component), document.querySelector('#root'));
        actions()
    }
}

function actions() {
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