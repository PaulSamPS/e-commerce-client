import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICart } from "@/shared/types/cart";
import { ThunkConfig } from "@/shared/providers/store-provider";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { apiCart } from "@/shared/api";

export const getCartApi = createAsyncThunk<ICart, void, ThunkConfig<string>>(
  "getCart",
  async (_, { rejectWithValue }) => {
    try {
      return await apiCart.getUserCart();
    } catch (error) {
      return rejectWithValue(axiosErrorMessage(error));
    }
  },
);
