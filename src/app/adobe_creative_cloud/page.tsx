import React from "react";
import HeroChoose from "@/components/HeroChoose/HeroChoose";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { Metadata } from "next";
import { isSearchParamValid } from "@/utils/utils";

export const metadata: Metadata = {
  title: "Купить подписку Adobe Creative Cloud",
  description:
    "Быстрая онлайн покупка подписки на Adobe Creative Cloud. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
  openGraph: {
    title: "Купить подписку Adobe Creative Cloud 2023",
    description:
      "Быстрая онлайн покупка подписки на Adobe Creative Cloud. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
  },
  alternates: {
    canonical: "/adobe_creative_cloud",
  },
};

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function PsEaPlay({ searchParams }: Props) {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8">
      <div className="flex flex-col min-[1240px]:flex-row items-center gap-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-center min-[1240px]:text-left" id="heading">
          КУПИТЬ ПОДПИСКУ НА ADOBE CREATIVE CLOUD
        </h1>
      </div>

      <FormComponent receivedDuration={isSearchParamValid(searchParams["dur"])} />

      <div className="mt-10">
        <h2 className="text-xl lg:text-2xl font-bold" id="description">
          Описание
        </h2>
        <p className="text-lg font-medium mt-4">
          Данная подписка от Adobe позволит вам пользоваться всеми функциями Photoshop, Illustrator, Premiere Pro, After Effect и
          множеством других программ от Adobe.
          <br />
          <br />
          Приобретая данную подписку вы также получите доступ к ГЕНЕРАТИВНОЙ ЗАЛИВКЕ/Generative Fill в Adobe FireFly которая доступна
          для всех программ от Adobe
          <br />
          <br />
          <span className="font-bold">ВНИМАНИЕ!</span> Приобретение подписки возможно только на ту почту, на которую ранее подписка не
          приобреталась!
        </p>
        <HeroChoose
          firstText="Выберите срок действия"
          secondText="Оплатите удобным для вас способом"
          thirdText="Пользуйтесь огромным количеством программ от Adobe"
        />
      </div>

      <Faq>
        <Question title="Как происходит активация подписки?">
          <p>После приобретения на вашу почту будет создан новый аккаунт с приобретенной подпиской на купленный срок</p>
        </Question>
        <Question title="Доступна ли ГЕНЕРАТИВНАЯ ЗАЛИВКА/Generative Fill в России?">
          <p>Да, вы сможете беспроблемно и без остановки пользоваться всеми функциями генеративной заливки</p>
        </Question>
        <Question title="Сколько времени занимает активация Adobe Creative Cloud?">
          <h2>
            Активация занимает от 10 до 90 минут после полной оплаты заказа <br />
            <br />В среднем на активацию уходит <span className="font-semibold">10 минут</span> <br />
            <br />
            Если подписка была приобретена ночью, то активация будет произведена днем следующего дня
          </h2>
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
