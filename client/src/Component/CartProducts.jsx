import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import {useDispatch } from "react-redux"
import { productAction } from "../redux";


const CartProducts = ({ id, name, price, qty, total, category, image }) => {
    const dispatch = useDispatch()
    // const deleteItem = useSelector((state) => state.product.cartItems)
    const handleDeleteButton = () => {
        dispatch(productAction.deleteCartItems(id))
    }


    return (
        <div className="bg-slate-200 p-2 m-4 flex gap-4 rounded border border-slate-300">
            <div className="bg-white p-3 rounded-sm overflow-hidden">
                <img src={image} className="h-full w-40 object-cover " />
            </div>
            <div className="flex flex-col gap-1 p-2 w-full">
                <div className="flex justify-between">
                <h3 className="font-semibold text-slate-600  capitalize text-lg md:text-xl">
                    {name}
                </h3>
                <div onClick={handleDeleteButton}  className="cursor-pointer text-xl hover:text-red-400">
                <MdDelete />
                </div>
                </div>
                <p className=" text-slate-500  font-medium ">{category}</p>
                <p className=" font-bold text-base">
                    <span className="text-red-500 ">₹</span>
                    <span>{price}</span>
                </p>
                <div className="flex justify-between w-full ">
                    <div className="flex gap-3 items-center">
                        <button className="bg-slate-500 p-2 m-2 rounded hover:bg-slate-600  text-white " onClick={() => dispatch(productAction.increaseQty(id))}><FaPlus /></button>
                        <p className="font-semibold"> {qty}</p>
                        <button className="bg-slate-500 p-2 m-2 rounded hover:bg-slate-600  text-white " onClick={() => dispatch(productAction.decreaseQty(id))}><FiMinus /></button>
                    </div>
                    <div className="flex-col md:flex-row items-center gap-2 font-bold">
                        <p className="text-slate-500">Total : </p>
                        <p className="text-red-400">₹{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProducts