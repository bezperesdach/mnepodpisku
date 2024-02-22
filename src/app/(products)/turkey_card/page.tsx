/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { Metadata } from "next";
import { isAmountValid, isSearchParamValid } from "@/utils/utils";
import Reviews from "@/components/Reviews/Reviews";
import { headers } from "next/headers";
import Description from "./Description";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: "Приобрести одноразовую турецкую карту",
  description: "Воспользуйся одноразовой турецкой картой и оплати нужный тебе сервис самостоятельно",
  openGraph: {
    title: "Приобрести одноразовую турецкую карту",
    description: "Воспользуйся одноразовой турецкой картой и оплати нужный тебе сервис самостоятельно",
    url: "/turkey_card",
    images: ["/og_images_catalogue/turkey_card.png"],

    type: "website",
  },
  alternates: {
    canonical: "/turkey_card",
  },
};

export default function Playstation({ searchParams }: Props) {
  const ip = headers().get("x-forwarded-for");

  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8">
      <div className="flex flex-col min-[1240px]:flex-row items-center gap-4">
        <h1 className="text-3xl lg:text-4xl font-bold" id="heading">
          ПРИОБРЕСТИ ОДНОРАЗОВУЮ ТУРЕЦКУЮ КАРТУ С БАЛАНСОМ
        </h1>
      </div>

      <FormComponent
        receivedAmount={isAmountValid(searchParams["amount"])}
        service={isSearchParamValid(searchParams["service"])}
        ip={ip}
      />

      <Description />

      <Reviews />

      <Faq>
        <Question title="Как это работает?" open>
          <p>
            После успешной покупки вам будут выданы данные карты, а также дополнительно будет выдан турецкий адрес
            <br />
            <br />
            Карта будет доступна к использованию один раз в течение 7 дней со дня выдачи
            <br />
            <br />
            При попытки списать с карты средств больше баланса - карта автоматически заблокируется
          </p>
        </Question>

        <Question title="Как быстро происходит выдача карты?">
          <p>После выполнения всех инструкций среднее время обработки заказа 5-30 минут при обращении в рабочие часы.</p>
        </Question>

        <Question title="Можно ли вернуть средства?">
          <p>Одноразовые карты выпускаются специально под ваш заказ и являются невозвратными</p>
        </Question>
        <Question title="Что делать если я не нашел нужный мне сервис?">
          <p>
            Если вы в списке доступных сервисов вы не смогли найти нужный сервис, вы можете выбрать опцию "Другое". <br />
            <br />
            При выборе опции "Другое" мы не гарантируем возможность оплаты нужного вам сервиса{" "}
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
