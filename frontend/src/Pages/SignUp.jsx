import { useRef, useState } from "react";
import login_animation from "../assest/login-animation.gif";
import { BiHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirPassword, setShowConfirmPassword] = useState(false);

  const handleShowButton = () => {
    setShowPassword((prev) => !prev);
  };

  const handleConfirmShowButton = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const firstName = useRef();
  const middleName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleSubmitButton = (e) => {
    e.preventDefault();

    console.log(firstName.current.value);
    console.log(middleName.current.value);
    console.log(lastName.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(confirmPassword.current.value);

    if (password.current.value === confirmPassword.current.value) {
      firstName.current.value = "";
      middleName.current.value = "";
      lastName.current.value = "";
      email.current.value = "";
      password.current.value = "";
      confirmPassword.current.value = "";

      alert("Succesfully Signed Up");
    } else {
      alert("Password didn't match");
    }
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex justify-center flex-col items-center p-4 ">
        <div className="w-20 overflow-hidden rounded-full shadow-md drop-shadow-md">
          <img src={login_animation} alt="logoin-animation" />
        </div>

        <div>
          <h1 className="text-2xl mt-2">Sign Up </h1>
        </div>

        <form action="" className="w-full py-3" onSubmit={handleSubmitButton}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            ref={firstName}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded-md  outline-none "
            required
          />

          <label htmlFor="middleName">Middle Name</label>
          <input
            type="text"
            name="middleName"
            id="middleName"
            ref={middleName}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded-md  outline-none "
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            ref={lastName}
            className="mt-1 w-full mb-2 bg-slate-200 px-2 py-1 rounded-md outline-none  "
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={email}
            className="mt-1 w-full mb-2 bg-slate-200 px-2 py-1 rounded-md outline-none "
            required
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200  rounded-md mt-1 mb-2 ">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              ref={password}
              className="w-full  bg-slate-200 outline-none "
              required
            />
            <span
              className="cursor-pointer text-xl flex"
              onClick={handleShowButton}
            >
              {showPassword ? <BiSolidShow /> : <BiHide />}
            </span>
          </div>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="flex px-2 py-1 bg-slate-200  rounded-md mt-1 mb-2 ">
            <input
              type={showConfirPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              ref={confirmPassword}
              className="w-full bg-slate-200 outline-none "
              required
            />
            <span
              className="cursor-pointer text-xl flex"
              onClick={handleConfirmShowButton}
            >
              {showConfirPassword ? <BiSolidShow /> : <BiHide />}
            </span>
          </div>

          <div className="flex justify-center items-center">
            <button className="flex mt-3">
              <a
                href="#_"
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Sign up
                </span>
              </a>
            </button>
          </div>
        </form>

        <p>
          Already have an account?
          <Link to="/login" className="text-blue-300 ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
