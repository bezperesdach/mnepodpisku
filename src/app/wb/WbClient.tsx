"use client";

import { useReducer } from "react";
import ActivationStep1 from "./activation_steps/ActivationStep1";
import ActivationStep3 from "./activation_steps/ActivationStep3";
import ActivationStep4 from "./activation_steps/ActivationStep4";
import ActivationStep5 from "./activation_steps/ActivationStep5";
import ActivationStep6 from "./activation_steps/ActivationStep6";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type Types = "пополнение" | "игра" | "аккаунт" | "аккаунт_баланс" | "одноразовая_карта" | "ps_plus" | "";

export type ConfirmationType = "cheque" | "message" | "";

export type UserData = {
  type: Types;
  code: string;
  price: string;
  email: string;
  password: string;
  accessCode: string;
  secondAccessCode: string;
  priceDate: string;
};

type StateType = {
  userData: UserData;
  confirmationShow: boolean;
  confirmationType: ConfirmationType;
  confirmationSent: boolean;
  title: string;
  activationStep: number;
  accessCodeAcknowledge: boolean;
  allowedToNextStage: boolean;
};

type ActionType =
  | {
      type: "increase_activation_step";
    }
  | {
      type: "decrease_activation_step";
    }
  | {
      type: "change_confirmation_type";
      payload: ConfirmationType;
    }
  | {
      type: "change_title";
      payload: string;
    }
  | { type: "change_user_data_value"; payload: { name: string; value: string } }
  | { type: "change_allow_to_next_stage"; payload: boolean }
  | { type: "change_cheque_sent"; payload: boolean }
  | { type: "change_confirmation_show"; payload: boolean }
  | { type: "change_chat_message_sent"; payload: boolean }
  | { type: "change_confirmation_sent"; payload: boolean }
  | { type: "change_access_code_acknowledgement"; payload: boolean };

const initialState: StateType = {
  userData: {
    type: "",
    code: "",
    price: "",
    email: "",
    password: "",
    accessCode: "",
    secondAccessCode: "",
    priceDate: "",
  },
  confirmationShow: false,
  confirmationType: "",
  confirmationSent: false,
  accessCodeAcknowledge: true,
  title: "Ввод кода активации",
  activationStep: 0,
  allowedToNextStage: false,
};

const totalSteps = 5;

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "increase_activation_step": {
      if (state.activationStep < totalSteps) {
        return { ...state, activationStep: state.activationStep + 1 };
      }
      return state;
    }
    case "decrease_activation_step": {
      // console.log(state.activationStep);
      if (state.activationStep > 0) {
        return { ...state, activationStep: state.activationStep - 1 };
      } else {
        return state;
      }
    }
    case "change_title":
      return { ...state, title: action.payload };

    case "change_confirmation_show":
      return { ...state, confirmationShow: action.payload };

    case "change_user_data_value":
      return { ...state, userData: { ...state.userData, [action.payload.name]: action.payload.value } };

    case "change_allow_to_next_stage":
      return { ...state, allowedToNextStage: action.payload };

    case "change_cheque_sent":
      return { ...state, chequeSent: action.payload };
    case "change_chat_message_sent":
      return { ...state, chatMessageSent: action.payload };
    case "change_access_code_acknowledgement":
      return { ...state, accessCodeAcknowledge: action.payload };
    case "change_confirmation_sent":
      return { ...state, confirmationSent: action.payload };
    case "change_confirmation_type":
      return {
        ...state,
        confirmationType: action.payload,
        confirmationSent: false,
        userData: { ...state.userData, priceDate: "", price: "" },
      };

    default:
      return state;
  }
};

