import {  createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {STATUS} from "../Utils/status";
import Axios from "../Utils/AxiosConfig";

const initialState = {
products:[],
productsStatus: STATUS.IDLE,
productSingle:[],
productSingleStatus:STATUS.IDLE
};

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(fetchAsyncProducts.pending,(state,action)=>{
            state.productsStatus = STATUS.LOADING;
        })
        .addCase(fetchAsyncProducts.fulfilled,(state,action)=>{
            state.products = action.payload
            state.productsStatus = STATUS.SUCCEEDED;
        })
        .addCase(fetchAsyncProducts.rejected,(state,action)=>{
            
            state.productsStatus = STATUS.FAILED;
        })
        .addCase(fetchAsyncProductSingle.pending,(state,action)=>{
            state.productSingleStatus = STATUS.LOADING;
        })
        .addCase(fetchAsyncProductSingle.fulfilled,(state,action)=>{
            state.productSingle = action.payload
            state.productSingleStatus = STATUS.SUCCEEDED;
        })
        .addCase(fetchAsyncProductSingle.rejected,(state,action)=>{
            
            state.productSingleStatus = STATUS.FAILED;
        })
    }

})

// for getting the products list with limited numbers
export const fetchAsyncProducts = createAsyncThunk ('products/fetch',async(limit)=>{
    try {
        const response = await Axios.get(`${process.env.REACT_APP_BASEURL}products?limit=${limit}`);
        const data = response.data.products;
        return data;

        
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
        
    }
});
// getting the single product data also
export const fetchAsyncProductSingle = createAsyncThunk('product-single/fetch',async(id)=>{
    try {
        const response = await Axios.get(`${process.env.REACT_APP_BASEURL}products/${id}`);
    const data = response.data;
    return data;

        
    } catch (error) {
        console.error("Error fetching single products:", error);
        throw error;
        
    }
    

});


export const getAllProducts = (state) => state.product.products;
export const getAllProductsStatus = (state) => state.product.productsStatus;
export const getProductSingle = (state) => state.product.productSingle;
export const getSingleProductStatus = (state) => state.product.productSingleStatus;

export default productSlice.reducer;