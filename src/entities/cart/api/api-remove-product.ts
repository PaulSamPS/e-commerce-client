import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICartProps, RemoveProduct } from "@/shared/api/types";
import { ThunkConfig } from "@/shared/config/store";
import { toast } from "react-toastify";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { apiCart } from "@/shared/api";

export const apiRemoveProduct = createAsyncThunk<
  RemoveProduct,
  ICartProps,
  ThunkConfig<string>
>("removeProduct", async ({ productId }, { rejectWithValue }) => {
  try {
    const data = await apiCart.deleteProductFromCart({ productId });
    toast.warning(data.message);
    return data;
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
