const e = React.createElement;

export default class header extends React.Component {
    render() {
        return e('h4',null, this.props.name)
    }
}