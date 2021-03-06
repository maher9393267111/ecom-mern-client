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
import { fetch_products } from './redux/product';
import Home from './pages/home/index';
import Category from './pages/category/index';
import Product from './pages/product';


function App() {

// fetch all categories from database and set in redux category


  const dispatch = useDispatch();


  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get('http://localhost:5000/api/category/get-all-category');
      dispatch(fetch_categories(res.data));

    }

// fetch allproducts from database and set in redux product

    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:5000/api/product/all-products');
dispatch(fetch_products(res.data));

    }

    fetchCategories();
    fetchProducts();

  }, [dispatch]);



  useEffect(() => {
  

// fetch allproducts from database and set in redux product

    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:5000/api/product/all-products');


    }

    
    fetchProducts();

  }, [dispatch]);






  return (
    <div className="App">
      {/*  sabit  */}
   <h1 className='  bg-green-300 text-2xl p-[8px] text-center'>Ecomemrce template</h1>   

   <BrowserRouter>
    <Routes>
    
    {/* <Route path="/" element={<App />}> */}
        <Route index element={<Home />} />
      
        <Route path ='category' element = {<Category />} />

<Route path ='product' element = {<Product />} />

        {/* </Route> */}
       
        
 
    </Routes>
  </BrowserRouter>







    </div>
  );
}

export default App;
