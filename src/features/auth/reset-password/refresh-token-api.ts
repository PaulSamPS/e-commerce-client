import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuth } from "@/shared/api";
import { ThunkConfig } from "@/shared/providers/store-provider";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { ResetPasswordFormProps } from "@/features/auth/reset-password/types";

export const resetPasswordApi = createAsyncThunk<
  { message: string },
  ResetPasswordFormProps,
  ThunkConfig<string>
>("resetPassword", async ({ email }, { dispatch, rejectWithValue }) => {
  try {
    return { message: "Ok" };
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
