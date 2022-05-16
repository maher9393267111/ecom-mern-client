import { createSlice, current } from "@reduxjs/toolkit";
var _ = require("underscore");

export const productSlice = createSlice({
  name: "product",
  initialState: {
    allproducts: [],
    filteredproducts: [],
    toggle: false,
    Show: false,
    obje: {},
    dots: "",
    totalPrice: 0,
    colors: [],
    tags: [],
    prices: [], 
  },

  reducers: {
    fetch_products: (state, action) => {
      state.allproducts = action.payload;
    },

    filter_products: (state, action) => {
      const { colors, tags, price, category, name, discount } = action.payload;
      console.log("action payload ---->", action.payload);

      // check action.payload key and value

      if (tags && colors && category) {
        console.log(
          "tags and colors and caytegory condition---->",
          tags,
          colors
        );

        const _state = current(state);

        const filterPro = _state.allproducts
          .filter((product) => {
            return colors.some((color) => {
              return color.includes(product.colors);
            });
          })
          .filter((product) => {
            return tags.some((tag) => {
              return tag.includes(product.tags);
            });
          })
          .filter((product) => {
            return product.category === category;
          });

        console.log("filterPro---->", filterPro);
      } else if (tags && colors && !category) {
        console.log(
          "tags and colors condition and category is undefined---->",
          tags,
          colors
        );

        const _state = current(state);

        const filterPro = _state.allproducts
          .filter((product) => {
            return colors.some((color) => {
              return color.includes(product.colors);
            });
          })
          .filter((product) => {
            return tags.some((tag) => {
              return tag.includes(product.tags);
            });
          });

        console.log("filterPro---->", filterPro);

        const newState = {
          ..._state,
          filteredproducts: filterPro,
        };
      } else if (colors && !tags && !category) {
        console.log("colors  condition---->", colors);

        const _state = current(state);

        //  ⚡⚡⚡

        const filterPro = _state.allproducts.filter((product) => {
          return colors.some((color) => {
            return color.includes(product.colors);
          });
        });

        console.log("filterProduct by colors---->", filterPro);

        const newState = {
          ..._state,
          filteredproducts: filterPro,
        };

        return newState;
      } else if (colors && category && !tags) {
        console.log("colors and category condition---->", colors, category);

        const _state = current(state);

        const filterPro = _state.allproducts
          .filter((product) => {
            return colors.some((color) => {
              return color.includes(product.colors);
            });
          })
          .filter((product) => {
            return product.category === category;
          });

        console.log("filterPro---->", filterPro);

        const newState = {
          ..._state,
          filteredproducts: filterPro,
        };

        return newState;
      } else if (tags && !colors && !category) {
        console.log("tags  condition---->", tags);

        const _state = current(state);

        //  ⚡⚡⚡

        const filterPro = _state.allproducts.filter((product) => {
          return tags.some((tag) => {
            return tag.includes(product.tags);
          });
        });

        console.log("filterPro---->", filterPro);

        const newState = {
          ..._state,
          filteredproducts: filterPro,
        };

        return newState;
      }

      // if tags and colors

      // colors and category
    },


productsColors: (state, action) => {

const _state = current(state);




// use _underscore to get unique colors from all products

const colors = _.uniq(_state.allproducts.map((product) => {
    return product.colors.map((color) => {
        console.log("color---->", color);
        return color;
    });
    }));


    const tagsArray = _state.allproducts.map((product) => { 
        return product.tags;
    });

    console.log('tagsArray---->',tagsArray);
  

  // concat all arrays in tagsArray and uniq it

    const tags = _.uniq(_.flatten(tagsArray));

  
    

    console.log("tags unique---->", tags);
 

    const newState = {
        ..._state,
        colors: colors,
        tags: tagsArray,
    };

return newState;

},


    products_totalprice: (state, action) => {
      const _state = current(state);

      // return prices from all products

      const totalPrice = _state.allproducts.map((product) => {
        return product.price;
      });
      console.log("totalPrice---->", totalPrice);
      var sum = _.reduce(
        totalPrice,
        function (memo, num) {
          return memo + num;
        },
        0
      );

      console.log("sum---->", sum);

      const newState = {
        ..._state,
        totalPrice: sum,
      };
      return newState;
    },

    filter_by_price: (state, action) => {
      const { price } = action.payload;
      console.log("action payload ---->", price);
      // price is object hav price min and max

      const _state = current(state);

      const filterPro = _state.allproducts.filter((product) => {
        return product.price >= price.min && product.price <= price.max;
      });

      console.log("filterPro---->", filterPro);

      const newState = {
        ..._state,
        filteredproducts: filterPro,
      };

      return newState;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetch_products,
  filter_products,
  filter_by_price,
productsColors,
  products_totalprice,
} = productSlice.actions;

export default productSlice.reducer;
