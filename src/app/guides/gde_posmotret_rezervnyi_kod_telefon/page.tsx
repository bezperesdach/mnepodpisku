export const dynamic = "force-static";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import GoBack from "@/app/guides/GoBack";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import Image1 from "@/../public//guides_data/gde_posmotret_rezervnyi_kod_telefon/2fa_mobile_1.png";
import Image2 from "@/../public//guides_data/gde_posmotret_rezervnyi_kod_telefon/2fa_mobile_2.png";
import Image3 from "@/../public//guides_data/gde_posmotret_rezervnyi_kod_telefon/2fa_mobile_3.png";
import Image4 from "@/../public//guides_data/gde_posmotret_rezervnyi_kod_telefon/2fa_mobile_4.png";
import Image5 from "@/../public//guides_data/gde_posmotret_rezervnyi_kod_telefon/2fa_mobile_5.png";
import Image6 from "@/../public//guides_data/gde_posmotret_rezervnyi_kod_telefon/2fa_mobile_6.png";
import Image7 from "@/../public//guides_data/gde_posmotret_rezervnyi_kod_telefon/2fa_mobile_7.png";

export const metadata: Metadata = {
  title: "Где найти резервный код от 2FA для PSN аккаунта на телефоне?",
  description: "Где найти резервный код от 2FA для PSN аккаунта на телефоне?",
  openGraph: {
    title: "Где найти резервный код от 2FA для PSN аккаунта на телефоне?",
    description: "Где найти резервный код от 2FA для PSN аккаунта на телефоне?",
    url: "/guides/gde_posmotret_rezervnyi_kod_telefon",
    images: ["/og_images_generated/guides/gde_posmotret_rezervnyi_kod_telefon/og_image.png"],
  },
  alternates: {
    canonical: "/guides/gde_posmotret_rezervnyi_kod_telefon",
  },
};

function page() {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8 items-start">
      <GoBack />
      <h1 className="text-3xl lg:text-4xl font-bold" id="heading">
        Где найти резервный код от 2FA для PSN аккаунта?
      </h1>

      <div role="tablist" className="tabs tabs-boxed mt-4">
        <Link role="tab" className="tab" href="/guides/gde_posmotret_rezervnyi_kod_komputer">
          Компьютер
        </Link>

        <p role="tab" className="tab tab-active">
          Телефон
        </p>
      </div>

      <p className="mt-4 border-2 border-warning p-2 rounded-lg text-lg">
        Резервные коды нужны для входа в аккаунт PSN при <strong>включенном 2FA</strong>, для включения 2FA ознакомьтесь с нашей{" "}
        <Link href="/guides/kak_vkluchit_2fa_na_akaunte_psn" className="text-secondary underline">
          ИНСТРУКЦИЕЙ
        </Link>
      </p>

      <p className="my-4">
        Для того чтобы получить резервный код через веб-браузер вашего компьютера, необходимо перейти на официальный сайт Sony
        PlayStation и войти, используя учетные данные <strong>вашей турецкой учетной записи</strong>
      </p>
      <a href="https://www.playstation.com/en-tr/" className="btn btn-outline mt-2" target="_blank" rel="noopener noreferrer">
        Перейти на официальный сайт
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
        Как только вы введете учетные данные от турецкого аккаунта и успешно войдете, перейдите в раздел
        <strong>"Настройки профиля"</strong>/<strong>"Account Settings"</strong>
      </p>
      <Image
        src={Image2}
        alt="Открыть меню"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />
      <Image
        src={Image3}
        alt="Зайти в раздел настройки профиля"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="mt-4 justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-4">
        В открывшемся окне необходимо перейти во вкладку <strong>"Безопасность"</strong>/<strong>"Security"</strong> и подтвердите
        действие
      </p>
      <Image
        src={Image4}
        alt="Зайти в раздел безопасность"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />
      <Image
        src={Image5}
        alt="Подтвердить вход в раздел безопасность"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="mt-4 justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-4">
        В открывшемся окне пролистайте страницу до пункта <strong>"Резервные коды"</strong>/<strong>"Backup Codes"</strong>
      </p>

      <p className="mb-4 border-2 border-warning p-2 rounded-lg text-lg">
        Если вы не нашли пункт <strong>"Резервные коды"</strong>/<strong>"Backup Codes"</strong> значит у вас не включен 2FA - вам нужно
        выполнить{" "}
        <Link href="/guides/kak_vkluchit_2fa_na_akaunte_psn" className="text-secondary underline">
          ИНСТРУКЦИЮ
        </Link>
      </p>

      <Image
        src={Image6}
        alt="Зайти в раздел резервные коды"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-4">
        В открывшейся вкладке хранятся ваши <strong>резервные коды</strong> <br />
        Сохраните один код и отправьте нам.
      </p>

      <Image
        src={Image7}
        alt="Увидеть резервные коды"
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
