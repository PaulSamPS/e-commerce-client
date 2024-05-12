import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProfile } from "@/entities/profile/types";
import { ThunkConfig } from "@/shared/config/store";
import { axiosErrorMessage } from "@/shared/lib/axios-error-message";
import { apiProfile } from "@/shared/api";

export const apiProfileGet = createAsyncThunk<
  IProfile,
  void,
  ThunkConfig<string>
>("profileGet", async (_, { rejectWithValue }) => {
  try {
    return await apiProfile.profileGet();
  } catch (error) {
    return rejectWithValue(axiosErrorMessage(error));
  }
});
