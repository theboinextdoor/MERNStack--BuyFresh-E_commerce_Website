import {useSelector} from "react-redux"
const Cart = () => {
  const productCartItems = useSelector((store) => store.product.cartItems)
  console.log(productCartItems)





  return (
    <div className="p-2 md:p4">
      <h2 className="text-lg ms:text-xl font-bold tetx-slate-600">Your Cart Items</h2>
      <div>
        {/* display card Items */}
        <div className="">

        </div>


        {/* Total cart items */}
        <div className=""></div>
      </div>
      
    </div>
  )
}

export default Cart