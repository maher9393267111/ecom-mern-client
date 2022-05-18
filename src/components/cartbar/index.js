import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { openbar } from "../../redux/cart";
import { motion, useMotionValue } from "framer-motion";
import Cartitems from "./cartitems";
const Bar = () => {
  const dispatch = useDispatch();
  //handle close bar

  //redux state
  const { togglecartbar,cart } = useSelector((state) => state.cart);

  const closebar = () => {
    dispatch(openbar());
  };



  // if (!togglecartbar) {

  // return

  // }

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      with: "400px",

      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={showAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <div className=" fixed top-0 bottom-0 left-0 w-[366px] bg-white  z-10 ">
        <div>
          <div className=" flex  justify-between p-[20px]">
            <h1 className=" font-bold text-xl">Cartbar </h1>
            <h1 onClick={closebar} className="  self-center text-[28px]">
              <IoCloseCircleOutline />
            </h1>
          </div>
        </div>

{/* ------cartitems------ */}
<div>

    <Cartitems />





</div>


      </div>
    </motion.div>
  );
};

export default Bar;
