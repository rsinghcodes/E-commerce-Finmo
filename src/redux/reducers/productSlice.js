import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (thunkAPI) => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    products: [],
    error: '',
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.products = payload;
    },
    [fetchProducts.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const productSelector = (state) => state.product;

export default productSlice.reducer;
