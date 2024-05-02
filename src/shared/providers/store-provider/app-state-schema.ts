import {
  UnknownAction,
  EnhancedStore,
  ReducersMapObject,
  Reducer,
} from "@reduxjs/toolkit";
import { UserSchema } from "@/entities/user";
import { ProductsSearchSchema } from "@/entities/product/schema/product-store.types";
import { ResetPasswordSchema } from "@/entities/user/schema/password-store.types";
import { CartSchema } from "@/entities/cart/schema/cart-schema.types";

export interface AppState {
  user: UserSchema;
  cart: CartSchema;
  resetPassword?: ResetPasswordSchema;
  searchProduct: ProductsSearchSchema;
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
