import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResetPasswordSchema } from "@/shared/config/store";
import { newPasswordSet } from "../api/api-new-password-set";
import { enterResetPasswordCode } from "../api/api-enter-reset-password-code";
import { sendResetPasswordCode } from "../api/api-send-reset-password-code";

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
      })
      .addCase(newPasswordSet.pending, (state) => {
        state.error = undefined;
        state.loading = true;
        state.message = undefined;
      })
      .addCase(newPasswordSet.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.message = action.payload.message;
      })
      .addCase(newPasswordSet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: resetPasswordActions } = resetPassword;
export const { reducer: resetPasswordReducer } = resetPassword;
