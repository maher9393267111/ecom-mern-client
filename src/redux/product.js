import { createSlice, current } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        allproducts: [],
        filteredproducts: [],
        toggle: false,
        Show: false,
        obje:{},
        dots:''
    },

    reducers: {
        fetch_products: (state, action) => {
            state.allproducts = action.payload;
        },

        filter_products: (state, action) => {
            const { colors, tags,price,category,name,discount } = action.payload;
            console.log('action payload ---->',action.payload);

// check action.payload key and value

if (colors)

{console.log('colors condition ---->',colors);

const filter = state.allproducts.filter((product) => {
    return product.colors.includes(colors);
});


const _state = current(state)

const newState = {
    ..._state,
    filteredproducts: filter,
};

console.log("newState--->", newState);

return newState;

}




    
    




if (tags)

{
    console.log('tags  condition---->',tags);

    const _state = current(state)

    const filter = _state.allproducts.filter((product) => {
      //  return product.name
      return product.name.includes('Penatibus parturient orci morbi');
    });
    
    
    console.log("filter--->", filter);
  
    
    
    const newState = {
        ..._state,
        filteredproducts: filter,
       
        
    };
    
    console.log("newState--->",  _state.filteredproducts);
    
    return newState;








}

    },
    },

});

// Action creators are generated for each case reducer function
export const { fetch_products, filter_products } =
productSlice.actions;

export default productSlice.reducer;