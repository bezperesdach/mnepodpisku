"use client";

import { AppContext } from "@/components/AppContextWrapper/AppContextWrapper";
import { ym } from "@/utils/ym";
import Image from "next/image";
import { useContext } from "react";

function GetDiscountClient() {
  const { dispatch } = useContext(AppContext);
  return (
    <>
      <p className="text-xl lg:text-2xl font-bold mt-4">ШАГ 1:</p>
      <a
        className="flex flex-col w-full justify-center items-center mt-2 shadow-lg rounded-xl p-8 bg-secondary mb-4 "
        href="https://vk.com/topic-221413404_49184185"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          ym("reachGoal", "leaveVkReview");
        }}
      >
        <p className="text-2xl font-bold text-white text-center">Оставь отзыв в ВК</p>
        <div className="btn mt-4">ОСТАВИТЬ ОТЗЫВ</div>
      </a>
      <p className="text-xl lg:text-2xl font-bold mt-4">ШАГ 2:</p>
      <p className="text-lg">Свяжись с нами любым удобным способ и сообщи ссылку страницы ВК с которой был оставлен отзыв</p>
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
      <p className="text-xl lg:text-2xl font-bold mt-4">ШАГ 3:</p>
      <p className="text-lg">
        Получи промокод и используй его на странице оплаты любой услуги из нашего{" "}
        <button className="underline text-secondary" onClick={() => dispatch({ type: "toggle_catalogue" })}>
          каталога
        </button>
      </p>
    </>
  );
}

export default GetDiscountClient;
