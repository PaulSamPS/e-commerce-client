import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/providers/store-provider";
import { apiProduct } from "@/shared/api";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { IProductsSearchData, ISearchProduct } from "@/shared/types/product";
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
