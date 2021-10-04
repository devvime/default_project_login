const e = React.createElement;

export default class aside extends React.Component {

    componentDidMount() {
        $("#aside").on('mouseover', function() {
            $(this).css('left', '0')
        })
        $("#aside").on('mouseout', function() {
            $(this).css('left', '-200px')
        })
        $("#btn_dashboard").click(function() {
            location.href = '/dashboard'
        })
        $("#btn_profile").click(function() {
            location.href = '/dashboard/profile'
        })
        $("#btn_logout").click(function() {
            localStorage.removeItem('user_token')
            location.reload()
        })
    }

    render() {
        return (
            e('aside', null,
                e('div', { className: 'aside-top' },
                    e('img', { src: '/images/icons/menu_light.svg' }, null)
                ),
                e('div', { className: 'menu' },
                    e('ul', null,
                        e('li', { id: 'btn_dashboard' },
                            e('span', null, 'Dashboard '),
                            e('img', { src: '/images/icons/dashboard_light.svg' })
                        ),
                        e('li', { id: 'btn_logout' },
                            e('span', null, 'Exit'),
                            e('img', { src: '/images/icons/exit_light.svg' })
                        )
                    )
                )
            )
        )
    }
}