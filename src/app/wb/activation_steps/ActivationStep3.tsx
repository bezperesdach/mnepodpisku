import React, { useEffect, useState } from "react";
import TextInput from "@/components/TextInput/TextInput";
import { ConfirmationType, UserData } from "../WbClient";

type Props = {
  userData: UserData;
  confirmationType: ConfirmationType;
  confirmationSent: boolean;
  // eslint-disable-next-line no-unused-vars
  changeConfirmationType: (type: ConfirmationType) => void;
  // eslint-disable-next-line no-unused-vars
  changeConfirmationSent: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  onChange: (name: string, value: string) => void;
  // eslint-disable-next-line no-unused-vars
  changeAllowToNextStage: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  changeTitle: (title: string) => void;
};

function padZero(value: number) {
  return value < 10 ? `0${value}` : value;
}

const ActivationStep3 = ({
  userData,
  onChange,
  confirmationType,
  confirmationSent,
  changeConfirmationSent,
  changeConfirmationType,
  changeAllowToNextStage,
  changeTitle,
}: Props) => {
  const [inputError, setInputError] = useState("");
  // const [canCopyCode, setCanCopyCode] = useState(true);

  // const copyCode = () => {
  //   setCanCopyCode(false);
  //   setTimeout(() => {
  //     setCanCopyCode(true);
  //   }, 1000);
  // };

  useEffect(() => {
    changeTitle("Подтверждение покупки");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const validatePrice = (value: string) => {
      if (value.length > 0 && !/^[\d]+(?:[.,]\d*)?$/.test(value)) {
        setInputError("Сумма должна состоять только из цифр");
      } else {
        setInputError("");
      }
    };

    validatePrice(userData.price);
  }, [userData.price]);

  useEffect(() => {
    if (confirmationSent) {
      const currentDate = new Date();

      // Adjust the date to GMT+3
      currentDate.setHours(currentDate.getHours() + 3);

      // Format the date as DD.MM.YY HH:MM
      const formattedDate = `${padZero(currentDate.getUTCDate())}.${padZero(currentDate.getUTCMonth() + 1)}.${currentDate
        .getUTCFullYear()
        .toString()
        .slice(-2)} ${padZero(currentDate.getUTCHours())}:${padZero(currentDate.getUTCMinutes())}`;

      onChange("priceDate", formattedDate);
    } else {
      onChange("priceDate", "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmationSent]);

  useEffect(() => {
    if (userData.price !== "") {
      if (inputError === "" && confirmationSent) {
        changeAllowToNextStage(true);
      } else {
        changeAllowToNextStage(false);
      }
    } else {
      changeAllowToNextStage(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.price, inputError, confirmationSent]);

  return (
    <div className="flex flex-col justify-between items-center px-6 py-2 w-full min-h-[340px]">
      {confirmationType === "message" ? (
        <>
          <div className="flex flex-col justify-start items-center gap-2 w-full">
            <p className="text-lg text-center">
              Отправьте сообщение <span className="font-bold text-warning">ЧЕРЕЗ WILDBERRIES</span> в{" "}
              <span className="font-bold text-warning">ЧАТ С ПРОДАВЦОМ</span>{" "}
              <span className="font-bold text-error">ПО ИНСТРУКЦИИ НИЖЕ</span>, после этого переключите ползунок сообщение отправлено,
              укажите сумму покупки и нажмите далее
            </p>
            {/* <div className="flex gap-2 p-1 bg-base-300 items-center justify-center rounded-md ">
              <p>{canCopyCode ? `Код активации - ${userData.code.slice(0, 4) + " " + userData.code.slice(4, 8)}` : "Скопировано"}</p>
              <button
                className="flex justify-center items-center p-2 bg-base-100 rounded-md"
                onClick={() => {
                  copyCode();

                  // @ts-ignore: Clipboard.copy defined in root.tsx
                  Clipboard.copy(`Код активации - ${userData.code.slice(0, 4) + " " + userData.code.slice(4, 8)}`);
                }}
              >
                <CopyIcon />
              </button>
            </div> */}
            <div className="flex flex-col gap-3">
              <a className="btn btn-secondary text-white my-2" target="_blank" href="/guides/kak_otrpavit_soobshenie_prodavcu_wb">
                Как отправить сообщение продавцу?
              </a>
              <button className="btn btn-secondary text-white my-2" onClick={() => changeConfirmationType("cheque")}>
                У меня есть чек
              </button>
              {/* {!chatMessageSent && (
                <button className="btn btn-secondary text-white my-2" onClick={() => setNoCheque(!noCheque)}>
                  У меня есть чек
                </button>
              )} */}
            </div>

            <p className="text-sm text-center bg-base-300 border-2 border-error p-2 rounded-lg mt-2">
              При ошибочном или намеренном несоблюдении инструкций мы оставляем за собой право в переносе активации на установленный
              нами срок и/или отказе в активации
            </p>

            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="text-xl font-semibold mr-3">Сообщение отправлено</span>
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={confirmationSent}
                  onChange={() => changeConfirmationSent(!confirmationSent)}
                />
              </label>
            </div>

            <TextInput
              maxWidth
              label="Укажите сумму приобретения в валюте вашей страны"
              hidden={!confirmationSent}
              value={userData.price}
              onChange={(e) => {
                const value = e.currentTarget.value.trim().toUpperCase().slice(0, 8);

                onChange("price", value);
              }}
              type="text"
              inputMode="numeric"
              className="input input-primary w-full max-w-xs"
              spellCheck={false}
              autoCorrect="off"
              autoComplete="off"
              autoCapitalize="off"
              error={inputError}
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-start items-center gap-2 w-full">
            <p className="text-lg text-center">
              Отправьте <span className="font-bold text-warning">ЧЕК</span>{" "}
              <span className="font-bold text-error">СТРОГО ПО ИНСТРУКЦИИ</span> ниже, после чего переключите ползунок чек отправлен,
              укажите сумму чека и нажмите далее
            </p>

            <div className="flex flex-col gap-3">
              <a className="btn btn-secondary text-white my-2" target="_blank" href="/guides/kak_otpravit_chek_wb">
                Как отправить чек?
              </a>
              <button className="btn btn-secondary text-white my-2" onClick={() => changeConfirmationType("message")}>
                У меня нет чека
              </button>
            </div>

            <p className={"text-sm text-center bg-base-300 border-2 border-error p-2 rounded-lg mt-2"}>
              <strong>СКРИНШОТЫ, ПДФ ФАЙЛЫ ИЛИ СООБЩЕНИЯ С ЛИЧНОЙ ПОЧТЫ НЕ ПРИНИМАЕМ.</strong> При ошибочном или намеренном несоблюдении
              инструкций мы оставляем за собой право в переносе активации на установленный нами срок и/или отказе в активации
            </p>

            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="text-xl font-semibold mr-3">Чек отправлен</span>
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={confirmationSent}
                  onChange={() => changeConfirmationSent(!confirmationSent)}
                />
              </label>
            </div>

            <TextInput
              maxWidth
              label="Укажите сумму чека в рублях"
              hidden={!confirmationSent}
              value={userData.price}
              onChange={(e) => {
                const value = e.currentTarget.value.trim().toUpperCase().slice(0, 8);

                onChange("price", value);
              }}
              type="text"
              inputMode="numeric"
              className="input input-primary w-full max-w-xs"
              spellCheck={false}
              autoCorrect="off"
              autoComplete="off"
              autoCapitalize="off"
              error={inputError}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ActivationStep3;
