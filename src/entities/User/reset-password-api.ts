import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/providers/store-provider";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import {
  EnterResetCodeResponse,
  EnterResetPasswordCodeProps,
  NewPasswordProps,
  NewPasswordResponse,
  SendResetCodeResponse,
  SendResetPasswordCodeProps,
} from "@/shared/api/auth";
import { toast } from "react-toastify";
import { resetPasswordActions } from "@/entities/User/reset-password.store";
import { apiAuth } from "@/shared/api";

export const enterResetPasswordCode = createAsyncThunk<
  EnterResetCodeResponse,
  EnterResetPasswordCodeProps,
  ThunkConfig<string>
>(
  "enterResetPasswordCode",
  async ({ email, code }, { dispatch, rejectWithValue }) => {
    try {
      const data = await apiAuth.enterResetPasswordCode({ email, code });
      dispatch(resetPasswordActions.setCode(code));
      toast.success(data.message);
      return data;
    } catch (error) {
      return rejectWithValue(axiosErrorMessage(error));
    }
  },
);

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

export const newPasswordSet = createAsyncThunk<
  NewPasswordResponse,
  NewPasswordProps,
  ThunkConfig<string>
>(
  "newPasswordSet",
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    try {
      const data = await apiAuth.newPassword({ email, password });

      toast.success(data.message);

      return data;
    } catch (error) {
      return rejectWithValue(axiosErrorMessage(error));
    }
  },
);
