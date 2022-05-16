import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import ProductCard from '../productCardhome';
const Allproducts = () => {

    const dispatch = useDispatch();
 const {allproducts, filteredproducts  } = useSelector(state => state.product);


    return (
        <div>

<div>

    <h1>All Products</h1>
</div>


<div>


<h1>{allproducts.length}</h1>

{/* -------all products--- */}
<div className='all-pro '>


<div className='grid-cards grid sm:grid-cols-6 lg:grid-cols-12'>


{allproducts.map((product,index) => {


return(




<div className='simgle-card  sm:col-span-3   lg:col-span-4'>

<ProductCard product={product} key={index}/>


</div>


)
}

)}




</div>




</div>

{/* -------all products end--- */}


</div>



            
        </div>
    );
}

export default Allproducts;
