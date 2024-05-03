"use client";

import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";

interface IAuthModalAppContext {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const AuthModalAppContext = createContext<IAuthModalAppContext>({
  isOpen: false,
  setIsOpen: () => {},
});

export const AuthModalAppContextProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const memoizedSetIsOpen = useCallback((value: boolean) => {
    setIsOpen(value);
  }, []);

  const val = useMemo(
    () => ({ isOpen, setIsOpen: memoizedSetIsOpen }),
    [isOpen, memoizedSetIsOpen]
  );

  return (
    <AuthModalAppContext.Provider value={val}>
      {children}
    </AuthModalAppContext.Provider>
  );
};
