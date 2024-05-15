import React, { useState } from "react";
import {
  addToCart,
  getAllWishlistItems,
  removeFromWishlist,
} from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import "../Cart/cart.css";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(getAllWishlistItems);
  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  const addToCartHandler = (product) => {
    let discountedPrice =
      product.price - product.price * (product.discountPercentage / 100);
    let totalPrice = quantity * discountedPrice;

    dispatch(
      addToCart({
        ...product,
        discountedPrice,
        quantity: 1, // Always add one item on adding to cart from Wishlist
        totalPrice,
      })
    );
    dispatch(removeFromWishlist(product.id));
  };

  if (wishlist.length === 0) {
    return (
      <div className="container my-5">
        <div className="empty-cart flex justify-center align-center flex-column font-manrope">
          <span className="fw-6 fs-15 text-gray">
            Your wishlist cart is empty.
          </span>
          <Link to="/" className="shopping-btn bg-orange text-white fw-5">
            Go shopping Now
          </Link>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div className="title-md">
          <h3>wishlisted items</h3>
        </div>
        <div className="product-lists ">
          {wishlist.map((product, id) => {
            return (
              <div className="card product-card">
                <Link
                  to={`/product/${product?.id}`}
                  key={product?.id}
                  className="text-decoration-none"
                >
                  <div className="category">{product?.category}</div>
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
                  <button
                    className="btn add-cart"
                    onClick={() => addToCartHandler(product)}
                  >
                    {/* <img
              src="/images/bag-2-svgrepo-com.svg"
              alt=".."
              className="bag-icon"
            /> */}
                    Add To bag
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
