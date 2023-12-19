export const dynamic = "force-static";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import GoBack from "../GoBack";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import Image1 from "@/../public/guides_data/kak_dobavit_novogo_polzovatelya_na_PS4/add_ac_1.png";
import Image2 from "@/../public/guides_data/kak_dobavit_novogo_polzovatelya_na_PS4/add_ac_2.png";

export const metadata: Metadata = {
  title: "Как добавить нового пользователя на PS4?",
  description: "Как добавить нового пользователя на PS4?",
  openGraph: {
    title: "Как добавить нового пользователя на PS4?",
    description: "Как добавить нового пользователя на PS4?",
    url: "/guides/kak_dobavit_novogo_polzovatelya_na_PS4",
    images: ["/og_images_generated/guides/kak_dobavit_novogo_polzovatelya_na_PS4/og_image.png"],
  },
  alternates: {
    canonical: "/guides/kak_dobavit_novogo_polzovatelya_na_PS4",
  },
};

function page() {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8 items-start">
      <GoBack />
      <h1 className="text-3xl lg:text-4xl font-bold" id="heading">
        Как добавить нового пользователя на PS4?
      </h1>
      <div role="tablist" className="tabs tabs-boxed mt-4">
        <p role="tab" className="tab tab-active">
          PS4
        </p>

        <Link role="tab" className="tab " href="/guides/kak_dobavit_novogo_polzovatelya_na_PS5">
          PS5
        </Link>
      </div>

      <p className="my-4">
        Если вы уже имели опыт использования учетной записи на PlayStation 3 или PlayStation 5, вы легко сможете перейти к использованию
        ее на PlayStation 4. Все ваши достижения, трофеи и игровой прогресс, ранее сохраненные в облаке PS PLUS, будут также доступны. В
        случае, если PlayStation 4 станет вашей первой консолью, при первом включении появится окно для создания нового пользователя.
      </p>

      <p className="my-4">
        1. Включите приставку и в главном меню выберите нажмите на кнопку <strong>"Новый пользователь"</strong>
      </p>

      <Image
        src={Image1}
        alt="Войти на сайт"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="mt-4 justify-center rounded-md w-full h-auto"
      />

      <p className="my-4">
        2. В открывшемся окне введите <strong>ID входа в сеть (Электронный адрес)</strong> и <strong>Пароль</strong> от турецкой учетной
        записи PSN <br />
        После этого нажмите на кнопку <strong>Войти в сеть</strong>
      </p>
      <Image
        src={Image2}
        alt="Профиль"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md w-full h-auto"
      />

      <p className="my-4">На этом этапе вы успешно войдете в аккаунт и можете приступить к его использованию.</p>
    </div>
  );
}

export default page;
