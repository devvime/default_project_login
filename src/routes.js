import login from './components/login/index.js'
import dashboard from './components/dashboard/index.js'

const routes = [
    //Routes
    {
        path: '/login',
        component: login
    },
    {
        path: '/dashboard',
        component: dashboard
    }
]

export default routes