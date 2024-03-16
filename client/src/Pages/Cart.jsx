import { useSelector } from "react-redux"
import CartProducts from "../Component/CartProducts"
import emptyCartImage from "../assest/empty.gif"



const Cart = () => {
  const productCartItems = useSelector((store) => store.product.cartItems)
  // console.log(productCartItems)

  const totalPrice = productCartItems.reduce((acc, curr) => acc + parseInt(curr.total), 0)
  const totalQty = productCartItems.reduce((acc, curr) => acc + parseInt(curr.qty), 0)





  return (
    <>

      <div className="p-2 md:p4 ">
        <h2 className="text-lg ms:text-xl font-bold tetx-slate-600">Your Cart Items</h2>


        {  productCartItems[0]  ?
          <div className="my-4 md:flex gap-4">
            {/* display card Items */}
            <div className="w-full max-w-3xl">
              {
                productCartItems.map((el, index) => {
                  return (
                    <CartProducts
                      key={index}
                      id={el.__id}
                      name={el.name}
                      image={el.image}
                      price={el.price}
                      category={el.category}
                      qty={el.qty}
                      total={el.total}

                    />
                  )
                })
              }
            </div>


            {/* Total cart items */}
            <div className="w-full max-w-md  ml-auto ">
              <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
              <div className="flex w-full py-2 text-lg border-b">
                <p >Total Quantity:  </p>
                <p className="ml-auto w-32 font-bold">{totalQty}</p>
              </div>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Price:  </p>
                <p className="ml-auto w-32 font-bold text-red-400">₹{totalPrice}</p>
              </div>
              <button className="bg-red-500 w-full text-lg font-bold py-3 text-white hover:bg-red-600">Payment</button>
            </div>
          </div>

          : 
          <>
             <div className="flex w-full justify-center items-center flex-col">
              <img src={emptyCartImage} className="w-full max-w-sm"/>
              <p className="text-slate-700 text-3xl font-bold p-2">Cart is Empty </p>
             </div>
          </>
        }
      </div>

    </>
  )
}

export default Cart