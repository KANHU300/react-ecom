import {configureStore} from "@reduxjs/toolkit";

import categoryReducer from "../store/categorySlice";
import productReducer from "../store/productSlice";
import cartReducer from "../store/cartSlice";
import searchReducer from "../store/searchSlice";


const store = configureStore({
    reducer: {
        
        category: categoryReducer,
        product: productReducer,
        cart:cartReducer,
        search:searchReducer
      
    }
});

export default store;