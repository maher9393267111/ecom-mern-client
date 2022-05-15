import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/home/index';
import Category from './pages/category/index';


function App() {
  return (
    <div className="App">
      {/*  sabit  */}
   <h1 className='  bg-green-300'>Ecomemrce template</h1>   

   <BrowserRouter>
    <Routes>
    
    {/* <Route path="/" element={<App />}> */}
        <Route index element={<Home />} />
      
        <Route path ='category' element = {<Category />} />

        {/* </Route> */}
       
        
 
    </Routes>
  </BrowserRouter>







    </div>
  );
}

export default App;
