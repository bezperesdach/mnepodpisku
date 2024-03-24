"use client";

import LeaveVkReview from "@/components/LeaveVkReview/LeaveVkReview";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

// import Link from "next/link";
import { useState } from "react";

type Props = {
  code: string;
};

function PsnBalanceCardClient({ code }: Props) {
  const [canCopyCode, setCanCopyCode] = useState(true);

  const copyCode = () => {
    setCanCopyCode(false);
    setTimeout(() => {
      setCanCopyCode(true);
    }, 500);
  };

  return (
    <div className="flex flex-col justify-start items-center w-full">
      <LeaveVkReview />

      <div className="w-full flex gap-4 max-w-screen-lg mt-4 mb-6 mx-2 p-6 rounded-3xl bg-[#0c1430]">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-3xl font-semibold tracking-tight">Благодарим за покупку одноразовой турецкой карты!</h1>

          <p className=" text-muted-foreground">Мы успешно проверили вашу оплату! Выполните инструкцию ниже</p>

          <p className="text-3xl font-semibold tracking-tight">Шаг 1</p>
          <p className=" text-muted-foreground">Скопируйте сообщение ниже</p>

          <p className="flex gap-2 justify-between items-center p-3 mt-2 mb-4 bg-background rounded-md cursor-pointer">
            АКТИВАЦИЯ PSN BALANCE КАРТА
            <br /> Мой код активации - {code}
            <br />
          </p>

          <Button
            className={cn("", {
              "pointer-events-none": !canCopyCode,
            })}
            onClick={() => {
              copyCode();

              // @ts-ignore: Clipboard.copy defined in root.tsx
              Clipboard.copy(`АКТИВАЦИЯ PSN BALANCE КАРТА\nМой код активации - ${code}`);
            }}
          >
            {canCopyCode ? `НАЖМИТЕ, ЧТОБЫ СКОПИРОВАТЬ` : "СКОПИРОВАНО"}
          </Button>
          <p className="text-3xl font-semibold tracking-tight">Шаг 2</p>
          <p className=" text-muted-foreground">Вышлите данное сообщение в удобный вам мессенджер</p>

          <div className="flex gap-4 mt-2">
            <a href="https://vk.com/im?sel=-221413404" target="_blank" rel="noopener noreferrer">
              <Image src="/socials_icons/vk_compact.png" alt="vk" width={48} height={48} />
            </a>

            <a href="https://t.me/pstopup" target="_blank" rel="noopener noreferrer">
              <Image src="/socials_icons/telegram_icon.png" alt="telegram" width={48} height={48} />
            </a>

            <a className="flex gap-1 items-center" href="https://wa.me/79939011007" target="_blank" rel="noopener noreferrer">
              <Image src="/socials_icons/whatsapp_icon.png" alt="whatsapp" width={48} height={48} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PsnBalanceCardClient;
