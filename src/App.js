import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/home/index';
import Category from './pages/category/index';
import Product from './pages/product';


function App() {
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
