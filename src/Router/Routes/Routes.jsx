import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/main";
import Home from "../../components/Home/Home";
import Faculty from "../../components/Faculty/Faculty";
import Profile from "../../components/Profile/Profile";
import Library from "../../components/Library/Library";
import Login from "../../Security/Login/Login";
import Signin from "../../Security/Sign In/Signin";
const router= createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/faculty",
                element:<Faculty></Faculty>
            },
            {
                path:"/profile",
                element:<Profile></Profile>
            },
            {
                path:"/library",
                element:<Library></Library>
            },
            {
                path:"/signin",
                element:<Signin></Signin>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    },
]);

export default router