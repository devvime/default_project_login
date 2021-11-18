const component = () => {
    return(
        <section className="login">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="wrapper-login">
                            <div className="row no-gutters">
                                <div className="col-lg-8 col-image">
                                    <img src="/images/background.svg" />
                                </div>
                                <div className="col-lg-4 col-login">
                                    <div className="box-login">
                                        <div className="content">
                                            <h1>POST<br/>DESIGN</h1>
                                            <p>Welcome to Post Design</p>
                                            <form>
                                                <input id="user" type="email" name="user" placeholder="Digite seu e-mail..." required="true" />
                                                <input id="password" type="password" name="password" placeholder="Digite sua senha..." required="true" />
                                                <button type="button" id="login">LOGIN</button>
                                                <button type="button" id="register">REGISTER</button>
                                                <p className="forget-password">Forgot Password?</p>
                                            </form>
                                            <img src="/images/load-01.gif" className="load" />
                                        </div>
                                    </div>
                                    <div className="box-register">
                                        <div className="content">
                                            <h1>REGISTER</h1>
                                            <form>
                                                <input id="data-name" type="text" name="name" placeholder="Digite seu nome..." required="true" />
                                                <input id="data-user" type="email" name="user" placeholder="Digite seu e-mail..." required="true" />
                                                <input id="data-password" type="password" name="password" placeholder="Digite sua senha..." required="true" />
                                                <button type="button" id="register-user">REGISTER</button>
                                                <img src="/images/back.svg" className="back-login" />
                                            </form>                                            
                                            <img src="/images/load-01.gif" className="load" />
                                        </div>
                                    </div>                                 
                                    <div className="box-forget-pass">
                                        <div className="content">
                                            <h1>Forgot<br/> Password</h1>
                                            <form>
                                                <input id="data-forgot-pass" type="email" name="user" placeholder="Digite seu e-mail..." required="true" />
                                                <button type="button" id="reset-password">RESET</button>
                                                <img src="/images/back.svg" className="back-login" />
                                            </form>                                            
                                            <img src="/images/load-01.gif" className="load" />
                                        </div>
                                    </div>                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function login() {
    if (localStorage.getItem('user_token')) {
        location.href = '/dashboard'
    } else {
        ReactDOM.render(React.createElement(component), document.querySelector('#root'));
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