import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/config/store";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { apiAuth } from "@/shared/api";
import { CheckAuthResult } from "@/shared/api/types/auth";

export const checkAuthApi = createAsyncThunk<
  CheckAuthResult,
  void,
  ThunkConfig<string>
>("checkAuth", async (_, { rejectWithValue }) => {
  try {
    return await apiAuth.checkAuth();
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
