"use client";

import { useEffect, useState } from "react";
import { ConfirmationType, UserData } from "../WbClient";
import TextInput from "@/components/TextInput/TextInput";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
  const [validCode, setValidCode] = useState(false);
  const [inputError, setInputError] = useState("");

  const validateCode = (value: string) => {
    const noSpaceValue = value;

    if (noSpaceValue.length <= 4) {
      setInputError("Неверный id");
      setValidCode(false);
    } else {
      if (/^[0-9]+$/.test(noSpaceValue)) {
        setInputError("");
        setValidCode(true);
      }
    }

    if (!/^[0-9]+$/.test(noSpaceValue)) {
      setInputError("Код неверный");
      setValidCode(false);
    }

    changeCode(value);
  };

  useEffect(() => {
    changeTitle("Активация товара с WB");
    if (userData.code !== "") {
      validateCode(userData.code);
    }

    if (validCode) {
      changeAllowToNextStage(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (validCode) {
      changeAllowToNextStage(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validCode]);

  return (
    <div className="flex flex-col justify-center items-center gap-2 px-6 py-2 w-full min-h-[320px]">
      <p className="text-lg text-center text-yellow-300">
        Прохождение активации займет 2-5 минут, чтобы приступить - введите id покупки
      </p>

      <TextInput
        label="Id покупки"
        value={userData.code}
        onChange={(el) => validateCode(el.currentTarget.value.toUpperCase().slice(0, 9))}
        type="text"
        placeholder="123456"
        className="max-w-xs"
        spellCheck={false}
        autoCorrect="off"
        autoComplete="off"
        autoCapitalize="off"
        error={inputError}
      />

      <p className="font-sm text-center bg-secondary py-2 px-1 lg:px-2 rounded-lg mt-6">
        Все данные введенные на любом из этапов остаются в вашем браузере и никуда не отправляются
      </p>
    </div>
  );
};

export default ActivationStep1;
