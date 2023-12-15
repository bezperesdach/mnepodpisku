"use client";

import { ym } from "@/utils/ym";
import { useEffect } from "react";
import Image from "next/image";

function VerificationFailClient() {
  useEffect(() => ym("reachGoal", "uniqueCodeFailedToVerify"), []);

  return (
    <div className="flex-1 flex flex-col justify-center items-center h-full">
      <h1 className="text-4xl font-bold mt-6 lg:mt-4  text-center">Произошла ошибка</h1>
      <p className="text-lg max-w-2xl text-center mt-1">Пожалуйста, свяжитесь с нами</p>
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
  );
}

export default VerificationFailClient;
