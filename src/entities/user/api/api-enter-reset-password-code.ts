import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  EnterResetCodeResponse,
  EnterResetPasswordCodeProps,
} from "@/shared/types/auth";
import { ThunkConfig } from "@/shared/providers/store-provider";
import { resetPasswordActions } from "../store/reset-password.store";
import { toast } from "react-toastify";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
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
