'use client';

import { createContext, PropsWithChildren, useMemo, useState } from 'react';

export interface ISlideIndexContext {
    currentSlideIndex: number;
    setCurrentSlideIndex?: (value: number) => void;
}

export const SlideIndexContext = createContext<ISlideIndexContext>({
    currentSlideIndex: 0,
});

export const SlideIndexContextProvider = ({ children, }: PropsWithChildren) => {
    const [currentSlideIndexState, setIsCurrentSlideIndexState] = useState(0);

    const setCurrentSlideIndex = (newState: number) => {
        setIsCurrentSlideIndexState(newState);
    };

    const val = useMemo(() => ({
        currentSlideIndex: currentSlideIndexState, setCurrentSlideIndex
    }), [currentSlideIndexState]);

    return (
        <SlideIndexContext.Provider value={val}>{children}</SlideIndexContext.Provider>
    );
};
