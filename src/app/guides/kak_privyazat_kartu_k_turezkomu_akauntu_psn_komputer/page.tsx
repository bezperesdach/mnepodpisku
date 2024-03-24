export const dynamic = "force-static";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import GoBack from "@/app/guides/GoBack";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import Image1 from "@/../public/guides_data/kak_privyazat_kartu_k_turezkomu_akauntu_psn_komputer/1.png";
import Image2 from "@/../public/guides_data/kak_privyazat_kartu_k_turezkomu_akauntu_psn_komputer/2.png";
import Image3 from "@/../public/guides_data/kak_privyazat_kartu_k_turezkomu_akauntu_psn_komputer/3.png";
import Image4 from "@/../public/guides_data/kak_privyazat_kartu_k_turezkomu_akauntu_psn_komputer/4.png";
import Image5 from "@/../public/guides_data/kak_privyazat_kartu_k_turezkomu_akauntu_psn_komputer/5.png";
import Image6 from "@/../public/guides_data/kak_privyazat_kartu_k_turezkomu_akauntu_psn_komputer/6.png";
import Image7 from "@/../public/guides_data/kak_privyazat_kartu_k_turezkomu_akauntu_psn_komputer/7.png";
import { GuidesTabs } from "@/components/guides-tabs";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Как привязать карту к Турецкому Аккаунту PSN через компьютер",
  description: "Как привязать карту к Турецкому Аккаунту PSN через компьютер",
  openGraph: {
    title: "Как привязать карту к Турецкому Аккаунту PSN через компьютер",
    description: "Как привязать карту к Турецкому Аккаунту PSN через компьютер",
    url: "/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn_komputer",
    images: ["/og_images_generated/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn_komputer/og_image.png"],
  },
  alternates: {
    canonical: "/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn_komputer",
  },
};

function page() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8 items-start">
      <h1 className="text-3xl font-semibold tracking-tight" id="heading">
        Как привязать карту к турецкому аккаунту PSN через компьютер?
      </h1>

      <div className="flex flex-wrap gap-4 mt-2">
        <GoBack />
        <GuidesTabs>
          <p role="tab">Компьютер</p>

          <Link role="tab" href="/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn_telefon">
            Телефон
          </Link>
        </GuidesTabs>
      </div>

      <p className="my-4">
        Для того чтобы привязать турецкую карту к своему аккаунту PlayStation вам нужно сначала выполнить вход в аккаунт
      </p>

      <Button asChild>
        <Link href="https://www.playstation.com/en-tr/" className="mt-2" target="_blank" rel="noopener noreferrer">
          Перейти на официальный сайт PlayStation
        </Link>
      </Button>

      <Image
        src={Image1}
        alt="Зайти на сайт"
        width={0}
        height={0}
        sizes="100vw"
        className="mt-4 w-full h-auto rounded-md"
        placeholder="blur"
      />

      <p className="my-4">
        После входа в аккаунт нажмите на свой профиль и откройте <strong>"Управление платежами"</strong>/
        <strong>"Payment management"</strong>
      </p>

      <Image
        src={Image2}
        alt="Открыть payment management"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded-md"
        placeholder="blur"
      />

      <p className="my-4">
        Нажмите на <strong>"Добавить платежный способ"</strong>/<strong>"Add Payment Method"</strong>
      </p>

      <Image
        src={Image3}
        alt="Нажать на add payment method"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded-md"
        placeholder="blur"
      />

      <p className="my-4">
        Нажмите на <strong>"Добавить кредитную/дебетовую карту"</strong>/<strong>"Add a Credit/Debit Card"</strong>
      </p>

      <Image
        src={Image4}
        alt="Нажать на Add credit/debit card"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded-md"
        placeholder="blur"
      />

      <p className="my-4">Заполните данные карты и нажмите Next</p>

      <Image
        src={Image5}
        alt="Заполните данные карты"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded-md"
        placeholder="blur"
      />

      <p className="my-4">
        Заполните адрес следующими данными:
        <br />
        <br />
        <strong>Address Line 1: Istanbul</strong>
        <br />
        <br />
        <strong>City: Istanbul</strong>
        <br />
        <br />
        <strong>State: Maltepe</strong>
        <br />
        <br />
        <strong>Postcode: 34840</strong>
        <br />
        <br />
        После этого нажмите <strong>"Сохранить"</strong>/<strong>"Save"</strong>
      </p>

      <Image
        src={Image6}
        alt="Заполните данные адреса"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded-md"
        placeholder="blur"
      />

      <p className="my-4">
        Если карта успешно добавилась, вас перенаправит на страницу <strong>"Управление платежами"</strong>/
        <strong>"Payment management"</strong> и вы увидите вашу карту
      </p>

      <Image src={Image7} alt="Успех" width={0} height={0} sizes="100vw" className="w-full h-auto rounded-md" placeholder="blur" />
    </div>
  );
}

export default page;
