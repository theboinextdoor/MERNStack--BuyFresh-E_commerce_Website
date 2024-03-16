import { Link } from "react-router-dom";

const HomeCard = ({ image, name, price, category, id, loading }) => {
  return (
    <div className="bg-white shadow-2xl drop-shadow-2xl p-4 rounded-lg cursor-pointer min-w-[150px] ">

      {name ?

        <Link to={`/menu/${id}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>

          <div className="w-40 flex flex-col justify-center items-center">
            <img src={image} className="h-full w-full min-h-[150px]" />
            <h3 className="font-semibold text-slate-600 capitalize text-lg">
              {name}
            </h3>
            <p className="text-slate-500 font-medium">{category}</p>
            <p className="text-red-700 font-medium">₹{price}</p>
          </div>
        </Link>


        :
        (
          <p>{loading}</p>
        )

      }
    </div>
  );
};

export default HomeCard;
