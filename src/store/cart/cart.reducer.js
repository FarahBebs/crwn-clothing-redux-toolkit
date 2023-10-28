import { createSlice } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
  },
});

export const { setCartItems } = cartSlice.actions;
export const { setIsCartOpen } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
