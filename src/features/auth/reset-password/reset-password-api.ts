import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/providers/store-provider";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { apiAuth } from "@/shared/api";
import { resetPasswordActions } from "@/entities/Password/reset-password.store";
import {
  EnterResetCodeResponse,
  EnterResetPasswordCodeProps,
  SendResetCodeResponse,
  SendResetPasswordCodeProps,
} from "@/shared/api/auth";
import { toast } from "react-toastify";

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

export const enterResetPasswordCode = createAsyncThunk<
  EnterResetCodeResponse,
  EnterResetPasswordCodeProps,
  ThunkConfig<string>
>(
  "enterResetPasswordCode",
  async ({ email, code }, { dispatch, rejectWithValue }) => {
    try {
      const data = await apiAuth.enterResetPasswordCode({ email, code });
      toast.success(data.message);
      return data;
    } catch (error) {
      return rejectWithValue(axiosErrorMessage(error));
    }
  },
);
