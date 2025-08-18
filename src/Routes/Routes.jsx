import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Menus from "../Pages/Menus/Menus";


export  const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:'/menus',
          element:<Menus></Menus>
        }
    ]
  },
]);