import React from "react";
import HeroChoose from "@/components/HeroChoose/HeroChoose";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { Metadata } from "next";
import { isSearchParamValid } from "@/utils/utils";

export const metadata: Metadata = {
  title: "Купить подписку PS PLUS 2023",
  description: "Быстро и безопасно приобретите подписку PS PLUS для своего аккаунта PlayStation. Новые привилегии уже ждут вас!",
  openGraph: {
    title: "Купить подписку PS PLUS 2023",
    description: "Быстро и безопасно приобретите подписку PS PLUS для своего аккаунта PlayStation. Новые привилегии уже ждут вас!",
    url: "/ps_plus",
    images: ["/og_images/ps_plus.png"],

    type: "website",
  },
  alternates: {
    canonical: "/ps_plus",
  },
};

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function PlayStationAccount({ searchParams }: Props) {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8">
      <div className="flex flex-col min-[1240px]:flex-row items-center gap-4">
        <h1 className="text-3xl lg:text-4xl font-bold" id="heading">
          КУПИТЬ ПОДПИСКУ PS PLUS ДЛЯ PLAYSTATION В РОССИИ
        </h1>
        <div className="flex items-center gap-4 bg-base-300 rounded-lg px-4 py-1">
          <p className="font-medium text-base">Только для турецких аккаунтов</p>
          <div
            className="tooltip cursor-pointer max-[524px]:before:-translate-x-[90%] max-[524px]:max-w-xs min-[1200px]:before:-translate-x-[90%]"
            data-tip='Вам необходимо зарегистрировать аккаунт PSN с регионом турция и прислать его данные после оплаты. Подробнее в разделе "Вопрос-Ответ".'
          >
            <button className="flex justify-center items-center p-2 w-7 h-7 bg-white rounded-[100%] text-secondary font-bold">?</button>
          </div>
        </div>
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
          <strong>ВНИМАНИЕ!</strong> Из-за проблем со стороны PlayStation на данный момент невозможно приобрести подписку на аккаунты
          зарегистрированные после 20 ноября 2023 года.
        </p>
        <p className="text-lg font-medium mt-4">
          Быстрое и безопасное приобретение подписки на ваш личный Турецкий аккаунт
          <br />
          Если по каким-либо причинам вне нашего контроля подписка на ваш аккаунт не приобретается - услуга превращается в выкуп корзины
          равноценную стоимости подписки
        </p>
        <HeroChoose
          firstText="Выберите подписку и срок действия"
          secondText="Оплатите удобным для вас способом"
          thirdText="Получите PS PLUS на ваш Турецкий аккаунт"
        />
      </div>

      <Faq>
        <Question title="Как происходит приобретение PS PLUS на мой аккаунт?" open>
          <p>
            После оплаты вам будет на почту выслана ссылка на инструкцию по активации услуги, в ходе выполнения данной инструкции вы
            предоставите нам данные от своего аккаунта
            <br />
            <br />
            После этого наш менеджер проживающий на территории Турции войдет в ваш аккаунт и приобретет нужную вам подписку
          </p>
        </Question>
        <Question title="Безопасен ли такой вид приобретения PS PLUS?" open>
          <p>Да, по нашему опыту Sony никогда не блокирует аккаунты на который таким способом была приобретена подписка</p>
        </Question>
        <Question title="Как быстро я получу подписку на свой аккаунт?" open>
          <p>После приобретения подписки и выполнения всех инструкций в часы нашей работы среднее время активации 5-15 минут</p>
        </Question>
        <Question title="Что будет если вам не удастся приобрести подписку на мой аккаунт?">
          <p>
            Если по каким-либо причинам находящимся вне нашего контроля нам не приобрести подписку ваш аккаунт, мы можем сделать возврат
            всей суммы - 15%.
            <br />
            <br />
            Если проблема будет с нашей стороны, мы сделаем возврат всей суммы - комиссия за обработку перевода.
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
