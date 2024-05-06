import {
  UnknownAction,
  EnhancedStore,
  ReducersMapObject,
  Reducer,
} from "@reduxjs/toolkit";
import { UserSchema } from "./user/user-schema.types";
import { ProductsSearchSchema } from "./product/product-schema.types";
import { ResetPasswordSchema } from "./user/password-schema.types";
import { CartSchema } from "./cart/cart-schema.types";

export interface AppState {
  user: UserSchema;
  cart: CartSchema;
  searchProduct: ProductsSearchSchema;
  resetPassword?: ResetPasswordSchema;
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
