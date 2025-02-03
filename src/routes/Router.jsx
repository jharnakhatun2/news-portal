import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import SinglePage from "../pages/SinglePage/SinglePage";
import Upcoming from "../pages/Upcoming/Upcoming";
import FormLayout from "../components/Authentication/Layout/FormLayout";
import LogIn from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import { lazy, Suspense } from "react";
import Loader from "../util/Loader/Loader";
import AuthProvider from "../components/Authentication/Context/AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";

const Home = lazy(()=> import("../pages/Home/Home"));

const router = createBrowserRouter([
    {
        path : '/' ,
        element : <AuthProvider><Layout></Layout></AuthProvider>,
        children: [
            { path: '/', element: (<Suspense fallback={<Loader/>}><Home/></Suspense>) },
            { path: '/:id', element: <PrivateRoute><SinglePage/></PrivateRoute>},          
            { path: 'world', element: <Upcoming/> },
            { path: 'business', element: <Upcoming/> },
            { path: 'arts', element: <Upcoming/> },
            { path: 'lifestyle', element: <Upcoming/> },
            { path: 'opinion', element: <Upcoming/> },
            { path: 'entertainment', element: <Upcoming/> },
            { path: 'culture', element: <Upcoming/> },
            { path: 'cooking', element: <Upcoming/> },
        ]
    },
    {
        path : '/',
        element: <AuthProvider><FormLayout></FormLayout></AuthProvider>,
        children: [
            { path: 'login', element: <LogIn/> },
            { path: 'register', element: <Register/> },
        ]
    },
    {path: '*', element: <Error/>}
])

export default router;