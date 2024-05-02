import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/providers/store-provider";
import { toast } from "react-toastify";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { apiCart } from "@/shared/api";
import { ICartAddAndRemove, ICartProps } from "@/shared/types/cart";

export const addToCartApi = createAsyncThunk<
  ICartAddAndRemove,
  ICartProps,
  ThunkConfig<string>
>("addToCart", async ({ productId }, { rejectWithValue }) => {
  try {
    const data = await apiCart.addToCart({ productId });
    toast.success(data.message);
    return data;
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
