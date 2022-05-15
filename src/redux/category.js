import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
allcategories:[],

   
  },

  reducers: {
    fetch_categories: (state, action) => {
      state.allcategories = action.payload;
    },
},


});

// Action creators are generated for each case reducer function
export const {
fetch_categories
  


 
} = categorySlice.actions;

export default categorySlice.reducer;

