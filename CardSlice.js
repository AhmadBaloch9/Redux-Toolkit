 import { createSlice } from '@reduxjs/toolkit'
import ProductData from '../ProductData'


 const initialState={

    cart:[],
    items:ProductData,
    totalQuantity: 0,
    totalPrice: 0
 }
  const CardSlice=createSlice({
    name:`cart`,
    initialState,
   reducer:{
          addToCart:(state,action) =>  {
              const find=state.cart.findIndex((item)=>item.id === action.payload.id);
              if(find>=0){
                state.cart[find].quantity +=1
              }
              else{
                state.cart.push(action.payload)
              }

      },
      getCartTotal:(state) => {
           const {totalQuantity,totalPrice}=state.cart.reduce((cartTotal,cartItem)=>{
                  const {price,quantity}=cartItem;
                  const itemTotal=quantity*price;
                  cartTotal.totalPrice +=itemTotal;
                  cartTotal.totalQuantity +=quantity;
                  return cartTotal;

           },
           {
            totalPrice:0,
            totalQuantity:0
           }
           )
            state.totalPrice=parseInt(totalPrice.toFixed(2));
            state.totalQuantity=totalQuantity; 
      },
      removeItem:(state, action)=>{
          state.cart=state.cart.filter((item)=>item.id!==action.payload.id)
      },
      increaseItemQuantity:(state,action)=>{
           state.cart=state.cart.map((item)=>{
                   if(item.id===action.payload){
                               return {...item, quantity: item.quantity+1};
                   }
                   return item;
           })
      },
      decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
    
   }
 })

 export const {
  addToCart,
   getCartTotal,
   removeItem,
   increaseItemQuantity,
   decreaseItemQuantity
  }
  =CardSlice.actions;


 export default CardSlice.reducer;