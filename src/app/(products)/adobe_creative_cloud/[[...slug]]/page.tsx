import React from "react";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import { Metadata } from "next";
import Reviews from "@/components/Reviews/review";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import { ProductHero } from "@/components/product-hero";
import { FlameIcon, StarFillIcon } from "@primer/octicons-react";

export const metadata: Metadata = {
  title: "Купить подписку Adobe Creative Cloud",
  description:
    "Быстрая онлайн-покупка подписки на Adobe Creative Cloud. Оплата картами МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и другими системами.",
  openGraph: {
    title: "Купить подписку Adobe Creative Cloud 2023",
    description:
      "Быстрая онлайн-покупка подписки на Adobe Creative Cloud. Оплата картами МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и другими системами.",
    url: "/adobe_creative_cloud",
    images: ["/og_images_catalogue/adobe_creative_cloud.png"],
    type: "website",
  },
  alternates: {
    canonical: "/adobe_creative_cloud",
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
        <BreadcrumbItem>Adobe Creative Cloud</BreadcrumbItem>
      </Breadcrumbs>

      <ProductHero
        icon={{ src: "/catalogue_icons/adobe_cc.jpg", alt: "Adobe Creative Cloud баннер" }}
        title="Купить подписку на Adobe Creative Cloud"
        description="Более 20 креативных приложений. Бесконечные возможности.
        Превратите селфи в произведение искусства. Снимайте фильм, пока ждете в очереди. Создайте логотип для своего бизнеса или своей жизни. С Creative Cloud ваши возможности безграничны"
        tags={[
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

      <Reviews />

      <Faq>
        <Question title="Как это работает?">
          <p>
            После успешной оплаты вам на почту придет письмо с ссылкой на активацию пополнения
            <br />
            <br />
            На странице активации вам необходимо будет указать email и выслать запрос на активацию
            <br />
            <br />
            Наш менеджер получит вашу заявку и приобретет на ваш email подписку
          </p>
        </Question>

        <Question title="Доступна ли ГЕНЕРАТИВНАЯ ЗАЛИВКА/Generative Fill в России?">
          <p>Да, вы сможете беспроблемно и без остановки пользоваться всеми функциями генеративной заливки</p>
        </Question>

        <Question title="Как быстро я получу подписку Adobe Creative Cloud?">
          <p>После отправки заявки среднее время выполнения заказа 5-30 минут в рабочие часы</p>
        </Question>
      </Faq>
    </div>
  );
}
