import React, { useEffect, useState } from "react";
import cn from "@/utils/cn";
import TextInput from "@/components/TextInput/TextInput";
import { UserData } from "../WbClient";

type Props = {
  userData: UserData;
  confirmationSent: boolean;
  messageOnly?: string;
  // eslint-disable-next-line no-unused-vars
  setConfirmationSent: (value: boolean) => void;
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

const ActivationStep2 = ({
  messageOnly,
  userData,
  onChange,
  confirmationSent,
  setConfirmationSent,
  changeAllowToNextStage,
  changeTitle,
}: Props) => {
  // const [noCheque, setNoCheque] = useState(false);
  const [inputError, setInputError] = useState("");

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
    const currentDate = new Date();

    // Adjust the date to GMT+3
    currentDate.setHours(currentDate.getHours() + 3);

    // Format the date as DD.MM.YY HH:MM
    const formattedDate = `${padZero(currentDate.getUTCDate())}.${padZero(currentDate.getUTCMonth() + 1)}.${currentDate
      .getUTCFullYear()
      .toString()
      .slice(-2)} ${padZero(currentDate.getUTCHours())}:${padZero(currentDate.getUTCMinutes())}`;

    onChange("priceDate", formattedDate);
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
      <div className="flex flex-col justify-start items-center gap-2 w-full">
        {messageOnly ? (
          <p className="text-lg text-center">
            Отправьте сообщение <span className="font-bold text-warning">ЧЕРЕЗ WILDBERRIES</span> в{" "}
            <span className="font-bold text-warning">ЧАТ С ПРОДАВЦОМ</span> по инструкции ниже, после этого переключите ползунок
            сообщение отправлено, укажите сумму покупки и нажмите далее
          </p>
        ) : (
          <p className="text-lg text-center">
            Отправьте чек <span className="font-bold text-warning">СТРОГО ПО ИНСТРУКЦИИ</span> ниже, после чего переключите ползунок чек
            отправлен, укажите сумму чека и нажмите далее
          </p>
        )}

        <div className="flex flex-col gap-3">
          {messageOnly ? (
            <a className="btn btn-secondary text-white my-2" target="_blank" href="/guides/kak_otrpavit_soobshenie_prodavcu_wb">
              Как отправить сообщение продавцу?
            </a>
          ) : (
            <a className="btn btn-secondary text-white my-2" target="_blank" href="/guides/kak_otpravit_chek_wb">
              Как отправить чек?
            </a>
          )}
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="text-xl font-semibold mr-3">{messageOnly ? "Сообщение отправлено" : "Чек отправлен"}</span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={confirmationSent}
              onChange={() => setConfirmationSent(!confirmationSent)}
            />
          </label>
        </div>

        <TextInput
          maxWidth
          label={messageOnly ? "Укажите сумму приобретения в валюте вашей страны" : "Укажите сумму чека в рублях"}
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
        {messageOnly ? (
          <p
            className={cn("text-sm text-center bg-base-300 border-2 border-error p-2 rounded-lg mt-2", {
              hidden: !confirmationSent,
            })}
          >
            При ошибочном или намеренном несоблюдении инструкций мы оставляем за собой право в переносе активации на установленный нами
            срок и/или отказе в активации
          </p>
        ) : (
          <p
            className={cn("text-sm text-center bg-base-300 border-2 border-error p-2 rounded-lg mt-2", {
              hidden: !confirmationSent,
            })}
          >
            <strong>СКРИНШОТЫ, ПДФ ФАЙЛЫ ИЛИ СООБЩЕНИЯ С ЛИЧНОЙ ПОЧТЫ НЕ ПРИНИМАЕМ.</strong> При ошибочном или намеренном несоблюдении
            инструкций мы оставляем за собой право в переносе активации на установленный нами срок и/или отказе в активации
          </p>
        )}
        {!messageOnly && (
          <details className="group bg-secondary text-white rounded-2xl mt-6" open={true}>
            <summary className="flex justify-between items-center text-xl font-medium cursor-pointer list-none px-4 py-4">
              <span>У меня нет чека</span>
            </summary>
            <div className="px-4 pb-4">
              Созданием чеков занимается компания Вайлдберис, мы как продавце не являемся ее сотрудниками и не контроллируем этот
              процесс
              <br />
              <br />
              По нашим наблюдениям почти всегда{" "}
              <span className="font-bold text-warning">чек приходит в день, когда вы забрали заказ</span> из ПВЗ
              <br />
              <br />
              <span className="font-bold text-warning">В редких случаях чек приходит спустя 1-2</span> дня после забора товара из ПВЗ
              <br />
              <br />
              <span className="font-bold">
                Если вы ждете чек больше двух 2 дней - свяжитесь с нами и сообщите об этом, мы решим данный вопрос.
              </span>
            </div>
          </details>
        )}
      </div>
    </div>
  );
};

export default ActivationStep2;
