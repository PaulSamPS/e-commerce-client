import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICart, ICartProps } from "@/shared/api/types";
import { ThunkConfig } from "@/shared/config/store";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { apiCart } from "@/shared/api";

export const apiDecreaseCount = createAsyncThunk<
  ICart,
  ICartProps,
  ThunkConfig<string>
>("decreaseCount", async ({ productId }, { rejectWithValue }) => {
  try {
    return await apiCart.decreaseProductCount({ productId });
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
