import React from "react";
import HeroChoose from "@/components/HeroChoose/HeroChoose";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { Metadata } from "next";
import { isSearchParamValid } from "@/utils/utils";
import Reviews from "@/components/Reviews/Reviews";

export const metadata: Metadata = {
  title: "Купить Spotify Premium 2023",
  description:
    "Купить spotify premium быстро и дешево в россии. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
  openGraph: {
    title: "Купить Spotify Premium 2023 Россия",
    description:
      "Купить spotify premium быстро и дешево в россии. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
    url: "/spotify",
    images: ["/og_images_catalogue/spotify.png"],
    type: "website",
  },
  alternates: {
    canonical: "/spotify",
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
          КУПИТЬ ПОДПИСКУ НА SPOTIFY PREMIUM В РОССИИ
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
          Индивидуальная подписка доступна для одной учетной записи. Вы можете приобрести данную подписку сроком на 1, 3, 6, 12 месяцев.
          Активацию можно произвести на личный аккаунт (со сменой на турецкий регион), либо на новый аккаунт.
          <br />
          <br />
          Подписка Duo рассчитана для двух учетных записей. Каждый пользователь будет подключаться к своей учетной записи.
          <br />
          <br />
          Подписка Family рассчитана до 6 пользователей. Каждый пользователь будет подключаться к своей учетной записи.
          <br />
          <br />
          При необходимости мы поможем зарегистрировать новый аккаунт, сменить регион или перенести ваши плейлисты с других музыкальных
          сервисов.
        </p>
        <HeroChoose
          firstText="Выберите срок действия"
          secondText="Оплатите удобным для вас способом"
          thirdText="Получите EA Play на ваш Турецкий аккаунт"
        />
      </div>

      <Reviews />

      <Faq>
        <Question title="Нужен ли турецкий аккаунт Spotify?" open>
          <p>
            Да, для активации премиум-подписки необходим турецкий аккаунт spotify. В случае если у вас установлен другой регион, мы
            сможем помочь со сменой региона на турецкий.
          </p>
        </Question>
        <Question title="Работает ли Spotify в России?">
          <p>Для работы Spotify в России может понадобиться однократный вход через VPN</p>
        </Question>
        <Question title="Как скачать Spotify на iPhone?">
          <p>
            Для того, чтобы скачать Spotify на iPhone необходимо сменить регион AppStore на турецкий (или любой другой, где
            осуществляется поддержка Spotify) и скачать приложение. После этого смените регион обратно. Приложение будет получать все
            обновления как и любое другое приложение на iPhone.
          </p>
        </Question>
        <Question title="Сколько времени занимает активация Spotify premium?">
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
