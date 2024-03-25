import React from "react";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";

import { Metadata } from "next";
import Reviews from "@/components/Reviews/review";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import { PopularServices } from "../(main)/popular-services";
import { ProductHero } from "@/components/product-hero";
import { FlameIcon, StarFillIcon, ZapIcon } from "@primer/octicons-react";
import { AllServices } from "../(main)/all-services";

export const metadata: Metadata = {
  title: "МнеПодписку отзывы",
  description: "Страница с отзывами о сервисе МнеПодписку. Узнай мнение других людей и сделай правильный выбор!",
  openGraph: {
    title: "Мне Подписку отзывы",
    description: "Страница с отзывами о сервисе МнеПодписку. Узнай мнение других людей и сделай правильный выбор!",
    url: "/reviews",
    images: ["/og_images_catalogue/reviews.png"],
    type: "website",
  },
  alternates: {
    canonical: "/reviews",
  },
};

export default function PsEaPlay() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs>
        <BreadcrumbItem>Отзывы</BreadcrumbItem>
      </Breadcrumbs>

      <ProductHero
        icon={{ src: "/catalogue_icons/reviews.webp", alt: "Картинка отзывов" }}
        title="МнеПодписку Отзывы"
        description="На данной странице вы найдете отзывы людей которые уже воспользовались нашими услугами"
        tags={[
          {
            icon: <StarFillIcon className="text-primary" />,
            text: "БЕЗОПАСНО",
          },
          {
            icon: <FlameIcon className="text-[#f95721]" />,
            text: "ВЫГОДНО",
          },

          {
            icon: <ZapIcon className=" text-primary" />,
            text: "БЫСТРО",
          },
        ]}
      />

      <Reviews />
      <PopularServices />
      <AllServices />

      <Faq>
        <Question title="Почему мне стоит довериться вашему сервису?">
          <p>
            Наш сервис работает уже больше полугода и за это время мы помогли уже более чем 1000 людей в приобретении различных
            сервисов, мы работаем официально, а также у нас есть группа в ВК в которой есть множество отзывов о нашей работе
          </p>
        </Question>
        <Question title="Как происходит получение нужной подписки?">
          <p>
            В большинстве случаев нам потребуются данные от вашего аккаунта, после чего мы выполним выход, приобретем необходимую вам
            подписку и выйдем из аккаунта
            <br />
            Некоторые сервисы дают возможность активации промокода, на странице сервиса будет указано что вы приобретаете промокод,
            после оплаты вы получите промокод, которой сможете самостоятельно активировать.
            <br />
          </p>
        </Question>
        <Question title="Почему стоит приобрести подписку именно у нас">
          <p>
            Мы предоставляем быструю активацию, имеем магазин на Wildberries и бота в телеграм, работаем официально и имеем одну и самых
            низких комиссий в интернете.
          </p>
        </Question>
      </Faq>
    </div>
  );
}
