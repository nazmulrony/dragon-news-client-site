import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import News from "../pages/News/News";
import Profile from "../pages/Profile/Profile";
import TermsAndCondtion from "../pages/TermsAndCondtion/TermsAndCondtion";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://dragon-news-server-coral-rho.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category />,
                loader: ({ params }) => fetch(`https://dragon-news-server-coral-rho.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-server-coral-rho.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/terms-conditions',
                element: <TermsAndCondtion />
            },
            {
                path: '/profile',
                element: <Profile />
            }
        ]
    }

])
