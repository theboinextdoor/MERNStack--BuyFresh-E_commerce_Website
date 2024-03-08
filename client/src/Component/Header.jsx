import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";
import { useState } from "react";
import {useSelector ,useDispatch} from "react-redux"
import { FaUserAltSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import logo from "../assest/logo.png";
import { userAction } from "../redux";


const Header = () => {
  const ADMIN_LOGIN_EMAIL_ = import.meta.env.VITE_ADMIN_EMAIl
  console.log(ADMIN_LOGIN_EMAIL_)
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user)
  const [menu, setMenu] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const handleLoginButton = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogOutButton = () => {
    dispatch(userAction.reduxLogOut())
    toast.error("You have been logged out")
  }

  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* Company Icon  */} 
      <div className="flex items-center h-full justify-between">
        <Link to="/">
          <div className="h-10 sm:w-20 ">
            <img src={logo} alt="company-logo" className="h-full " />
          </div>
        </Link>

        {/* Nav Bars */}
        <div className="flex justify-between items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-7 text-sm md:text-lg">
            <Link
              to={"/"}
              onClick={() => {
                setMenu("Home");
              }}
              className="hover:text-indigo-700 text-black"
            >
              Home
              {menu === "Home" ? (
                <hr className="border-2 border-b-indigo-500" />
              ) : (
                <></>
              )}
            </Link>
            <Link
              to={"/menu"}
              onClick={() => {
                setMenu("Menu");
              }}
              className="hover:text-indigo-700 text-black"
            >
              Menu
              {menu === "Menu" ? (
                <hr className="border-2 border-b-indigo-500" />
              ) : (
                <></>
              )}
            </Link>
            <Link
              to={"/about"}
              onClick={() => {
                setMenu("About");
              }}
              className="hover:text-indigo-700 text-black"
            >
              About
              {menu === "About" ? (
                <hr className="border-2 border-b-indigo-500" />
              ) : (
                <></>
              )}
            </Link>
            <Link
              to={"/contact"}
              onClick={() => {
                setMenu("Contact");
              }}
              className="hover:text-indigo-700 text-black"
            >
              Contact
              {menu === "Contact" ? (
                <hr className="border-2 border-b-indigo-500" />
              ) : (
                <></>
              )}
            </Link>
          </nav>

          {/* Login and Cart */}
          <div className="text-xl md:text-2xl text-black cursor-pointer active:text-slate-400 relative">
            <Link to="/cart">
              <FaShoppingCart className="" />
              <div className="text-white bg-red-600 absolute -top-1 -right-1 rounded-full m-0 p-0  text-sm text-center h-4 w-4 ">
                0
              </div>
            </Link>
          </div>
          <div onClick={handleLoginButton}>
            <div className="text-xl md:text-2xl text-black cursor-pointer active:text-slate-400 ">
              {userData.user.email ? <RiUser3Fill /> :     <FaUserAltSlash />}
            
              
            </div>

            {/* LogOut and New Product pannel */}
            {showMenu && (
              <div className="absolute right-3 top-14 bg-white py-3 px-2 shadow drop-shadow-lg flex flex-col">
               {userData.user.email === ADMIN_LOGIN_EMAIL_ && <Link to={"/newProducts"}> <p className="whitespace-nowrap cursor-pointer hover:text-indigo-800">
                  New Product
                </p>
                </Link> }
                <Link to={"/login"} className="whitespace-nowrap cursor-pointer hover:text-indigo-800">
                 {userData.user.email !="" ? <p onClick={handleLogOutButton}> Logout</p> : <p>LogIn</p> }
               
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
