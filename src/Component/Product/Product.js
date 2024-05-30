import React from "react";
import { Link } from "react-router-dom";
import { useDispatch,  } from 'react-redux';
import { addToWishlist,  } from '../../store/cartSlice';

const Product = ({ product,customclass}) => {

  const dispatch = useDispatch();



  const handleAddToWishlist = () => {
      dispatch(addToWishlist(product));
  };
  return (
    <>
      <div className={`card product-card ${customclass}`}>
        <Link
          to={`/product/${product?.id}`}
          key={product?.id}
          className="text-decoration-none"
        >
          <div className='category'>{product?.category}</div>
          <div className="card-top">
            <div className="productImg-top">
              <img
                src={product.thumbnail}
                className="card-img-top product-cardImage"
                alt="..."
              />
            </div>

            <div>
              {product.isWishlist ? (
                <img
                  src="/images/menubar/wishFill.svg"
                  alt=".."
                  className="wishlist-icon"
                />
              ) : (
                <img
                  src="/images/wishlist-icon.png"
                  alt=".."
                  className="wishlist-icon"
                />
              )}
            </div>
          </div>
        </Link>
        <div className="card-body product-body">
          <p className="card-title item-title">{product.title}</p>

          <p className="item-price pt-0">
            Price: <del>${product.price}</del>
            <span className="new-price ps-2">
            ${product?.discountedPrice.toFixed(2)}
            </span>
          </p>
          <p className="item-price p-0">
            Discount: {product.discountPercentage}%
          </p>
          <button className="btn add-cart" onClick={handleAddToWishlist}>
            {/* <img
              src="/images/bag-2-svgrepo-com.svg"
              alt=".."
              className="bag-icon"
            /> */}
            Add To wishlist
          </button>
        </div>
      </div>

    
    </>
  );
};

export default Product;
