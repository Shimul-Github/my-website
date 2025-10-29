import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaEnvelope, FaList, FaPaypal, FaShoppingCart, FaUser, FaUtensils, FaVoicemail } from "react-icons/fa";
import { RiReservedLine } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
// Todo get isAdmin value form the database
const isAdmin = true;



  return (
    <>
 
      <div className="flex">
        <div className="w-1/3 min-h-screen bg-amber-600">
          <ul className="mt-20 ml-10 space-y-5">
           {
            isAdmin? <>
             <li className="">
              <NavLink to="/dashboard/adminHome">
                <span className="flex items-center gap-2 text-3xl font-semibold text-white">
                  <FaUser></FaUser> Admin Home
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/manageItems">
                <span className="flex items-center gap-2 text-3xl font-semibold text-white">
                  <FaList></FaList> Manage Items
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/addItems">
                <span className="flex items-center gap-2 text-3xl font-semibold text-white">
                  <FaUtensils></FaUtensils> Add Items
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/user-payment">
                <span className="flex items-center gap-2 text-3xl font-semibold text-white">
                  <FaPaypal></FaPaypal> User Payments 
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/manageBookings">
                <span className="flex items-center gap-2 text-3xl font-semibold text-white">
                  <FaBook></FaBook> Manage Boookings
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/allUsers">
                <span className="flex items-center gap-2 text-3xl font-semibold text-white">
                  <FaUser></FaUser> All Users
                </span>
              </NavLink>
            </li>

            </> 
            :
            <>

            </> 

           }
            

            {/* Shared  NAV lINKS */}
            <div className="divider"></div>

            <li className="">
              <NavLink to="/">
                <span className="flex items-center gap-2 text-3xl font-semibold text-white">
                  <TbBrandBooking></TbBrandBooking> Home
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/menus">
                <span className="flex items-center gap-2 text-3xl font-semibold text-white">
                  <TbBrandBooking></TbBrandBooking> Menus
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/order/salad">
                <span className="flex items-center gap-2 text-3xl font-semibold text-white">
                  <TbBrandBooking></TbBrandBooking> Order
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/order/salad">
                <span className="flex items-center gap-2 text-3xl font-semibold text-white">
                  <FaEnvelope></FaEnvelope> Contact
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
