/* eslint-disable react/no-unescaped-entities */
export const dynamic = "force-static";
import GoBack from "../GoBack";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import Image1 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_1.png";
import Image2 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_2.png";
import Image3 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_3.png";
import Image4 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_4.png";
import Image5 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_5.png";
import Image6 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_6.png";
import Image7 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_7.png";
import Image8 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_8.png";
import Image9 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_9.png";
import Image10 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_10.png";
import Image11 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_11.png";

export const metadata: Metadata = {
  title: "Как включить 2FA на аккаунте PSN ",
  description: "Как включить 2FA на аккаунте PSN через компьютер",
  openGraph: {
    title: "Как включить 2FA на аккаунте PSN",
    description: "Как включить 2FA на аккаунте PSN через компьютер",
    url: "/guides/kak_vkluchit_2fa_na_akaunte_psn_telefon",
    images: ["/og_images/kak_vkluchit_2fa_na_akaunte_psn/2FA_komputer.png"],
  },
  alternates: {
    canonical: "/guides/kak_vkluchit_2fa_na_akaunte_psn_telefon",
  },
};

function Page() {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8 items-start">
      <GoBack />
      <h1 className="text-3xl lg:text-4xl font-bold" id="heading">
        Как включить 2FA на аккаунте PSN?
      </h1>
      <div role="tablist" className="tabs tabs-boxed mt-4">
        <p role="tab" className="tab tab-active">
          Компьютер
        </p>

        <Link role="tab" className="tab" href="/guides/kak_vkluchit_2fa_na_akaunte_psn_telefon">
          Телефон
        </Link>
      </div>

      <p className="my-6">Перейдите на официальный сайт Playstation и войдите в свой Турецкий аккаунт</p>
      <a
        href="https://store.playstation.com/en-tr/pages/latest"
        className="btn btn-outline mt-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Войти на сайт PlayStation
      </a>

      <p className="my-6">
        Нажмите кнопку <strong>Sing in</strong> и войдите в аккаунт
      </p>

      <Image
        src={Image1}
        alt="Войти на сайт"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md  w-full h-auto"
      />

      <p className="my-6">Нажмите на свой аватар</p>

      <Image
        src={Image2}
        alt="Открыть меню"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md  w-full h-auto"
      />

      <p className="my-6">
        В открывшемся меню нажмите на <strong>Account Settings</strong>
      </p>

      <Image
        src={Image3}
        alt="Перейти в Account Settings"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md  w-full h-auto"
      />

      <p className="my-6">
        Перейдите во вкладку <strong>Security</strong>
      </p>

      <Image
        src={Image4}
        alt="Перейти в Security"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md  w-full h-auto"
      />

      <p className="my-6">
        Во вкладке <strong>Security</strong> найдите текст <strong>2-Step Verification</strong>
        <br />
        Если напротив надписи <strong>Status</strong> стоит <strong>Active</strong>, то вы можете сразу перейти в инструкцию{" "}
        <Link className="cursor-pointer underline text-secondary" href="/guides/gde_posmotret_rezervnyi_kod">
          Как посмотреть резервные коды
        </Link>
        <br />
        Если напротив надписи <strong>Status</strong> стоит <strong>Disabled</strong>, нажмите справа кнопку <strong>Edit</strong>
      </p>

      <Image
        src={Image5}
        alt="Включить 2FA"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md  w-full h-auto"
      />

      <p className="my-6">
        На следующем этапе включения 2FA мы рекомендуем выбирать <strong>Authenticator App</strong>, т.к. с кодами по номеру телефона
        иногда бывают проблемы
      </p>

      <Image
        src={Image6}
        alt="Выбрать Authenticator App"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md  w-full h-auto"
      />

      <p className="my-6">
        Подтвердите свои действия, введя пароль от аккаунта
        <br />
        Также, если у вас не установлено приложение для подтверждения логина, вам будет предложено установить его
      </p>

      <Image
        src={Image7}
        alt="Подтвердить пароль и установить приложение"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md  w-full h-auto"
      />

      <p className="my-6">
        После установки приложения отсканируйте QR-код, который отобразится на экране, или введите резервный код вручную
      </p>

      <Image
        src={Image8}
        alt="Отсканировать QR-код или ввести резервный код"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md  w-full h-auto"
      />

      <p className="my-6">
        Вы почти у цели, коды на экране - это ваши <strong>резервные коды</strong>, вы можете их сфотографировать или куда-то записать,
        каждый код можно использовать только один раз для входа в ваш аккаунт
        <br />
      </p>

      <Image
        src={Image9}
        alt="Сохранение резервных кодов"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md  w-full h-auto"
      />

      <p className="my-6">
        Теперь <strong>ОБЯЗАТЕЛЬНО нажмите</strong> на пустой квадрат рядом с надписью{" "}
        <strong>"I saved these backup codes for future use"</strong> и нажмите кнопку <strong>OK</strong>
      </p>

      <Image
        src={Image10}
        alt="Нажать пустой квадрат и OK"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md  w-full h-auto"
      />

      <p className="my-6">
        Если все было сделано успешно, то после нажатия кнопки <strong>OK</strong> вас перебросит на страницу входа в аккаунт
        <br />
        Выполнив вход используя код из приложения-аутентификатора вы попадете обратно на страницу включения 2FA
        <br />
        На этой странице справа от надписи <strong>Status</strong> вы увидите текст <strong>Active</strong>
      </p>

      <Image
        src={Image11}
        alt="Нажать пустой квадрат и OK"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md  w-full h-auto"
      />

      <p className="my-6">
        Поздравляем, вы успешно подключили 2FA на свой аккаунт PSN!
        <br />
        На всякий случай рекомендуем записать или сохранить резервные коды
      </p>

      <Link className="font-bold underline" href="/guides/gde_posmotret_rezervnyi_kod">
        Как посмотреть резервные коды?
      </Link>
    </div>
  );
}

export default Page;
