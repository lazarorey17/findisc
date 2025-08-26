import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RegisterForm from "../pages/register/register";
import LoginForm from "../pages/login/login";
import Dashboard from "../pages/dashboard/dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard/>
    },
    {
        path: '/register',
        element: <RegisterForm/>
    },
    {
        path: '/login/',
        element: <LoginForm/>
    }
]);

const MyRoute = () => <RouterProvider router={router}/>;

export default MyRoute;