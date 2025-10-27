import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaPaypal, FaShoppingCart, FaUser } from "react-icons/fa";
import { RiReservedLine } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <>
 
      <div className="flex">
        <div className="w-1/3 min-h-screen bg-amber-600">
          <ul className="mt-20 ml-10 space-y-5">
            <li className="">
              <NavLink to="/dashboard/user-home">
                <span className="flex items-center gap-2 text-3xl font-semibold text-white">
                  <FaUser></FaUser> User Home
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/cart">
                <span className="flex items-center gap-2 text-3xl font-semibold text-white">
                  <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/user-reservation">
                <span className="flex items-center gap-2 text-3xl font-semibold text-white">
                  <RiReservedLine></RiReservedLine> User Reservation
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/user-payment">
                <span className="flex items-center gap-2 text-3xl font-semibold text-white">
                  <FaPaypal></FaPaypal> User Payment
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/add-reviews">
                <span className="flex items-center gap-2 text-3xl font-semibold text-white">
                  <MdRateReview></MdRateReview> Add Reviews
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/my-bookings">
                <span className="flex items-center gap-2 text-3xl font-semibold text-white">
                  <TbBrandBooking></TbBrandBooking> My Bookings
                </span>
              </NavLink>
            </li>

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
