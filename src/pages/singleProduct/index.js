import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
const SingleProduct = () => {

// get product id from url
const {id} = useParams();


    return (



        <div>
            <div>
                <h1>SingleProduct</h1>
                <h1>{id}</h1>
            </div>


        </div>
    );
}

export default SingleProduct;
