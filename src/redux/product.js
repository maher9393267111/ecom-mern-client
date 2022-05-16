import { createSlice, current } from "@reduxjs/toolkit";
var _ = require('underscore');

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

if (tags && colors)

{
    console.log('tags and colors condition---->',tags,colors);

    const _state = current(state)


    const filterPro =_state.allproducts.filter((product) => {
        return colors.some((color) => {
            return color.includes(product.colors);
        });
    }
    ).filter((product) => {
        return tags.some((tag) => {
            return tag.includes(product.tags);
        });
    }
    );


    console.log('filterPro---->',filterPro);





}





if (colors)

{
    console.log('colors  condition---->',colors);

    const _state = current(state)


//  ⚡⚡⚡


   
const filterPro =_state.allproducts.filter((product) => {
    return colors.some((color) => {
        return color.includes(product.colors);
    });
});

console.log('filterProduct by colors---->',filterPro);

  
    const newState = {
        ..._state,
         filteredproducts: filterPro,
       
        
    };
    
 
    
    return newState;








}



    

if (tags)

{
    console.log('tags  condition---->',tags);

    const _state = current(state)


//  ⚡⚡⚡


   
const filterPro =_state.allproducts.filter((product) => {
    return tags.some((tag) => {
        return tag.includes(product.tags);
    });
});

console.log('filterPro---->',filterPro);

  
    const newState = {
        ..._state,
         filteredproducts: filterPro,
       
        
    };
    
 
    
    return newState;








}


// if tags and colors 



    }
    },

});

// Action creators are generated for each case reducer function
export const { fetch_products, filter_products } =
productSlice.actions;

export default productSlice.reducer;