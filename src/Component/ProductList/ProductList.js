import React from 'react';

import Product from "../Product/Product";
const ProductList = ({ products }) => {
  // console.log("products are:", products);

 

  return (
    <div className='product-lists bg-whitesmoke my-3'>
       {
        products.map(product => {
          let discountedPrice = (product.price) - (product.price * (product.discountPercentage / 100));

          return (
            <Product key = {product.id} product = {{...product, discountedPrice}} />
          )
        })
      }
    </div>
  );
};

export default ProductList;