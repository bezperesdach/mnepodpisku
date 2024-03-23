import React from "react";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import { Metadata } from "next";
import Reviews from "@/components/Reviews/review";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { StarFillIcon } from "@primer/octicons-react";
import { AlsoRecommendToBuy } from "@/components/also-recommend-to-buy";
import { ProductHero } from "@/components/product-hero";

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

export default function PlayStationAccountV2() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs>
        <BreadcrumbItem>PlayStation Аккаунт</BreadcrumbItem>
      </Breadcrumbs>

      <ProductHero
        icon={{ src: "/catalogue_icons/playstation_account.jpg", alt: "PlayStation Аккаунт баннер" }}
        title="Создать Турецкий аккаунт PlayStation в России"
        description="PlayStation Store — сервис цифровой дистрибуции компании Sony для пользователей консолей PlayStation 3, PlayStation 4,
        PlayStation 5"
        tags={[
          {
            icon: (
              <div className="h-6 w-6 relative rounded-lg overflow-hidden">
                <Image className="object-contain" src="/tr.png" alt="PlayStation Пополнение" fill />
              </div>
            ),
            text: "ТУРЦИЯ",
          },
          {
            icon: <StarFillIcon className="text-primary" />,
            text: "НЕ НУЖЕН VPN",
          },
        ]}
      />

      <FormComponent />

      <AlsoRecommendToBuy
        title="Рекомендуем после покупки"
        services={[
          {
            name: "PlayStation Пополнение",
            value: "playstation",
            imageSrc: "/catalogue_icons/playstation_top_up.jpg",
            alt: "PlayStation Пополнение баннер",
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
            На странице активации вам необходимо будет указать email на который будет зарегистрирован новый аккаунт PlayStation и
            выслать заявку на активацию нам
            <br />
            <br />
            Наш менеджер получит вашу заявку и создаст вам турецкий аккаунт PlayStation, после чего вышлет все его данные вам{" "}
          </p>
        </Question>

        <Question title="Как быстро я получу аккаунт?">
          <p>После отправки заявки на создание аккаунта среднее время создания аккаунта 5-30 минут</p>
        </Question>

        <Question title="Можно ли менять данные аккаунта?">
          <p>Да, после входа в аккаунт вы сможете изменить абсолютно все данные аккаунта</p>
        </Question>

        <Question title="Нужен ли VPN?">
          <p>Нет, вы сможете делать абсолютно все в аккаунте без использования VPN</p>
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
