import { createSlice,current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
//cart : [{name:'',quantity:0,_id:'',price:0 ,total:0}],
cart : [],
open : false,
toggle : false,
//quantity : 0,
namecart:'maher',
addedMessage:'empty',


   
  },

  reducers: {
    addTo_cart: (state, action) => {


      const _state= current(state);

console.log("action---->", action.payload);

const emptyarray = [];
const newarray = [...emptyarray, action.payload];
console.log("newarray---->", newarray);
const change =  Object.assign({}, state, {cart: newarray});
console.log("change---->", change);


//   const change2 =    state.cart([...state.cart, newarray]);
// console.log("cart data---->", state.cart);



const newState = {
  ..._state,
 cart: change,
  addedMessage: 'Product added to cart',
}

      return newState;


    },
},


});

// Action creators are generated for each case reducer function
export const {
addTo_cart
  


 
} = cartSlice.actions;

export default cartSlice.reducer;

