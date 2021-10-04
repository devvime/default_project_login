const e = React.createElement;

const defaultComponent = () => {
    return (
        e('section',{className: 'dashboard'},
            e('div',{className: 'container-fluid'},
                e('div',{className: 'row'},
                    e('div',{className: 'col-md-12', id: 'header'},'')
                )
            ),
            e('div',{id: 'aside'},''),
            e('div',{id: 'content'},'')
        )
    )
}

export default defaultComponent