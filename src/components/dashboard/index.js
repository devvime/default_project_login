import { async } from 'regenerator-runtime'
import Raven from '../../raven/index.js'
import header from './includes/header.js'
import aside from './includes/sidebar.js'
import dashIndex from '../dashIndex/index.js'
import defaultComponent from './includes/default.js'
import authVerify from '../../functions/authVerify.js'

const e = React.createElement;

function dashboard() {
    authVerify().then(result => {
        ReactDOM.render(e(defaultComponent), document.querySelector('#root'));
        $(document).ready(function() {
            ReactDOM.render(e(header, {name: `${result.hello} ${result.data.name}`}, null), document.querySelector('#header'));
            ReactDOM.render(e(aside), document.querySelector('#aside')); 
            ReactDOM.render(e(dashIndex), document.querySelector('#content'));
            AOS.init();
        })
    })
}

export default dashboard