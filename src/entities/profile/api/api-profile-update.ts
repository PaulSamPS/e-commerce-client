import { apiProfile } from "@/shared/api";
import { IProfile } from "@/entities/profile/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/config/store";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";

export const apiProfileUpdate = createAsyncThunk<
  IProfile,
  IProfile,
  ThunkConfig<string>
>("profileUpdate", async (arg, { rejectWithValue }) => {
  try {
    return await apiProfile.profileUpdate(arg);
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
