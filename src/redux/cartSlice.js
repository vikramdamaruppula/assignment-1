import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
        cartItems:JSON.parse(localStorage.getItem("cart"))?? [],
        totalPrice:0 ,
        searchProduct:"",
        priceFilter:"",
    }

export const CartSlice= createSlice({
    name:"cartReducer",
    initialState,
    reducers:{
        addToCart: (state,action)=>{
            state.cartItems.push(action.payload)
            localStorage.setItem("cart",JSON.stringify(state.cartItems))

            const priceArray = state.cartItems.map((eachObj)=>parseInt(eachObj.price))
            state.totalPrice = priceArray.reduce((curr,acc)=>curr +acc,0)
            
            console.log(state.totalPrice)

        },  
        deleteCart:(state,action)=>{          
            const itemIndex = state.cartItems.findIndex(item=>item.id === action.payload.id)
            if(itemIndex >= 0){
                state.cartItems.splice(itemIndex,1)
            }
            localStorage.setItem("cart",JSON.stringify(state.cartItems))
            
            const priceArray = state.cartItems.map((eachObj)=>parseInt(eachObj.price))
            state.totalPrice = priceArray.reduce((curr,acc)=>curr +acc,0)
        },

        searchItems:(state,action)=>{
            state.searchProduct=action.payload
        },

        filterByPrice:(state,action)=>{ 
            state.priceFilter=action.payload
        },
    }
})


export const {addToCart,deleteCart,searchItems,filterByPrice}  = CartSlice.actions 

export default CartSlice.reducer
