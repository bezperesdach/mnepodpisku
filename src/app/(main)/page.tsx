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
  title: "Приобретай подписки выгодно и быстро на mnepodpisku.ru!",
  description:
    "МнеПодписку: быстро, безопасно, выгодно! Получайте подписки на различные сервисы на ваш личный аккаунт или в виде промокода.",
  openGraph: {
    title: "Приобретай подписки выгодно и быстро на mnepodpisku.ru!",
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
    </main>
  );
}
