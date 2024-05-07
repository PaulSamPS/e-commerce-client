import { createSlice } from "@reduxjs/toolkit";
import { CartSchema } from "@/shared/config/store";
import { addToCartApi } from "../api/api-add-to-cart";
import { getCartApi } from "../api/api-get-cart";

const initialState: CartSchema = {
  cart: null,
  loading: true,
  error: undefined,
};

export const cartStore = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartApi.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(addToCartApi.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.cart = action.payload;
      })
      .addCase(addToCartApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCartApi.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(getCartApi.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.cart = action.payload;
      })
      .addCase(getCartApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: cartActions, reducer: cartReducer } = cartStore;
