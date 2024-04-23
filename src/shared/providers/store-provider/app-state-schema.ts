import {
  UnknownAction,
  EnhancedStore,
  ReducersMapObject,
  Reducer,
} from "@reduxjs/toolkit";
import { UserSchema } from "@/entities/User";
import { ProductsSearchSchema } from "@/entities/Product/product.types";
import { ResetPasswordSchema } from "@/entities/User/password.types";

export interface AppState {
  user: UserSchema;
  resetPassword?: ResetPasswordSchema;
  searchProduct?: ProductsSearchSchema;
}

export type AppStateKey = keyof AppState;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<AppState>;
  reduce: (state: AppState, action: UnknownAction) => AppState;
  add: (key: AppStateKey, reducer: Reducer<AppState>) => void;
  remove: (key: AppStateKey) => void;
}

export interface StoreWithReducerManager extends EnhancedStore<AppState> {
  reducerManager: ReducerManager;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  state: AppState;
}
