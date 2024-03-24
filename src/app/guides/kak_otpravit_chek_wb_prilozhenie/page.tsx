export const dynamic = "force-static";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import GoBack from "../GoBack";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import ImageIcon from "@/../public/guides_data/kak_otpravit_chek_wb_prilozhenie/send_email_icon.png";
import Image1 from "@/../public/guides_data/kak_otpravit_chek_wb_prilozhenie/prilozhenie_image_1.png";
import Image2 from "@/../public/guides_data/kak_otpravit_chek_wb_prilozhenie/prilozhenie_image_2.png";
import Image3 from "@/../public/guides_data/kak_otpravit_chek_wb_prilozhenie/prilozhenie_image_3.png";
import Image4 from "@/../public/guides_data/kak_otpravit_chek_wb_prilozhenie/prilozhenie_image_4.png";
import Image5 from "@/../public/guides_data/kak_otpravit_chek_wb_prilozhenie/prilozhenie_image_5.png";
import Image6 from "@/../public/guides_data/kak_otpravit_chek_wb_prilozhenie/prilozhenie_image_6.png";
import { GuidesTabs } from "@/components/guides-tabs";

export const metadata: Metadata = {
  title: "Как отправить чек ВБ через мобильное приложение",
  description: "Как отправить чек ВБ через мобильное приложение",
  openGraph: {
    title: "Как отправить чек ВБ через мобильное приложение",
    description: "Как отправить чек ВБ через мобильное приложение",
    url: "/guides/kak_otpravit_chek_wb_prilozhenie",
    images: ["/og_images_generated/guides/kak_otpravit_chek_wb_prilozhenie/og_image.png"],
  },
  alternates: {
    canonical: "/guides/kak_otpravit_chek_wb_prilozhenie",
  },
};

function page() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8 items-start">
      <h1 className="text-3xl font-semibold tracking-tight" id="heading">
        Как отправить чек ВБ через мобильное приложение?
      </h1>

      <div className="flex flex-wrap gap-4 mt-2">
        <GoBack />
        <GuidesTabs>
          <Link role="tab" href="/guides/kak_otpravit_chek_wb_komputer">
            Компьютер
          </Link>

          <p role="tab">Приложение</p>

          <Link role="tab" href="/guides/kak_otpravit_chek_wb_telefon">
            Моб. Сайт
          </Link>
        </GuidesTabs>
      </div>

      <p className="my-4">
        Для отправки чека с приложения телефона Вам необходимо открыть приложение Wildberries и войти под пользователем, который
        осуществлял покупку карточки
      </p>

      <p className="my-4">
        После успешного входа в аккаунт перейдите в раздел <strong>"Профиль"</strong>
      </p>
      <Image
        src={Image1}
        alt="Открыть профиль"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-4">
        После этого Вам необходимо перейти в раздел <strong>"Финансы"</strong>
      </p>
      <Image
        src={Image2}
        alt="Открыть раздел финансы"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-4">
        После Вам необходимо перейти в раздел <strong>"Эл. чеки"</strong>
      </p>

      <Image
        src={Image3}
        alt="Открыть раздел финансы эл. чеки"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />
      <div className="my-4 inline-flex items-center gap-2">
        <p>После найдите чек, в котором указана наша карточка и нажмите на значок</p>
        <Image src={ImageIcon} alt="Значок отправки чеки" width={0} height={0} sizes="10vw" className="w-9 h-9" />
      </div>
      <p className="my-4">
        Данный значок является кнопкой <strong>"Отправить на Email"</strong>
      </p>
      <Image
        src={Image4}
        alt="Открыть раздел финансы эл. чеки"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-4">
        В открывшемся окне укажите нашу почту: <br />
        <span className="text-lg font-bold">help@mnepodpisku.ru</span>
        <br /> и нажмите <strong>"Отправить"</strong>
      </p>
      <Image
        src={Image5}
        alt="Окно отправки чека"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />
      <Image
        src={Image6}
        alt="Успешная отправка чека"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="mt-4 mb-10 justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />
    </div>
  );
}

export default page;
