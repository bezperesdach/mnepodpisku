import React from "react";
import HeroChoose from "@/components/HeroChoose/HeroChoose";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { Metadata } from "next";
import { isSearchParamValid } from "@/utils/utils";

export const metadata: Metadata = {
  title: "Купить Discord Nitro",
  description:
    "Купить Discord Nitro на личный аккаунт. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
  openGraph: {
    title: "Купить Discord Nitro 2023",
    description:
      "Купить Discord Nitro на личный аккаунт. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
    url: "/discord",
    images: ["/og_images_catalogue/discord.png"],
    type: "website",
  },
  alternates: {
    canonical: "/discord",
  },
};

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function PsEaPlay({ searchParams }: Props) {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8">
      <div className="flex flex-col min-[1240px]:flex-row items-center gap-4">
        <h1 className="text-3xl lg:text-4xl font-bold" id="heading">
          КУПИТЬ DISCORD NITRO FULL В РОССИИ
        </h1>
      </div>

      <FormComponent
        receivedDuration={isSearchParamValid(searchParams["dur"])}
        receivedSubscriptionType={isSearchParamValid(searchParams["sub"])}
      />

      <div className="mt-10">
        <h2 className="text-xl lg:text-2xl font-bold" id="description">
          Описание
        </h2>
        <p className="text-lg font-medium mt-4">
          На нашем сервисе мнеподписку вы можете купить discord nitro full и discord nitro basic на 1 или 12 месяцев на свой аккаунт.
          После выбора необходимой вам подписки вы будете перенаправлены на страницу оплаты. <br />
          <br />В качестве оплаты можно использовать карты МИР, qiwi, yandex pay и прочие способы. После успешной оплаты вы попадете в
          чат с менеджером, который подключит подписку на ваш аккаунт за 5-15 минут.
        </p>
        <HeroChoose
          firstText="Выберите срок действия"
          secondText="Оплатите удобным для вас способом"
          thirdText="Пользуйтесь огромным количеством программ от Adobe"
        />
      </div>

      <Faq>
        <Question title="Не нарушает ли такой способ покупки Discord Nitro пользовательское соглашение Discord?">
          <p>Нет, не нарушает, данная процедура на 100% легальна и не повлечет за собой никаких последствий для вашего аккаунта!</p>
        </Question>
        <Question title="Сколько времени занимает активация Discord Nitro?">
          <p>
            Активация занимает от 10 до 90 минут после полной оплаты заказа <br />
            <br />В среднем на активацию уходит <span className="font-semibold">10 минут</span> <br />
            <br />
            Если подписка была приобретена ночью, то активация будет произведена днем следующего дня
          </p>
        </Question>
        <Question title="Что требуется для успешного подключения Discord Nitro">
          <p>
            На аккаунте НЕ должно быть активной (действующей) подписки, она должна ИСТЕЧЬ к моменту покупки❗
            <br />
            <br />
            Подписки Не становятся одна на одну❗
            <br />
            <br />
            Подписка Nitro приобретаются в официальном магазине и Discord, что гарантирует надежность и безопасность дальнейшего
            использования 💯
          </p>
        </Question>
      </Faq>

      <RedirectingToPayment />
    </div>
  );
}

// export const head: DocumentHead = {
//   title: "МНЕПОДПИСКУ",
//   meta: [
//     {
//       name: "description",
//       content:
//         "Сервис для приобретения подписок на различные онлайн сервисы. Принимаем к оплате карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
//     },
//   ],
//   links: [
//     {
//       rel: "canonical",
//       href: "https://mnepodpisku.ru/",
//     },
//   ],
// };
