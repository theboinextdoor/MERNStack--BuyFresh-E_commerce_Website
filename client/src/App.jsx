import { useEffect, startTransition } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Component/Header";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "./redux";

const App = () => {
  const BACKEND_URL = import.meta.env.VITE_SERVER_URL;
  const productData = useSelector((store) => store.product);
  // console.log(productData);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/products`);
        console.log(response.data);
        startTransition(() => {
          dispatch(productAction.setDataProduct(response.data));
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function immediately
  }, []);

  return (
    <>
      <Toaster />
      <Header />

      <main className="pt-16 bg-slate-100 min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default App;
