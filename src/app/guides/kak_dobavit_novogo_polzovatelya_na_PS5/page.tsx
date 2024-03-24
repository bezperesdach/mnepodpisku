export const dynamic = "force-static";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import GoBack from "../GoBack";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import Image1 from "@/../public/guides_data/kak_dobavit_novogo_polzovatelya_na_PS5/add_ac_1.png";
import Image2 from "@/../public/guides_data/kak_dobavit_novogo_polzovatelya_na_PS5/add_ac_2.png";
import Image3 from "@/../public/guides_data/kak_dobavit_novogo_polzovatelya_na_PS5/add_ac_3.png";
import { GuidesTabs } from "@/components/guides-tabs";

export const metadata: Metadata = {
  title: "Как добавить нового пользователя на PS5?",
  description: "Как добавить нового пользователя на PS5?",
  openGraph: {
    title: "Как добавить нового пользователя на PS5?",
    description: "Как добавить нового пользователя на PS5?",
    url: "/guides/kak_dobavit_novogo_polzovatelya_na_PS5",
    images: ["/og_images_generated/guides/kak_dobavit_novogo_polzovatelya_na_PS5/og_image.png"],
  },
  alternates: {
    canonical: "/guides/kak_dobavit_novogo_polzovatelya_na_PS5",
  },
};

function page() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8 items-start">
      <h1 className="text-3xl font-semibold tracking-tight" id="heading">
        Как добавить нового пользователя на PS5?
      </h1>

      <div className="flex flex-wrap gap-4 mt-2">
        <GoBack />
        <GuidesTabs>
          <Link role="tab" href="/guides/kak_dobavit_novogo_polzovatelya_na_PS4">
            PS4
          </Link>

          <p role="tab">PS5</p>
        </GuidesTabs>
      </div>

      <p className="my-4">
        Если вы уже имели опыт использования учетной записи на PlayStation 3 или PlayStation 4, вы легко сможете перейти к использованию
        ее на PlayStation 5. Все ваши достижения, трофеи и игровой прогресс, ранее сохраненные в облаке PS PLUS, будут также доступны. В
        случае, если PlayStation 5 станет вашей первой консолью, при первом включении появится окно для создания нового пользователя.
      </p>

      <p className="my-4">1. Выберите на начальном экране фотографию профиля.</p>
      <Image
        src={Image1}
        alt="Профиль"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md w-full"
      />

      <p className="my-4">
        2. В открывшемся окне вам необходимо нажать на кнопку <strong>"Начинаем"</strong> напротив раздела{" "}
        <strong>"Добавить пользователя в эту систему PS5"</strong> <br />
      </p>
      <Image
        src={Image2}
        alt="Добавление пользователя"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md w-full"
      />

      <p className="my-4">
        3. В открывшемся окне введите идентификатор входа в сеть (логин) и пароль учетной записи и нажмите на кнопку{" "}
        <strong>"Войти в сеть"</strong>
      </p>
      <Image
        src={Image3}
        alt="Добавление пользователя"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md w-full"
      />

      <p className="my-4">На этом этапе вы успешно войдете в аккаунт и можете приступить к его использованию.</p>
    </div>
  );
}

export default page;
