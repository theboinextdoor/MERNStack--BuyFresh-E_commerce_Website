import { Suspense } from "react";
import {Outlet} from "react-router-dom"
import Header from "./Component/Header";
import Loading from "./Component/Loading";
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Suspense fallback={<Loading />}>
        <main className="pt-16 bg-slate-100 min-h-screen">
          <Outlet />
        </main>
      </Suspense>
      
    </>
  );
};

export default App;
