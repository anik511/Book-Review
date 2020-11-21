
import Reviews from '../components//views/Reviews';
import Login from '../components/views/Login';
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