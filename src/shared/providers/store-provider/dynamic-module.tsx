"use client";

import { ReactNode, useCallback, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";
import {
  AppStateKey,
  ReducerManager,
  StoreWithReducerManager,
} from "@/shared/providers/store-provider/app-state-schema";

export type ReducerMap = {
  [name in AppStateKey]?: Reducer;
};

type DynamicModuleProps = {
  className: string;
  children: ReactNode;
  reducers: ReducerMap;
};

export const DynamicModule = ({
  children,
  className,
  reducers,
}: DynamicModuleProps) => {
  const store = useStore() as StoreWithReducerManager;
  const dispatch = useDispatch();

  const updateReducers = useCallback(
    (actionTypePrefix: string) => () => {
      const reducerManager = store.reducerManager as ReducerManager;

      Object.entries(reducers).forEach(([name, reducer]) => {
        const typedName = name as AppStateKey;
        const actionType = `${actionTypePrefix} ${typedName} reducer`;

        reducerManager[actionTypePrefix === "@INIT" ? "add" : "remove"](
          typedName,
          reducer,
        );
        dispatch({ type: actionType });
      });
    },
    [dispatch, reducers, store.reducerManager],
  );

  useEffect(() => {
    const initReducers = updateReducers("@INIT");
    const destroyReducers = updateReducers("@DESTROY");

    initReducers();

    return destroyReducers;
  }, [updateReducers]);

  return <div className={className}>{children}</div>;
};
