import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import SinglePage from "../pages/SinglePage/SinglePage";
import LogIn from "../pages/Authentication/Login";
import Upcoming from "../pages/Upcoming/Upcoming";


const router = createBrowserRouter([
    {
        path : '/' ,
        element : <Layout></Layout>,
        children: [
            { path: '/', element: <Home/> },
            { path: '/:id', element: <SinglePage/> },
            { path: 'login', element: <LogIn/> },
            { path: 'world', element: <Upcoming/> },
            { path: 'business', element: <Upcoming/> },
            { path: 'arts', element: <Upcoming/> },
            { path: 'lifestyle', element: <Upcoming/> },
            { path: 'opinion', element: <Upcoming/> },
            { path: 'entertainment', element: <Upcoming/> },
            { path: 'culture', element: <Upcoming/> },
            { path: 'cooking', element: <Upcoming/> },
        ]
    }
])

export default router;