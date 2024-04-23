import { AppState } from "@/shared/providers/store-provider";

export const userState = (state: AppState) => state.user;
export const resetPasswordState = (state: AppState) => state.resetPassword;
