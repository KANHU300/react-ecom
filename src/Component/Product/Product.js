import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product}) => {
  return (
    <>
      <div className="card product-card">
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
          <button className="btn add-cart">
            <img
              src="/images/bag-2-svgrepo-com.svg"
              alt=".."
              className="bag-icon"
            />
            Add To Cart
          </button>
        </div>
      </div>

      {/* <Link to={`/product/${product.id}`} key={product.id}> */}
      {/* <div class="product-card">
  <div class="product-image">
    <img src = {product?.images[0]} alt = {product.title} />
  </div>
  <div class="product-info">
    <h2 class="product-title">{product.title}</h2>
    <p class="product-description">{product.description}</p>
    <div class="product-details">
      <p class="product-price">
        Price: $<span>{product.price}</span>
      </p>
      <p class="product-discount">
        Discount: {product.discountPercentage}%
      </p>
      <p class="product-rating">
        Rating: {product.rating}
      </p>
      <p class="product-stock">
        Stock: {product.stock}
      </p>
    </div>
    <button class="add-to-cart-btn">Add to Cart</button>
  </div>
</div> */}
      {/* </Link> */}
    </>
  );
};

export default Product;
