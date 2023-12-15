/* eslint-disable react/no-unescaped-entities */
import GoBack from "../GoBack";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Как включить 2FA на аккаунте PSN ",
  description: "Как включить 2FA на аккаунте PSN через телефон",
  openGraph: {
    title: "Как включить 2FA на аккаунте PSN",
    description: "Как включить 2FA на аккаунте PSN через телефон",
  },
  alternates: {
    canonical: "/guides/kak_vkluchit_2fa_na_akaunte_psn_telefon",
  },
};

function Page() {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8 items-start">
      <GoBack />
      <h1 className="text-3xl lg:text-4xl font-bold  " id="heading">
        Как включить 2FA на аккаунте PSN?
      </h1>
      <div role="tablist" className="tabs tabs-boxed mt-4">
        <Link role="tab" className="tab" href="/guides/kak_vkluchit_2fa_na_akaunte_psn_komputer">
          Компьютер
        </Link>

        <p role="tab" className="tab tab-active">
          Телефон
        </p>
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
        src="/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_1.png"
        alt="Войти на сайт"
        width={0}
        height={0}
        sizes="100vw"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-6">Нажмите на свой аватар</p>
      <Image
        src="/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_2.png"
        alt="Открыть меню"
        width={0}
        height={0}
        sizes="100vw"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-6">
        На данной странице нажмите на <strong>Account Settings</strong>
      </p>

      <Image
        src="/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_3.png"
        alt="Перейти в Account Settings"
        width={0}
        height={0}
        sizes="100vw"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-6">
        Перейдите во вкладку <strong>Security</strong>
      </p>

      <Image
        src="/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_4.png"
        alt="Перейти в Security"
        width={0}
        height={0}
        sizes="100vw"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-6">
        Нажмите <strong>Continue</strong>
      </p>

      <Image
        src="/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_5.png"
        alt="Нажать continue"
        width={0}
        height={0}
        sizes="100vw"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
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
        src="/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_6.png"
        alt="Нажать на Edit"
        width={0}
        height={0}
        sizes="100vw"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-6">
        На следующем этапе включения 2FA мы рекомендуем выбирать <strong>Authenticator App</strong>, т.к. с кодами по номеру телефона
        иногда бывают проблемы
      </p>

      <Image
        src="/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_7.png"
        alt="Выбрать authenticator app"
        width={0}
        height={0}
        sizes="100vw"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-6">
        Теперь вам нужно отсканировать QR код любым приложением-аутентификатором, мы рекомендуем <strong>Google Authenticator</strong>,
        вы можете скачать его на свой телефон из магазина приложений
        <br />
        После того как вы отсканируете данный QR код у вас на телефоне в приложении-аутентификаторе появится новый аккаунт, после этого
        нажмите на данной странице <strong>Continue</strong>
      </p>

      <Image
        src="/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_8.png"
        alt="Введите код и нажмите verify"
        width={0}
        height={0}
        sizes="100vw"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p>
        {" "}
        Если у вас нет второго телефона чтобы отсканировать QR код, вы можете скопировать строку под QR кодом и в ручном режиме добавить
        ее в приложение <strong>Google Authenticator</strong>
      </p>

      <p className="my-6">
        Откройте приложение <strong>Google Authenticator</strong>, нажмите на + справа снизу экрана и выберите{" "}
        <strong>Enter setup key/Добавить вручную</strong>
      </p>

      <Image
        src="/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/google_authenticator_1.png"
        alt="Добавить вручную"
        width={0}
        height={0}
        sizes="100vw"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-6">
        В поле <strong>Account</strong> введите почту вашего PSN аккаунта
        <br />В поле <strong>Key/Ключ</strong> вставьте ранее скопированную строку
        <br />
        Нажмите <strong>Add/Добавить</strong>
      </p>

      <Image
        src="/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/google_authenticator_2.png"
        alt="Заполнить поля account и key"
        width={0}
        height={0}
        sizes="100vw"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-6">
        После этого у вас на телефоне в приложении-аутентификаторе появится новый аккаунт, после этого нажмите на странице браузера{" "}
        <strong>Continue</strong> <strong>Continue</strong>
      </p>

      <Image
        src="/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_9.png"
        alt="Нажмите continue"
        width={0}
        height={0}
        sizes="100vw"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-6">
        Теперь у вас в приложении-аутентификаторе начнут генерироваться коды каждые 30 секунд
        <br />
        Введите этот код в поле на экране и нажмите <strong>Verify</strong>
      </p>

      <Image
        src="/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_10.png"
        alt="Введите код и нажмите verify"
        width={0}
        height={0}
        sizes="100vw"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-6">
        Вы почти у цели, коды на экране - это ваши <strong>резервные коды</strong>, вы можете их сфотографировать или куда-то записать,
        каждый код можно использовать только один раз для входа в ваш аккаунт
        <br />
      </p>

      <Image
        src="/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_11.png"
        alt="Сохранение резервных кодов"
        width={0}
        height={0}
        sizes="100vw"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-6">
        Теперь <strong>ОБЯЗАТЕЛЬНО нажмите</strong> на пустой квадрат рядом с надписью{" "}
        <strong>"I saved these backup codes for future use"</strong> и нажмите кнопку <strong>OK</strong>
      </p>

      <Image
        src="/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_12.png"
        alt="Нажать пустой квадрат и OK"
        width={0}
        height={0}
        sizes="100vw"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-6">
        Если все было сделано успешно, то после нажатия кнопки <strong>OK</strong> вас перебросит на страницу входа в аккаунт
        <br />
        Выполнив вход используя код из приложения-аутентификатора вы попадете обратно на страницу включения 2FA
        <br />
        На этой странице справа от надписи <strong>Status</strong> вы увидите текст <strong>Active</strong>
      </p>

      <Image
        src="/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_13.png"
        alt="Нажать пустой квадрат и OK"
        width={0}
        height={0}
        sizes="100vw"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="mt-6 mb-10">Поздравляем, вы успешно подключили 2FA на свой аккаунт PSN!</p>
    </div>
  );
}

export default Page;
