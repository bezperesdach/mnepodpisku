export const dynamic = "force-static";

import { HeroCard } from "@/app/(main)/hero-card";
// import HeroChoose from "@/components/HeroChoose/HeroChoose";
// import Faq from "@/components/Faq/Faq";
// import Question from "@/components/Faq/Question";
import { Metadata } from "next";
import { PopularServices } from "./popular-services";
import { AllServices } from "./all-services";
import Reviews from "@/components/Reviews/review";
// import Reviews from "@/components/Reviews/Reviews";

export const metadata: Metadata = {
  title: "Приобретай подписки выгодно и быстро на МнеПодписку.рф!",
  description:
    "МнеПодписку: быстро, безопасно, выгодно! Получайте подписки на различные сервисы на ваш личный аккаунт или в виде промокода.",
  openGraph: {
    title: "Приобретай подписки выгодно и быстро на МнеПодписку.рф!",
    description:
      "МнеПодписку: быстро, безопасно, выгодно! Получайте подписки на различные сервисы на ваш личный аккаунт или в виде промокода.",
    type: "website",
    images: ["/og_images_generated/og_image.png"],
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroCard />
      <PopularServices />
      <AllServices />
      <Reviews />
      {/* <div className="flex flex-col min-[1240px]:flex-row items-center gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">Помогаем приобретать подписки на зарубежные сервисы</h1>
      </div>

      <div className="mt-10">
        <h2 className="text-xl lg:text-2xl font-bold" id="description">
          Описание
        </h2>
        <p className="text-lg font-medium mt-4">
          МНЕПОДПИСКУ.РФ - твой персональный ассистент в приобретении подписок на различные сервисы. С помощью нашего сервиса ты сможешь
          снова купить premium для spotify, пополнить кошелек playstation, приобрести подписку discord nitro full и многое другое.
        </p>
      </div>

      <HeroChoose />
      <Reviews />
      <Faq>
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
      </Faq> */}
    </main>
  );
}
