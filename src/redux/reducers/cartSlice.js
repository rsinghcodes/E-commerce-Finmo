import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state, { payload }) => {
      const exist = state.cart.find((x) => x.id === payload.id);
      if (exist) {
        state.cart = state.cart.map((x) =>
          x.id === payload.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        state.cart = [...state.cart, { ...payload, qty: 1 }];
      }
    },
    deleteItem: (state, { payload }) => {
      const exist = state.cart.find((x) => x.id === payload.id);
      if (exist.qty === 1) {
        state.cart = state.cart.filter((x) => x.id !== exist.id);
      } else {
        state.cart = state.cart.map((x) =>
          x.id === payload.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    },
    removeItem: (state, { payload }) => {
      const exist = state.cart.find((x) => x.id === payload.id);
      if (exist.qty) {
        state.cart = state.cart.filter((x) => x.id !== exist.id);
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, removeItem, clearCart } = cartSlice.actions;

export const cartSelector = (state) => state.cart;

export default cartSlice.reducer;
