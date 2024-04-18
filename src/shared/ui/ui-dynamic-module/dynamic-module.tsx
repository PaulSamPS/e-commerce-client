"use client";

import { AllHTMLAttributes, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { ReduxStoreWithManager } from "../../providers/store-provider";
import { StateSchemaKey } from "@/shared/providers/store-provider/config/state-schema";

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
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  // Функция для добавления и удаления редюсеров
  const updateReducers = (actionTypePrefix: string) => {
    return () => {
      Object.entries(reducers).forEach(([name, reducer]) => {
        const typedName = name as StateSchemaKey;
        const actionType = `${actionTypePrefix} ${typedName} reducer`;
        store.reducerManager.add(typedName, reducer);
        dispatch({ type: actionType });
      });
    };
  };

  // Добавление редюсеров при монтировании компонента
  useEffect(updateReducers("@INIT"), []);

  // Удаление редюсеров при размонтировании компонента
  useEffect(updateReducers("@DESTROY"), []);

  return <div className={className}>{children}</div>;
};
