"use client";
import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface AppContextType {
  handleOnOpen: () => void;
  handleOnClose: () => void;
  isMenuOpen: boolean;
}

export const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error("useAppContext has to be used in <AppContext.Provider>");
  }

  return appContext;
};

export const AppContextProvider = ({ children }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnOpen = () => {
    setIsMenuOpen(true);
  };

  const handleOnClose = () => {
    setIsMenuOpen(false);
  };

  const value = {
    isMenuOpen,
    handleOnOpen,
    handleOnClose,
  };

  return (
    <AppContext.Provider value={value}>
      {/* <AnimatePresence></AnimatePresence> */}
      {children}
    </AppContext.Provider>
  );
};
