import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/config/store";
import { apiProduct } from "@/shared/api";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import {
  IProductsSearchData,
  ISearchProduct,
} from "@/shared/api/types/product";
export const searchProductApi = createAsyncThunk<
  IProductsSearchData,
  ISearchProduct,
  ThunkConfig<string>
>("searchProduct", async ({ search }, { rejectWithValue }) => {
  try {
    return await apiProduct.searchProductByName({ productName: search });
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
