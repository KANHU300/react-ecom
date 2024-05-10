import {configureStore} from "@reduxjs/toolkit";

import categoryReducer from "../store/categorySlice";
import productReducer from "../store/productSlice";
import cartReducer from "../store/cartSlice";


const store = configureStore({
    reducer: {
        
        category: categoryReducer,
        product: productReducer,
        cart:cartReducer
      
    }
});

export default store;