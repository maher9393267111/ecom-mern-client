import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
allproducts:[],

   
  },

  reducers: {
    fetch_products: (state, action) => {
      state.allproducts = action.payload;
    },
},


});

// Action creators are generated for each case reducer function
export const {
fetch_products
  


 
} = productSlice.actions;

export default productSlice.reducer;
