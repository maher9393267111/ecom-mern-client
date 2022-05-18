import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {showsinglecartinfo} from '../../redux/cart';
const SingleProduct = () => {

// get product id from url
const {id} = useParams();

    const dispatch = useDispatch();
    const {  allproducts } = useSelector((state) => state.product);
    // find product by id
    const product = allproducts.find((product) => product._id === id);
    //const {name,price,images,description,category,tags,colors} = product;
    console.log("product",product);

// singlecart info redux
const {   singlecartitem } = useSelector((state) => state.cart);


// send id to dispatch singlecartinfo

useEffect(() => {
    console.log("id in useEffect to product info",id);
    dispatch(showsinglecartinfo({id}));
    }, [dispatch,id]);




    return (



        <div>
            <div>
                <h1>SingleProduct</h1>
                <h1>{id}</h1>
            </div>

{/* -product details- */}

<div>


<div>

<h1>{product?.name}</h1>
</div>


</div>


<h1>
    from cart redux { singlecartitem?.name}
</h1>



        </div>
    );
}

export default SingleProduct;
