"use client";

import React, { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type Context = {
  showCatalogue: boolean;
  toggleCatalogue: () => void;
};

const contextInitialState = {
  showCatalogue: true,
  toggleCatalogue: () => {},
};

export const AppContext = createContext<Context>(contextInitialState);

const AppContextWrapper = ({ children }: Props) => {
  const [showCatalogue, setShowCatalogue] = useState<boolean>(contextInitialState.showCatalogue);

  const toggleCatalogue = () => {
    setShowCatalogue((prevValue) => !prevValue);
  };

  const contextValue: Context = {
    showCatalogue,
    toggleCatalogue,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextWrapper;
