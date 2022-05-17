import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category";
import productSlice from "./product";
import cartSlice from "./cart";

export default configureStore({
  reducer: {
    category: categorySlice,
    product: productSlice,
    cart: cartSlice,
   

  },
});