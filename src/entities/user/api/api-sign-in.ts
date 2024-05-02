import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuth } from "@/shared/api";
import { ThunkConfig } from "@/shared/providers/store-provider";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { toast } from "react-toastify";
import { SignInFormProps, SignInResult } from "@/shared/types/auth";

export const signInApi = createAsyncThunk<
  SignInResult,
  SignInFormProps,
  ThunkConfig<string>
>("signIn", async ({ email, password }, { dispatch, rejectWithValue }) => {
  try {
    const data = await apiAuth.login({ email, password });

    toast.success(data.message);

    return data;
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
