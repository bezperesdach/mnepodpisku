"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { ConfirmationType, UserData } from "../WbClient";
import TextInput from "@/components/TextInput/TextInput";
import { boolean } from "yup";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Props = {
  userData: UserData;
  // eslint-disable-next-line no-unused-vars
  changeCode: (value: string) => void;
  // eslint-disable-next-line no-unused-vars
  changeAllowToNextStage: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  changeTitle: (title: string) => void;
  confirmationType: ConfirmationType;
  // eslint-disable-next-line no-unused-vars
  changeConfirmationType: (type: ConfirmationType) => void;
};

const ActivationStep1 = ({
  confirmationType,
  changeConfirmationType,
  userData,
  changeCode,
  changeAllowToNextStage,
  changeTitle,
}: Props) => {
  const [validCode, setValidCode] = useState(false);
  const [inputError, setInputError] = useState("");

  const validateCode = (value: string) => {
    if (userData.code.length === 5 && userData.code.charAt(4) === " ") {
      if (value.length === 4) {
        value = value.slice(0, 3);
      }
    }

    if (userData.code.length === 3) {
      if (value.length === 4) {
        value += " ";
      }
    }

    if ((value.length === 8 || value.length === 9) && value.charAt(4) !== " ") {
      value = value.slice(0, 4) + " " + value.slice(4, 8);
    }

    const noSpaceValue = value.replace(" ", "");

    if (noSpaceValue.length === 8 && /^[a-zA-Z0-9]+$/.test(noSpaceValue)) {
      setInputError("");
      setValidCode(true);
    }

    if (noSpaceValue.length !== 8) {
      setInputError("");
      setValidCode(false);
    }

    if (!/^[a-zA-Z0-9]+$/.test(noSpaceValue)) {
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

    if (validCode && confirmationType !== "") {
      changeAllowToNextStage(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (validCode && confirmationType !== "") {
      changeAllowToNextStage(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validCode, confirmationType]);

  const selectChange = (item: string) => {
    changeConfirmationType(item as ConfirmationType);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 px-6 py-2 w-full min-h-[320px]">
      <p className="text-lg text-center text-yellow-300">
        Прохождение активации займет 5-10 минут, чтобы приступить - введите код с карточки
      </p>

      <TextInput
        maxWidth
        label="Код с карточки"
        value={userData.code}
        onChange={(el) => validateCode(el.currentTarget.value.toUpperCase().slice(0, 9))}
        type="text"
        placeholder="XXXX XXXX"
        className="max-w-xs"
        spellCheck={false}
        autoCorrect="off"
        autoComplete="off"
        autoCapitalize="off"
        error={inputError}
      />

      <div className="flex flex-col w-full gap-1 max-w-xs">
        <p>Способ подтверждения покупки</p>
        <Select onValueChange={selectChange} defaultValue={confirmationType}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Выберите нажатием" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cheque">ЧЕК</SelectItem>
            <SelectItem value="message">СООБЩЕНИЕ ПРОДАВЦУ НА ВБ</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <p className="font-sm text-center bg-secondary py-2 px-1 lg:px-2 rounded-lg mt-6">
        Все данные введенные на любом из этапов остаются в вашем браузере и никуда не отправляются
      </p>
    </div>
  );
};

export default ActivationStep1;
