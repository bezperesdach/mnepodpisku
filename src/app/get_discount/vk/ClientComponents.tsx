"use client";

import { Button } from "@/components/ui/button";
import { ym } from "@/utils/ym";
import Image from "next/image";
import Link from "next/link";

function GetDiscountClient() {
  return (
    <div className="w-full flex gap-4 max-w-screen-lg mt-4 mb-6 p-6 rounded-3xl bg-[#0c1430]">
      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-3xl font-semibold tracking-tight">Получи скидку на следующую покупку!</h1>

        <p className="text-3xl font-semibold tracking-tight mt-4">Шаг 1</p>
        <p className="text-muted-foreground">Оставь отзыв в нашей группе ВК</p>

        <Button asChild>
          <Link
            className="mt-2"
            href="https://vk.com/topic-221413404_49184185"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              ym("reachGoal", "leaveVkReview");
            }}
          >
            Оставить отзыв
          </Link>
        </Button>

        <p className="text-3xl font-semibold tracking-tight mt-4">Шаг 2</p>
        <p className="text-muted-foreground">
          Свяжись с нами любым удобным способ ниже и сообщи ссылку страницы ВК с которой был оставлен отзыв
        </p>

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
        <p className="text-3xl font-semibold tracking-tight mt-4">Шаг 3</p>

        <p className="text-muted-foreground">Получи промокод и используй его на странице оплаты любой услуги из нашего каталога</p>
        <Button asChild>
          <Link className="mt-2" href="/">
            Открыть каталог
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default GetDiscountClient;
