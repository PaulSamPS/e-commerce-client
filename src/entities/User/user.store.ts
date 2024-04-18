import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData, UserSchema } from "@/entities/User/user.types";
import { signInApi } from "@/features/auth/sign-in/api-sign-in";
import { refreshTokenApi } from "@/features/auth/refresh-token";

const initialState: UserSchema = {
  userData: undefined,
  loading: false,
  error: undefined,
};

export const userStore = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
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
        state.error = action.payload as string;
      });
  },
});

export const { actions: userActions, reducer: userReducer } = userStore;
