import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { IoLogoTwitter } from "react-icons/io";
import { LuInstagram } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import login_animation from "../assest/login-animation.gif";
import toast from "react-hot-toast";
import axios from "axios";

const LogIn = () => {
  const BACKEND_URL = import.meta.env.VITE_SERVER_URL;
  const naviagte = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const email = useRef();
  const password = useRef();
  const [existEmail , setEmailExist] = useState(true)
  const [notCorrectPassword , setNotCorrectPassword] = useState(true)

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    
    const formData = {
      email: email.current.value,
      password: password.current.value,
    };
    
    try {
      const response = await axios.post(`${BACKEND_URL}/login`, formData);
      console.log(response.data.alert)
      toast.success("Logged in");
      email.current.value = "";
      password.current.value = "";
      naviagte("/")
      
    
    } catch (error) {
      console.error("Login error:", error);
      console.log(error.response.data.message)
      if(error.response.data.message === `Password didn't match`){
        setNotCorrectPassword(false)
        setEmailExist(true)
        
      }else {
        setEmailExist(false)
        setNotCorrectPassword(true)
      }
    }
    console.log(email.current.value);
    console.log(password.current.value);

   
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 p-8">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-lg w-full max-w-md drop-shadow-3xl ">
        {/* Animation logo */}
        <div className="flex justify-center items-center mb-2">
          <div className="w-20 overflow-hidden rounded-full shadow-md drop-shadow-lg flex justify-center items-center">
            <img src={login_animation} alt="logoin-animation" />
          </div>
        </div>

        <div className="font-medium self-center text-lg sm:text-xl uppercase text-gray-800">
          Login To Your Account
        </div>

        {/* for Social Media Log in  */}
        <div className="flex justify-center items-center gap-4 text-xl mt-4 cursor-pointer">
          <BsFacebook />
          <FcGoogle />
          <IoLogoTwitter />
          <LuInstagram />
        </div>

        {/* Log in with userName and Password */}
        <div className="relative mt-10 h-px bg-gray-300">
          <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
            <span className="bg-white px-4 text-xs text-gray-500 uppercase">
              Or Login With Email
            </span>
          </div>
        </div>
        <div className="mt-10">
          <form action="" onSubmit={handleSubmitButton}>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="email"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                E-Mail Address:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>

                <input
                  id="email"
                  type="email"
                  autoComplete="username"
                  name="email"
                  ref={email}
                  required
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="E-Mail Address"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="flex flex-col mb-6">
              <label
                htmlFor="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Password:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                </div>

                <div className="flex ">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    ref={password}
                    required
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  <div
                    className="flex items-center absolute right-4 top-3 text-xl"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <FaEye /> : <GoEyeClosed />}
                  </div>
                </div>
              </div>
              <div className="flex justify-center it">
                {existEmail ? <></>   : <p className="text-red-400 mt-1">Email doesn&apos;t exist</p>}
                {notCorrectPassword ?<></>:  <p className="text-red-400 mt-1">Password did&apos;t match</p>  }
              </div>
            </div>

            <div className="flex w-full">
              <button className="w-full max-w-[150px] m-auto bg-blue-500 hover:bg-blue-600 cursor-pointer text-white tetx-x-4 font-medium text-center py-2 rounded-full mt-4">
                Log In
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center mt-6">
          <Link
            to="/signup"
            className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
          >
            <span>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </span>

            <span className="ml-2">don&apos;t have an account?</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
