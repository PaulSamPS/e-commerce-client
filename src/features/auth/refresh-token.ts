import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuth } from "@/shared/api";
import { ThunkConfig } from "@/shared/providers/store-provider";
import { SignInFormProps, SignInResult } from "@/features/auth/sign-in";
import { axiosErrorMessage } from "@/shared/lib/error-messages";

export const refreshTokenApi = createAsyncThunk<
  SignInResult,
  ThunkConfig<string>
>("refreshToken", async (_, { dispatch, rejectWithValue }) => {
  try {
    return await apiAuth.refreshToken();
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
