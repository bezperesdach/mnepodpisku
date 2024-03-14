"use client";

import { useEffect } from "react";
import { ConfirmationType } from "../WbClient";
import { cn } from "@/lib/utils";

type Props = {
  confirmationType: ConfirmationType;
  // eslint-disable-next-line no-unused-vars
  changeConfirmationType: (type: ConfirmationType) => void;
  // eslint-disable-next-line no-unused-vars
  changeAllowToNextStage: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  changeTitle: (title: string) => void;
};

const ActivationStep2 = ({ confirmationType, changeConfirmationType, changeAllowToNextStage, changeTitle }: Props) => {
  useEffect(() => {
    changeTitle("Выбор способа активации");
    changeAllowToNextStage(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (confirmationType !== "") {
      changeAllowToNextStage(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmationType]);

  return (
    <div className="flex flex-col justify-center items-center gap-2 px-6 py-2 w-full min-h-[320px]">
      <p className="text-lg text-center">Выберите каким образом вы бы хотели подтвердить вашу покупку</p>

      <div className="flex flex-col gap-4 mt-4">
        <button
          className={cn("btn", {
            "btn-primary text-white": confirmationType === "cheque",
            "btn-outline": confirmationType !== "cheque",
          })}
          onClick={() => changeConfirmationType("cheque")}
        >
          ЭЛЕКТРОННЫЙ ЧЕК ОТ ВАЙЛДБЕРИС
        </button>
        <button
          className={cn("btn", {
            "btn-primary text-white": confirmationType === "message",
            "btn-outline": confirmationType !== "message",
          })}
          onClick={() => changeConfirmationType("message")}
        >
          СООБЩЕНИЕ В ЧАТЕ С ПРОДАВЦОМ НА ВАЙЛДБЕРИС
        </button>
      </div>
    </div>
  );
};

export default ActivationStep2;
