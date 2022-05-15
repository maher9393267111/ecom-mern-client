import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category";
import productSlice from "./product";

export default configureStore({
  reducer: {
    category: categorySlice,
    product: productSlice,
   
  },
});