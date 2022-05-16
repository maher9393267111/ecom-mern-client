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


// push all products tags to array ⚡⚡⚡


    const tagsArray = _state.allproducts.map((product) => { 
        return product.tags;
    });

    console.log('tagsArray---->',tagsArray);

    
  
    const filterpayloadtags = tags.filter((tag) => {
        return tagsArray.some((item) => {
            return item.includes(tag);
        });
    });

    //------------------------------------------------------
const filterPro =_state.allproducts.filter((product) => {
    return tags.some((tag) => {
        return tag.includes(product.tags);
    });
});

console.log('filterPro---->',filterPro);



//------------------------------------------------------


   // console.log('filterpayloadtags---->',filterpayloadtags);

    
     //console.log(_.intersection(tagsArray, tags));





  
    // const filter = _state.allproducts.filter((product) => {
    //     return product.tags.includes(tags);
    // });

 
    
    
    
  
    
    
    const newState = {
        ..._state,
        // filteredproducts: filter,
       
        
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