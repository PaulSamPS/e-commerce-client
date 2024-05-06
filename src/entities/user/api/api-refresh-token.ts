import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuth } from "@/shared/api";
import { ThunkConfig } from "@/shared/config/store";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { RefreshTokenResult } from "@/shared/api/types/auth";

export const refreshTokenApi = createAsyncThunk<
  RefreshTokenResult,
  void,
  ThunkConfig<string>
>("refreshToken", async (_, { rejectWithValue }) => {
  try {
    return await apiAuth.refreshToken();
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
