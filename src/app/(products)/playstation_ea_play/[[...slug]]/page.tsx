import React from "react";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import { Metadata } from "next";
import { isSearchParamValid } from "@/utils/utils";
import Reviews from "@/components/Reviews/review";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import { ProductHero } from "@/components/product-hero";
import Image from "next/image";
import { FlameIcon, StarFillIcon } from "@primer/octicons-react";
import { AlsoRecommendToBuy } from "@/components/also-recommend-to-buy";

export const metadata: Metadata = {
  title: "Купить подписку EA PLAY на PlayStation 2024",
  description: "Быстро и безопасно приобретите подписку EA PLAY для своего аккаунта PlayStation. Новые возможности ждут вас!",
  openGraph: {
    title: "Купить подписку EA PLAY на PlayStation 2024",
    description: "Быстро и безопасно приобретите подписку EA PLAY для своего аккаунта PlayStation. Новые возможности ждут вас!",
    url: "/playstation_ea_play",
    images: ["/og_images_catalogue/ps_ea_play.png"],
    type: "website",
  },
  alternates: {
    canonical: "/playstation_ea_play",
  },
};

const checkParams = (slug: string | string[] | undefined) => {
  if (slug && slug[0]) {
    const num = parseInt(slug[0], 10);

    if (!isNaN(num) && Number.isInteger(num) && (num === 1 || num === 12)) {
      return slug[0];
    }
  }

  return undefined;
};

export default function PsEaPlay({ params }: { params: { slug: string | string[] | undefined } }) {
  return (
    <div className="flex flex-col">
      <Breadcrumbs>
        <BreadcrumbItem>PlayStation EA Play</BreadcrumbItem>
      </Breadcrumbs>

      <ProductHero
        icon={{ src: "/catalogue_icons/playstation_ea_play.jpg", alt: "PlayStation EA Play баннер" }}
        title="Купить подписку EA Play для PlayStation в России"
        description="EA Play дает доступ к эксклюзивным ежемесячным наградам, коллекции лучших игр EA, пробным версиям новинок EA и многому другому"
        tags={[
          {
            icon: (
              <div className="h-6 w-6 relative rounded-lg overflow-hidden">
                <Image className="object-contain" src="/tr.png" alt="Регион турция" fill />
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

      <FormComponent receivedDuration={checkParams(params.slug)} />

      <AlsoRecommendToBuy
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
            name: "PlayStation Plus",
            value: "playstation_plus",
            imageSrc: "/catalogue_icons/playstation_plus.jpg",
            alt: "PlayStation Plus баннер",
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
            Наш менеджер получит вашу заявку и приобретет подписку EA Play на ваш аккаунт PlayStation
          </p>
        </Question>

        <Question title="Как быстро я получу подписку EA Play на свой аккаунт PlayStation?">
          <p>После отправки заявки среднее время выполнения заказа 5-30 минут в рабочие часы</p>
        </Question>
      </Faq>
    </div>
  );
}
