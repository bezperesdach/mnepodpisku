"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
  showCatalogue: boolean;
  paymentLink: string;
  showMobileMenu: boolean;
};

type ActionType =
  | {
      type: "change_payment_link";
      payload: string;
    }
  | {
      type: "toggle_catalogue";
    }
  | {
      type: "toggle_mobile_menu";
    };

const initialState: StateType = {
  showCatalogue: false,
  paymentLink: "",
  showMobileMenu: false,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "toggle_mobile_menu":
      return { ...state, showMobileMenu: !state.showMobileMenu };
    case "toggle_catalogue":
      return { ...state, showCatalogue: !state.showCatalogue };
    case "change_payment_link":
      return { ...state, paymentLink: action.payload };
    default:
      return state;
  }
};

export const AppContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
