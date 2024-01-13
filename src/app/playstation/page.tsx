/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import Instruction from "@/components/Instructions/Instruction";
import InstructionsSection from "@/components/Instructions/InstructionsSection";
import FormComponent from "./FormComponent";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { Metadata } from "next";
import { isAmountValid, isSearchParamValid } from "@/utils/utils";
import Reviews from "@/components/Reviews/Reviews";
import { headers } from "next/headers";
import Description from "./Description";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: "Пополнение PS Store(PSN) турция с карты РФ от 100 TL!",
  description:
    "Быстрое и беззаботное пополнение турецкого аккаунта PlayStation в 2023 от проверенного продавца. Просто, выгодно и надежно!",
  openGraph: {
    title: "Пополнение PS Store(PSN) турция с карты РФ от 100 TL!",
    description:
      "Быстрое и беззаботное пополнение турецкого аккаунта PlayStation в 2023 от проверенного продавца. Просто, выгодно и надежно!",
    url: "/playstation",
    images: ["/og_images_catalogue/playstation.png"],

    type: "website",
  },
  alternates: {
    canonical: "/playstation",
  },
};

export default function Playstation({ searchParams }: Props) {
  const ip = headers().get("x-forwarded-for");

  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8">
      <div className="flex flex-col min-[1240px]:flex-row items-center gap-4">
        <h1 className="text-3xl lg:text-4xl font-bold" id="heading">
          ПОПОЛНЕНИЕ ТУРЕЦКОГО АККАУНТА PLAYSTATION В РОССИИ
        </h1>
        <div className="flex items-center gap-4 bg-base-300 rounded-lg px-4 py-1 self-end">
          <p className="font-medium text-base">Только для турецких аккаунтов</p>
          <div
            className="tooltip cursor-pointer before:-translate-x-[90%] max-w-xs"
            data-tip='Вам необходимо зарегистрировать аккаунт PSN с регионом турция и прислать его данные после оплаты. Подробнее в разделе "Вопрос-Ответ".'
          >
            <button className="flex justify-center items-center p-2 w-7 h-7 bg-white rounded-[100%] text-secondary font-bold">?</button>
          </div>
        </div>
      </div>

      <FormComponent receivedAmount={isAmountValid(searchParams["amount"])} card={isSearchParamValid(searchParams["card"])} ip={ip} />

      <Description />

      <Reviews />

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
          <p>После выполнения всех инструкций среднее время обработки заказа 5-30 минут при обращении в рабочие часы.</p>
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

        <Question title="Что будет если вам не удастся пополнить мой аккаунт?">
          <p>
            Если по каким-либо причинам находящимся вне нашего контроля нам не удастся пополнить ваш аккаунт, мы можем сделать возврат
            всей суммы - 15%.
            <br />
            <br />
            Если проблема будет с нашей стороны, мы сделаем возврат всей суммы - комиссия за обработку перевода.
          </p>
        </Question>
        <Question title="Как приобрести PS PLUS на свой аккаунт PlayStation?">
          <p>
            В самом верху страницы или в самом низу нажмите на "Каталог"
            <br />
            <br />
            Выберите в каталоге PS PLUS и приобретите
          </p>
        </Question>
        <Question title="Как приобрести EA PLAY на свой аккаунт PlayStation?">
          <p>
            В самом верху страницы или в самом низу нажмите на "Каталог"
            <br />
            <br />
            Выберите в каталоге PS EA PLAY и приобретите
          </p>
        </Question>
        <Question title="Почему возникают проблемы с новыми аккаунтами?" id="NewAccountProblems">
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
        <Question title="Что значит 'одноразовая карта' в форме заказа?" id="OneTimeCard">
          <p>
            Данная опция позволит вам получить от нас данные одноразовой турецкой карты с номиналом на сумму вашего пополнения.
            <br />
            <br />
            С помощью данной карты вы сможете самостоятельно приобрести из корзины игры/dlc/донаты. Подписки с помощью данной карты
            приобрести нельзя.
            <br />
            <br />
            Карта будет действовать ровно 1 неделю со дня покупки. Карта действует 1 раз. При попытки списания суммы выше номинала карта
            - она автоматически заблокируется.
            <br />
            <br />
            Данный способ пополнения подойдет людям которые не хотят передавать данные своего аккаунта
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
