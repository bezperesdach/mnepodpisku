import React from "react";
import HeroChoose from "@/components/HeroChoose/HeroChoose";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { Metadata } from "next";
import { isSearchParamValid } from "@/utils/utils";
import Reviews from "@/components/reviews/Reviews";

export const metadata: Metadata = {
  title: "Купить подписку Tinder 2023 Россия",
  description:
    "Быстрая покупка подписки tinder gold, tinder platinum. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
  openGraph: {
    title: "Купить подписку Tinder 2023 Россия",
    description:
      "Быстрая покупка подписки tinder gold, tinder platinum. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
    url: "/tinder",
    images: ["/og_images_catalogue/tinder.png"],
    type: "website",
  },
  alternates: {
    canonical: "/tinder",
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
          КУПИТЬ ПРОМОКОД ДЛЯ TINDER PLUS В РОССИИ
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
          У нас вы можете купить промокод Tinder Plus для самостоятельной активации в любом регионе.
          <br />
          <br />
          Плюсы данного способа активации:
          <br />
          1) Доступ к анкете не требуется
          <br /> 2) Без ограничений по регионам{" "}
        </p>
        <HeroChoose
          firstText="Выберите необходимый срок и тариф"
          secondText="Оплатите удобным для вас способом"
          thirdText="Получите промокод для самостоятельной активации"
        />
      </div>

      <Reviews />

      <Faq>
        <Question title="Работает ли Tinder в России?" open>
          <p>Тиндером в россии можно пользоваться исключительно через ВПН и браузер. Без VPN тиндер не работает</p>
        </Question>
        <Question title="Как быстро происходит выдача промокода?">
          <p>После успешной оплаты промокод будет выдан вам в течение 10-15 минут</p>
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
