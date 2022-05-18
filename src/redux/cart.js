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
    totalprice: 0,
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
        newCart.push({ name, quantity, _id, price, total:price,image });
      } else {
        newCart[productIndex].quantity += quantity;
        newCart[productIndex].total = newCart[productIndex].price * newCart[productIndex].quantity;
      }

      state.cart = newCart;
      // sabe in local storage
     localStorage.setItem("cart", JSON.stringify(newCart));

     state.cartlocal = JSON.parse(localStorage.getItem("cart"));
      state.togglecartbar = true;  // open sidebar when click addtocart button


      // calculate total price of cart

      let totalprice = 0;
      state.cart.forEach((product) => {
        totalprice += product.total;
      }
      );
      state.totalprice = totalprice;
      console.log("totalprice---->", totalprice);


    },



// decrease quantity of product

    decreaseQuantity: (state, action) => {

      
      const { _id } = action.payload;
      console.log("_id", _id);
      const newCart = [...state.cart];
      const productIndex = newCart.findIndex(
        (product) => product._id === _id
      );
      if (newCart[productIndex].quantity > 1) {
        newCart[productIndex].quantity -= 1;
        newCart[productIndex].total = newCart[productIndex].price * newCart[productIndex].quantity;
      } else {
        newCart.splice(productIndex, 1);
      }
      state.cart = newCart;
      // save in local storage
      localStorage.setItem("cart", JSON.stringify(newCart));
      state.cartlocal = JSON.parse(localStorage.getItem("cart"));
//calculate total price of cart
      let totalprice = 0;
      state.cart.forEach((product) => {
        totalprice += product.total;

      }
      );
      state.totalprice = totalprice;
      console.log("totalprice---->", totalprice);

    

    },

  

   // increase quantity of product

    increaseQuantity: (state, action) => {

      const { _id } = action.payload;
      console.log("_id", _id);
      const newCart = [...state.cart];
      const productIndex = newCart.findIndex(
        (product) => product._id === _id
      );
      // if (newCart[productIndex].quantity > 1) {
        newCart[productIndex].quantity += 1;
        newCart[productIndex].total = newCart[productIndex].price * newCart[productIndex].quantity;
   
      state.cart = newCart;
      // save in local storage
      localStorage.setItem("cart", JSON.stringify(newCart));
      state.cartlocal = JSON.parse(localStorage.getItem("cart"));
//calculate total price of cart
      let totalprice = 0;
      state.cart.forEach((product) => {
        totalprice += product.total;

      }
      );
      state.totalprice = totalprice;
      console.log("totalprice---->", totalprice);




    },




    //-----------------------------------------------------//

openbar: (state,action) => 

{
 // state.togglecartbar = true;
  state.togglecartbar = !state.togglecartbar;
  console.log("action---->",state.togglecartbar );
},



openfromaddcart: (state,action) =>

{
state.togglecartbar = true
}





  },
});
    
  


// Action creators are generated for each case reducer function
export const { addTo_cart,openbar,openfromaddcart, decreaseQuantity,    increaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
