import { CiForkAndKnife } from "react-icons/ci";

const ProductFilter = ({ category, onClick , isActive}) => {
  return (
    <div className="flex flex-col " onClick={onClick}>
      <div className={`text-3xl p-5 bg-yellow-500 rounded-full cursor-pointer ${isActive ? "bg-yellow-700 text-white" : ""}`}>
        <CiForkAndKnife />
      </div>
      <p className="text-center font-medium my-1 capitalize ">{category}</p>
    </div>
  );
};

export default ProductFilter;
