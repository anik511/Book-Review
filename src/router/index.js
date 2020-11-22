
import Reviews from '../views/Reviews';
import Login from '../views/Login';
export const routes = [
    {
        path: '',
        component: Reviews
    },
    {
        path:'/login/:status',
        component: Login
    }
]