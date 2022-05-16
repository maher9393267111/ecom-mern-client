import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {filter_products,filter_by_price} from '../../redux/product'

const Home = () => {

const [colors, setColorss] = useState(['black','blue','grey']);
const [tags, setTags] = useState([]);
const [category, setCategory] = useState('628115bca43615d16337dc29');

// range price

const [price, setPrice] = useState({
    min: 0,
    max: 200
});
// handle change price

const handlePrice = (e) => {
    const value = e.target.value;
    setPrice({
        ...price,
        [e.target.name]: value
    });
    console.log("price---->", price);

    // convert string to number
    const min = parseInt(price.min);
    console.log("min---->", min);
    dispatch(filter_by_price({price}));
};


const [name, setName] = useState('');



const dispatch = useDispatch();

// fetch all products from redux store

 const {allproducts, filteredproducts  } = useSelector(state => state.product);


// send colors to redux to filter products

const filterPro = () => {

   
// condition to send colors a tags to redux and category to redux when is not null

if (colors.length > 0 && tags.length > 0 && category) {
    console.log('all condition---->', colors, tags, category);

    dispatch(filter_products({colors, tags, category}))

}


else if (colors.length > 0 && tags.length > 0 && category === null) {

    console.log('colors and tags condition---->', colors, tags);
    dispatch(filter_products({colors, tags}))

}



else if (colors.length > 0 && tags.length === 0 && category) {


    console.log(' condition---->', colors,category);
    dispatch(filter_products({colors, category}))

}


else if (colors.length > 0 && tags.length === 0 && category === null) {
console.log(' condition---->', colors);

    dispatch(filter_products({colors}))

}

else if (colors.length === 0 && tags.length > 0 && category) {
console.log(' condition---->', tags, category);

    dispatch(filter_products({tags, category}))

}

else if (colors.length === 0 && tags.length > 0 && category === null) {

    console.log(' condition---->', tags);
    dispatch(filter_products({tags}))

}

else if (colors.length === 0 && tags.length === 0 && category) {

    console.log(' condition---->', category);
    dispatch(filter_products({category}))

}



//
 //   dispatch(filter_products({ tags : tags.length ? tags : undefined,colors}));


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

  <div>


<div>

{/* --max price-- */}

<input type="number" name='max' value={price.max}  onChange ={handlePrice} />



<input type="number" name='min' value={price.min}  onChange ={handlePrice} />

</div>


  </div>





        </div>
    );
}

export default Home;
