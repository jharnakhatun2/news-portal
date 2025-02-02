import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import SinglePage from "../pages/SinglePage/SinglePage";
import Upcoming from "../pages/Upcoming/Upcoming";
import FormLayout from "../components/Authentication/Layout/FormLayout";
import LogIn from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import { lazy, Suspense } from "react";
import Loader from "../util/Loader/Loader";

const Home = lazy(()=> import("../pages/Home/Home"));

const router = createBrowserRouter([
    {
        path : '/' ,
        element : <Layout></Layout>,
        children: [
            { path: '/', element: (<Suspense fallback={<Loader/>}><Home/></Suspense>) },
            { path: '/:id', element: <SinglePage/> },          
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
        element: <FormLayout></FormLayout>,
        children: [
            { path: 'login', element: <LogIn/> },
            { path: 'register', element: <Register/> },
        ]
    }
])

export default router;