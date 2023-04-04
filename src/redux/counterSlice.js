import { createSlice } from "@reduxjs/toolkit";

const initialState={value:0,name:"",show:false}

export const counterSlice =createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value += 1         
        },
        decrement:(state)=>{
            state.value -= 1 
        },
        changeInput:(state,action)=>{
            state.name = action.payload
        },

        changeContent:(state)=>{
            state.show = true
        }


    }
})

export const {increment,decrement,changeInput,changeContent} =counterSlice.actions

export default counterSlice.reducer