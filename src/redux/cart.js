import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    //cart : [{name:'',quantity:0,_id:'',price:0 ,total:0}],
    cart: [],
    cartdata:[],
    open: false,
    toggle: false,
    //quantity : 0,
    namecart: "maher",
    addedMessage: "empty",
    emptyobj: {},
  },

  reducers: {
    addTo_cart: (state, action) => {
    
console.log("action---->", action.payload);


      const { name, quantity, _id, price, total } = action.payload;
      const newCart = [...state.cart];
      const productIndex = newCart.findIndex(
        (product) => product._id === _id
      );
      if (productIndex === -1) {
        newCart.push({ name, quantity, _id, price, total });
      } else {
        newCart[productIndex].quantity += quantity;
      }

      state.cart = newCart;




    }


    //-----------------------------------------------------//

  },
});
    
  


// Action creators are generated for each case reducer function
export const { addTo_cart } = cartSlice.actions;

export default cartSlice.reducer;
