
import Reviews from '../views/Reviews';
import Login from '../views/Login';
import Registration from '../views/Registration';
import Dashbord from '../views/Dashbord';
import ReviewDetails from '../views/ReviewDetails';
export const routes = [
    {
        path: '',
        component: Reviews
    },
    {
        path:'/login',
        component: Login
    },
    {
        path:'/registration',
        component: Registration
    },
    {
        path:'/dashbord',
        component: Dashbord
    },
    {
        path: '/review/:id',
        component: ReviewDetails
    }
]