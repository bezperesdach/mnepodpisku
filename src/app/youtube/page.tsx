import React from "react";
import HeroChoose from "@/components/HeroChoose/HeroChoose";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { Metadata } from "next";
import { isSearchParamValid } from "@/utils/utils";

export const metadata: Metadata = {
  title: "Купить Youtube premium 2023",
  description:
    "Быстро купить youtube premium на личный аккуант. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
  openGraph: {
    title: "Купить Youtube premium 2023 Россия",
    description:
      "Быстро купить youtube premium на личный аккуант. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
    url: "/youtube",
    images: ["/og_images/youtube.png"],
    type: "website",
  },
  alternates: {
    canonical: "/youtube",
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
          КУПИТЬ ПОДПИСКУ НА XBOX GAME PASS В РОССИИ
        </h1>
      </div>

      <FormComponent receivedDuration={isSearchParamValid(searchParams["dur"])} />

      <div className="mt-10">
        <h2 className="text-xl lg:text-2xl font-bold" id="description">
          Описание
        </h2>
        <p className="text-lg font-medium mt-4">
          YouTube — видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео.
          <br />
          <br />
          Для того, чтобы оформить Youtube Premium в России необходимо предоставить логин и пароль для того, чтобы наши менеджеры смогли
          активировать подписку на Ваш аккаунт. Подписка оформляется сроком на 1 или 12 месяцев.
          <br />
          <br />
          <span className="font-bold">ВНИМАНИЕ!</span> Данная подписка является полностью индивидуальной. Мы не подключаем Вас к
          семейной подписке, мы оплачиваем подписку на Ваш аккаунт.
        </p>
        <HeroChoose
          firstText="Выберите нужный вам срок подписки"
          secondText="Оплатите удобным для вас способом"
          thirdText="Наслаждайтесь просмотром YouTube без рекламы"
        />
      </div>

      <Faq>
        <Question title="Входит ли Youtube Music в подписку?" open>
          <p>Да, вы сможете использовать youtube music без ограничений при активной премиум подписке.</p>
        </Question>
        <Question title="Работает ли Youtube Premium в России?">
          <p>Да, при активации подписки Вы сможете пользоваться всеми возможностями из России.</p>
        </Question>
        <Question title="Как производится активация Youtube Premium в России?">
          <p>
            Активация подписки происходит через наших менеджеров. Менеджер входит в Ваш аккаунт и оплачивает банковской картой подписку.
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
