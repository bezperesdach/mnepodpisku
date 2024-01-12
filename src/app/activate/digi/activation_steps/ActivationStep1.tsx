"use client";

import TextInput from "@/components/TextInput/TextInput";
import React, { ChangeEvent, useEffect, useState } from "react";

type Props = {
  code: string;
  // eslint-disable-next-line no-unused-vars
  changeCode: (value: string) => void;
  // eslint-disable-next-line no-unused-vars
  changeAllowToNextStage: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  changeTitle: (title: string) => void;
};

function ActivationStep1({ code, changeCode, changeAllowToNextStage, changeTitle }: Props) {
  const [error, setError] = useState("");

  const validateCode = (el: ChangeEvent<HTMLInputElement>) => {
    const value = el.currentTarget.value.toUpperCase();

    if (value.length > 0 && (!/^[a-zA-Z0-9]+$/.test(value) || value.indexOf(" ") !== -1)) {
      setError("Неверный код");
    } else {
      setError("");
    }

    changeCode(value);
  };

  useEffect(() => {
    if (code.length > 5 && error === "") {
      changeAllowToNextStage(true);
    } else {
      changeAllowToNextStage(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  useEffect(() => {
    changeTitle("Ввод кода активации");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-2 px-6 py-2 w-full min-h-[320px]">
      <p className="text-lg text-center font-medium">Добро пожаловать на страницу активации!</p>
      <p className="text-lg text-center">Прохождение активации займет 2-5 минут, чтобы приступить - введите уникальный код</p>
      <TextInput
        maxWidth
        label="Введите уникальный код"
        value={code}
        onChange={validateCode}
        type="text"
        placeholder="XXXXXXXXXXXXXXXXX"
        className="input input-bordered w-full"
        spellCheck={false}
        autoCorrect="off"
        autoComplete="off"
        autoCapitalize="off"
        error={error}
      />

      <p className="font-sm text-center bg-base-300 py-2 px-1 lg:px-2 rounded-lg mt-6">
        Все данные введенные на любом из этапов остаются в вашем браузере и никуда не отправляются
      </p>
    </div>
  );
}

export default ActivationStep1;
