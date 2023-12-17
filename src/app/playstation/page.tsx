/* eslint-disable react/no-unescaped-entities */
import React from "react";
import HeroChoose from "@/components/HeroChoose/HeroChoose";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import Instruction from "@/components/Instructions/Instruction";
import InstructionsSection from "@/components/Instructions/InstructionsSection";
import FormComponent from "./FormComponent";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { Metadata } from "next";
import { isAmountValid } from "@/utils/utils";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: "Пополнение PS Store(PSN) турция с карты РФ от 100 TL!",
  description: "Простое, выгодное и быстрое пополнение турецкого аккаунта Playstation от надежного продавца 2023",
  openGraph: {
    title: "Пополнение PS Store(PSN) турция с карты РФ от 100 TL!",
    description: "Простое, выгодное и быстрое пополнение турецкого аккаунта Playstation от надежного продавца 2023",
  },
  alternates: {
    canonical: "/playstation",
  },
};

export default function Playstation({ searchParams }: Props) {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8">
      <div className="flex flex-col min-[1240px]:flex-row items-center gap-4">
        <h1 className="text-3xl lg:text-4xl font-bold" id="heading">
          ПОПОЛНЕНИЕ ТУРЕЦКОГО АККАУНТА PLAYSTATION В РОССИИ
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

      <FormComponent receivedAmount={isAmountValid(searchParams["amount"])} />

      <div className="mt-10">
        <h2 className="text-xl lg:text-2xl font-bold" id="description">
          Описание
        </h2>
        <p className="text-lg font-medium mt-4">
          Сервис МНЕПОДПИСКУ позволит вам быстро и удобно пополнить свой кошелек турецкого playstation аккаунта. Пополнение происходит в
          три простых этапа
          <br />
          Если по каким-либо причинам вне нашего контроля пополнение на ваш аккаунт не проходит - услуга превращается в выкуп корзины
        </p>
        <HeroChoose
          firstText="Введите данные и сумму к пополнению"
          secondText="Оплатите удобным для вас способом"
          thirdText="Получите деньги на аккаунт playstation"
        />
      </div>

      <Faq>
        <Question title="Пополнение кошелька PlayStation в Турции: Как происходит пополнение?" open>
          <p>
            Пополнение вашего кошелька PlayStation происходит через Турцию с помощью турецкой банковской карты и входа в ваш аккаунт
            PlayStation. Наши сотрудники осуществят пополнение вашего кошелька, используя этот способ.
            <br />
            <br />
            <span className="font-semibold">Важно!</span> Для успешного пополнения необходимо иметь аккаунт PlayStation Network с
            регионом Турция. В случае, если у вас нет турецкого аккаунта, вы можете{" "}
            <a className="link text-secondary" href="/playstation_account" target="_blank" rel="noopener noreferrer">
              приобрести его создание у нас
            </a>{" "}
            по скромной цене.
            <br />
            <br /> Кроме того, при пополнении кошелька на сумму от 1500 лир мы предоставляем вам аккаунт PlayStation в подарок. Это
            отличная возможность получить дополнительные преимущества и доступ к эксклюзивному контенту.
          </p>
        </Question>

        <Question title="Как быстро происходит пополнение?">
          <p>
            После выполнения всех инструкций среднее время обработки заказа 10-15 минут при обращении в часы указанные в секции нашей
            стороны время активации может увеличиться.
          </p>
        </Question>

        <Question title="Почему нужен именно турецкий аккаунт PSN?">
          <p>
            Так как пополнение вашего аккаунта PlayStation происходит с помощью турецкой банковской карты, аккаунт должен быть
            зарегистрирован в турецком регионе.
            <br />
            <br />
            Такой аккаунт вы можете создать сами по инструкции "Как создать турецкий аккаунт PSN" ниже
            <br />
            <br />
            Или можете воспользоваться нашей услугой по созданию аккаунта нажав{" "}
            <a className="link text-secondary" href="/playstation_account" target="_blank" rel="noopener noreferrer">
              сюда
            </a>
          </p>
        </Question>

        <Question title="Почему именно Турция?">
          <p>
            Одной из основных причин выбора Турции является значительная экономия на покупке игр и подписок в сравнении с Россией. Игры
            и подписки в турецком регионе PlayStation Store доступны по гораздо более низким ценам. <br />
            <br />
            Цены на игры и подписки в Турции существенно отличаются от российских цен, и позволяют сэкономить значительную сумму денег.{" "}
            <br />
            <br />
            Таким образом, пополнение кошелька в Турции позволяет игрокам приобретать игры и подписки по более выгодной цене, и получать
            больше контента за свои средства.
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
