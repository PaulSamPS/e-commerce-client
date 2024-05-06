import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchProductApi } from "../api/search-product-api";
import { ProductsSearchSchema } from "@/shared/config/store";
import { IProductsSearchData } from "@/shared/api/types";

const initialState: ProductsSearchSchema = {
  data: {
    count: 0,
    rows: [],
  },
  error: undefined,
  isLoading: false,
  readonly: true,
};

export const productsSearchStore = createSlice({
  name: "products/search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchProductApi.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        searchProductApi.fulfilled,
        (state, action: PayloadAction<IProductsSearchData>) => {
          state.data.count = action.payload.count;
          state.data.rows = action.payload.rows;
          state.error = undefined;
          state.isLoading = false;
        },
      )
      .addCase(searchProductApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: productsSearchActions } = productsSearchStore;
export const { reducer: productsSearchReducer } = productsSearchStore;
