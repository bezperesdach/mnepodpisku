import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import { Metadata } from "next";
import Reviews from "@/components/Reviews/review";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import { ProductHero } from "@/components/product-hero";
import { FlameIcon } from "@primer/octicons-react";

export const metadata: Metadata = {
  title: "Купить подписку Tinder 2024 Россия",
  description:
    "Быстрая покупка подписки tinder gold, tinder platinum. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
  openGraph: {
    title: "Купить подписку Tinder 2024 Россия",
    description:
      "Быстрая покупка подписки tinder gold, tinder platinum. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
    url: "/tinder",
    images: ["/og_images_catalogue/tinder.png"],
    type: "website",
  },
  alternates: {
    canonical: "/tinder",
  },
};

const checkParams = (slug: string | string[] | undefined) => {
  if (slug && Array.isArray(slug) && slug.length > 0) {
    if (slug[0]) {
      if (["plus"].includes(slug[0])) {
        if (slug[1]) {
          const num = parseInt(slug[1], 10);
          if (!isNaN(num) && Number.isInteger(num) && num === 1) {
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

export default function Tinder({ params }: { params: { slug: string | string[] | undefined } }) {
  return (
    <div className="flex flex-col">
      <Breadcrumbs>
        <BreadcrumbItem>Tinder</BreadcrumbItem>
      </Breadcrumbs>

      <ProductHero
        icon={{ src: "/catalogue_icons/tinder.jpg", alt: "Netflix баннер" }}
        title="Купить промокод на Tinder Plus/Gold в России"
        description="Tinder Gold позволяет вам видеть, кому вы нравитесь, паспорт для сопоставления с людьми со всего мира, а также получать неограниченное количество лайков, суперлайков и бонусов."
        tags={[
          {
            icon: <FlameIcon className="text-[#f95721]" />,
            text: "ВЫГОДНО",
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
            На странице активации вам необходимо будет указать данные своего аккаунта Netflix, после чего отправить нам заявку на
            активацию
            <br />
            <br />
            Наш менеджер получит вашу заявку и приобретет подписку на ваш аккаунт{" "}
          </p>
        </Question>

        <Question title="Работает ли Tinder в России?">
          <p>Тиндером в россии можно пользоваться исключительно через ВПН и браузер. Без VPN тиндер не работает</p>
        </Question>

        <Question title="Как быстро я получу промокод на Tinder Gold?">
          <p>После отправки заявки среднее время выполнения заказа 5-30 минут в рабочие часы</p>
        </Question>
      </Faq>
    </div>
  );
}
