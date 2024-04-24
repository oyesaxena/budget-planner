import { createAction, props } from "@ngrx/store";


export const addtocart = createAction('[item] add to cart',props<{item:any}>());
export const removefromcart = createAction('[item] remove from cart',props<{item:any}>());
