import React from "react";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";

import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { Metadata } from "next";
import Reviews from "@/components/Reviews/review";

export const metadata: Metadata = {
  title: "МнеПодписку отзывы",
  description: "Страница с отзывами о сервисе МнеПодписку. Узнай мнение других людей и сделай правильный выбор!",
  openGraph: {
    title: "Мне Подписку отзывы",
    description: "Страница с отзывами о сервисе МнеПодписку. Узнай мнение других людей и сделай правильный выбор!",
    url: "/reviews",
    images: ["/og_images_catalogue/reviews.png"],
    type: "website",
  },
  alternates: {
    canonical: "/reviews",
  },
};

export default function PsEaPlay() {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8">
      <div className="flex flex-col min-[1240px]:flex-row items-start gap-4">
        <h1 className="text-3xl lg:text-4xl font-bold" id="heading">
          МНЕПОДПИСКУ ОТЗЫВЫ
        </h1>
      </div>

      <div className="mt-10">
        <h2 className="text-xl lg:text-2xl font-bold" id="description">
          Описание
        </h2>
        <p className="text-lg font-medium mt-4">
          На данной странице вы можете ознакомиться с отзывами людей, которые уже воспользовались нашими услугами. При нажатии на иконку
          VK на отзыве вы увидите данный отзыв в нашей группе ВК.
        </p>
      </div>

      <Reviews />

      <Faq>
        <Question title="Почему мне стоит довериться вашему сервису?">
          <p>
            Наш сервис работает уже больше полугода и за это время мы помогли уже более чем 1000 людей в приобретении различных
            сервисов, мы работаем официально, а также у нас есть группа в ВК в которой есть множество отзывов о нашей работе
          </p>
        </Question>
        <Question title="Как происходит получение нужной подписки?">
          <p>
            В большинстве случаев нам потребуются данные от вашего аккаунта, после чего мы выполним выход, приобретем необходимую вам
            подписку и выйдем из аккаунта
            <br />
            Некоторые сервисы дают возможность активации промокода, на странице сервиса будет указано что вы приобретаете промокод,
            после оплаты вы получите промокод, которой сможете самостоятельно активировать.
            <br />
          </p>
        </Question>
        <Question title="Почему стоит приобрести подписку именно у нас">
          <p>
            Мы предоставляем быструю активацию, имеем магазин на Wildberries и бота в телеграм, работаем официально и имеем одну и самых
            низких комиссий в интернете.
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
