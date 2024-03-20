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
  title: "Купить подписку Netflix",
  description:
    "Быстрая онлайн покупка подписки на Netflix. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
  openGraph: {
    title: "Купить подписку Netflix 2023 Промокод",
    description:
      "Быстрая онлайн покупка подписки на Netflix. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
    url: "/netflix",
    images: ["/og_images_catalogue/netflix.png"],
    type: "website",
  },
  alternates: {
    canonical: "/netflix",
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
          КУПИТЬ ПОДПИСКУ НА NETFLIX В РОССИИ
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
          Netflix – популярный стриминговый сервис фильмов и сериалов.
          <br />
          <br />
          Использование сервиса предполагает на выбор три подписки:
          <br />
          <br />
          Базовая: Хорошее качество видео — в формате HD (720p). Просмотр без рекламы на любом телефоне, планшете, компьютере или
          телевизоре. Загрузка на 1 устройство.
          <br />
          <br />
          Стандартный: Отличное качество видео — в формате Full HD (1080p). Просмотр без рекламы на любом телефоне, планшете, компьютере
          или телевизоре. Загрузка на 2 устройства.
          <br />
          <br />
          Премиум: Лучшее качество видео — в форматах UltraHD (4K) и HDR. Доступно пространственное аудио. Просмотр без рекламы на любом
          телефоне, планшете, компьютере или телевизоре. Загрузка на 6 устройств.
          <br />
          <br />
          Наши менеджеры помогут активировать подписку на 1 месяц. При необходимости мы можем рассмотреть годовую подписку с привязкой
          виртуальной турецкой карты.
        </p>
        <HeroChoose
          firstText="Выберите необходимый срок и тариф"
          secondText="Оплатите удобным для вас способом"
          thirdText="Получите промокод для самостоятельной активации"
        />
      </div>

      <Reviews />

      <Faq>
        <Question title="Работает ли Netflix в России?">
          <p>Да. Для просмотра стримингового сервиса необходимо воспользоваться любым удобным для Вас VPN-сервисом.</p>
        </Question>
        <Question title="Можно ли подключить Netflix на телевизор в России?">
          <p>
            Да. Для того, чтобы установить Netflix на телевизор (с операционной системой Android) необходимо обратиться к нашим
            менеджерам, которые помогут Вам.
          </p>
        </Question>
        <Question title="Сколько времени занимает активация Netflix?">
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
