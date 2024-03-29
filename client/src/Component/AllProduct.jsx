import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardFeatures from "./CardFeatures";
import ProductFilter from "./ProductFilter";

const AllProduct = ({ heading  }) => {
  const [filterby, setFilterBy] = useState("");

  const productdata = useSelector((store) => store.product.productList);

  const categoryList = [...new Set(productdata.map((el) => el.category))];
  

  const [activeProduct , setActiveProduct] = useState("")
  const [datafilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productdata);
  }, [productdata]);

  const handleFilterProduct = (category) => {
    setFilterBy(category)
    setActiveProduct(category)
    const filter = productdata.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
    
  };
  return (
    <div className="my-5 p-4 ">
      <div className="flex w-full items-center ">
        <h2 className="font-bold text-2xl text-slate-800 mb-6 px-10">
          {heading}
        </h2>
      </div>

      <div className="flex gap-7 justify-center  overflow-scroll scrollbar-none pb-8">
        {categoryList[0] ? 
        categoryList.map((el, index) => (
          <ProductFilter
            key={index}
            category={el}
            isActive={el.toLowerCase() === activeProduct.toLowerCase()}
            onClick={() => handleFilterProduct(el)}
          />
        )): (
          <p className="text-2xl">Loading....</p>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-5 over">
        {datafilter.map((el) => (
          <CardFeatures
            key={el._id+ "vegetables"}
            id={el._id}
            image={el.image}
            name={el.name}
            price={el.price}
            category={el.category}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
