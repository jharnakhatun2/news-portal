import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import SinglePage from "../pages/SinglePage/SinglePage";
import Upcoming from "../pages/Upcoming/Upcoming";
import FormLayout from "../components/Authentication/Layout/FormLayout";
import LogIn from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";


const router = createBrowserRouter([
    {
        path : '/' ,
        element : <Layout></Layout>,
        children: [
            { path: '/', element: <Home/> },
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