import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaCartShopping } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-7 px-4 font-medium bg-black shadow-lg text-neon-green border-b border-white">
      <Link to="/">
        <p className=" text-purple-600 text-2xl font-bold cursor-pointer hover:text-neon-blue transition-colors">
          GAMING SHOP
        </p>
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-neon-green">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 hover:text-neon-blue transition-all"
        >
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-neon-blue hidden group-hover:block" />
        </NavLink>
        <NavLink
          to="/collectionpage"
          className="flex flex-col items-center gap-1 hover:text-neon-blue transition-all"
        >
          <p>CUSTOMIZE</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-neon-blue hidden group-hover:block" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 hover:text-neon-blue transition-all"
        >
          <p>PRODUCTS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-neon-blue hidden group-hover:block" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 hover:text-neon-pink transition-all"
        >
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-neon-pink hidden group-hover:block" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 hover:text-neon-pink transition-all"
        >
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-neon-pink hidden group-hover:block" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6 text-neon-green">
        {/* <img
          onClick={() => {
            setShowSearch(true);
            navigate('/collection');
          }}
          src={assets.search_icon}
          className='w-5 cursor-pointer hover:scale-110 hover:text-neon-pink transition-all'
          alt=''
        /> */}
        <div
          onClick={() => {
            setShowSearch(true);
            navigate("/collection");
          }}
          className="hover:cursor-pointer"
        >
          <IoSearchOutline size={25} color="white" />
        </div>

        <div className="group relative">
          {/* <img
            onClick={() => (token ? null : navigate('/login'))}
            className='w-5 cursor-pointer hover:scale-110 hover:text-neon-pink transition-all'
            src={assets.profile_icon}
            alt=''
          /> */}
          <IoPersonSharp size={25} color="white" />
          {token && (
            <div className="group-hover:block hidden absolute right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-gray-800 text-neon-green rounded shadow-lg">
                <p className="cursor-pointer hover:text-neon-blue">
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-neon-blue"
                >
                  Orders
                </p>
                <p
                  onClick={logout}
                  className="cursor-pointer hover:text-neon-pink"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          {/* <img src={assets.cart_icon} className='w-5 min-w-5 hover:scale-110 transition-all' alt='' /> */}
          <FaCartShopping size={25} color="white" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-gray-700 text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden hover:scale-110 transition-all"
          alt=""
        /> */}
        <div 
        onClick={() => setVisible(true)}
        className="hover:cursor-pointer sm:hidden">
          <IoReorderThreeOutline size={25} color="white" />
        </div>
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`absolute z-20 top-0 right-0 bottom-0 bg-gray-800 text-neon-green transition-all ${
          visible ? "w-full" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-neon-green"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-neon-green"
            to="/collectionpage"
          >
            SHOP
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-neon-green"
            to="/collection"
          >
            PRODUCTS
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-neon-green"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-neon-green"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
