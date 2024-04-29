import { UserData } from "@/entities/User/user.types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/providers/store-provider";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { apiAuth } from "@/shared/api";

type CheckAuthResult = {
  user: UserData;
};
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
