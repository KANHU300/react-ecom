import React, {useEffect} from 'react';

import ProductList from "../../Component/ProductList/ProductList";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllProductsByCategory, fetchAsyncProductsOfCategory,getCategoryProductsStatus} from '../../store/categorySlice';
import Loader from '../../Component/Loader/Loader';
import { STATUS } from '../../Utils/status';
const CategoryProduct = () => {
  const dispatch = useDispatch ();
  const {category} = useParams();
  const categoryProducts = useSelector(getAllProductsByCategory);
  // const categoryProductsStatus = useSelector(getCategoryProductsStatus);
  console.log ("cat:",categoryProducts)
  console.log(category);
  useEffect(()=>{
    dispatch(fetchAsyncProductsOfCategory(category));

  },[dispatch,category])
  return (
    <>
     <div className='cat-products py-5 bg-whitesmoke'>
      <div className='container'>
        <div className='cat-products-content'>
          <div className='title-md'>
            <h3>See our <span className='text-capitalize'>{category.replace("-", " ")}</span></h3>
          </div>

          {
            getCategoryProductsStatus === STATUS.LOADING ? <Loader /> : <ProductList products = {categoryProducts} />
          }
        </div>
      </div>
    </div>
    </>
   
  )
}

export default CategoryProduct