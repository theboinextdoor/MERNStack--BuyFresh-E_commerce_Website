import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";

import Home from "./Pages/Home.jsx";
import Menu from "./Pages/Menu.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import LogIn from "./Pages/LogIn.jsx";
import Cart from "./Pages/Cart.jsx";
import NewProducts from "./Pages/NewProducts.jsx";
import SignUp from "./Pages/SignUp.jsx";
import userStore from "./redux/index.js"; //* this is a redux file

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/menu",
      //   element: <Menu />,
      // },
      {
        path: "/menu/:filterby",
        element: <Menu />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/newProducts",
        element: <NewProducts />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={userStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

