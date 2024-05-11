import { createAsyncThunk } from "@reduxjs/toolkit";
import { IClearCart } from "@/shared/api/types";
import { ThunkConfig } from "@/shared/config/store";
import { toast } from "react-toastify";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { apiCart } from "@/shared/api";

export const apiClearCart = createAsyncThunk<
  IClearCart,
  void,
  ThunkConfig<string>
>("clearCart", async (_, { rejectWithValue }) => {
  try {
    const data = await apiCart.deleteAllProductFromCart();
    toast.success(data.message);
    return data;
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
