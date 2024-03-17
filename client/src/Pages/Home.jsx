import { MdDirectionsBike } from "react-icons/md";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { useRef } from "react";
import { useSelector } from "react-redux";




import HomeCard from "../Component/HomeCard";
import CardFeatures from "../Component/CardFeatures";
import Loading from "../Component/Loading";
import AllProduct from "../Component/AllProduct";

const Home = () => {
  const productdata = useSelector((store) => store.product.productList);

  const slideProduct = useRef();

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const homeProductCardList = productdata.slice(20, 24)
  const VegetableCardList = productdata.filter((el) => el.category === "vegetable")






  const nextProduct = () => {
    slideProduct.current.scrollLeft += 200;
  };

  const previousProduct = () => {
    slideProduct.current.scrollLeft -= 200;
  };

  const handleOrderNowButton = () => {
    window.scrollTo({top: 450, behavior:"smooth"})

  }
  

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2 p-10">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <MdDirectionsBike className="h-7" />
          </div>
          <h2 className="text-4xl font-bold md:text-7xl py-3 ">
          Freshness Delivered 
            <span className="text-indigo-600"> to Your Doorstep!</span>
          </h2>
          <p className="py-3 text-lg">
            Buyfresh is your ultimate destination for purchasing farm-fresh products conveniently delivered to your doorstep. Our ecommerce platform offers a diverse range of fresh produce, including fruits, vegetables, dairy, meat, and more, sourced directly from local farms and trusted suppliers.

            In a fast-paced world where convenience often overshadows quality, Buyfresh is committed to bringing the freshness of farm-to-table goodness directly to your doorstep. Experience the difference fresh products can make in your life with Buyfresh where quality, taste, and convenience meet
          </p>
          <button onClick={handleOrderNowButton} className="font-bold bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-500  ">
            Order Now
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-10 justify-center ">
          {homeProductCardList.map((el) => (
            <HomeCard
              key={el._id}
              id={el._id}
              image={el.image}
              name={el.name}
              price={el.price}
              category={el.category}
            />
          ))}
          {homeProductCardList.length === 0 &&
            loadingArray.map((_, index) => (
              <HomeCard key={index + "loading"} loading={<Loading />} />
            ))}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-6 px-10">
            Fresh Vegetables
          </h2>
          <div className="text-2xl ml-auto p-2 cursor-pointer active:text-black flex gap-4">
            <button
              onClick={previousProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded active:bg-slate-200 "
            >
              <GrCaretPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded active:bg-slate-200 "
            >
              <GrCaretNext />
            </button>
          </div>
        </div>

        <div
          className="flex gap-5 overflow-scroll scrollbar-none mb-2 p-6 scroll-smooth transition-all"
          ref={slideProduct}
        >
          {VegetableCardList.map((el) => (
            <CardFeatures
              key={el._id }
              id={el._id}
              name={el.name}
              category={el.category}
              price={el.price}
              image={el.image}
            />
          ))}
          {VegetableCardList.length === 0 &&
            loadingArrayFeature.map((_, index) => (
              <CardFeatures loading={<Loading />} key={index + "cartLoading"} />
            ))}
        </div>
      </div>

      <AllProduct heading={"Your Product"} />


    </div>
  );
};

export default Home;
