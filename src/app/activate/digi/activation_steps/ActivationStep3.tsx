import { ActivationTypes } from "@/utils/activationUtils";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UserData } from "../DigiClient";
import { Button } from "@/components/ui/button";

type Props = {
  userData: UserData;
  activationType?: ActivationTypes;
  // eslint-disable-next-line no-unused-vars
  changeTitle: (title: string) => void;
};

const ActivationStep3: React.FC<Props> = ({ userData, activationType, changeTitle }: Props) => {
  const [canCopyCode, setCanCopyCode] = useState(true);

  const copyCode = () => {
    setCanCopyCode(false);
    setTimeout(() => {
      setCanCopyCode(true);
    }, 500);
  };

  useEffect(() => {
    // Set the title when the component is visible
    changeTitle("Отправка запроса активации");
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
        <div className="bg-background p-4 rounded-lg">
          {actionName(activationType)}
          <p>КОД АКТИВАЦИИ {userData.code}</p>
          <p>EMAIL {userData.email}</p>
          <p>ПАРОЛЬ {userData.password}</p>
          <p>РЕЗЕРВНЫЙ КОД {userData.accessCode}</p>
          {userData.secondAccessCode && <p>2 РЕЗЕРВНЫЙ КОД {userData.secondAccessCode}</p>}
        </div>
        <Button
          className={cn("mt-2", {
            "pointer-events-none": !canCopyCode,
          })}
          onClick={() => {
            copyCode();

            // @ts-ignore: Clipboard.copy defined in root.tsx
            Clipboard.copy(
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
      </div>
      <div className="flex flex-col justify-start items-center gap-2 w-full mt-8">
        <p className="text-center">
          Вышлите данное сообщение <strong className="text-yellow-400 font-bold">ТЕКСТОМ</strong> удобным для вас способом ниже:
        </p>
        <div className="flex gap-4 mt-2 mb-2">
          <a href="https://vk.com/im?sel=-221413404" target="_blank" rel="noopener noreferrer">
            <Image width={46} height={46} src="/socials_icons/vk_compact.png" alt="Вк лого" />
          </a>

          <a href="https://t.me/pstopup" target="_blank" rel="noopener noreferrer">
            <Image width={46} height={46} src="/socials_icons/telegram_icon.png" alt="Telegram лого" />
          </a>

          <a className="flex gap-1 items-center" href="https://wa.me/79939011007" target="_blank" rel="noopener noreferrer">
            <Image width={46} height={46} src="/socials_icons/whatsapp_icon.png" alt="Whatsapp лого" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActivationStep3;
