import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { fetch_categories } from './redux/category';
import { fetch_products,productsColors,   productsfromlocalFunction } from './redux/product';
import Home from './pages/home/index';
import Category from './pages/category/index';
import Product from './pages/product';
import Cartbar from './components/cartbar';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import SingleProduct from './pages/singleProduct';



function App() {

// fetch all categories from database and set in redux category


  const dispatch = useDispatch();
  const {togglecartbar} = useSelector(state => state.cart);


  useEffect(() => {

    'useeffect is called when component is mounted'
    const fetchCategories = async () => {
      const res = await axios.get('http://localhost:5000/api/category/get-all-category');
      dispatch(fetch_categories(res.data));
      localStorage.setItem('categories', JSON.stringify(res.data));
      
      //save local storage in redux


    }

// fetch allproducts from database and set in redux product

    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:5000/api/product/all-products');

      // save local storage in redux
      localStorage.setItem('products', JSON.stringify(res.data));

dispatch(fetch_products(res.data));
//dispatch(productsfromlocalFunction(JSON.parse(localStorage.getItem('products'))));

    }

    fetchCategories();
    fetchProducts();

setTimeout(() => {
  dispatch(productsColors());
}, 2000);

    

  }, [dispatch]);








  return (
    <div className="App">

      {/*  sabit  */}
   <h1 className='  bg-green-300 text-2xl p-[8px] text-center'>Ecomemrce template</h1>   

   <ToastContainer theme="dark" />
   { togglecartbar && <Cartbar /> }

   <BrowserRouter>
    <Routes>
    
    {/* <Route path="/" element={<App />}> */}
        <Route index element={<Home />} />
      
        <Route path ='category' element = {<Category />} />

<Route path ='product' element = {<Product />} />


{/* //:id is used to get the id of product */}


<Route path ='product/:id' element = {<SingleProduct />} />
        {/* </Route> */}
       
        
 
    </Routes>
  </BrowserRouter>







    </div>
  );
}

export default App;
