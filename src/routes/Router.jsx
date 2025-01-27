import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import SinglePage from "../pages/SinglePage/SinglePage";
import LogIn from "../pages/Authentication/Login";


const router = createBrowserRouter([
    {
        path : '/' ,
        element : <Layout></Layout>,
        children: [
            { path: '/', element: <Home/> },
            { path: '/:id', element: <SinglePage/> },
            { path: 'login', element: <LogIn/> }
        ]
    }
])

export default router;