function WbActivate() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto px-2 sm:px-4 mb-2 ">
      <div className="w-full border-2 border-primary rounded-xl max-w-2xl mt-6 bg-[#0c1430]">
        <div className="flex justify-between items-center gap-2 px-2 lg:px-6 py-4 w-full border-b-2 border-primary mb-2">
          <div className="w-12 h-auto font-bold text-lg lg:text-3xl">
            {state.activationStep + 1 < totalSteps && (
              <p>
                {state.activationStep + 1}/{totalSteps - 1}
              </p>
            )}
          </div>
          <p className="text-lg lg:text-3xl font-bold text-center">{state.title}</p>
        </div>
        <>
          {state.activationStep === 0 && (
            <ActivationStep1
              userData={state.userData}
              confirmationType={state.confirmationType}
              changeConfirmationType={(value) => dispatch({ type: "change_confirmation_type", payload: value })}
              changeCode={(value) => dispatch({ type: "change_user_data_value", payload: { name: "code", value: value } })}
              changeAllowToNextStage={(value) => dispatch({ type: "change_allow_to_next_stage", payload: value })}
              changeTitle={(title) => dispatch({ type: "change_title", payload: title })}
            />
          )}

          {state.activationStep === 1 && (
            <ActivationStep3
              userData={state.userData}
              confirmationShow={state.confirmationShow}
              changeConfirmationShow={(value) => dispatch({ type: "change_confirmation_show", payload: value })}
              changeConfirmationType={(value) => dispatch({ type: "change_confirmation_type", payload: value })}
              confirmationType={state.confirmationType}
              confirmationSent={state.confirmationSent}
              changeConfirmationSent={(value) => dispatch({ type: "change_confirmation_sent", payload: value })}
              onChange={(name, value) => dispatch({ type: "change_user_data_value", payload: { name, value } })}
              changeAllowToNextStage={(value) => dispatch({ type: "change_allow_to_next_stage", payload: value })}
              changeTitle={(title) => dispatch({ type: "change_title", payload: title })}
            />
          )}
          {state.activationStep === 2 && (
            <ActivationStep4
              userData={state.userData}
              confirmationType={state.confirmationType}
              onChange={(name, value) => dispatch({ type: "change_user_data_value", payload: { name, value } })}
              changeAllowToNextStage={(value) => dispatch({ type: "change_allow_to_next_stage", payload: value })}
              changeTitle={(title) => dispatch({ type: "change_title", payload: title })}
            />
          )}
          {state.activationStep === 3 && (
            <ActivationStep5
              userData={state.userData}
              accessCodeAcknowledge={state.accessCodeAcknowledge}
              changeAccessCodeAcknowledgement={(value) => dispatch({ type: "change_access_code_acknowledgement", payload: value })}
              onChange={(name, value) => dispatch({ type: "change_user_data_value", payload: { name, value } })}
              changeAllowToNextStage={(value) => dispatch({ type: "change_allow_to_next_stage", payload: value })}
              increaseActivationStep={() => dispatch({ type: "increase_activation_step" })}
              changeTitle={(title) => dispatch({ type: "change_title", payload: title })}
            />
          )}
          {state.activationStep === 4 && (
            <ActivationStep6
              userData={state.userData}
              confirmationType={state.confirmationType}
              changeTitle={(title) => dispatch({ type: "change_title", payload: title })}
            />
          )}
          {/* {state.activationStep === 2 && (
            <ActivationStep3
              userData={state.userData}
              activationType={activationName as ActivationTypes}
              changeTitle={(title) => dispatch({ type: "change_title", payload: title })}
            />
          )} */}

          {/* {state.activationStep === 0 && <Activation_step_1 />}
				{state.activationStep === 1 && <Activation_step_2  />}
				{state.activationStep === 2 && <Activation_step_3  />} */}
        </>

        <div className="flex justify-between items-center gap-2 min-h-[82px] px-6 py-4 w-full border-t-2 border-primary mt-6 ">
          {state.activationStep !== 0 ? <Button onClick={() => dispatch({ type: "decrease_activation_step" })}>Назад</Button> : <div />}
          {state.activationStep !== totalSteps - 1 ? (
            <Button
              className={cn("", { " pointer-events-none bg-secondary text-muted-foreground": !state.allowedToNextStage })}
              onClick={() => dispatch({ type: "increase_activation_step" })}
            >
              Далее
            </Button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

export default WbActivate;
