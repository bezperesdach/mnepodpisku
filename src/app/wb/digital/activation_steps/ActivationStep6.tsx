import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { UserData } from "../WbClient";
import { Button } from "@/components/ui/button";
import { SyncIcon } from "@primer/octicons-react";

type Props = {
  userData: UserData;
  // eslint-disable-next-line no-unused-vars
  changeTitle: (title: string) => void;
};

const ActivationStep5 = ({ userData, changeTitle }: Props) => {
  const [testingCopy, setTestingCopy] = useState(true);
  const [copySuccess, setCopySuccess] = useState(true);

  const [canCopyCode, setCanCopyCode] = useState(true);

  const copyCode = () => {
    setCanCopyCode(false);
    setTimeout(() => {
      setCanCopyCode(true);
    }, 1000);
  };

  useEffect(() => {
    // Set the title when the component is visible
    changeTitle("Отправка запроса активации");

    const copyTest = async () => {
      try {
        await window.CopyToClipboard("");
      } catch (err) {
        console.log(err);
        setCopySuccess(false);
      } finally {
        setTestingCopy(false);
      }
    };

    copyTest();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actionName = (type: string | undefined) => {
    switch (type) {
      case "spotify":
        return "АКТИВАЦИЯ SPOTIFY PREMIUM";
      case "пополнение":
        return "АКТИВАЦИЯ ПОПОЛНЕНИЯ ТУРЕЦКОГО АККАУНТА PSN";
      case "ps_plus":
        return "АКТИВАЦИЯ PS PLUS НА ТУРЕЦКИЙ АККАУНТ PSN";
      case "игра":
        return "АКТИВАЦИЯ ИГРЫ НА ТУРЕЦКИЙ АККАУНТ PSN";
      case "аккаунт":
        return "АКТИВАЦИЯ ТУРЕЦКОГО АККАУНТА PSN";
      case "аккаунт_баланс":
        return "АКТИВАЦИЯ ТУРЕЦКОГО АККАУНТА PSN С БАЛАНСОМ";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col justify-between items-center px-6 py-2 w-full min-h-[320px]">
      <div className="flex flex-col justify-start items-center gap-2 w-full">
        <p>Ваше сообщение активации готово</p>
        {testingCopy ? (
          <div className="flex justify-center items-center min-h-[180px]">
            <SyncIcon className="animate-spin" />
          </div>
        ) : (
          <>
            <div className="bg-background p-4 rounded-lg">
              <p>{actionName(userData.type)}</p>
              <p>ID ПОКУПКИ {userData.code}</p>
              {(userData.type === "пополнение" || userData.type === "игра" || userData.type === "ps_plus") && (
                <>
                  <p>EMAIL {userData.email}</p>
                  <p>ПАРОЛЬ {userData.password}</p>
                  <p>РЕЗЕРВНЫЙ КОД {userData.accessCode}</p>
                  {userData.secondAccessCode && <p>2 РЕЗЕРВНЫЙ КОД {userData.secondAccessCode}</p>}
                </>
              )}
              {(userData.type === "аккаунт" || userData.type === "аккаунт_баланс") && <p>EMAIL {userData.email}</p>}
              {userData.type === "spotify" && (
                <>
                  <p>EMAIL {userData.email}</p>
                  <p>ПАРОЛЬ {userData.password}</p>
                </>
              )}
            </div>
            {copySuccess && (
              <Button
                className={cn("min-w-[240px]", {
                  "pointer-events-none": !canCopyCode,
                })}
                onClick={() => {
                  copyCode();

                  let data = "";

                  if (userData.type === "пополнение" || userData.type === "игра" || userData.type === "ps_plus") {
                    data += `\nEMAIL - ${userData.email}\nПАРОЛЬ - ${userData.password}\nРЕЗЕРВНЫЙ КОД - ${userData.accessCode}`;
                    if (userData.type === "ps_plus") {
                      data += `\n2 РЕЗЕРВНЫЙ КОД - ${userData.secondAccessCode}`;
                    }
                  }

                  if (userData.type === "аккаунт" || userData.type === "аккаунт_баланс") {
                    data += `\nEMAIL - ${userData.email}`;
                  }

                  if (userData.type === "spotify") {
                    data += `\nEMAIL - ${userData.email}\nПАРОЛЬ - ${userData.password}`;
                  }

                  window.CopyToClipboard(`${actionName(userData.type)}\nID ПОКУПКИ ${userData.code}${data}`);
                }}
              >
                {canCopyCode ? "НАЖМИТЕ ДЛЯ КОПИРОВАНИЯ" : "СКОПИРОВАНО"}
              </Button>
            )}
          </>
        )}
      </div>
      {!testingCopy && (
        <div className="flex flex-col justify-start items-center gap-2 w-full mt-8">
          {!copySuccess && (
            <p className="text-center">
              <strong className="text-yellow-400 font-bold">СКОПИРУЙТЕ</strong> текст выше и вышлите его{" "}
              <strong className="text-yellow-400 font-bold">ТЕКСТОМ</strong> удобным для вас способом ниже:
            </p>
          )}
          {copySuccess && (
            <p className="text-center">
              Вышлите данное сообщение <strong className="text-yellow-400 font-bold">ТЕКСТОМ</strong> удобным для вас способом ниже:
            </p>
          )}
          <div className="flex gap-4 mt-2 mb-2">
            <a href="https://t.me/pstopup" target="_blank" rel="noopener noreferrer">
              <Image width={48} height={48} src="/socials_icons/telegram_icon.png" alt="Telegram лого" />
            </a>
            <a className="flex gap-1 items-center" href="https://wa.me/79939011007" target="_blank" rel="noopener noreferrer">
              <Image width={48} height={48} src="/socials_icons/whatsapp_icon.png" alt="Whatsapp лого" />
            </a>
          </div>
          <p className="text-muted-foreground">(Нажмите на один из логотипов выше чтобы открыть)</p>
        </div>
      )}
    </div>
  );
};

export default ActivationStep5;
