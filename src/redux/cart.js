import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    //cart : [{name:'',quantity:0,_id:'',price:0 ,total:0}],
    cart: [],
    cartlocal:[],
    open: false,
    togglecartbar: false,
    //quantity : 0,
    namecart: "maher",
    addedMessage: "empty",
    emptyobj: {},
  },

  reducers: {
    addTo_cart: (state, action) => {
    
console.log("action---->", action.payload);


      const { name, quantity, _id, price, total,image } = action.payload;
      const newCart = [...state.cart];
      const productIndex = newCart.findIndex(
        (product) => product._id === _id
      );
      if (productIndex === -1) {
        newCart.push({ name, quantity, _id, price, total,image });
      } else {
        newCart[productIndex].quantity += quantity;
      }

      state.cart = newCart;
      // sabe in local storage
     localStorage.setItem("cart", JSON.stringify(newCart));

     state.cartlocal = JSON.parse(localStorage.getItem("cart"));
      state.togglecartbar = !state.togglecartbar;




    },


    //-----------------------------------------------------//

openbar: (state,action) => 

{
 // state.togglecartbar = true;
  state.togglecartbar = !state.togglecartbar;
  console.log("action---->",state.togglecartbar );
}



  },
});
    
  


// Action creators are generated for each case reducer function
export const { addTo_cart,openbar } = cartSlice.actions;

export default cartSlice.reducer;
