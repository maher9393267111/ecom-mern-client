import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {filter_products} from '../../redux/product'

const Home = () => {

const [colors, setColorss] = useState(['black','blue','grey']);
const [tags, setTags] = useState(['Cosmetics']);


const dispatch = useDispatch();

// fetch all products from redux store

 const {allproducts, filteredproducts  } = useSelector(state => state.product);


// send colors to redux to filter products

const filterPro = () => {

    // colors:colors
    //tags:tags
    dispatch(filter_products({tags,colors}));


}




    return (
        <div className='container'>
            <div >
                <h1 className='mx-auto w-[230px] p-[12px] rounded-lg text-center bg-yellow-100 '>Home Page</h1>
            </div>


<div>
<h1>
{allproducts.length} All products
</h1>


<h2>
{filteredproducts.length} Filtered products
</h2>



</div>


<div className='btn'>
   
<button
onClick={filterPro}

>
    filter products
</button>


</div>



        </div>
    );
}

export default Home;
