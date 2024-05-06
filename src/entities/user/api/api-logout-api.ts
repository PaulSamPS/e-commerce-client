import { createAsyncThunk } from "@reduxjs/toolkit";
import { LogoutResponse } from "@/shared/api/types/auth";
import { ThunkConfig } from "@/shared/config/store";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { apiAuth } from "@/shared/api";

export const logoutApi = createAsyncThunk<
  LogoutResponse,
  void,
  ThunkConfig<string>
>("logout", async (_, { rejectWithValue }) => {
  try {
    return await apiAuth.logout();
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
