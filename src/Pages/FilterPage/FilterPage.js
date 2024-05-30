
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getAllProductsByCategory,
//   fetchAsyncProductsOfCategory,
//   getCategoryProductsStatus,
//   getAllCategories,
// } from "../../store/categorySlice";
// import ProductList from "../../Component/ProductList/ProductList";
// import Loader from "../../Component/Loader/Loader";
// import { STATUS } from "../../Utils/status";

// const FilterPage = () => {
//   const dispatch = useDispatch();

//   const [filters, setFilters] = useState({
//     category: "",
//     priceRange: "",
//     discount: "",
//   });

//   const getCategories = useSelector(getAllCategories);
//   const categoryProducts = useSelector(getAllProductsByCategory);
//   const productsStatus = useSelector(getCategoryProductsStatus);
//   const filteredProducts = categoryProducts.filter((product) => {
//     let passesPriceFilter = true;
//     let passesDiscountFilter = true;

//     // Apply price range filter
//     if (filters.priceRange) {
//       const [minPrice, maxPrice] = filters.priceRange
//         .split("-")
//         .map(parseFloat);
//       passesPriceFilter =
//         product.price >= minPrice && product.price <= maxPrice;
//     }

//     // Apply discount filter
//     if (filters.discount) {
//       passesDiscountFilter =
//         product.discountPercentage > parseFloat(filters.discount);
//     }

//     return passesPriceFilter && passesDiscountFilter;
//   });
//   useEffect(() => {
//     // Fetch initial products when component mounts
//     dispatch(fetchAsyncProductsOfCategory(filters.category));
//   }, [dispatch, filters.category, filters.priceRange, filters.discount]);

//   useEffect(() => {
//     // Fetch initial products when component mounts
//     dispatch(fetchAsyncProductsOfCategory(filters.category));
//   }, [dispatch, filters.category]);

//   const handleCategoryChange = (e) => {
//     const selectedCategory = e.target.value;
//     setFilters({
//       category: selectedCategory,
//       priceRange: "", // Reset priceRange to empty string
//       discount: "", // Reset discount to empty string
//     });
//     // setFilters({ ...filters, category: selectedCategory });
//     dispatch(fetchAsyncProductsOfCategory(selectedCategory));
//   };

//   const handlePriceChange = (priceRange) => {
//     setFilters({ ...filters, priceRange });
//   };

//   const handleDiscountChange = (discount) => {
//     setFilters({ ...filters, discount });
//   };
//   const clearFilters = () => {
//     setFilters({
//       ...filters,
//       priceRange: "",
//       discount: "",
//     });
//   };
//   // Define the classname you want to pass to ProductList
//   const productClassName = "custom-product-class"; // Example classname

//   return (
//     <div className="filter-page">
//       <div className="filters">
//         <div className="filter-section">
//           <h3>Category</h3>
//           <select onChange={handleCategoryChange} value={filters.category}>
//             <option value="">Select Category</option>
//             {getCategories.map((category, idx) => (
//               <option key={idx} value={category.replace("-", " ")}>
//                 {category.replace("-", " ")}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="filter-section">
//           <h3>Price Range</h3>
//           <label>
//             <input
//               type="radio"
//               name="priceRange"
//               value="10-20"
//               onChange={() => handlePriceChange("10-20")}
//               checked={filters.priceRange === "10-20"}
//             />
//             $10 - $20
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="priceRange"
//               value="20-50"
//               onChange={() => handlePriceChange("20-50")}
//               checked={filters.priceRange === "20-50"}
//             />
//             $20 - $50
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="priceRange"
//               value="50-99999"
//               onChange={() => handlePriceChange("50-99999")}
//               checked={filters.priceRange === "50-99999"}
//             />
//             $50 - more
//           </label>
//         </div>

//         <div className="filter-section">
//           <h3>Discount</h3>
//           <label>
//             <input
//               type="radio"
//               name="discount"
//               value="10"
//               checked={filters.discount === "10"}
//               onChange={() => handleDiscountChange("10")}
//             />
//             More than 10%
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="discount"
//               value="30"
//               checked={filters.discount === "30"}
//               onChange={() => handleDiscountChange("30")}
//             />
//             More than 30%
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="discount"
//               value="50"
//               checked={filters.discount === "50"}
//               onChange={() => handleDiscountChange("50")}
//             />
//             More than 50%
//           </label>
//         </div>
//         <div className="filter-section">
//           <button onClick={clearFilters}>Clear Filters</button>
//         </div>
//       </div>

