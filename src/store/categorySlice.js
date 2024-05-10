import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
// import {STATUS} from "../Utils/status";
import Axios from "../Utils/AxiosConfig"


const initialState = {
    categories: [],
    
  };
const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
        

        .addCase(fetchAsyncCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
           
        })

      
    }
})

export const fetchAsyncCategories = createAsyncThunk(
    "categories/fetch",
    async () => {
      
      try {
        const response = await Axios.get(
          `${process.env.REACT_APP_BASEURL}products/categories`
        );
        
        return response.data;
        
      } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
      }
    }
  );

  export const getAllCategories = (state) => state.category.categories;

  export default categorySlice.reducer;