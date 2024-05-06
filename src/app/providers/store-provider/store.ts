import { configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { createReducerManager } from "@/shared/config/store";
import { userReducer } from "@/entities/user";
import { cartReducer } from "@/entities/cart";
import { productsSearchReducer } from "@/entities/product";
import { AppState } from "@/shared/config/store";

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
