export const dynamic = "force-static";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import GoBack from "../GoBack";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import ImageIcon from "@/../public/guides_data/kak_otpravit_chek_wb_telefon/send_email_icon.png";

import Image1 from "@/../public/guides_data/kak_otpravit_chek_wb_telefon/telefon_image_1.png";
import Image2 from "@/../public/guides_data/kak_otpravit_chek_wb_telefon/telefon_image_2.png";
import Image3 from "@/../public/guides_data/kak_otpravit_chek_wb_telefon/telefon_image_3.png";
import Image4 from "@/../public/guides_data/kak_otpravit_chek_wb_telefon/telefon_image_4.png";
import Image5 from "@/../public/guides_data/kak_otpravit_chek_wb_telefon/telefon_image_5.png";

export const metadata: Metadata = {
  title: "Как отправить чек ВБ через телефон",
  description: "Как отправить чек ВБ через телефон",
  openGraph: {
    title: "Как отправить чек ВБ через телефон",
    description: "Как отправить чек ВБ через телефон",
    url: "/guides/kak_otpravit_chek_wb_telefon",
    images: ["/og_images_generated/guides/kak_otpravit_chek_wb_telefon/og_image.png"],
  },
  alternates: {
    canonical: "/guides/kak_otpravit_chek_wb_telefon",
  },
};

function page() {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8 items-start">
      <GoBack />
      <h1 className="text-3xl lg:text-4xl font-bold" id="heading">
        Как отправить чек ВБ через телефон и сайт?
      </h1>

      <div role="tablist" className="tabs tabs-boxed mt-4">
        <Link role="tab" className="tab" href="/guides/kak_otpravit_chek_wb_komputer">
          Компьютер
        </Link>

        <Link role="tab" className="tab" href="/guides/kak_otpravit_chek_wb_prilozhenie">
          Приложение
        </Link>

        <p role="tab" className="tab tab-active">
          Моб. Сайт
        </p>
      </div>

      <p className="my-4">
        Для отправки чека с браузера телефона Вам необходимо открыть{" "}
        <a className="text-secondary underline" href="https://www.wildberries.ru/" target="_blank" rel="noopener noreferrer">
          Сайт Wildberries
        </a>{" "}
        и войти под пользователем, который осуществлял покупку карточки
      </p>
      <a href="https://www.wildberries.ru/" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
        Перейти на сайт Wildberries
      </a>

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
        После этого Вам необходимо перейти в раздел <strong>"Чеки"</strong>
      </p>
      <Image
        src={Image2}
        alt="Открыть раздел чеки"
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
        src={Image3}
        alt="Открыть меню отправки чека"
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
        src={Image4}
        alt="Отправить чек на почту"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />
      <Image
        src={Image5}
        alt="Сообщение успешной отправки"
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
