"use client";

import { ym } from "@/utils/ym";
import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
  showCatalogue: boolean;
  paymentLink: string;
  showMobileMenu: boolean;
  theme: string;
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
    }
  | { type: "set_theme"; payload: string };

const initialState: StateType = {
  showCatalogue: false,
  paymentLink: "",
  showMobileMenu: false,
  theme: "",
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "toggle_mobile_menu":
      return { ...state, showMobileMenu: !state.showMobileMenu };
    case "toggle_catalogue": {
      if (!state.showCatalogue) {
        ym("reachGoal", "openCatalogue");
      }
      return { ...state, showCatalogue: !state.showCatalogue };
    }

    case "change_payment_link":
      return { ...state, paymentLink: action.payload };
    case "set_theme":
      return { ...state, theme: action.payload };
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
