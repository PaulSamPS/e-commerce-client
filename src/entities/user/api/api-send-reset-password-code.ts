import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  SendResetCodeResponse,
  SendResetPasswordCodeProps,
} from "@/shared/api/types/auth";
import { ThunkConfig } from "@/shared/config/store";
import { resetPasswordActions } from "../store/reset-password.store";
import { toast } from "react-toastify";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { apiAuth } from "@/shared/api";

export const sendResetPasswordCode = createAsyncThunk<
  SendResetCodeResponse,
  SendResetPasswordCodeProps,
  ThunkConfig<string>
>("sendResetPasswordCode", async ({ email }, { dispatch, rejectWithValue }) => {
  try {
    const data = await apiAuth.sendResetPasswordCode({ email });

    dispatch(resetPasswordActions.setEmail(email));
    toast.success(data.message);

    return data;
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
