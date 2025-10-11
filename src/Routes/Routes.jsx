import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Menus from "../Pages/Menus/Menus";
import OrderFood from "../Pages/Order/OrderFood";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menus",
        element: <Menus></Menus>,
      },
      {
        path: "/order/:category",
        element: <PrivateRoute><OrderFood></OrderFood></PrivateRoute>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
     
    ],
  },
]);
