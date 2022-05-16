import { createSlice,current } from "@reduxjs/toolkit";

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
  console.log("price and category and colors");
  const filteredproducts = state.allproducts.filter(product => {
    return product.category === category && product.price >= price && product.colors.includes(colors);
  }
  );

  state.filteredproducts = filteredproducts;
}

if (price && category) {
  console.log("price and category");
  const filteredproducts = state.allproducts.filter(product => {
    return product.category === category && product.price >= price;
  }
  );

  state.filteredproducts = filteredproducts;
}

if (price && colors) {
  console.log("price and colors");
  const filteredproducts = state.allproducts.filter(product => {
    return product.price >= price && product.colors.includes(colors);
  }
  );

  state.filteredproducts = filteredproducts;
}


if (category && colors) {
  console.log("category and colors");


   const  filteredproducts = state.allproducts.filter(product => {
    return product.category === category && product.colors.includes(colors);
  }

  );

  state.filteredproducts = filteredproducts;
}


if (price) {

  console.log("price");

    const  filteredproducts = state.allproducts.filter(product => {

    return product.price >= price;
  }

  );

  state.filteredproducts = filteredproducts;


}




if (category) {
  console.log("category");


    const  filtered = state.allproducts.filter(product => {

    return product.category === category;

  }

  );


console.log("filteredproducts--->",filtered);

//state.filteredproducts.push(...filteredproducts);
  //state.filteredproducts = filteredproducts;


}


if (colors) {

  console.log("colors");
  console.log("getState current--->",current(state));


  const _state = current(state)


   

    const  filter = state.allproducts.filter(product => {

    return product.colors.includes('black');

  }

  );
  
  const newState = {
    ..._state,
    filteredproducts: filter,
      
    }

    
  console.log("newState--->",newState);

return newState;


     





}








  const filteredproducts = state.allproducts.filter(product => {
   return   product.category === category  && product.price <= price && product.colors.some(color => colors.includes(color));
 }

  );


// use current to get the current state of the store



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
