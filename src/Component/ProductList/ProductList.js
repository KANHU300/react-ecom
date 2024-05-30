import React from 'react';

import Product from "../Product/Product";
const ProductList = ({ products, customclassName }) => {

 

  return (
    <div className='product-lists bg-whitesmoke my-3'>
       {
        products.map(product => {
          let discountedPrice = (product.price) - (product.price * (product.discountPercentage / 100));

          return (
            <Product key = {product.id} product = {{...product, discountedPrice}} customclass={customclassName}/>
          )
        })
      }
    </div>
  );
};

export default ProductList;