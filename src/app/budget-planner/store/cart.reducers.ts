import { createReducer, on } from "@ngrx/store";
import { addtocart, removefromcart } from "./cart.actions";

export const initialState={
    cart:[]
};

export const cartReducer=createReducer(initialState,
    on(addtocart,(state:any,{item})=>{
        return {...state,cart:[...state.cart,item]}
    })
)