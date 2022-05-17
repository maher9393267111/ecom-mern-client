import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { filter_by_price, filter_products, handle_condition } from "../../redux/product";
import { Slider } from "antd";
import {FiX, FiXCircle} from "react-icons/fi";
import ReactTooltip from "react-tooltip";

const SideBar = () => {
  const dispatch = useDispatch();
  // state min price and max price

  // redux store
  const { colors } = useSelector((state) => state.product);

  // catgories from redux store
    const { allcategories,condition } = useSelector((state) => state.category);

  const [price, setPrice] = useState({ min: 0, max: 0 });

  console.log("price---->", price);

  const [category, setCategory] = useState(null);
  const [tags, setTags] = useState([]);

  // when click some color push color to tags array

  const [colorArray, setColorArray] = useState([]);

  const handleColor = (color) => {
    setColorArray([...colorArray, color]);

// if exist an array pull color from tags array

if (colorArray.includes(color)) {

setColorArray(colorArray.filter((item) => item !== color));

}



    console.log("colorArray---->", colorArray);

    if (colorArray.length > 0) {
      console.log("colorArray is not empty---->", colorArray);
    } else {
      console.log("no color in array");
    }
  };


// handle category clicked

const handleCategory = (categoryarg) => {

setCategory(categoryarg);

console.log("category---->", categoryarg);

// if exist make category null


 if (category === categoryarg) {

setCategory(null);

 }




}



  // ---filtere00

  const filterPro = () => {
    if (colorArray.length > 0 && tags.length > 0 && category && price.max !==0) {
      console.log("all condition---->", colorArray, tags, category);

      dispatch(filter_products({ colorArray, tags, category, price }));
      dispatch(handle_condition({ condition: 1 }));
    }

    // only price condition
    else if (
      price.max !==0 &&
      category === null &&
      tags.length === 0 &&
      colorArray.length === 0
    ) {
      console.log("price condition in component---->", price);

      //dispatch(filter_by_price({price})) ----->itis work

        dispatch(filter_products({ price }));
      dispatch(handle_condition({ condition: 2 }));
    }

    // condition to send colors a tags to redux and category to redux when is not null
    else if (colorArray.length > 0 && tags.length > 0 && category && price.max ==0) {
      console.log("all condition---->", colorArray, tags, category);

      dispatch(filter_products({ colors:colorArray, tags, category }));
      dispatch(handle_condition({ condition: 3 }));

    } else if (colorArray.length > 0 && tags.length > 0 && category === null && price.max ==0) {
      console.log("colors and tags condition---->", colorArray, tags);
      dispatch(filter_products({ colors:colorArray, tags }));
      dispatch(handle_condition({ condition: 4 }));
    } else if (colorArray.length > 0 && tags.length === 0 && category && !price && price.max ==0) {
      console.log(" condition colors and category---->", colorArray, category);
      dispatch(filter_products({ colors:colorArray, category }));
      dispatch(handle_condition({ condition: 5 }));
    } 
    
    
    // condition colors and category and price

    else if (colorArray.length > 0 && tags.length === 0 && category  && price.max !==0) {

console.log(" condition category  && colors && price---->", colorArray, category, price);

dispatch(filter_products({ colors:colorArray, category, price }));
dispatch(handle_condition({ condition: 6 }));

    }
    
    
    else if (
        price.max !==0 &&
      colorArray.length > 0 &&
      tags.length === 0 &&
      category === null
    ) {
      console.log(" condition price and colors---->", colorArray);
      dispatch(filter_products({ colors: colorArray, price }));
      dispatch(handle_condition({ condition: 7 }));


    } else if (
      colorArray.length > 0 &&
      tags.length === 0 &&
      category === null
      &&
        price.max ==0
    ) {
      console.log(" condition only colors---->", colors);

      dispatch(filter_products({ colors:colorArray }));
      dispatch(handle_condition({ condition: 8 }));
    } else if (colorArray.length === 0 && tags.length > 0 && category) {
      console.log(" condition  colors and tags and category ---->", tags, category);

      dispatch(filter_products({ tags, category }));
      dispatch(handle_condition({ condition: 9 }));
    } else if (
      colorArray.length === 0 &&
      tags.length > 0 &&
      category === null
        &&
        price.max ==0
    ) {
      console.log(" condition only tags---->", tags);
      dispatch(filter_products({ tags }));
      dispatch(handle_condition({ condition: 10 }));
    } 
    
// category and and price condition

    else if (category && price.max !==0  && colorArray.length === 0 && tags.length === 0) {

        console.log("category and price condition in component---->", category, price);
        
                dispatch(filter_products({ category, price }));
        
        
        }
    
    
    // category and and price  and colors condition

    else if (category && price.max !==0  && colorArray.length > 0 && tags.length === 0) {

        console.log("category and price and colorsss condition in component---->", category, price);


        dispatch(filter_products({ category, price, colorArray }));


    }




    else if (colorArray.length === 0 && tags.length === 0 && category) {
      console.log(" condition category only in component---->", category);
      dispatch(filter_products({ category }));
    }







    //
    //   dispatch(filter_products({ tags : tags.length ? tags : undefined,colors}));
  };

  // -end of filtere00

  //  handle change price range

  function onChange(value) {
    console.log("onChange: ", value);
  }

  function onAfterChange(value) {
    console.log("onAfterChange: ", value);

    setPrice({ ...price, max: value[1], min: value[0] });
    console.log("price---->", price);

    setTimeout(() => {
      // dispatch(filter_by_price({ price }));
      console.log("price filter after slider change---->", price);
    }, 2000);
  }

  return (
    <div>
      <div className=" text-center font-bold text-xl ">
        <h1
          onClick={filterPro}
          className=" w-[150px] mx-auto   bg-blue-300 p-[8px] rounded-lg"
        >
          Filter Products {colorArray.length > 0 ? "hello" : "not hello"}
        </h1>
      </div>

      {/* -------filter by price range---- */}

      <div>
        <div>
          <h1 className="text-center text-[16px] font-bold">
            {" "}
            Filter By price
          </h1>
        </div>
        <div className=" lg:w-[350px] lg:mt-[22px] mb:[22px] sm:w-[400px] sm:mx-auto sm:p-[12px]">
          <Slider
            range
            marks={true}
            min={0}
            max={300}
            step={10}
            defaultValue={[10, 288]}
            onChange={onChange}
            onAfterChange={onAfterChange}
          />
          ;
        </div>
      </div>

      {/* --colors filter--- */}

      <div className="  mx-10">
        <div className="  parent">
          {colors.map((color) => (
            <div className="flex gap-5">
              <h1
                onClick={(e) => {
                  handleColor(color);
                }}
                className=" text-center font-bold text-white w-[55px] p-[15px] rounded-[50%]"
                style={{
                  backgroundColor: color ? color : "",
                  color: color === "beige" ? "black" : "white",
                }}
              >
                 <h1  >
               
                 </h1>
                  
             
           
           
             
              </h1>

            { colorArray.includes(color)  ? (  <h1> <FiX className=" font-bold    self-center  text-2xl"></FiX></h1>) : ('')  }  
            </div>
          ))}



        </div>



      </div>


{/* ------category filter--- */}


<div className="mx-10 pt-[8px] mt-[22px]">

<div>

    <h1 className="font-bold text-xl w-[133px] p-[10px] bg-green-300"> Catgories</h1>
</div>

<div className="h-[300px]  overflow-y-scroll">


{allcategories.map((categorym) => (
    
<div className="text-[17px] mt-[6px] font-bold">

<h1 
onClick={ (e)=>  handleCategory(categorym._id) }
className= {`${category === categorym._id ? '  bg-red-500 text-white w-[140px] text-center' : ''}  `}>{categorym.name}</h1>


</div>


) )}




</div>




</div>






    </div>
  );
};

export default SideBar;
