"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppContext } from "../AppContextWrapper/AppContextWrapper";
import { usePathname } from "next/navigation";

const Footer = () => {
  const { dispatch } = useContext(AppContext);
  const pathname = usePathname();

  return (
    <footer className="mt-auto shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,.1)]">
      <div className="w-full max-w-[1240px] mx-auto px-4 py-2">
        <div className="w-full flex flex-col">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col">
              <p className="font-bold">Часы работы</p>

              <div className="flex flex-col lg:flex-row flex-wrap gap-1 lg:gap-4">
                <p className="mt-1 font-medium ">
                  ВТ-ПТ: <span className="text-secondary">13:00-21:00 МСК</span>
                </p>
                <p className="mt-1 font-medium">
                  СБ-ВС: <span className="text-secondary">14:00-18:00 МСК</span>
                </p>
              </div>
            </div>

            {!(pathname.startsWith("/activate/wb") || pathname.startsWith("/wb")) && (
              <div className="flex gap-4 mt-2">
                <a href="https://vk.com/mnepodpisku" target="_blank" rel="noopener noreferrer">
                  <Image width={36} height={36} src="/socials_icons/vk_compact.png" alt="Вк лого" />
                </a>

                <a href="https://t.me/pstopup" target="_blank" rel="noopener noreferrer">
                  <Image width={36} height={36} src="/socials_icons/telegram_icon.png" alt="Telegram лого" />
                </a>

                <a href="https://wa.me/79939011007" target="_blank" rel="noopener noreferrer">
                  <Image width={36} height={36} src="/socials_icons/whatsapp_icon.png" alt="Whatsapp лого" />
                </a>
              </div>
            )}
          </div>

          <div className="flex flex-col mt-2">
            <p className="text-lg font-bold">Меню</p>
            <div className="flex flex-wrap gap-10">
              <div className="flex flex-col justify-start items-start gap-1">
                <button onClick={() => dispatch({ type: "toggle_catalogue" })}>Каталог</button>
                <Link href="/guides">Инструкции</Link>
              </div>
              <div className="flex flex-col justify-start items-start gap-1">
                {/* <a href="https://vk.com/topic-221413404_49184185" target="_blank" rel="noopener noreferrer">
                  Отзывы
                </a> */}
                <a href="https://oplata.info/info/" target="_blank" rel="noopener noreferrer">
                  Мои покупки
                </a>
                <a href="/oferta.docx" target="_blank" rel="noopener noreferrer">
                  Оферта
                </a>
              </div>
              <div className="flex flex-col justify-start items-start gap-1">
                <Link href="/blog/">Блог</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between max-h-[64px] items-center text-base mt-4">
            <div className="flex gap-2 items-center grid-flow-col">
              <p className="font-semibold">©2023 - МНЕПОДПИСКУ</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
