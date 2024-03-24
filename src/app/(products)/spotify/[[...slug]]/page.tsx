import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import { Metadata } from "next";
import Reviews from "@/components/Reviews/review";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import { ProductHero } from "@/components/product-hero";
import Image from "next/image";
import { FlameIcon, StarFillIcon } from "@primer/octicons-react";

export const metadata: Metadata = {
  title: "Купить Spotify Premium 2024",
  description:
    "Купить spotify premium быстро и дешево в россии. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
  openGraph: {
    title: "Купить Spotify Premium 2024 Россия",
    description:
      "Купить spotify premium быстро и дешево в россии. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
    url: "/spotify",
    images: ["/og_images_catalogue/spotify.png"],
    type: "website",
  },
  alternates: {
    canonical: "/spotify",
  },
};

const checkParams = (slug: string | string[] | undefined) => {
  if (slug && Array.isArray(slug) && slug.length > 0) {
    if (slug[0]) {
      if (["individual"].includes(slug[0])) {
        if (slug[1]) {
          const num = parseInt(slug[1], 10);
          if (!isNaN(num) && Number.isInteger(num) && (num === 1 || num === 3 || num === 6 || num === 12)) {
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
        <BreadcrumbItem>Spotify Премиум</BreadcrumbItem>
      </Breadcrumbs>

      <ProductHero
        icon={{ src: "/catalogue_icons/spotify.jpg", alt: "Spotify Premium баннер" }}
        title="Купить подписку на Spotify Premium в России"
        description="Spotify это крупнейшая музыкальная стриминговая платформа с доступом к миллионам различных треков."
        tags={[
          {
            icon: (
              <div className="h-6 w-6 relative rounded-lg overflow-hidden">
                <Image className="object-contain" src="/india.png" alt="Регион индия" fill />
              </div>
            ),
            text: "ИНДИЯ",
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

      <Reviews />

      <Faq>
        <Question title="Как это работает?">
          После успешной оплаты вам на почту придет письмо с ссылкой на активацию
          <br />
          <br />
          На странице активации вам необходимо будет указать данные своего аккаунта Spotify, после чего отправить нам заявку на
          активацию
          <br />
          <br />
          Наш менеджер получит вашу заявку и приобретет необходимую подписку на ваш аккаунт
        </Question>
        <Question title="Нужен ли индийский аккаунт Spotify?">
          <p>Нет, даже если у вас стоит другой регион, мы сами сменим его на нужный и оформим подписку</p>
        </Question>
        <Question title="Работает ли Spotify в России?">
          <p>Для работы Spotify в России может понадобиться однократный вход через VPN</p>
        </Question>

        <Question title="Сколько времени занимает активация Spotify premium?">
          <p>После отправки заявки среднее время активации 5-30 минут в рабочие часы</p>
        </Question>
      </Faq>
    </div>
  );
}
