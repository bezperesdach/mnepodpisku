export const dynamic = "force-static";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { BookIcon } from "@primer/octicons-react";

export const metadata: Metadata = {
  title: "Расписание нашей работы в новогодние праздники",
  description: "Узнайте когда и как мы будем работать в эти новогодние праздники",
  openGraph: {
    title: "Расписание нашей работы в новогодние праздники",
    description: "Узнайте когда и как мы будем работать в эти новогодние праздники",
    url: "/blog/raspisanie_raboti_v_nogodnie_prazdniki",
    images: ["/og_images_generated/blog/raspisanie_raboti_v_nogodnie_prazdniki/og_image.png"],
    type: "article",
  },
  alternates: {
    canonical: "/blog/raspisanie_raboti_v_nogodnie_prazdniki",
  },
};

async function RaspisanieRabotiNogodniePrazdniki({}) {
  return (
    <div className="flex flex-col w-full max-w-screen-lg mx-auto px-2 sm:px-4 mb-10">
      <Breadcrumbs disableHome={true}>
        <>
          <BreadcrumbItem className="flex gap-1">
            <BreadcrumbLink className="flex gap-1 justify-center items-center" href="/blog">
              <BookIcon /> Блог
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>Расписание нашей работы в новогодние праздники</BreadcrumbItem>
        </>
      </Breadcrumbs>

      <div className="flex items-center gap-4 mt-6">
        <h1 className="text-3xl font-semibold tracking-tight" id="heading">
          Расписание нашей работы в новогодние праздники
        </h1>
      </div>

      <div className=" items-left ">
        <div className="text-3xl font-black self-stretch mt-12 max-md:mt-10">🎉 Друзья, поздравляем с наступающим Новым годом! 🎄</div>
        <div className="text-1xl justify-center py-4 ">
          ✨ Спасибо, что были с нами в этом году и доверяли нашему сервису! 💙 Ваша поддержка — это наша мотивация становиться лучше.
          <br />
          <br />
          🌟 <strong>С 30 декабря по 5 января</strong> наш сервис уходит в небольшой отпуск, чтобы встретить праздники с новыми силами.
          <strong>Все заказы, оформленные в этот период, будут обработаны после 5 января.</strong> Желаем вам счастья, здоровья, тепла
          и, конечно, побольше крутых игровых моментов в новом году!
          <br />
          <br />
          🎮❄ До встречи в 2024 году! 🥳
          <br />
          <br />С любовью, ваша команда МнеПодписку 💌
        </div>
      </div>
    </div>
  );
}

export default RaspisanieRabotiNogodniePrazdniki;
