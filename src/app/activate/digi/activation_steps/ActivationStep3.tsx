import { ActivationTypes } from "@/utils/activationUtils";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UserData } from "../DigiClient";
import { Button } from "@/components/ui/button";
import { SyncIcon } from "@primer/octicons-react";

type Props = {
  userData: UserData;
  activationType?: ActivationTypes;
  // eslint-disable-next-line no-unused-vars
  changeTitle: (title: string) => void;
};

const ActivationStep3: React.FC<Props> = ({ userData, activationType, changeTitle }: Props) => {
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

  const actionName = (type: ActivationTypes | undefined) => {
    switch (type) {
      case "ps_ea_play":
        return "АКТИВАЦИЯ PS EA PLAY";
      case "ps_plus":
        return "АКТИВАЦИЯ PS PLUS";
      case "psn_balance":
        return "АКТИВАЦИЯ PSN BALANCE";
      case undefined:
        return "АКТИВАЦИЯ С САЙТА";
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
              {actionName(activationType)}
              <p>КОД АКТИВАЦИИ {userData.code}</p>
              <p>EMAIL {userData.email}</p>
              <p>ПАРОЛЬ {userData.password}</p>
              <p>РЕЗЕРВНЫЙ КОД {userData.accessCode}</p>
              {userData.secondAccessCode && <p>2 РЕЗЕРВНЫЙ КОД {userData.secondAccessCode}</p>}
            </div>
            {copySuccess && (
              <Button
                className={cn("mt-2 min-w-[240px]", {
                  "pointer-events-none": !canCopyCode,
                })}
                onClick={() => {
                  copyCode();

                  window.CopyToClipboard(
                    `${actionName(activationType)}\nКОД АКТИВАЦИИ ${userData.code}\nEMAIL - ${userData.email}\nПАРОЛЬ - ${
                      userData.password
                    }\nРЕЗЕРВНЫЙ КОД - ${userData.accessCode}${
                      userData.secondAccessCode && "\n2 РЕЗЕРВНЫЙ КОД - " + userData.secondAccessCode
                    }`
                  );
                }}
              >
                {canCopyCode ? `НАЖМИТЕ ДЛЯ КОПИРОВАНИЯ` : "СКОПИРОВАНО"}
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
              <Image width={46} height={46} src="/socials_icons/telegram_icon.png" alt="Telegram лого" />
            </a>

            <a className="flex gap-1 items-center" href="https://wa.me/79939011007" target="_blank" rel="noopener noreferrer">
              <Image width={46} height={46} src="/socials_icons/whatsapp_icon.png" alt="Whatsapp лого" />
            </a>
          </div>
          <p className="text-muted-foreground">(Нажмите на один из логотипов выше чтобы открыть)</p>
        </div>
      )}
    </div>
  );
};

export default ActivationStep3;
