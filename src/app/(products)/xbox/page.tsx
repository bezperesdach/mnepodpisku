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
  title: "Подписка XBOX GAME PASS",
  description:
    "Быстрая покупка подписки xbox game pass на личный аккаунт. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
  openGraph: {
    title: "Подписка XBOX GAME PASS 2023 Купить",
    description:
      "Быстрая покупка подписки xbox game pass на личный аккаунт. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
    url: "/xbox",
    images: ["/og_images_catalogue/xbox.png"],
    type: "website",
  },
  alternates: {
    canonical: "/xbox",
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

      <FormComponent
        receivedDuration={isSearchParamValid(searchParams["dur"])}
        receivedSubscriptionType={isSearchParamValid(searchParams["sub"])}
      />

      <div className="mt-10">
        <h2 className="text-xl lg:text-2xl font-bold" id="description">
          Описание
        </h2>
        <p className="text-lg font-medium mt-4">
          В Xbox Game Pass Ultimate включено: - Live Gold - Game Pass for Console - Game Pass for PC - EA PLAY
          <br />
          <br />
          Приобретение происходит через нашего менеджера и ваш аккаунт Microsoft
        </p>
        <HeroChoose
          firstText="Выберите срок и тариф"
          secondText="Оплатите удобным для вас способом"
          thirdText="Получите подписку XBOX GAME PASS"
        />
      </div>

      <Reviews />

      <Faq>
        <Question title="Безопасно ли такое приобретение подписки?" open>
          <p>
            Да, такое подключение полностью безопасно и не нарушает правил Microsoft. Если вы переживаете за безопасность своего
            аккаунта, перед приобретением подписки вы можете сменить пароль на другой и заменить его обратно на старый после завершения
            активации
          </p>
        </Question>
        <Question title="Как происходит активация?">
          <p>
            После успешной оплаты произойдет переадресация на страницу с информацией о вашем заказе. На этой странице вы также получите
            уникальный код, который необходимо сообщить продавцу через переписку на этой же странице. Продавец увидит ваше сообщение и
            свяжется с вами в кратчайшие сроки. Вам следует внимательно следовать инструкциям, предоставленным продавцом, для завершения
            процесса пополнения. От вас потребуются данные вашего Microsoft аккаунта
          </p>
        </Question>
        <Question title="Сколько времени занимает активация XBOX GAME PASS?">
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
