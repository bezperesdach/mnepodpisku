"use client";

import LeaveVkReview from "@/components/LeaveVkReview/LeaveVkReview";
import cn from "@/utils/cn";
import Image from "next/image";

import Link from "next/link";
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
    <div className="flex flex-col justify-start items-center">
      <LeaveVkReview />
      <h1 className="text-4xl font-bold mt-6 lg:mt-4  text-center">Благодарим за покупку одноразовой турецкой карты!</h1>
      <p className="text-lg max-w-2xl text-center mt-2">Мы успешно проверили вашу оплату! Выполните инструкцию ниже :)</p>

      <p className="flex gap-2 justify-between items-center p-3 mt-4 mb-4 bg-base-300 rounded-md cursor-pointer">
        АКТИВАЦИЯ PSN BALANCE КАРТА
        <br /> Мой код активации - {code}
        <br />
      </p>

      <button
        className={cn("btn btn-primary", {
          "pointer-events-none": !canCopyCode,
        })}
        onClick={() => {
          copyCode();

          // @ts-ignore: Clipboard.copy defined in root.tsx
          Clipboard.copy(`АКТИВАЦИЯ АККАУНТА PSN\nМой код активации - ${code}`);
        }}
      >
        {canCopyCode ? `НАЖМИТЕ, ЧТОБЫ СКОПИРОВАТЬ` : "СКОПИРОВАНО"}
      </button>

      <p className="text-lg mt-2">Скопируйте сообщение выше и отправьте удобным способом</p>
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

      <Link className="btn btn-secondary text-white mt-10 mb-12" href="/">
        На главную
      </Link>
    </div>
  );
}

export default PsnBalanceCardClient;
