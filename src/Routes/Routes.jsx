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
import AddItems from "../Pages/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateItem from "../Layout/Dashboard/UpdateItem";

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
      // Normal User Routes
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
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path:'addItems',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path:'manageItems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path:'updateItem/:id',
        element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader:({params}) =>fetch (`http://localhost:5000/menus/${params.id}`)
      },



    ]
  }
]);
