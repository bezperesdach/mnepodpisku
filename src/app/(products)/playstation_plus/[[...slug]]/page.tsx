import React from "react";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import { Metadata } from "next";
import Reviews from "@/components/Reviews/review";
import { AlsoRecommendToBuy } from "@/components/also-recommend-to-buy";
import { FlameIcon, StarFillIcon } from "@primer/octicons-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import Image from "next/image";
import { ProductHero } from "@/components/product-hero";

export const metadata: Metadata = {
  title: "Купить подписку PS PLUS 2023",
  description: "Быстро и безопасно приобретите подписку PS PLUS для своего аккаунта PlayStation. Новые привилегии уже ждут вас!",
  openGraph: {
    title: "Купить подписку PS PLUS 2023",
    description: "Быстро и безопасно приобретите подписку PS PLUS для своего аккаунта PlayStation. Новые привилегии уже ждут вас!",
    url: "/playstation_plus",
    images: ["/og_images_catalogue/ps_plus.png"],

    type: "website",
  },
  alternates: {
    canonical: "/playstation_plus",
  },
};

const checkParams = (slug: string | string[] | undefined) => {
  if (slug && Array.isArray(slug) && slug.length > 0) {
    if (slug[0]) {
      if (["essential", "extra", "deluxe"].includes(slug[0])) {
        if (slug[1]) {
          const num = parseInt(slug[1], 10);
          if (!isNaN(num) && Number.isInteger(num) && (num === 1 || num === 3 || num === 12)) {
            return { type: slug[0], duration: slug[1] };
          } else {
            return { type: slug[0], duration: "1" };
          }
        }
        return { type: slug[0], duration: "1" };
      }
    }
  }

  return undefined;
};

export default function PlayStationAccount({ params }: { params: { slug: string | string[] | undefined } }) {
  return (
    <div className="flex flex-col">
      <Breadcrumbs>
        <BreadcrumbItem>PlayStation Plus</BreadcrumbItem>
      </Breadcrumbs>

      <ProductHero
        icon={{ src: "/catalogue_icons/playstation_plus.jpg", alt: "PlayStation Plus баннер" }}
        title="Купить подписку Ps Plus для PlayStation в России"
        description="PlayStation Plus (PS Plus) — это услуга подписки PlayStation Network , предоставляющая пользователю дополнительные
              премиум-функции и бесплатные игры."
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
            icon: <FlameIcon className="text-[#f95721]" />,
            text: "ВЫГОДНО",
          },
          {
            icon: <StarFillIcon className="text-primary" />,
            text: "НЕ НУЖЕН VPN",
          },
        ]}
      />

      <FormComponent subscriptionType={checkParams(params.slug)} />

      <AlsoRecommendToBuy
        title="Рекомендуем после покупки"
        services={[
          {
            name: "PlayStation Аккаунт",
            value: "playstation_account",
            imageSrc: "/catalogue_icons/playstation_account.jpg",
            alt: "PlayStation Аккаунт баннер",
          },
          {
            name: "PlayStation Пополнение",
            value: "playstation",
            imageSrc: "/catalogue_icons/playstation_top_up.jpg",
            alt: "PlayStation Пополнение баннер",
          },
          {
            name: "PlayStation Ea Play",
            value: "playstation_ea_play",
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
            Наш менеджер получит вашу заявку и приобретет подписку на ваш аккаунт{" "}
          </p>
        </Question>

        <Question title="Как быстро я получу подписку?">
          <p>После отправки заявки на получение подписки среднее время активации 5-30 минут</p>
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
