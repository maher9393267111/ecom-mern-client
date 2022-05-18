import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
const Cartitems = () => {

const dispatch = useDispatch();
const { togglecartbar,cart,cartlocal } = useSelector((state) => state.cart);
console.log('cartlocal',cartlocal);

    return (
        <div>
            <div>

<div className=' text-center font-bold text-xl'>
<h1>cartItems Component</h1>

</div>

{/* ---cartItems make map--- */}


<div>
<div>


{cart && cart.map((item,index) => {

return (

<div>

{/* --product image- */}


<div className='pro-image'>


{/* <img src={} alt="" /> */}



</div>



</div>


)

}
)}








</div>



</div>





            </div>


        </div>
    );
}

export default Cartitems;
