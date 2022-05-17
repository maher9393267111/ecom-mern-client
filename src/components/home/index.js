import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Pagination } from "antd";
import ReactPaginate from "react-paginate";
import { handlePageChange } from "../../redux/product";

import ProductCard from "../productCardhome";
const Allproducts = () => {
  const dispatch = useDispatch();
  const { allproducts, filteredproducts,filtered,    filterebyText } = useSelector(
    (state) => state.product
  );

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setProducts( filtered ? filteredproducts : allproducts);
      console.log("useeffect--> products", products);
    }, 100);
  }, [allproducts,filteredproducts]);

  const [page, setPage] = useState(0);

  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = filtered ?  3  : 4; // number of products in single page

  // // number of products in current page{well change}  page = 2  productperpage = 4 ---> 2 * 4 = 8
  const pagesVisited = pageNumber * productsPerPage;

  // showing products  by slice from  8 to -----> 8 + 4 = 12     from { 8-12 }

  const displayProducts = products.slice(
    pagesVisited,
    pagesVisited + productsPerPage
  );

  const pageCount = Math.ceil(  filtered ? filteredproducts.length / productsPerPage : allproducts.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className=" pb-[22px] mb-[55px]">
      <div>
        <h1 className=" bg-green-300 p-[8px]  w-[300px] text-center text-xl font-bold mx-auto">

{    filterebyText}
      
        </h1>
        <h1 className="text-center text-2xl font-bold hover:text-red-500 transition-colors duration-300">
          <h2 className="  bg-blue-400">
          {filtered ? 'filtered products':
            'All Products'}
          
           {  filtered ? filteredproducts.length : products.length}
          </h2>
        </h1>
      </div>

      <div>
        {/* -------all products--- */}
        <div className="all-pro ">
          {/* ! toggle && */}
          <div className="grid-cards grid sm:grid-cols-6 lg:grid-cols-12">
            {displayProducts.map((product, index) => {
              return (
                <div className="simgle-card  sm:col-span-3   lg:col-span-4">
                  <ProductCard page={page} product={product} key={index} />
                </div>
              );
            })}
          </div>
        </div>

        {/* -------all products end--- */}

        <div className=" sm:justify-center  mb-[40px]  sm:flex sm:gap-6  ">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />

     
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
