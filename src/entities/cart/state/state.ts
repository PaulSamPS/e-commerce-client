import { AppState } from "@/shared/config/store";

export const cartProductsState = (state: AppState) => state.cart.cart?.products;
export const cartTotalPricesState = (state: AppState) =>
  state.cart.cart?.total_price;
export const cartDiscountState = (state: AppState) => state.cart.cart?.discount;
export const cartStateLoading = (state: AppState) => state.cart.loading;
