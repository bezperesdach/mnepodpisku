import React, { useState, useEffect } from "react";
import Image from "next/image";
import cn from "@/utils/cn";
import { UserData } from "../WbClient";

type Props = {
  userData: UserData;
  chatMessageSent: boolean;

  chequeSent: boolean;
  // eslint-disable-next-line no-unused-vars
  changeTitle: (title: string) => void;
};

const ActivationStep4 = ({ userData, chatMessageSent, chequeSent, changeTitle }: Props) => {
  const [canCopyCode, setCanCopyCode] = useState(true);

  const copyCode = () => {
    setCanCopyCode(false);
    setTimeout(() => {
      setCanCopyCode(true);
    }, 1000);
  };

  useEffect(() => {
    changeTitle("Отправка запроса активации");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actionName = (type: string | undefined) => {
    switch (type) {
      case "пополнение":
        return "АКТИВАЦИЯ ПОПОЛНЕНИЯ PSN";
      case "игра":
        return "АКТИВАЦИЯ ИГРЫ PSN";
      case "аккаунт":
        return "АКТИВАЦИЯ АККАУНТА PSN";
      case "одноразовая_карта":
        return "АКТИВАЦИЯ ОДНОРАЗОВАЯ КАРТА PSN";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col justify-between items-center px-6 py-2 w-full min-h-[320px]">
      <div className="flex flex-col justify-start items-center gap-2 w-full">
        <p>Ваше сообщение активации готово</p>
        <div className="bg-base-200 p-4 rounded-lg">
          <p>{actionName(userData.type)}</p>
          <p>КОД АКТИВАЦИИ {userData.code.slice(0, 4) + " " + userData.code.slice(4, 8)}</p>
          {chequeSent && (
            <p>
              ЧЕК НА {userData.price} - {userData.priceDate}
            </p>
          )}
          {chatMessageSent && (
            <p>
              СООБЩЕНИЕ НА {userData.price} - {userData.priceDate}
            </p>
          )}
          {(userData.type === "пополнение" || userData.type === "игра") && (
            <>
              <p>EMAIL {userData.email}</p>
              <p>ПАРОЛЬ {userData.password}</p>
              <p>РЕЗЕРВНЫЙ КОД {userData.accessCode}</p>
            </>
          )}
          {userData.type === "аккаунт" && <p>EMAIL {userData.email}</p>}
        </div>
        <button
          className={cn("btn btn-primary mt-2 text-white", {
            "pointer-events-none": !canCopyCode,
          })}
          onClick={() => {
            copyCode();

            // @ts-ignore: Clipboard.copy defined in root.tsx
            Clipboard.copy(
              `${actionName(userData.type)}\nКОД АКТИВАЦИИ ${userData.code.slice(0, 4) + " " + userData.code.slice(4, 8)}\n${
                chequeSent ? "ЧЕК" : ""
              }${chatMessageSent ? "СООБЩЕНИЕ" : ""} НА СУММУ ${userData.price} - ${userData.priceDate}\nEMAIL - ${userData.email}${
                userData.password ? "\nПАРОЛЬ - " + userData.password : ""
              }${userData.accessCode ? "\nРЕЗЕРВНЫЙ КОД - " + userData.accessCode : ""}`
            );
          }}
        >
          {canCopyCode ? "НАЖМИТЕ ДЛЯ КОПИРОВАНИЯ" : "СКОПИРОВАНО"}
        </button>
      </div>
      <div className="flex flex-col justify-start items-center gap-2 w-full mt-8">
        <p className="text-center">
          Вышлите данное сообщение <strong className="text-warning font-bold">ТЕКСТОМ</strong> удобным для вас способом
        </p>
        <div className="flex gap-4 mt-2 mb-2">
          <a href="https://vk.com/im?sel=-221413404" target="_blank" rel="noopener noreferrer">
            <Image width={48} height={48} src="/socials_icons/vk_compact.png" alt="Вк лого" />
          </a>
          <a href="https://t.me/pstopup" target="_blank" rel="noopener noreferrer">
            <Image width={48} height={48} src="/socials_icons/telegram_icon.png" alt="Telegram лого" />
          </a>
          <a className="flex gap-1 items-center" href="https://wa.me/79939011007" target="_blank" rel="noopener noreferrer">
            <Image width={48} height={48} src="/socials_icons/whatsapp_icon.png" alt="Whatsapp лого" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActivationStep4;
