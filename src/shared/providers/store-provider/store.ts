import {
  configureStore,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AppState } from "./app-state-schema";
import { createReducerManager } from "./redux-manager";
import { userReducer } from "@/entities/user";
import { cartReducer } from "@/entities/cart/store/cart.store";
import { productsSearchReducer } from "@/entities/product";

export const createReduxStore = (
  initialState?: AppState,
  asyncReducers?: ReducersMapObject<AppState>,
) => {
  const rootReducers: ReducersMapObject<AppState> = {
    ...asyncReducers,
    user: userReducer,
    cart: cartReducer,
    searchProduct: productsSearchReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<AppState>,
    preloadedState: initialState,
    devTools: true,
  });

  return { ...store, reducerManager };
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
