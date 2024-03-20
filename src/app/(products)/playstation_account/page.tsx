import React from "react";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import Instruction from "@/components/Instructions/Instruction";
import InstructionsSection from "@/components/Instructions/InstructionsSection";
import FormComponent from "./FormComponent";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { Metadata } from "next";
import Link from "next/link";
import Reviews from "@/components/Reviews/review";
import Description from "./Description";

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

      <Description />

      <Reviews />

      <Faq>
        <Question title="Как происходит регистрация турецкого аккаунта Playstation?">
          <p>
            После пополнения наш менеджер проживающий на территории Турции создаст аккаунт на вашу почту и вышлет все данные от аккаунта
            вам вам
          </p>
        </Question>
        <Question title="Можно ли пополнять турецкий аккаунт в России?">
          <p>
            Да, вы сможете в любой момент пополнить данный аккаунт воспользовавшись нашей услугой{" "}
            <Link className="text-secondary" href="/playstation" target="_blank">
              пополнения турецких аккаунтов
            </Link>
          </p>
        </Question>
        <Question title="Нужен ли VPN для игры по сети на турецком аккаунте в России">
          <p>Нет, вы сможете пользоваться абсолютно всеми услугами Playstation на территории России без VPN</p>
        </Question>
        <Question title="Как быстро происходит создание аккаунта?">
          <p>После выполнения всех инструкций среднее время обработки заказа 5-30 минут при обращении в рабочие часы.</p>
        </Question>
        <Question title="Почему возникают проблемы с новыми аккаунтами?">
          <p>
            Начиная от 01.11.23 Sony изменили что-то в своей системе, если раньше после создания аккаунт можно было пополнять без особых
            проблем спустя неделю после создания, то теперь после создания аккаунт стабильно удается пополнять только спустя месяц.
            <br />
            <br />
            Сразу после создания аккаунт можно либо пополнить на 200 ЛИР(Максимальная разовая транзакция пополнения), либо приобрести
            предметы из корзины на сумму до 4800 ЛИР включительно (подписки в корзину не добавляются). После чего на аккаунт со стороны
            Sony накладывается временный &quot;блок&quot; и нужно будет подождать примерно месяц, перед тем как на аккаунт можно будет
            купить что-либо еще или произвести пополнение.
          </p>
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
