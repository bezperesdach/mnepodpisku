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

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
// import Instruction from "@/components/Instructions/Instruction";
// import InstructionsSection from "@/components/Instructions/InstructionsSection";
import FormComponent from "./FormComponent";
import { Metadata } from "next";
import { isAmountValid, isSearchParamValid } from "@/utils/utils";
import Reviews from "@/components/Reviews/review";
import { headers } from "next/headers";
// import Description from "./Description";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { FlameIcon } from "@primer/octicons-react";
import { Service } from "@/app/(main)/all-services";
// import UnclosableDrawerModalHybridPaymentRedirect from "@/components/ui/unclosable-drawer-modal-hybrid-payment-redirect";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const services: Service[] = [
  {
    name: "PlayStation Аккаунт",
    value: "playstation_account",
    imageSrc: "/catalogue_icons/playstation_account.jpg",
    alt: "PlayStation Аккаунт баннер",
  },
  {
    name: "PlayStation Plus",
    value: "playstation_plus",
    imageSrc: "/catalogue_icons/playstation_plus.jpg",
    alt: "PlayStation Plus баннер",
  },
  {
    name: "PlayStation Ea Play",
    value: "ps_ea_play",
    imageSrc: "/catalogue_icons/playstation_ea_play.jpg",
    alt: "PlayStation Ea Play баннер",
  },
];

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

export default function PlaystationV2({ searchParams }: Props) {
  const ip = headers().get("x-forwarded-for");

  return (
    <div className="flex flex-col">
      <Breadcrumbs>
        <BreadcrumbItem>PlayStation</BreadcrumbItem>
      </Breadcrumbs>

      <div className="w-full flex justify-center items-center mt-6">
        <div className="w-full flex gap-4 max-w-screen-lg mx-2 p-6 rounded-lg bg-[#0c1430]">
          <div className="h-[120px] min-w-[120px] relative rounded-3xl overflow-hidden hidden sm:block">
            <Image
              className="hover:scale-125 transition-all z-10"
              src="/catalogue_icons/playstation_top_up.jpg"
              alt="PlayStation Пополнение"
              style={{ objectFit: "cover" }}
              fill
            />
            <Skeleton className="absolute w-full h-full rounded-3xl" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="h-[64px] min-w-[64px] relative rounded-2xl overflow-hidden sm:hidden ">
                <Image
                  className="hover:scale-125 transition-all z-10"
                  src="/catalogue_icons/playstation_top_up.jpg"
                  alt="PlayStation Пополнение"
                  style={{ objectFit: "cover" }}
                  fill
                />
                <Skeleton className="absolute w-full h-full rounded-3xl" />
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Пополнение Турецкого PlayStation Store в России</h1>
            </div>

            <div className="flex gap-2">
              <div className="flex gap-1 items-center bg-[#1b2a63] font-medium px-2 py-1 w-fit rounded-lg">
                <div className="h-6 w-6 relative rounded-lg overflow-hidden">
                  <Image className="object-contain" src="/tr.png" alt="PlayStation Пополнение" fill />
                </div>
                <p>ТУРЦИЯ</p>
              </div>
              <p className="flex gap-1 items-center bg-[#1b2a63] font-medium px-2 py-1 w-fit rounded-lg">
                <FlameIcon className="text-[#f95721]" />
                ВЫГОДНЫЙ КУРС
              </p>
            </div>

            <p className=" text-muted-foreground">
              PlayStation Store — сервис цифровой дистрибуции компании Sony для пользователей консолей PlayStation 3, PlayStation 4,
              PlayStation 5
            </p>
          </div>
        </div>
      </div>

      <FormComponent receivedAmount={isAmountValid(searchParams["amount"])} card={isSearchParamValid(searchParams["card"])} ip={ip} />

      <div className="w-full flex justify-center items-center mt-16">
        <div className="w-full flex flex-col max-w-screen-lg px-2">
          <div className="w-full flex justify-between">
            <h2 className="text-3xl font-semibold tracking-tight">Также рекомендуем</h2>
          </div>
          <div className="grid md:flex gap-x-4 gap-y-6 md:gap-4 w-full grid-cols-2 md:grid-cols-3 mt-6">
            {services.map((item) => (
              <div key={item.value} className="flex-1 flex-shrink-0 rounded-md ">
                <div className="min-h-[120px] xs:min-h-[160px] sm:min-h-[170px] lg:min-h-[180px] relative rounded-3xl overflow-hidden">
                  <Image
                    className="hover:scale-125 transit`ion-all z-10"
                    src={item.imageSrc}
                    alt={item.alt}
                    style={{ objectFit: "cover" }}
                    fill
                  />
                  <Skeleton className="absolute w-full h-full rounded-3xl" />
                </div>
                <p className="mt-4 lg:text-lg text-center font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Reviews />

      <Faq>
        <Question title="Как происходит пополнение?">
          <p>
            После успешной оплаты вам на почту придет письмо с ссылкой на активацию пополнения
            <br />
            <br />
            На странице активации вам необходимо будет указать данные своего аккаунта PlayStation, после чего отправить нам заявку на
            активацию
            <br />
            <br />
            Наш менеджер получит вашу заявку и пополнит ваш аккаунт{" "}
          </p>
        </Question>

        <Question title="Как быстро я получу деньги на свой аккаунт?">
          <p>После отправки запроса на активацию пополнения среднее время обработки заказа 5-30 минут при обращении в рабочие часы.</p>
        </Question>

        <Question title="У меня нет турецкого аккаунта PlayStation">
          <p>
            Вы можете воспользоваться нашей услугой по{" "}
            <a className="link text-primary" href="/playstation_account" target="_blank" rel="noopener noreferrer">
              созданию аккаунта
            </a>
          </p>
        </Question>
      </Faq>

      {/* <Description />

      <Reviews />

      <Faq>
        <Question title="Пополнение кошелька PlayStation в Турции: Как происходит пополнение?" >
          <p>
            После оплаты вы будете перенаправлены на страницу активации
            <br />
            <br />
            На этой странице вам необходимо будет указать данные вашего аккаунта и резервный код, после этого вы вышлите нам эти данные
            по удобному вам каналу связи
            <br />
            <br /> После получения вашего запроса на активацию наш менеджер выполнит вход и пополнит ваш баланс на необходимую вам сумму
            <br />
            <br />
            <span className="font-semibold">Важно!</span> Для успешного пополнения необходимо иметь аккаунт PlayStation Network с
            регионом Турция. В случае, если у вас нет турецкого аккаунта, вы можете{" "}
            <a className="link text-secondary" href="/playstation_account" target="_blank" rel="noopener noreferrer">
              приобрести его создание у нас
            </a>{" "}
            по скромной цене.
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
          <p>Мы можем сделать возврат средств согласно оферте нашего сайта</p>
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
        <Question title="Почему возникают проблемы с новыми аккаунтами?" >
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
        <Question title="Что значит 'одноразовая карта' в форме заказа?" >
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
      </InstructionsSection> */}

      {/* <UnclosableDrawerModalHybridPaymentRedirect /> */}
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
