import { configureStore, createSlice } from "@reduxjs/toolkit"

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
            console.log("This is an action")
            console.log(action)
            state.user.email = action.payload.data.email
            console.log("This is state: ")
            console.log(state.user.email)
        },
        reduxLogOut: (state) => {
            state.user.email = ""
        }
    }
})


const PRODUCT_INITIAL_STATE = {
    productList : [
        {name: "",
        category: "",
        image: "",
        price: "",
        description: ""}
     ],
     cartItems : []
}

const productSlice = createSlice({
    name: 'product',
    initialState: PRODUCT_INITIAL_STATE,
    reducers: {
        setDataProduct: (state, action) => {
            state.productList=  [...action.payload]
        },
        addCartItems : (state, action) => {
            const total = action.payload.price
            state.cartItems = [...state.cartItems , {...action.payload, qty : 1 , total : total }]
            console.log(action)
        },
        deleteCartItems : (state  , action) => {
            console.log(action)
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