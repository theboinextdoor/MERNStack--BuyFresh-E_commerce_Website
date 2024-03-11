
const CardFeatures = ({ name, category, image, price, description, loading }) => {
  return (
    <div className="w-full min-w-[200px] py-4 px-4 bg-white cursor-pointer drop-shadow-xl hover:shadow-2xl flex flex-col items-center rounded-2xl">
      {image ? (
       <>
        <div className="h-28 flex flex-col justify-center items-center whitespace-nowrap overflow-hidden">
          <img src={image} className="h-full" alt={name} />
        </div>
        <div className="flex flex-col justify-center items-center">
        <h3 className="font-semibold text-slate-600 capitalize text-lg">{name}</h3>
        <p className="text-slate-500 font-medium">{category}</p>
        <p className="text-red-700 font-medium">₹{price}</p>
        <button className="bg-yellow-400 text-black font-semibold px-3 py-2 mt-2 rounded-xl hover:bg-yellow-300 active:bg-yellow-200 drop-shadow-lg">
          Add to Cart
        </button>
      </div>
      </>
      ) : (
        <p>{loading}</p>
      )}
      
    </div>
  );
};

export default CardFeatures;
