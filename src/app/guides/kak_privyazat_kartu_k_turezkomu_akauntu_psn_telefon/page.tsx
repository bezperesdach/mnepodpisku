export const dynamic = "force-static";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import GoBack from "@/app/guides/GoBack";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import Image1 from "@/../public/guides_data/kak_privyazat_kartu_k_turezkomu_akauntu_psn_telefon/1.png";
import Image2 from "@/../public/guides_data/kak_privyazat_kartu_k_turezkomu_akauntu_psn_telefon/2.png";
import Image3 from "@/../public/guides_data/kak_privyazat_kartu_k_turezkomu_akauntu_psn_telefon/3.png";
import Image4 from "@/../public/guides_data/kak_privyazat_kartu_k_turezkomu_akauntu_psn_telefon/4.png";
import Image5 from "@/../public/guides_data/kak_privyazat_kartu_k_turezkomu_akauntu_psn_telefon/5.png";
import Image6 from "@/../public/guides_data/kak_privyazat_kartu_k_turezkomu_akauntu_psn_telefon/6.png";
import Image7 from "@/../public/guides_data/kak_privyazat_kartu_k_turezkomu_akauntu_psn_telefon/7.png";
import Image8 from "@/../public/guides_data/kak_privyazat_kartu_k_turezkomu_akauntu_psn_telefon/8.png";

export const metadata: Metadata = {
  title: "Как привязать карту к Турецкому Аккаунту PSN через телефон",
  description: "Как привязать карту к Турецкому Аккаунту PSN через телефон",
  openGraph: {
    title: "Как привязать карту к Турецкому Аккаунту PSN через телефон",
    description: "Как привязать карту к Турецкому Аккаунту PSN через телефон",
    url: "/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn_telefon",
    images: ["/og_images_generated/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn_telefon/og_image.png"],
  },
  alternates: {
    canonical: "/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn_telefon",
  },
};

function page() {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8 items-start">
      <GoBack />
      <h1 className="text-3xl lg:text-4xl font-bold" id="heading">
        Как привязать карту к турецкому аккаунту PSN через телефон?
      </h1>

      <div role="tablist" className="tabs tabs-boxed mt-4">
        <Link role="tab" className="tab" href="/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn_komputer">
          Компьютер
        </Link>

        <p role="tab" className="tab tab-active">
          Телефон
        </p>

        {/* <Link role="tab" className="tab" href="/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn_ps4">
          PS4
        </Link>
        <Link role="tab" className="tab" href="/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn_ps5">
          PS5
        </Link> */}
      </div>

      <p className="my-4">
        Для того чтобы привязать турецкую карту к своему аккаунту PlayStation вам нужно сначала выполнить вход в аккаунт
      </p>
      <a href="https://www.playstation.com/en-tr/" className="btn btn-outline mt-2" target="_blank" rel="noopener noreferrer">
        Перейти на официальный сайт PlayStation
      </a>
      <Image
        src={Image1}
        alt="Зайти на сайт"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="mt-4 justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
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
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <Image
        src={Image3}
        alt="Открыть payment management"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="mt-8 justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-4">
        Нажмите на <strong>"Добавить платежный способ"</strong>/<strong>"Add Payment Method"</strong>
      </p>

      <Image
        src={Image4}
        alt="Нажать на Add Payment Method"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-4">
        Нажмите на <strong>"Добавить кредитную/дебетовую карту"</strong>/<strong>"Add a Credit/Debit Card"</strong>
      </p>

      <Image
        src={Image5}
        alt="Нажать на Add a Credit/Debit Card"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-4">Заполните данные карты и нажмите Next</p>

      <Image
        src={Image6}
        alt="Заполните данные карты и нажмите Next"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
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
        src={Image7}
        alt="Заполните адрес"
        width={0}
        height={0}
        sizes="100vw"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
        placeholder="blur"
      />

      <p className="my-4">
        Если карта успешно добавилась, вас перенаправит на страницу <strong>"Управление платежами"</strong>/
        <strong>"Payment management"</strong> и вы увидите вашу карту
      </p>

      <Image
        src={Image8}
        alt="успех"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />
    </div>
  );
}

export default page;
