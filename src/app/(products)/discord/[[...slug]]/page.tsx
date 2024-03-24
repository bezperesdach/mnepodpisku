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
  title: "Купить Discord Nitro",
  description:
    "Купить Discord Nitro на личный аккаунт. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
  openGraph: {
    title: "Купить Discord Nitro 2024",
    description:
      "Купить Discord Nitro на личный аккаунт. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
    url: "/discord",
    images: ["/og_images_catalogue/discord.png"],
    type: "website",
  },
  alternates: {
    canonical: "/discord",
  },
};

const checkParams = (slug: string | string[] | undefined) => {
  if (slug && Array.isArray(slug) && slug.length > 0) {
    if (slug[0]) {
      if (["nitro_full", "nitro_basic"].includes(slug[0])) {
        if (slug[1]) {
          const num = parseInt(slug[1], 10);
          if (!isNaN(num) && Number.isInteger(num) && (num === 1 || num === 12)) {
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

export default function PsEaPlay({ params }: { params: { slug: string | string[] | undefined } }) {
  return (
    <div className="flex flex-col">
      <Breadcrumbs>
        <BreadcrumbItem>Discord</BreadcrumbItem>
      </Breadcrumbs>

      <ProductHero
        icon={{ src: "/catalogue_icons/playstation_plus.jpg", alt: "PlayStation Plus баннер" }}
        title="Купить подписку Discord Nitro Full в России"
        description="Discord Nitro — расширяет возможности Discord за счет пользовательских смайлов, анимированных аватаров, загрузки больших файлов, потоковой передачи HD и многого другого."
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

      <FormComponent subscriptionType={checkParams(params.slug)} />

      <Reviews />

      <Faq>
        <Question title="Как это работает?">
          <p>
            После успешной оплаты вам на почту придет письмо с ссылкой на активацию
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
          <p>После отправки заявки среднее время выполнения заказа 5-30 минут в рабочие часы</p>
        </Question>

        <Question title="Какие требования к аккаунту на который будет приобретена подписка?">
          <p>
            На аккаунте НЕ должно быть активной (действующей) подписки, она должна ИСТЕЧЬ к моменту покупки❗
            <br />
            <br />
            Подписки Не становятся одна на одну❗
            <br />
            <br />
            Подписка Nitro приобретаются в официальном магазине и Discord, что гарантирует надежность и безопасность дальнейшего
            использования 💯
          </p>
        </Question>
      </Faq>
    </div>
  );
}
