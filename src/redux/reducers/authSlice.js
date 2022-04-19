import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const serialisedState = localStorage.getItem('persistantState');
      if (serialisedState === null) {
        return thunkAPI.rejectWithValue('No user found, please register');
      } else {
        const parsedData = JSON.parse(serialisedState);

        if (
          parsedData.email === userData.email &&
          parsedData.password === userData.password
        ) {
          return parsedData;
        } else {
          return thunkAPI.rejectWithValue('Invalid Credentials');
        }
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const serialisedState = JSON.stringify(userData);
      localStorage.setItem('persistantState', serialisedState);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    isAuthenticated: false,
    user: {},
    error: '',
  },
  reducers: {
    logout: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('persistantState');
    },
    setCurrentUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isSuccess = true;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.isAuthenticated = true;
      state.user = payload;
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.error = payload;
    },
    [registerUser.fulfilled]: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
    },
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.error = payload;
    },
  },
});

export const { logout, setCurrentUser } = authSlice.actions;
export const authSelector = (state) => state.auth;

export default authSlice.reducer;
