'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { AppState } from '../config/app-state-schema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<AppState>;
    asyncReducers?: DeepPartial<ReducersMapObject<AppState>>;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
    const store = createReduxStore(
      initialState as AppState,
      asyncReducers as ReducersMapObject<AppState>,
    );

    return <Provider store={store}>{children}</Provider>;
};
