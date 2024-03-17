import { configureStore, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

const INITIAL_STATE = {
    user: {
        email: "",
    }
}


const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        reduxLogIn: (state, action) => {

            state.user.email = action.payload.data.email

        },
        reduxLogOut: (state) => {
            state.user.email = ""
        }
    }
})


const PRODUCT_INITIAL_STATE = {
    productList: [
        {
            name: "",
            category: "",
            image: "",
            price: "",
            description: ""
        }
    ],
    cartItems: []
}

const productSlice = createSlice({
    name: 'product',
    initialState: PRODUCT_INITIAL_STATE,
    reducers: {
        setDataProduct: (state, action) => {
            state.productList = [...action.payload]
        },
        addCartItems: (state, action) => {

            const existingItem = state.cartItems.some(item => item.__id === action.payload.__id);

            if (existingItem) {
                toast.success("Item already added");
                return state;
            } else {
                toast.success("One Item added successfully");
                const total = action.payload.price;
                const newItem = { ...action.payload, qty: 1, total: total };
                return {
                    ...state,
                    cartItems: [...state.cartItems, newItem]
                };
            }
        },
        deleteCartItems: (state, action) => {
            const itemIdToDelete = action.payload;

            state.cartItems = state.cartItems.filter(item => item.__id !== itemIdToDelete);
            toast.error("One Item is Deleted");
        },

        increaseQty: (state, action) => {
            const index = state.cartItems.findIndex((el) => el.__id === action.payload)
            let qty = state.cartItems[index].qty
            let quantityIncrease = ++qty
            state.cartItems[index].qty = quantityIncrease;


            const price = state.cartItems[index].price
            const totalAmount = price * quantityIncrease

            state.cartItems[index].total = totalAmount
        },
        decreaseQty: (state, action) => {
            const index = state.cartItems.findIndex((el) => el.__id === action.payload)
            let qty = state.cartItems[index].qty
            if (qty > 1) {
                let quantityDecrease = --qty
                state.cartItems[index].qty = quantityDecrease;

                const price = state.cartItems[index].price
                const totalAmount = price * quantityDecrease

                state.cartItems[index].total = totalAmount
            }
        }

    }
})



const userStore = configureStore({
    reducer: {
        user: userSlice.reducer,
        product: productSlice.reducer
    }
})

export const userAction = userSlice.actions
export const productAction = productSlice.actions
export default userStore;