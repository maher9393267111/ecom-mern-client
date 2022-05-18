import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showsinglecartinfo } from "../../redux/cart";

const SingleProduct = () => {
  // get product id from url
  const { id } = useParams();
  console.log("id in single product", id);

  const dispatch = useDispatch();
 
  const  {productsfromlocal}  = useSelector((state) => state.product);
  // find product by id
  
  

  // singlecart info redux
  const { singlecartitem } = useSelector((state) => state.cart);
  //const product =    productsfromlocal.find((product) => product._id === id);
  const productaray  = productsfromlocal.filter((product) => product._id === id);

  const product = productaray[0];

  console.log("product in single product", product);

  // send id to dispatch singlecartinfo

  useEffect(() => {
    
    console.log("id in useEffect to product info", id);
    dispatch(showsinglecartinfo({ id })); // from cart if exist this product in cart
  }, [dispatch, id]);


// --------functions----


const [toggleimage, setToggleimage] = useState(false);


const [imageid, setImageid] = useState('');



// change image on click


const handleimage = (imageidarg) => {

setToggleimage(!toggleimage);
setImageid(imageidarg);


}


  return (
    <div>
      <div>
        <h1>SingleProduct Page{product?.name}</h1>
      </div>

      {/* -product details- */}

      <div>
        {/* --grid- */}
        <div className=" grid sm:grid-cols-6  lg:grid-cols-12">
          {/* -images-- */}

          <div className=" sm:col-span-6  ">
            <div className="container">
              {/* images  small and large image make grid  */}
              <div className=" grid grid-cols-12 ml-[22px] mr-[22px]">
                {/* -small images- */}
                <div className="   bg-yellow-200  col-span-4">
                  <div>
                    {product?.images?.map((image, index) => (
                      <div>
                        <img 
                        onClick={()=>handleimage(image.secure_url)}
                        
                        src={image.secure_url} alt="" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* -small images end- */}

                {/* big images */}
                <div className="  bg-slate-400 col-span-8">


<div className="big-image">


<img
// src = { imageid && imageid ? imageid : product.images[0].secure_url}
//  src=  {product?.images[toggleimage ? 1 : 0]?.secure_url} 

// src ={product.images[0].secure_url}

 
 alt="" />


</div>



                </div>

                {/* -big images end- */}
              </div>
            </div>
          </div>

          {/* -----product details----- */}
          <div className="    sm:col-span-6">data</div>

          {/* -----product details end----- */}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
