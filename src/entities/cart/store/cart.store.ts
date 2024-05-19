import { createSlice } from "@reduxjs/toolkit";
import { CartSchema } from "@/shared/config/store";
import { addToCartApi } from "../api/api-add-to-cart";
import { getCartApi } from "../api/api-get-cart";
import { apiClearCart } from "../api/api-clear-cart";
import { apiDecreaseCount } from "../api/api-decrease-count";
import { apiIncreaseCount } from "../api/api-increase-count";
import { apiRemoveProduct } from "../api/api-remove-product";

const initialState: CartSchema = {
  cart: null,
  loading: false,
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
      })
      .addCase(apiClearCart.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(apiClearCart.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.cart = action.payload;
      })
      .addCase(apiClearCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(apiDecreaseCount.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(apiDecreaseCount.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.cart = action.payload;
      })
      .addCase(apiDecreaseCount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(apiIncreaseCount.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(apiIncreaseCount.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.cart = action.payload;
      })
      .addCase(apiIncreaseCount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(apiRemoveProduct.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(apiRemoveProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.cart = action.payload;
      })
      .addCase(apiRemoveProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: cartActions, reducer: cartReducer } = cartStore;
