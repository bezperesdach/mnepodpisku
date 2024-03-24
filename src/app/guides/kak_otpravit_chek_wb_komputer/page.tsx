export const dynamic = "force-static";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import GoBack from "../GoBack";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import Image1 from "@/../public/guides_data/kak_otpravit_chek_wb_komputer/pc_image_1.png";
import Image2 from "@/../public/guides_data/kak_otpravit_chek_wb_komputer/pc_image_2.png";
import Image3 from "@/../public/guides_data/kak_otpravit_chek_wb_komputer/pc_image_3.png";
import Image4 from "@/../public/guides_data/kak_otpravit_chek_wb_komputer/pc_image_4.png";
import Image5 from "@/../public/guides_data/kak_otpravit_chek_wb_komputer/pc_image_5.png";
import Image6 from "@/../public/guides_data/kak_otpravit_chek_wb_komputer/pc_image_6.png";
import { GuidesTabs } from "@/components/guides-tabs";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Как отправить чек ВБ с компьютера",
  description: "Как отправить чек ВБ с компьютера",
  openGraph: {
    title: "Как отправить чек ВБ с компьютера",
    description: "Как отправить чек ВБ с компьютера",
    url: "/guides/kak_otpravit_chek_wb_komputer",
    images: ["/og_images_generated/guides/kak_otpravit_chek_wb_komputer/og_image.png"],
  },
  alternates: {
    canonical: "/guides/kak_otpravit_chek_wb_komputer",
  },
};

function page() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8 items-start">
      <h1 className="text-3xl font-semibold tracking-tight" id="heading">
        Как отправить чек ВБ с компьютера?
      </h1>

      <div className="flex flex-wrap gap-4 mt-2">
        <GoBack />
        <GuidesTabs>
          <p role="tab">Компьютер</p>

          <Link role="tab" href="/guides/kak_otpravit_chek_wb_prilozhenie">
            Приложение
          </Link>

          <Link role="tab" href="/guides/kak_otpravit_chek_wb_telefon">
            Моб. Сайт
          </Link>
        </GuidesTabs>
      </div>

      <p className="my-4">
        Для отправки чека с компьютера Вам необходимо открыть{" "}
        <Link className="text-primary underline" href="https://www.wildberries.ru/" target="_blank" rel="noopener noreferrer">
          Сайт Wildberries
        </Link>{" "}
        и войти под пользователем, который осуществлял покупку карточки
      </p>

      <Button asChild>
        <Link href="https://www.wildberries.ru/" className="mt-2" target="_blank" rel="noopener noreferrer">
          Перейти на сайт Wildberries
        </Link>
      </Button>

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
        className="justify-center rounded-md w-full h-auto"
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
        className="justify-center rounded-md w-full h-auto"
      />

      <p className="my-4">
        После найдите чек, в котором указана наша карточка и наведите мышкой на значок <br />
        Данный значок является кнопкой <strong>"Отправить на Email"</strong>
      </p>

      <Image
        src={Image3}
        alt="Кнопка отправить чек"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md w-full h-auto"
      />
      <Image
        src={Image4}
        alt="Кнопка отправить чек - 2"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="mt-4 justify-center rounded-md w-full h-auto"
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
        className="justify-center rounded-md w-full h-auto"
      />
      <Image
        src={Image6}
        alt="Окно отправки чека"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="mt-4 justify-center rounded-md w-full h-auto"
      />
    </div>
  );
}

export default page;
