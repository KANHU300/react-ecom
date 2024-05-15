import React from "react";
import { STATUS } from "../../Utils/status";
import {
 
  getSearchProducts,
  getSearchProductsStatus,
} from "../../store/searchSlice";

import {  useSelector } from "react-redux";
import ProductList from "../../Component/ProductList/ProductList";
import Loader from "../../Component/Loader/Loader";

const SearchPage = () => {

  const searchProducts = useSelector(getSearchProducts);
  const searchProductStatus = useSelector(getSearchProductsStatus);

  if (searchProductStatus === STATUS.LOADING) {
    return <Loader />;
  }

  return (
    <>
      <div className="container">
        <div className="title-md" style={{marginTop:"85px"}}>
          <h3> SearchPage data</h3>
        </div>

        <ProductList products={searchProducts} />
      </div>
    </>
  );
};

export default SearchPage;
