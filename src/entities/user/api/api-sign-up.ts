import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuth } from "@/shared/api";
import { ThunkConfig } from "@/shared/providers/store-provider";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { toast } from "react-toastify";
import { SignUpFormProps, SignUpResult } from "@/shared/types/auth";

export const signUpApi = createAsyncThunk<
  SignUpResult,
  SignUpFormProps,
  ThunkConfig<string>
>(
  "signup",
  async ({ username, email, password }, { dispatch, rejectWithValue }) => {
    try {
      const data = await apiAuth.register({ username, email, password });
      toast.success(data.message);

      return data;
    } catch (error) {
      return rejectWithValue(axiosErrorMessage(error));
    }
  },
);
