import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Menus from "../Pages/Menus/Menus";
import OrderFood from "../Pages/Order/OrderFood";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Layout/Dashboard/AllUsers";

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
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path: "user-home",
        element: <Cart></Cart>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "user-reservation",
        element: <Home></Home>,
      },
      {
        path: "user-payment",
        element: <Home></Home>,
      },
      {
        path: "add-review",
        element: <Home></Home>,
      },
      {
        path: "my-booking",
        element: <Home></Home>,
      },
      // Admin Routes
      {
        path:'allUsers',
        element:<AllUsers></AllUsers>
      },



    ]
  }
]);
