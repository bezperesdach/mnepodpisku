"use client";

import { ym } from "@/utils/ym";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Footer({}) {
  const pathname = usePathname();

  return (
    <footer className="w-full border-b border-border/40 bg-[#0A1127]/95 mt-16">
      <div className="px-2 md:px-4 flex max-w-screen-lg items-center mx-auto">
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-between mt-4">
            <div className="flex flex-col mt-2">
              <div className="flex flex-wrap gap-10">
                <div className="flex flex-col justify-start items-start gap-1">
                  <Link href="/">Каталог</Link>
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

            <div className="flex flex-wrap justify-between">
              {!(pathname.startsWith("/activate/wb") || pathname.startsWith("/wb")) && (
                <div className="flex gap-4 mt-2">
                  <a
                    href="https://vk.com/mnepodpisku"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      ym("reachGoal", "socialnetwork");
                    }}
                  >
                    <Image width={36} height={36} src="/socials_icons/vk_compact.png" alt="Вк лого" />
                  </a>

                  <a
                    href="https://t.me/pstopup"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      ym("reachGoal", "socialnetwork");
                    }}
                  >
                    <Image width={36} height={36} src="/socials_icons/telegram_icon.png" alt="Telegram лого" />
                  </a>

                  <a
                    href="https://wa.me/79939011007"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      ym("reachGoal", "socialnetwork");
                    }}
                  >
                    <Image width={36} height={36} src="/socials_icons/whatsapp_icon.png" alt="Whatsapp лого" />
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <p>Часы работы</p>

            <div className="flex flex-col lg:flex-row flex-wrap gap-1 lg:gap-4">
              <p className="mt-1 font-medium ">
                ВТ-ПТ: <span className="bg-primary rounded-lg py-1 px-2">13:00-21:00 МСК</span>
              </p>
              <p className="mt-1 font-medium">
                СБ-ВС: <span className="bg-primary rounded-lg py-1 px-2">14:00-18:00 МСК</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-between max-h-[64px] items-center text-base mt-4 mb-4">
            <div className="flex gap-2 items-center grid-flow-col">
              <p className="font-semibold">©2023 - МНЕПОДПИСКУ</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
