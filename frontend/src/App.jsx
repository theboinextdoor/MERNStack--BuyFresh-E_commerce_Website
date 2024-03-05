import { Suspense } from "react";
import {Outlet} from "react-router-dom"
import Header from "./Component/Header";
import Loading from "./Component/Loading";

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <main className="pt-16">
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default App;
