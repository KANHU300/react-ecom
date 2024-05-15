import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../Utils/status";
import Axios from "../Utils/AxiosConfig";

const initialState = {
  searchProduct: [],
  searchProductStatus: STATUS.IDLE,
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncSearchProducts.pending, (state, action) => {
      state.searchProductStatus = STATUS.LOADING;
    })
    .addCase( fetchAsyncSearchProducts.fulfilled,(state,action) =>{
        state.searchProduct = action.payload;
        state.searchProductStatus = STATUS.SUCCEEDED; 

    })
    builder.addCase(fetchAsyncSearchProducts.rejected, (state, action) => {
        state.searchProductStatus = STATUS.FAILED;
      })
  },
});

export const fetchAsyncSearchProducts = createAsyncThunk(
  "search-product/fetch",
  async (searchTerm) => {
    try {
      const response = await Axios.get(
        `${process.env.REACT_APP_BASEURL}products/search?q=${searchTerm}`
      );
      const data = response.data.products;
      return data;
    } catch (error) {}
  }
);

export const {setSearchTerm} = searchSlice.actions;
export const getSearchProducts = (state) => state.search.searchProduct;
export const getSearchProductsStatus = (state) => state.search.searchProductStatus;
export default searchSlice.reducer;
