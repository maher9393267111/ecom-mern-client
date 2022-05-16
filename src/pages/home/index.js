import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {filter_multiple_products} from '../../redux/product'

const Home = () => {

const [colors, setColors] = useState(['black','blue','green']);


const dispatch = useDispatch();

// fetch all products from redux store

 const {allproducts, filteredproducts  } = useSelector(state => state.product);


// send colors to redux to filter products

const filterProducts = (colors) => {

    dispatch(filter_multiple_products({colors:colors}));


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
    type='submit'
    onClick={() => filterProducts(colors)}
    
    >filter products</button>
</div>



        </div>
    );
}

export default Home;
