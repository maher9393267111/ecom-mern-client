import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { decreaseQuantity,    increaseQuantity } from "../../redux/cart";
import {HiOutlineMinus} from 'react-icons/hi';
import {HiOutlinePlus} from 'react-icons/hi';
import {FaRegPlusSquare} from 'react-icons/fa';
const Cartitems = () => {
  const dispatch = useDispatch();
  const { togglecartbar, cart, cartlocal, totalprice } = useSelector(
    (state) => state.cart
  );
  //console.log('cartlocal',cartlocal);


  //const {name,price,image,quantity,_id} = cart;


// decrease quantity of product
  const decreaseQuantityfunc = (_id) => {
console.log("_id in component", _id);
    dispatch(decreaseQuantity({_id}));
  }


// increase quantity of product
const increaseQuantityfunc = (_id) => {
  console.log("_id in component", _id);
      dispatch(increaseQuantity({_id}));
    }
  


  console.log("cart", cart);
  return (
    <div>
      <div>
        <div className=" text-center font-bold text-xl">
          <h1>cartItems Component {cart.length}</h1>
        </div>

        {/* ---cartItems make map--- */}

        <div>
          <div>
            {cart.slice(0, 3).map((item, index) => {
              return (
                <div className="mb-[10px]">
                  <div className=" flex justify-around">
                    {/* --image- */}

                    <div className=" w-[100px] h-[100px]">
                      <img
                        className="  object-center w-[100%] h-[100%]"
                        src={item.image}
                        alt="product-image"
                      />
                    </div>

                    {/* ----product-info-- */}

                    <div className="pro-data self-center">
                      <div className="pro-name mb-[10px] text-center w-[255px]">
                        <h1 className="font-bold text-orange-400">
                          {item.name}
                        </h1>
                      </div>

                      <div className="text-center">
                        <h1 className=" bg-slate-400 rounded-lg p-[1px] w-[77px] mx-auto">
                          Price : {item.price}$
                        </h1>
                      </div>

                      <div className=" flex justify-center  gap-4 text-center">
                        <h1
                          onClick={() => decreaseQuantityfunc(item._id)}
                        >
                         <HiOutlineMinus className=" font-bold text-2xl border-2 border-red-400 rounded-2xl p-[2px]"/>
                        </h1>
                        <h1 className="text-center font-bold">
                          Quantity: {item.quantity}
                          
                        </h1>

                        <h1
                        className=" self-center"
                          onClick={() => increaseQuantityfunc(item._id)}
                          >
                          <HiOutlinePlus className=" font-bold text-2xl border-2 border-red-400 rounded-2xl p-[2px]"/>
                          </h1>


                      </div>

                      <div>
                        <h1 className="text-center font-bold">
                          Product Total-Price : {item.total}
                        </h1>
                      </div>
                    </div>

                    {/* --product-info-- */}

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --------all products total price---------- */}

        <div className=" text-center mt-[55px]">


<h1 className="font-bold text-[16px]">

 Products TotalPrices : <span className=" bg-green-300 p-2 rounded-2xl ml-[7px]">
 {totalprice}
     </span> 

</h1>


</div>



      </div>
    </div>
  );
};

export default Cartitems;
