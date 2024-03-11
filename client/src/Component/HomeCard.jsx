const HomeCard = ({ image, name, price, category, id, loading }) => {
  return (
    <div className="bg-white shadow-2xl drop-shadow-3xl p-4 rounded cursor-pointer min-w-[150px]">

     { name ? (<div className="w-40 flex flex-col justify-center items-center">
        <img src={image} className="h-full w-full min-h-[150px]" />
        <h3 className="font-semibold text-slate-600 capitalize text-lg">
          {name}
        </h3>
        <p className="text-slate-500 font-medium">{category}</p>
        <p className="text-red-700 font-medium">₹{price}</p>
      </div>) :
       (
        <p>{loading}</p>
       )}
    </div>
  );
};

export default HomeCard;
