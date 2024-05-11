import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICart, ICartProps } from "@/shared/api/types";
import { ThunkConfig } from "@/shared/config/store";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { apiCart } from "@/shared/api";

export const apiIncreaseCount = createAsyncThunk<
  ICart,
  ICartProps,
  ThunkConfig<string>
>("increaseCount", async ({ productId }, { rejectWithValue }) => {
  try {
    return await apiCart.increaseProductCount({ productId });
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
