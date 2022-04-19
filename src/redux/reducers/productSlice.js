import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchByCategory',
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  'product/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    isLoading: false,
    products: [],
    product: {},
    error: {},
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
    },
    [fetchProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProducts.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [fetchProductsByCategory.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
    },
    [fetchProductsByCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProductsByCategory.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [fetchProductById.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.product = payload;
    },
    [fetchProductById.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProductById.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const productSelector = (state) => state.product;

export default productSlice.reducer;
