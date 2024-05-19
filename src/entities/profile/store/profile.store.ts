import { createSlice } from "@reduxjs/toolkit";
import { ProfileSchema } from "@/shared/config/store";
import { apiProfileUpdate } from "../api/api-profile-update";
import { apiProfileGet } from "../api/api-profile-get";

const initialState: ProfileSchema = {
  data: undefined,
  isReadonly: true,
  loading: false,
  error: undefined,
};

export const profileStore = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(apiProfileUpdate.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(apiProfileUpdate.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.data = action.payload;
      })
      .addCase(apiProfileUpdate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(apiProfileGet.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(apiProfileGet.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.data = action.payload;
      })
      .addCase(apiProfileGet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } =
  profileStore;
