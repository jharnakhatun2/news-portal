import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import SinglePage from "../pages/SinglePage/SinglePage";


const router = createBrowserRouter([
    {
        path : '/' ,
        element : <Layout></Layout>,
        children: [
            { path: '/', element: <Home/> },
            { path: '/:id', element: <SinglePage/> },
        ]
    }
])

export default router;