import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  enterResetPasswordCode,
  sendResetPasswordCode,
} from "@/features/auth/reset-password/reset-password-api";
import { ResetPasswordSchema } from "@/entities/Password/password.types";

const initialState: ResetPasswordSchema = {
  loading: false,
  error: undefined,
  message: undefined,
  email: "",
  code: "",
};

export const resetPassword = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setCode(state, action: PayloadAction<string>) {
      state.code = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendResetPasswordCode.pending, (state) => {
        state.error = undefined;
        state.loading = true;
        state.message = undefined;
      })
      .addCase(sendResetPasswordCode.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.message = action.payload.message;
      })
      .addCase(sendResetPasswordCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(enterResetPasswordCode.pending, (state) => {
        state.error = undefined;
        state.loading = true;
        state.message = undefined;
      })
      .addCase(enterResetPasswordCode.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.message = action.payload.message;
      })
      .addCase(enterResetPasswordCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: resetPasswordActions } = resetPassword;
export const { reducer: resetPasswordReducer } = resetPassword;