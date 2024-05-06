import {
  UnknownAction,
  combineReducers,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import {
  ReducerManager,
  AppState,
  AppStateKey,
} from "./schemas/app-state-schema";

export function createReducerManager(
  initialReducers: ReducersMapObject<AppState>,
): ReducerManager {
  let reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);

  return {
    getReducerMap: () => reducers,
    reduce: (state: AppState, action: UnknownAction) => {
      const keysToRemove: AppStateKey[] = [];

      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          // @ts-ignore
          delete state[key];
        });
      }

      // @ts-ignore
      return combinedReducer(state, action);
    },
    add: (key: AppStateKey, reducer: Reducer) => {
      if (!key || reducers[key]) return;

      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },
    remove: (key: AppStateKey) => {
      if (!key || !reducers[key]) return;

      // @ts-ignore
      delete reducers[key];
      combinedReducer = combineReducers(reducers);
    },
  };
}
