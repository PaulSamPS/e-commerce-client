import { createSlice } from "@reduxjs/toolkit";
import { resetPasswordApi } from "@/features/auth/reset-password/refresh-token-api";
import { ResetPasswordSchema } from "@/entities/Password/password.types";

const initialState: ResetPasswordSchema = {
  loading: false,
  error: undefined,
  message: undefined,
};

export const resetPassword = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resetPasswordApi.pending, (state) => {
        state.error = undefined;
        state.loading = true;
        state.message = undefined;
      })
      .addCase(resetPasswordApi.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.message = action.payload.message;
      })
      .addCase(resetPasswordApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: resetPasswordActions } = resetPassword;
export const { reducer: resetPasswordReducer } = resetPassword;
