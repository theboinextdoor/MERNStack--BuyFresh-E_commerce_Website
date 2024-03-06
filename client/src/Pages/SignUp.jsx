import { useRef, useState } from "react";
import login_animation from "../assest/login-animation.gif";
import { BiHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const BACKEND_URL = import.meta.env.VITE_SERVER_URL;

  //* ALl the Hooks
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirPassword, setShowConfirmPassword] = useState(false);
  const firstName = useRef();
  const middleName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  //* ALl the Hooks ends here

  //* all the functions starts here
  const handleShowButton = () => {
    setShowPassword((prev) => !prev);
  };

  const handleConfirmShowButton = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    const formData = {
      firstName: firstName.current.value,
      middleName: middleName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
    };

    if (password.current.value === confirmPassword.current.value) {
      try {
        const response = await axios.post(`${BACKEND_URL}/signup`, formData);
        console.log(response.data);

        if (response.status === 400) {
          toast.error("Email already exists");
        } else {
          firstName.current.value = "";
          middleName.current.value = "";
          lastName.current.value = "";
          email.current.value = "";
          password.current.value = "";
          confirmPassword.current.value = "";

          navigate("/login");
          toast.success(response.data.message);
        }


      } catch (error) {
        toast.error("Email already exists");
        console.error("Error signing up:", error);
      }
    } else {
      toast.error("Password didn't match");
    }
  };
  //* all the functions ends here

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex justify-center flex-col items-center p-4 ">
        <div className="w-24 overflow-hidden rounded-full shadow-md drop-shadow-md relative">
          <img src={login_animation} alt="logoin-animation" />
        </div>

        <div>
          <h1 className="text-2xl mt-2">Sign Up </h1>
        </div>

        <form
          action=""
          className="w-full py-3 flex flex-col "
          onSubmit={handleSubmitButton}
        >
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
            autoComplete="username"
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
              autoComplete="new-password"
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
              autoComplete="new-password"
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

          <button className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white tetx-x-4 font-medium text-center py-1 rounded-full mt-4">
            Sign Up
          </button>
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