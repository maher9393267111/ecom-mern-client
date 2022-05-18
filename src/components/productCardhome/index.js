import React from "react";
import { useState, useEffect } from "react";
import { addTo_cart,openfromaddcart } from "../../redux/cart";
import { useDispatch,useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { Card } from "antd";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

import { AiOutlineShoppingCart } from "react-icons/ai";

import { BiSearchAlt2 } from "react-icons/bi";
import { FcShare } from "react-icons/fc";
import ReactTooltip from 'react-tooltip'

const { Meta } = Card;

const ProductCard = ({ product,page }) => {
  const {
    colors,
    category,
    tags,
    name,
    price,
    images,
    id,
    oldprice,
    description,
    discount,
    colorimages,
    
  } = product;

// addd to cart redux

const dispatch = useDispatch();



const addToCart = (product) => { 
  
  //dispatch(addTo_cart(product._id))


  let quantity
 const newproduct = Object.assign({},{name:product.name},{_id:product._id} ,{image:product.images[0].secure_url},{price:product.price},{quantity:1});
 console.log("newproduct---->", newproduct);

dispatch(addTo_cart(newproduct))

toast.success(`${product.name} added to cart`);




};  










const { cart,namecart,addedMessage } = useSelector(state => state.cart);



  //const [imageset, setImageset] = useState(images[0].secure_url);
  const [show, setShow] = useState(false);
  const [togglecolorimage, setTogglecolorimage] = useState(false);
  const [index , setIndex] = useState(0);

// ---// category-

const category1 =  product.category.name;

//console.log("category1---->", category1);


useEffect(() => {

    console.log("page is change---->", page);


}, [page]);


  // if color by index clicked change product image to color images by index

  const handleColor = (index) => {

setTogglecolorimage(true);
setIndex(index);

    //setImageset(colorimages[index].secure_url);

    console.log("colorimages[index]---->", colorimages[index].secure_url);
    
  };

  return (
    <div className="wrapper-card p-[2px] m-[8px] mt-[30px]  mb-[30px]">
      <div>
        {/* -image-div--- */}


        <div className="image-div w-[100%] h-[288px]">
          <img
            className="w-[100%] h-[100%] object-content"
            // src={imageset}
             src={  !togglecolorimage ? product.images[0].secure_url  : colorimages[index].secure_url}
            alt=""
          />
        </div>

        {/* -colors- */}

        <div className=" relative w-[100%] h-[40px] ">
          <div className=" flex justify-between  gap-2 border-2 p-[12px] h-[50px] absolute w-[100%]  border-black   top-[-22px]">
            <div className=" align-middle">
              <FcShare className=" text-[31px]" />
            </div>
            <div className="flex gap-2 pr-[30px]">
              {colors &&
                colors.map((color, index) => {
                  return (
                    <div onClick={() => handleColor(index)}>
                      <h1
                        style={{ backgroundColor: color ? color : "" }}
                        className={"p-[13px]  rounded-[50%]"}
                      ></h1>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* // colors  end--- */}

        <div className="info">
          <div className="text-center  font-bold text-[17px] ">
            <h1>{name}</h1>

<h1 className="  mt-[8px] mb-2  bg-blue-300 rounded-md">  {price}</h1>

          </div>


{/* ---category name--- */}


<div>

<h1 className="  bg-cyan-300 text-center p-[8px] font-bold text-md">

   Product-Category : {category1}
{/* 
   <h1    onClick={() => addToCart(product)}>
   {  addedMessage}
   </h1> */}

  


</h1>

</div>



          {/* --tags-- */}

          <div className="tags-container">
            <div className=" flex gap-6 font-bold justify-center text-center">
              {tags &&
                tags.map((tag, index) => {
                  return (
                    <div className="single-tag">
                      <h1 className="font-bold"> {tag}    </h1>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* -------icons--- */}

          <div className=" icons-cont mt-[25px]">
            <div className="  flex gap-5 justify-around">
              <div>
                <AiOutlineHeart className="text-red-600  text-[30px]" />
              </div>

              <div  
           
              data-tip data-for={'admin'}>
                <AiOutlineShoppingCart onClick={() => addToCart(product)}
              
                className="text-red-600  text-[30px]" >  </AiOutlineShoppingCart>
                          <ReactTooltip
                          
                          
                          id="admin" place="top" type="dark" effect="solid">
            Add to Cart
          </ReactTooltip>

              </div>
<Link to={`product/${product._id}`}>

              <div  data-tip data-for={'product-details'}>
         

                <BiSearchAlt2 className="text-red-600  text-[30px]" />

                <ReactTooltip
                          
                          
                          id="product-details" place="top" type="dark" effect="solid">
            Product Details
          </ReactTooltip>
             


              </div>
              </Link>
            </div>
          </div>
        </div>

<div>



</div>


      </div>
    </div>
  );
};

export default ProductCard;
