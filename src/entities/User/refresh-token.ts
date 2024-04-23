import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuth } from "@/shared/api";
import { ThunkConfig } from "@/shared/providers/store-provider";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { UserData } from "@/entities/User/index";

type RefreshTokenResult = {
  user: UserData;
};
export const refreshTokenApi = createAsyncThunk<
  RefreshTokenResult,
  ThunkConfig<string>
>("refreshToken", async (_, { dispatch, rejectWithValue }) => {
  try {
    return await apiAuth.refreshToken();
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
