import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
allproducts:[],
filteredproducts:[],
toggle:false,
Show:false,


   
  },

  reducers: {
    fetch_products: (state, action) => {
      state.allproducts = action.payload;
    },

filter_products: (state, action) => {
  state.filteredproducts = action.payload;

   const filteredproducts = state.allproducts.filter(product => {
    return product.category === action.payload;
  }
  );

  state.filteredproducts = filteredproducts;

},



// filter products by  array of fields price and category and colors array if exist

filter_multiple_products: (state, action) => {

  const {price,category,colors} = action.payload;
  console.log("actionPayload--->",action.payload.colors.length);


if (price && category && colors) {
  const filteredproducts = state.allproducts.filter(product => {
    return product.category === category && product.price >= price && product.colors.includes(colors);
  }
  );

  state.filteredproducts = filteredproducts;
}

if (price && category) {
  const filteredproducts = state.allproducts.filter(product => {
    return product.category === category && product.price >= price;
  }
  );

  state.filteredproducts = filteredproducts;
}

if (price && colors) {
  const filteredproducts = state.allproducts.filter(product => {
    return product.price >= price && product.colors.includes(colors);
  }
  );

  state.filteredproducts = filteredproducts;
}


if (category && colors) {


   const  filteredproducts = state.allproducts.filter(product => {
    return product.category === category && product.colors.includes(colors);
  }

  );

  state.filteredproducts = filteredproducts;
}


if (price) {


    const  filteredproducts = state.allproducts.filter(product => {

    return product.price >= price;
  }

  );

  state.filteredproducts = filteredproducts;


}




if (category) {


    const  filteredproducts = state.allproducts.filter(product => {

    return product.category === category;

  }

  );

  state.filteredproducts = filteredproducts;


}


if (colors) {



    const  filteredproducts = state.allproducts.filter(product => {

    return product.colors.includes(colors);

  }

  );

  state.filteredproducts = filteredproducts;


}








  const filteredproducts = state.allproducts.filter(product => {
   return   product.category === category  && product.price <= price && product.colors.some(color => colors.includes(color));
 }

  );

  state.filteredproducts = filteredproducts;



},

},


});

// Action creators are generated for each case reducer function
export const {
fetch_products,
filter_multiple_products
  


 
} = productSlice.actions;

export default productSlice.reducer;