//       <div className="products">
//         <div className="cat-products py-5 bg-whitesmoke w-100">
//           <div className="container">
//             <div className="cat-products-content">
//               <div className="title-md">
//                 <h3>
//                   See our{" "}
//                   <span className="text-capitalize">{filters.category}</span>
//                 </h3>
//               </div>
//               {productsStatus === STATUS.LOADING ? (
//                 <Loader />
//               ) : (
//                 <ProductList
//                   products={filteredProducts}
//                   customclassName={productClassName}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterPage;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsByCategory,
  fetchAsyncProductsOfCategory,
  getCategoryProductsStatus,
  getAllCategories,
} from "../../store/categorySlice";
import ProductList from "../../Component/ProductList/ProductList";
import Loader from "../../Component/Loader/Loader";
import { STATUS } from "../../Utils/status";

const FilterPage = () => {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    discount: "",
  });

  const getCategories = useSelector(getAllCategories);
  const categoryProducts = useSelector(getAllProductsByCategory);
  const productsStatus = useSelector(getCategoryProductsStatus);

  const filteredProducts = categoryProducts.filter((product) => {
    let passesPriceFilter = true;
    let passesDiscountFilter = true;

    // Apply price range filter
    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange.split("-").map(parseFloat);
      passesPriceFilter = product.price >= minPrice && product.price <= maxPrice;
    }

    // Apply discount filter
    if (filters.discount) {
      passesDiscountFilter = product.discountPercentage > parseFloat(filters.discount);
    }

    return passesPriceFilter && passesDiscountFilter;
  });

  useEffect(() => {
    if (filters.category) {
      dispatch(fetchAsyncProductsOfCategory(filters.category));
    }
  }, [dispatch, filters.category]);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFilters({
      category: selectedCategory,
      priceRange: "", // Reset priceRange to empty string
      discount: "", // Reset discount to empty string
    });
    dispatch(fetchAsyncProductsOfCategory(selectedCategory));
  };

  const handlePriceChange = (priceRange) => {
    setFilters({ ...filters, priceRange });
  };

  const handleDiscountChange = (discount) => {
    setFilters({ ...filters, discount });
  };

  const clearFilters = () => {
    setFilters({
      ...filters,
      priceRange: "",
      discount: "",
    });
  };

  const productClassName = "custom-product-class"; // Example classname

  return (
    <div className="filter-page">
      <div className="filters">
        <div className="filter-section">
          <h3>Category</h3>
          <select onChange={handleCategoryChange} value={filters.category}>
            <option value="">Select Category</option>
            {getCategories.map((category, idx) => (
              <option key={idx} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-section">
          <h3>Price Range</h3>
          <label>
            <input
              type="radio"
              name="priceRange"
              value="10-20"
              onChange={() => handlePriceChange("10-20")}
              checked={filters.priceRange === "10-20"}
            />
            $10 - $20
          </label>
          <label>
            <input
              type="radio"
              name="priceRange"
              value="20-50"
              onChange={() => handlePriceChange("20-50")}
              checked={filters.priceRange === "20-50"}
            />
            $20 - $50
          </label>
          <label>
            <input
              type="radio"
              name="priceRange"
              value="50-99999"
              onChange={() => handlePriceChange("50-99999")}
              checked={filters.priceRange === "50-99999"}
            />
            $50 - more
          </label>
        </div>

        <div className="filter-section">
          <h3>Discount</h3>
          <label>
            <input
              type="radio"
              name="discount"
              value="10"
              checked={filters.discount === "10"}
              onChange={() => handleDiscountChange("10")}
            />
            More than 10%
          </label>
          <label>
            <input
              type="radio"
              name="discount"
              value="30"
              checked={filters.discount === "30"}
              onChange={() => handleDiscountChange("30")}
            />
            More than 30%
          </label>
          <label>
            <input
              type="radio"
              name="discount"
              value="50"
              checked={filters.discount === "50"}
              onChange={() => handleDiscountChange("50")}
            />
            More than 50%
          </label>
        </div>
        <div className="filter-section">
          <button onClick={clearFilters}>Clear Filters</button>
        </div>
      </div>

      <div className="products">
        <div className="cat-products py-5 bg-whitesmoke w-100">
          <div className="container">
            <div className="cat-products-content">
              <div className="title-md">
                <h3>
                  See our{" "}
                  <span className="text-capitalize">{filters.category}</span>
                </h3>
              </div>
              {productsStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList
                  products={filteredProducts}
                  customclassName={productClassName}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
