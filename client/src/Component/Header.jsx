import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaUserAltSlash } from "react-icons/fa";
import toast from "react-hot-toast";

import { userAction } from "../redux";
import buyfreshlogo from "../assest/buyFreshlogo.png"

const Header = () => {
  const ADMIN_LOGIN_EMAIL_ = import.meta.env.VITE_ADMIN_EMAIl;
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);
  const [showMenu, setShowMenu] = useState(false);

  const handleLoginButton = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogOutButton = () => {
    dispatch(userAction.reduxLogOut());
    toast.error("You have been logged out");
  };

  const castItemNumber = useSelector((state) => state.product.cartItems)

  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* Company Icon  */}
      <div className="flex items-center h-full justify-between">
        <Link to="/">
          <div className="h-16 sm:w-20 ">
            <img src={buyfreshlogo} alt="company-logo" className="h-full " />
          </div>
        </Link>

        {/* Nav Bars */}
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={"/"} className="hover:text-indigo-700 text-black">  Home
            </Link>
            <Link to={"/menu/65eb2fb099556bc82a6c3600"} className="hover:text-indigo-700 text-black">
              Menu
            </Link>
          </nav>

          {/* Login and Cart */}
          <div className="text-xl md:text-2xl text-black cursor-pointer active:text-slate-400 relative">
            <Link to="/cart">
              <FaShoppingCart className="" />
              <div className="text-white bg-red-600 absolute -top-1 -right-1 rounded-full m-0 p-0  text-sm text-center h-4 w-4 ">
                {castItemNumber.length}
              </div>
            </Link>
          </div>
          <div onClick={handleLoginButton}>
            <div className="text-xl md:text-2xl text-black cursor-pointer active:text-slate-400 ">
              {userData.user.email ? <RiUser3Fill /> : <FaUserAltSlash />}
            </div>

            {/* LogOut and New Product pannel */}
            {showMenu && (
              <div className="absolute right-3 top-14 bg-white py-3 px-2 shadow drop-shadow-lg flex flex-col min-w-[120px]">
                {userData.user.email === ADMIN_LOGIN_EMAIL_ && (
                  <Link to={"/newProducts"}>
                    {" "}
                    <p className="px-2 py-1 whitespace-nowrap cursor-pointer hover:text-indigo-800">
                      New Product
                    </p>
                  </Link>
                )}
                <Link
                  to={"/login"}
                  className="whitespace-nowrap cursor-pointer hover:text-indigo-800"
                >
                  {userData.user.email != "" ? (
                    <p onClick={handleLogOutButton} className="px-2 py-1">

                      Logout
                    </p>
                  ) : (
                    <p className="px-2 py-2">LogIn</p>
                  )}
                </Link>
                <nav className="md:hidden gap-4 md:gap-7 text-sm md:text-lg flex flex-col px-2 py-1">
                  <Link to={"/"} className="hover:text-indigo-700 text-black">
                    Home
                  </Link>
                  <Link
                    to={"/menu/65eb2fb099556bc82a6c3600"}
                    className="hover:text-indigo-700 text-black"
                  >
                    Menu
                  </Link>

                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
