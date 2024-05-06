import { createSlice } from "@reduxjs/toolkit";
import { UserSchema } from "@/shared/config/store";
import { signInApi } from "../api/api-sign-in";
import { refreshTokenApi } from "../api/api-refresh-token";
import { signUpApi } from "../api/api-sign-up";
import { checkAuthApi } from "../api/api-check-auth";
import { logoutApi } from "@/entities/user";

const initialState: UserSchema = {
  userData: undefined,
  loading: true,
  error: undefined,
};

export const userStore = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userData = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInApi.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(signInApi.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.userData = action.payload.user;
      })
      .addCase(signInApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signUpApi.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(signUpApi.fulfilled, (state) => {
        state.loading = false;
        state.error = undefined;
      })
      .addCase(signUpApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(refreshTokenApi.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(refreshTokenApi.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.userData = action.payload.user;
      })
      .addCase(refreshTokenApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(checkAuthApi.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(checkAuthApi.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.userData = action.payload.user;
      })
      .addCase(checkAuthApi.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(logoutApi.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(logoutApi.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.userData = undefined;
      })
      .addCase(logoutApi.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { actions: userActions, reducer: userReducer } = userStore;
