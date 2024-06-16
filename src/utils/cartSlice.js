import {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            //mutating state direclty
            state.items.push(action.payload)

        },
        removeFromCart:(state,action)=>{
             state.items.pop(action.payload)
        },
        emptyCart:(state)=>{
            state.items.length=0;
        }
        
    
    }
})
export default cartSlice.reducer;
export const {addToCart,removeFromCart,emptyCart} = cartSlice.actions