"use client";

import cn from "@/utils/cn";
import { ym } from "@/utils/ym";
import { CopyIcon } from "@primer/octicons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  code: string;
};

function VerificationClient({ code }: Props) {
  const [canCopyCode, setCanCopyCode] = useState(true);

  const copyCode = () => {
    setCanCopyCode(false);
    setTimeout(() => {
      setCanCopyCode(true);
    }, 500);
  };

  return (
    <div className="flex flex-col justify-start items-center">
      <a
        className="flex flex-col w-full justify-center items-center mt-6 lg:mt-10 shadow-lg rounded-xl p-8 bg-secondary mb-4 "
        href="https://vk.com/topic-221413404_49184185"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          ym("reachGoal", "leaveVkReview");
        }}
      >
        <p className="text-2xl font-bold text-white text-center">Оставь отзыв в ВК</p>
        <p className="text-xl mt-2 text-white text-center">Получи скидку на следующую покупку!</p>
        <div className="btn mt-4">ОСТАВИТЬ ОТЗЫВ</div>
      </a>
      <h1 className="text-4xl font-bold mt-6 lg:mt-4  text-center">Благодарим за покупку!</h1>
      <p className="text-lg max-w-2xl text-center mt-1">
        Мы успешно проверили вашу оплата! Скором мы с вами свяжемся и активируем приобретенный вами товар!
      </p>
      <div className="relative flex w-full py-2 items-center max-w-2xl px-2 lg:px-24">
        <div className="flex-grow border-t border-base-content/30 border-dashed"></div>
        <span className="flex-shrink mx-4 text-base-content/80 ">или</span>
        <div className="flex-grow border-t border-base-content/30 border-dashed "></div>
      </div>
      <div className="flex gap-4 mt-2">
        <a href="https://vk.com/im?sel=-221413404" target="_blank" rel="noopener noreferrer">
          <Image src="/socials_icons/vk_compact.png" alt="vk" width={48} height={48} />
        </a>

        <a href="https://t.me/pstopup" target="_blank" rel="noopener noreferrer">
          <Image src="/socials_icons/telegram_icon.png" alt="telegram" width={48} height={48} />
        </a>

        <a
          className="flex gap-1 items-center"
          href="https://wa.me/79939011007?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%83%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B5%D1%81%D1%82%D1%8C%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%20%D0%BF%D0%BE%20%D0%BC%D0%BE%D0%B5%D0%BC%D1%83%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D1%83"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/socials_icons/whatsapp_icon.png" alt="whatsapp" width={48} height={48} />
        </a>
      </div>
      <p className="text-center mt-2">Свяжитесь с нами самостоятельно написав нам:</p>
      <button
        className={cn("flex gap-2 justify-between items-center p-3 mt-2 mb-4 bg-base-300 rounded-md cursor-pointer", {
          "pointer-events-none": !canCopyCode,
        })}
        onClick={() => {
          copyCode();

          // @ts-ignore: Clipboard.copy defined in root.tsx
          Clipboard.copy(`Мой код активации - ${code}`);
        }}
      >
        <p>{canCopyCode ? `Мой код активации - ${code}` : "Скопировано"}</p>
        <CopyIcon />
      </button>

      <Link className="btn btn-secondary text-white mt-4 mb-12" href="/">
        На главную
      </Link>
    </div>
  );
}

export default VerificationClient;
