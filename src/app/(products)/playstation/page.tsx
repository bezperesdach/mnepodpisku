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
import { FlameIcon, StarFillIcon } from "@primer/octicons-react";
import { AlsoRecommendToBuy } from "@/components/also-recommend-to-buy";
import { ProductHero } from "@/components/product-hero";
// import UnclosableDrawerModalHybridPaymentRedirect from "@/components/ui/unclosable-drawer-modal-hybrid-payment-redirect";

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

export default function PlaystationV2({ searchParams }: Props) {
  const ip = headers().get("x-forwarded-for");

  return (
    <div className="flex flex-col">
      <Breadcrumbs>
        <BreadcrumbItem>PlayStation</BreadcrumbItem>
      </Breadcrumbs>

      <ProductHero
        icon={{ src: "/catalogue_icons/playstation_top_up.jpg", alt: "PlayStation Пополнение баннер" }}
        title="Пополнение Турецкого PlayStation Store в России"
        description="PlayStation Store — сервис цифровой дистрибуции компании Sony для пользователей консолей PlayStation 3, PlayStation 4,
        PlayStation 5"
        tags={[
          {
            icon: (
              <div className="flex justify-center h-6 w-6 relative rounded-lg overflow-hidden">
                <Image className="object-contain" src="/tr.png" alt="PlayStation Пополнение" fill />
              </div>
            ),
            text: "ТУРЦИЯ",
          },
          {
            icon: <FlameIcon className="text-[#f95721]" />,
            text: "ВЫГОДНЫЙ КУРС",
          },
          {
            icon: <StarFillIcon className="text-primary" />,
            text: "НЕ НУЖЕН VPN",
          },
        ]}
      />

      <FormComponent receivedAmount={isAmountValid(searchParams["amount"])} card={isSearchParamValid(searchParams["card"])} ip={ip} />

      <AlsoRecommendToBuy
        services={[
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
          {
            name: "",
            value: "",
            imageSrc: "",
            alt: "",
          },
        ]}
      />

      <Reviews />

      <Faq>
        <Question title="Как это работает?">
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
          <p>При отправке запроса на активацию в наши рабочие часы - среднее время активации 5-20 минут</p>
        </Question>

        <Question title="У меня нет турецкого аккаунта PlayStation">
          <p>
            Вы можете воспользоваться нашей услугой по{" "}
            <a className="link text-primary" href="/playstation_account" target="_blank" rel="noopener noreferrer">
              созданию аккаунта
            </a>{" "}
            или создать себе аккаунт самостоятельно по нашей{" "}
            <a className="link text-primary" href="/blog/kak_samomu_sozdat_tureckiy_akaunt" target="_blank" rel="noopener noreferrer">
              инструкции
            </a>
          </p>
        </Question>
      </Faq>

      {/* <InstructionsSection>
        <Instruction name="Как включить 2FA на аккаунте PSN?" file="kak_vkluchit_2fa_na_akaunte_psn" />
        <Instruction name="Где найти резервные коды аккаунта PSN?" file="gde_posmotret_rezervnyi_kod" />
        <Instruction name="Как изменить почту на PSN аккаунте" file="psn/how-to-change-email-psn.pdf" />
        <Instruction name="Как создать турецкий аккаунт PSN" file="psn/how-to-create-turkish-psn.pdf" />
        <Instruction name="Как добавить нового пользователя на PS4?" file="kak_dobavit_novogo_polzovatelya_na_PS4" />
        <Instruction name="Как добавить нового пользователя на PS5?" file="kak_dobavit_novogo_polzovatelya_na_PS5" />
      </InstructionsSection> */}
    </div>
  );
}
