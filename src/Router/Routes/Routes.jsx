import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/main";
import Home from "../../components/Home/Home";
import Faculty from "../../components/Faculty/Faculty";
import Profile from "../../components/Profile/Profile";
import Library from "../../components/Library/Library";
import Kayum from "../../components/Profile/Kayum/Kayum";
import Sathy from "../../components/Profile/Sathy/Sathy";
import Zim from "../../components/Profile/Zim/Zim";


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
                path:"/kayum",
                element: <Kayum></Kayum>
            },
            {
                path: "/sathy",
                element: <Sathy></Sathy>

            },
            {
                path: "zim",
                element: <Zim></Zim>
            }
           
          
        ]
    },
]);

export default router