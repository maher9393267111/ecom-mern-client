import React from "react";
import Sidebar from "react-sidebar";
import { useDispatch,useSelector } from "react-redux";
import { openbar } from "../../redux/cart";
import { useState } from "react";

const Cartbar  = () => {

    const dispatch = useDispatch();
    const {  togglecartbar } = useSelector(state => state.cart);


const [sidebarOpen, setSidebarOpen] = useState(true);


 const  onSetSidebarOpen = (open)=> {
 
    //setSidebarOpen(open);
    dispatch(openbar());
    console.log("openbar clicked", );
  }

//   render() {
    return (
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={togglecartbar}
        // open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{ sidebar: { background: "white" ,width:'300px'} }}
      >
        <button onClick={ onSetSidebarOpen}>
          Open sidebar
        </button>
      </Sidebar>
    );
//   }
}

export default Cartbar;



// import React from 'react';

// const Index = () => {
//     return (
//         <div>
            
//         </div>
//     );
// }

// export default Index;
