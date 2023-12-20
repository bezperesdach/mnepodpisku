import React from "react";
import HeroChoose from "@/components/HeroChoose/HeroChoose";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import Instruction from "@/components/Instructions/Instruction";
import InstructionsSection from "@/components/Instructions/InstructionsSection";
import FormComponent from "./FormComponent";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { Metadata } from "next";
import Link from "next/link";
import Reviews from "@/components/Reviews/Reviews";

export const metadata: Metadata = {
  title: "Cоздание турецкого аккаунта playstation",
  description:
    "Узнайте, как получить турецкий аккаунт PlayStation! Предлагаем профессиональную помощь и инструкции по регистрации. Купите услугу прямо сейчас!",
  openGraph: {
    title: "Cоздание турецкого аккаунта playstation",
    description:
      "Узнайте, как получить турецкий аккаунт PlayStation! Предлагаем профессиональную помощь и инструкции по регистрации. Купите услугу прямо сейчас!",
    url: "/playstation_account",
    images: ["/og_images_catalogue/playstation_account.png"],

    type: "website",
  },
  alternates: {
    canonical: "/playstation_account",
  },
};

export default function PlayStationAccount() {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8">
      <div className="flex flex-col min-[1240px]:flex-row items-center gap-4">
        <h1 className="text-3xl lg:text-4xl font-bold" id="heading">
          СОЗДАТЬ ТУРЕЦКИЙ АККАУНТ PLAYSTATION В РОССИИ
        </h1>
      </div>

      <FormComponent />

      <div className="mt-10">
        <h2 className="text-xl lg:text-2xl font-bold" id="description">
          Описание
        </h2>
        <p className="text-lg font-medium mt-4">
          Данная услуга позволит вам приобрести создание турецкого аккаунта для Playstation на свою личную почту
        </p>
        <HeroChoose
          firstText="Перейдите на страницу оплаты"
          secondText="Оплатите удобным для вас способом"
          thirdText="Получите турецкий аккаунт"
        />
      </div>

      <Reviews />

      <Faq>
        <Question title="Как происходит регистрация турецкого аккаунта Playstation?" open>
          <p>
            После пополнения наш менеджер проживающий на территории Турции создаст аккаунт на вашу почту и вышлет все данные от аккаунта
            вам вам
          </p>
        </Question>
        <Question title="Можно ли пополнять турецкий аккаунт в России?">
          <p>
            Да, вы сможете в любой момент пополнить данный аккаунт воспользовавшись нашей услугой{" "}
            <Link className="link text-secondary" href="/playstation" target="_blank">
              пополнения турецких аккаунтов
            </Link>
          </p>
        </Question>
        <Question title="Нужен ли VPN для игры по сети на турецком аккаунте в России">
          <p>Нет, вы сможете пользоваться абсолютно всеми услугами Playstation на территории России без VPN</p>
        </Question>
      </Faq>
      <InstructionsSection>
        <Instruction name="Как включить 2FA на аккаунте PSN?" file="kak_vkluchit_2fa_na_akaunte_psn" />
        <Instruction name="Где найти резервные коды аккаунта PSN?" file="gde_posmotret_rezervnyi_kod" />
        <Instruction name="Как изменить почту на PSN аккаунте" file="psn/how-to-change-email-psn.pdf" />
        <Instruction name="Как создать турецкий аккаунт PSN" file="psn/how-to-create-turkish-psn.pdf" />
        <Instruction name="Как добавить нового пользователя на PS4?" file="kak_dobavit_novogo_polzovatelya_na_PS4" />
        <Instruction name="Как добавить нового пользователя на PS5?" file="kak_dobavit_novogo_polzovatelya_na_PS5" />
      </InstructionsSection>

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
