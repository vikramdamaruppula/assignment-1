import {configureStore}  from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"
import cartReducer from "./cartSlice"


export const Store =configureStore({
    reducer:{
        counter:counterReducer,
        cartReducer:cartReducer
    }
})