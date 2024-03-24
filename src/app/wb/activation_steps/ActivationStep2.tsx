"use client";

import { useEffect } from "react";
import { ConfirmationType } from "../WbClient";
// import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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

      <div className="flex flex-col gap-4 w-full mt-4">
        <Button variant={confirmationType === "cheque" ? "default" : "secondary"} onClick={() => changeConfirmationType("cheque")}>
          ЭЛЕКТРОННЫЙ ЧЕК ОТ ВАЙЛДБЕРИС
        </Button>
        <Button variant={confirmationType === "message" ? "default" : "secondary"} onClick={() => changeConfirmationType("message")}>
          СООБЩЕНИЕ В ЧАТЕ С ПРОДАВЦОМ НА ВАЙЛДБЕРИС
        </Button>
      </div>
    </div>
  );
};

export default ActivationStep2;
