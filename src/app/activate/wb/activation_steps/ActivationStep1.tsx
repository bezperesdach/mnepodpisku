"use client";

import TextInput from "@/components/TextInput/TextInput";

import { ChangeEvent, useEffect, useState } from "react";
import { UserData } from "../WbClient";

type Props = {
  userData: UserData;
  // eslint-disable-next-line no-unused-vars
  changeCode: (value: string) => void;
  // eslint-disable-next-line no-unused-vars
  changeAllowToNextStage: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  changeTitle: (title: string) => void;
};

const ActivationStep1 = ({ userData, changeCode, changeAllowToNextStage, changeTitle }: Props) => {
  const [inputError, setInputError] = useState("");

  const validateCode = (el: ChangeEvent<HTMLInputElement>) => {
    const value = el.currentTarget.value.toUpperCase().slice(0, 8);

    if (value.length > 0 && (!/^[a-zA-Z0-9]+$/.test(value) || value.indexOf(" ") !== -1)) {
      setInputError("Неверный код");
    } else {
      setInputError("");
    }

    changeCode(value);
  };

  useEffect(() => {
    changeTitle("Активация товара с WB");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userData.code.length === 8 && inputError === "") {
      changeAllowToNextStage(true);
    } else {
      changeAllowToNextStage(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.code, inputError]);

  return (
    <div className="flex flex-col justify-center items-center gap-2 px-6 py-2 w-full min-h-[320px]">
      <p className="text-lg text-center">Добро пожаловать на страницу активации!</p>
      <p className="text-lg text-center">Прохождение активации займет 5-10 минут, чтобы приступить - введите код с карточки</p>

      <TextInput
        maxWidth
        label="Код с карточки"
        value={userData.code}
        onChange={validateCode}
        type="text"
        placeholder="XXXX XXXX"
        className="input input-bordered w-full max-w-xs"
        spellCheck={false}
        autoCorrect="off"
        autoComplete="off"
        autoCapitalize="off"
        error={inputError}
      />

      <p className="font-sm text-center bg-base-300 py-2 px-1 lg:px-2 rounded-lg mt-6">
        Все данные введенные на любом из этапов остаются в вашем браузере и никуда не отправляются
      </p>
    </div>
  );
};

export default ActivationStep1;
