import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuth } from "@/shared/api";
import { ThunkConfig } from "@/shared/providers/store-provider";
import {
  SignInFormProps,
  SignInResult,
  SignUpFormProps,
  SignUpResult,
} from "@/features/auth";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";

export const signUpApi = createAsyncThunk<
  SignUpResult,
  SignUpFormProps,
  ThunkConfig<string>
>(
  "signup",
  async ({ username, email, password }, { dispatch, rejectWithValue }) => {
    try {
      return await apiAuth.register({ username, email, password });
    } catch (error) {
      return rejectWithValue(axiosErrorMessage(error));
    }
  },
);
