"use client";

import { AllHTMLAttributes, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
};

export interface DynamicModuleProps
  extends Pick<AllHTMLAttributes<HTMLDivElement>, "className" | "children"> {
  reducers: ReducerList;
}

export const DynamicModule = ({
                                children,
                                className,
                                reducers,
                              }: DynamicModuleProps) => {
  const store = useSelector((state: any) => state) as ReduxStoreWithManager;
  const dispatch = useDispatch();

  const addReducer = useCallback(
    (name: string, reducer: Reducer, actionTypePrefix: string) => {
      const typedName = name as StateSchemaKey;
      const actionType = `${actionTypePrefix} ${typedName} reducer`;
      store.reducerManager.add(typedName, reducer);
      dispatch({ type: actionType });
    },
    [dispatch, store.reducerManager]
  );

  const updateReducers = useCallback(
    (actionTypePrefix: string) => {
      return () => {
        Object.entries(reducers).forEach(([name, reducer]) => {
          addReducer(name, reducer, actionTypePrefix);
        });
      };
    },
    [addReducer, reducers]
  );

  useEffect(() => {
    const initReducers = updateReducers("@INIT");
    initReducers();

    return () => {
      const destroyReducers = updateReducers("@DESTROY");
      destroyReducers();
    };
  }, [updateReducers]);

  return <div className={className}>{children}</div>;
};