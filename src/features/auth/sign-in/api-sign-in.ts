import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuth } from "@/shared/api";
import { ThunkConfig } from "@/shared/providers/store-provider";
import { SignInFormProps, SignInResult } from "@/features/auth/sign-in";
import { axiosErrorMessage } from "@/shared/lib/error-messages";

export const signInApi = createAsyncThunk<
  SignInResult,
  SignInFormProps,
  ThunkConfig<string>
>("signIn", async ({ email, password }, { dispatch, rejectWithValue }) => {
  try {
    return await apiAuth.login({ email, password });
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
