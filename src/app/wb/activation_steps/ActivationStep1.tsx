"use client";

import { useEffect } from "react";

type Props = {
  // eslint-disable-next-line no-unused-vars
  changeAllowToNextStage: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  changeTitle: (title: string) => void;
};

const ActivationStep1 = ({ changeAllowToNextStage, changeTitle }: Props) => {
  useEffect(() => {
    changeTitle("Активация товара с WB");
    changeAllowToNextStage(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-2 px-6 py-2 w-full min-h-[320px]">
      <p className="text-lg text-center">Добро пожаловать на страницу активации!</p>

      <p className="text-lg text-center">Прохождение активации займет 5-10 минут, чтобы приступить - нажмите кнопку продолжить</p>

      <p className="font-sm text-center bg-base-300 py-2 px-1 lg:px-2 rounded-lg mt-6">
        Все данные введенные на любом из этапов остаются в вашем браузере и никуда не отправляются
      </p>
    </div>
  );
};

export default ActivationStep1;
