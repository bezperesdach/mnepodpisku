/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function GetDiscountClient() {
  return (
    <>
      <div className="w-full flex gap-4 max-w-screen-lg mt-4 mb-6 p-6 rounded-3xl bg-[#0c1430]">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-3xl font-semibold tracking-tight">Получи бонусные лиры на следующую покупку за отзыв на ВБ!</h1>

          <p className="text-3xl font-semibold tracking-tight mt-4">Шаг 1</p>
          <p className="text-muted-foreground">
            Открой приложение ВБ, найди свою покупку и оставь на нее положительный отзыв с любым текстом
          </p>

          <Button asChild>
            <Link
              className="mt-2"
              href="https://www.wildberries.ru/catalog/174125246/detail.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Открыть Wildberries
            </Link>
          </Button>

          <p className="text-3xl font-semibold tracking-tight mt-4">Шаг 2</p>
          <p className="text-muted-foreground">
            Сделай скриншот опубликованного отзыва и вышли его удобным тебе способом ниже с подписью "Отзыв на ВБ оставлен"
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

          <p className="text-muted-foreground">
            При следующей активации карты пополнения сообщи нам о своих бонусных лирах и мы добавим их к твоему пополнению совершенно
            бесплатно!*
          </p>

          <p className="text-sm text-muted-foreground mt-4">
            * - бонусные лиры закрепляются за контактом при обращении, если ты получил бонусные лиры на один номер, а активируешь с
            другого, мы не сможем активировать твои бонусы
          </p>
        </div>
      </div>
    </>
  );
}

export default GetDiscountClient;
