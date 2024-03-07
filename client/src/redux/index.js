import {configureStore, createSlice} from "@reduxjs/toolkit"

const INITIAL_STATE ={
    user: {
        email: "",
    }
}


const userSlice = createSlice({
    name: "user",
    initialState : INITIAL_STATE,
    reducers : {
        reduxLogIn : (state, action) => {
            console.log("This is an action")
            console.log(action)
            state.user.email = action.payload.data.email
            console.log("This is state: ")
            console.log(state.user.email)
        },
        reduxLogOut : (state) => {
            state.user.email = ""
        }
    }
})



const userStore = configureStore({
    reducer :{
        user : userSlice.reducer,
    }
})

export const userAction = userSlice.actions
export default userStore;