import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../Utils/status";
import Axios from "../Utils/AxiosConfig";

const initialState = {
  categories: [],
  categoriesStatus:STATUS.IDLE,
  categoryProducts: [],
  categoryProductsStatus: STATUS.IDLE
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchAsyncCategories.pending, (state, action) => {
        state.categoriesStatus = STATUS.LOADING;
      })
      .addCase(fetchAsyncCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesStatus = STATUS.SUCCEEDED;
      })
      .addCase(fetchAsyncCategories.rejected, (state, action) => {
        state.categoriesStatus = STATUS.FAILED;
      })
      .addCase(fetchAsyncProductsOfCategory.pending,(state,action) =>{

        state.categoryProductsStatus =  STATUS.LOADING;
      })
      .addCase(fetchAsyncProductsOfCategory.fulfilled,(state,action) =>{
        state.categoryProducts = action.payload;

        state.categoryProductsStatus =  STATUS.SUCCEEDED;
      })
      .addCase(fetchAsyncProductsOfCategory.rejected,(state,action)=>{
        state.categoryProductsStatus = STATUS.FAILED;
      })
  }
});

export const fetchAsyncCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    try {
      const response = await Axios.get(
        `${process.env.REACT_APP_BASEURL}products/category-list`
        // `${process.env.REACT_APP_BASEURL}products/categories`
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }
);
export const fetchAsyncProductsOfCategory = createAsyncThunk(
  "category-product/fetch",
  async (category) => {
    try {
      const response = await Axios.get(
        `${process.env.REACT_APP_BASEURL}products/category/${category}`
      );
      const data = response.data.products;
      return data;
    } catch (error) {
      console.error("Error fetching products os categories:", error);
      throw error;

    }
  }
);

export const getAllCategories = (state) => state.category.categories;
export const getAllCategoriesStatus = (state) => state.category.categoriesStatus;
export const getAllProductsByCategory = (state) => state.category.categoryProducts;
export const getCategoryProductsStatus = (state) =>state.category.categoryProductsStatus;

export default categorySlice.reducer;
