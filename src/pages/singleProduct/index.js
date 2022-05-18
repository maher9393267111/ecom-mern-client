import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showsinglecartinfo } from "../../redux/cart";
import { motion } from "framer-motion";
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from 'react-icons/bs';

const SingleProduct = () => {
  // get product id from url
  const { id } = useParams();
  console.log("id in single product", id);

  const dispatch = useDispatch();
 
  const  {productsfromlocal}  = useSelector((state) => state.product);
  // find product by id
  
  

  // singlecart info redux
  const { singlecartitem } = useSelector((state) => state.cart);
 
  const productaray  = productsfromlocal.filter((product) => product._id === id);

  const product = productaray[0];

  const {name,price,images,description,discount,colorimges} = product;

  //console.log("product in single product", product);

  // send id to dispatch singlecartinfo

  useEffect(() => {
    
    console.log("id in useEffect to product info", id);
    dispatch(showsinglecartinfo({ id })); // from cart if exist this product in cart
  }, [dispatch, id]);


// --------functions----


const [toggleimage, setToggleimage] = useState(false);


const [imageid, setImageid] = useState('');


const [imagenumber, setImagenumber] = useState(0);

const [slidetoggle, setSlidetoggle] = useState(false);


// handle product colors images//------------------


const [colorimage, setColorimage] = useState('');
const [togglecolorimage, setTogglecolorimage] = useState(false);
const [smallimagetoggle, setSmallimagetoggle] = useState(false);

const handleColorimage = (colorimage) => {

    setTogglecolorimage(true);
    setSmallimagetoggle(false);
    setSlidetoggle(false);
setColorimage(colorimage);





}



//=---------------------------------------




// change image on click


const handleimage = (imageidarg) => {

setSmallimagetoggle(true);
setSlidetoggle(false);   // slider images stop and execute small images click
setImageid(imageidarg);


}



// pslideimage with arrow

const slideimage = () => {
    console.log("slidetoggle---->", slidetoggle);
 



    setSlidetoggle(true);
    setTogglecolorimage(false);
    setSmallimagetoggle(false);
    

setImagenumber((prev)=> prev + 1);

if (imagenumber === product.images.length-1 ) {

    setImagenumber(0);
    console.log("imagenumber---->", imagenumber);
    
}

console.log("product current image---->", product.images[imagenumber]?.secure_url);


}



  return (
    <div>
      <div>
        <h1>SingleProduct Page{product?.name}</h1>
      </div>

      {imagenumber}
      
{togglecolorimage  && 'color image  must work'}

{!togglecolorimage   && 'color nooot image  must work'}



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
                        
                        src={image.secure_url} alt="" 
                        className={`${imageid === image.secure_url && !slidetoggle  &&  !colorimges ? '  opacity-[0.5]' :''} `}

                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* -small images end- */}

                {/* big images */}
                <div className="  bg-slate-400 col-span-8">


<motion.div

    whileInView={
    {

         x: toggleimage ? [-100,0] : [101,0],


    }
}
   


>

<div className="big-image relative">

<div className=" absolute top-[50%] right-[90%]">
<BsFillArrowLeftCircleFill 

onClick={slideimage}

className="text-white bg-black text-2xl" />
</div>

<div

className=" absolute top-[50%] left-[90%]">
<BsFillArrowRightCircleFill
onClick={slideimage}

className="text-white bg-black text-2xl" />
</div>

<motion.div

    whileInView={
    {

         x: slideimage ? [-100,0] : [101,0],


    }
}
   


>

{/* // when click arrow execute--- */}
 {  slidetoggle &&   !togglecolorimage  && !smallimagetoggle &&

<div>
    

<img src={product.images[imagenumber].secure_url} alt="" 



/> 
</div>
 
}







{/* --------small images ----- */}



{  smallimagetoggle  &&   ! slidetoggle &&   !togglecolorimage  && 

<div>
    

<img src={imageid} alt="" 



/> 
</div>
 
}




{/* -colorinmages- */}



{     togglecolorimage  && !smallimagetoggle  &&   ! slidetoggle    && 

<div>
    

<img src={product.colorimages[colorimage].secure_url } alt="" 



/> 
</div>
 
}


 

{  !smallimagetoggle  &&   ! slidetoggle &&   !togglecolorimage  && 

<div>
    

<img src={product.images[0].secure_url} alt="" 



/> 
</div>
 
}










</motion.div>

   


{/* // when clik small image execute----------------------------------- */}

 



 


</div>




</motion.div>

                </div>

                {/* -big images end- */}
              </div>
            </div>
          </div>

          {/* -----product details----- */}
          <div className=" sm:ml-[35px]  sm:col-span-6">

<div>


<div className=" text-center"   >

    <h1 className="text-2xl  font-bold  bg-cyan-300  w-[300px] mx-auto p-[6px]  rounded-2xl">  Product Info</h1>
</div>



<div>


<div className="mt-[22px]  mb-[23px]">

    <h1 className="text-2xl font-bold ">

        {product?.name}
    </h1>

<h1 className=" text-2xl  w-[300px] pl-[12px] bg-green-300 font-bold p-[7px]">

 Category :  {product?.category.name}
</h1>


<h1 className="  text-orange-500 font-bold text-[33px]     ">

 Price: {product?.price}$


</h1>

<h1>

    <h2 className="font-bold text-xl"> Description:</h2>

<h3 className=" text-center mr-[22px] ml-[22px]">
{product?.desc}
</h3>
    
</h1>




{/* -colors if exist-{product?.desc} */}


<div>


<div>


{product?.colors?.map((color, index) => (
    

<div>

    <h1
    onClick = {()=>handleColorimage(index)}
    
    style={{backgroundColor:color ? color:''}}
    
    className='   w-fit p-[17px]  rounded-[50%]'></h1>

</div>


))}





</div>




</div>







</div>




</div>





</div>




          </div>

          {/* -----product details end----- */}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
