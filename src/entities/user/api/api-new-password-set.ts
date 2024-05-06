import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/config/store";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { toast } from "react-toastify";
import { apiAuth } from "@/shared/api";
import { NewPasswordProps, NewPasswordResponse } from "@/shared/api/types/auth";

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
