"use client";

import React, { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type Context = {
  showCatalogue: boolean;
  toggleCatalogue: () => void;
  paymentLink: string;
  // eslint-disable-next-line no-unused-vars
  setPaymentLink: (link: string) => void;
  showMobileMenu: boolean;
  toggleMobileMenu: () => void;
};

const contextInitialState: Context = {
  showCatalogue: false,
  toggleCatalogue: () => {},
  paymentLink: "",
  setPaymentLink: () => {},
  showMobileMenu: false,
  toggleMobileMenu: () => {},
};

export const AppContext = createContext<Context>(contextInitialState);

const AppContextWrapper = ({ children }: Props) => {
  const [showCatalogue, setShowCatalogue] = useState<boolean>(contextInitialState.showCatalogue);

  const toggleCatalogue = () => {
    setShowCatalogue((prevValue) => !prevValue);
  };

  const [paymentLink, setPaymentLink] = useState<string>(contextInitialState.paymentLink);

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(contextInitialState.showMobileMenu);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevValue) => !prevValue);
  };

  const contextValue: Context = {
    showCatalogue,
    toggleCatalogue,
    paymentLink,
    setPaymentLink,
    showMobileMenu,
    toggleMobileMenu,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextWrapper;
