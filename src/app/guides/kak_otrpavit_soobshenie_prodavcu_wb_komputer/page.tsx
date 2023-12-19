export const dynamic = "force-static";
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import GoBack from "../GoBack";
import Image from "next/image";
import { Metadata } from "next";

import Image1 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_komputer/pc_photo_1.png";
import Image2 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_komputer/pc_photo_2.png";
import Image3 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_komputer/pc_photo_3.png";
import Image4 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_komputer/pc_photo_4.png";
import Image5 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_komputer/pc_photo_5.png";
import Image6 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_komputer/pc_photo_6.png";
import Image7 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_komputer/pc_photo_7.png";
import Image8 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_komputer/pc_photo_8.png";

export const metadata: Metadata = {
  title: "Как отправить сообщение продавцу ВБ через компьютер",
  description: "Как отправить сообщение продавцу ВБ через компьютер",
  openGraph: {
    title: "Как отправить сообщение продавцу ВБ через компьютер",
    description: "Как отправить сообщение продавцу ВБ через компьютер",
    url: "/guides/kak_otrpavit_soobshenie_prodavcu_wb_komputer",
    images: ["/og_images_generated/guides/kak_otrpavit_soobshenie_prodavcu_wb_komputer/og_image.png"],
  },
  alternates: {
    canonical: "/guides/kak_otrpavit_soobshenie_prodavcu_wb_komputer",
  },
};

function page() {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8 items-start">
      <GoBack />
      <h1 className="text-3xl lg:text-4xl font-bold" id="heading">
        Как отправить сообщение в чат с продавцом на Wildberries?
      </h1>
      <div role="tablist" className="tabs tabs-boxed mt-4">
        <a role="tab" className="tab tab-active">
          Компьютер
        </a>
        <Link role="tab" className="tab" href="/guides/kak_otrpavit_soobshenie_prodavcu_wb_telefon">
          Телефон
        </Link>
      </div>

      <p className="my-4">
        Для того чтобы отправить сообщение продавцу на Wildberries необходимо перейти на официальный сайт Wildberries <br />
        Убедитесь, что вы вошли под учетной записью, через которую была совершена покупка
      </p>
      <a
        href="https://www.wildberries.ru/security/login?returnUrl=https%3A%2F%2Fwww.wildberries.ru%2Fsecurity%2Flogin%2F/"
        className="btn btn-outline mt-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Войти на Wildberries под своей учетной записью
      </a>
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
        Как только вы введете учетные данные от вашего аккаунта и успешно войдете, наведитесь мышкой на раздел
        <strong>"Профиль"</strong> и перейдите в <strong> "Покупки"</strong>
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
      <Image
        src={Image3}
        alt="Покупки"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="mt-4 justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-4">
        В открывшемся окне вам необходимо найти покупку нашей карточки <br />
        Снизу от изображения товара вы найдете надпись <strong>"Чат с продавцом"</strong> - Вам необходимо перейти по данной кнопке
      </p>
      <Image
        src={Image4}
        alt="Карточка товара"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md"
      />
      <Image
        src={Image5}
        alt="Чат с продавцом"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="mt-6 justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-4">
        В открывшемся окне Вам будет предложено отправить первое сообщение, которое поможет нам увидеть, что Ваша карточка была
        выкуплена <br />
        <strong>Обязательно отправьте данное сообщение</strong>
      </p>
      <Image
        src={Image6}
        alt="Отправка сообщения от WB"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md w-full h-auto"
      />

      <p className="my-4">
        После отправки предложенного сообщения Вам необходимо отправить второе сообщение, в котором вы укажите свой код активации,
        который изображен на полученной карточке и состоит из 8 знаков
      </p>
      <Image
        src={Image7}
        alt="Отправка кода активации"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md w-full h-auto"
      />

      <p className="my-4">
        Убедитесь, что Ваши сообщения выглядят следующим образом! <br />
        Мы не сможем проверить Вашу покупку если диалог с вами будет пустой или у нас будут иные сообщения, не содержащие вышеуказанную
        информацию.
      </p>
      <Image
        src={Image8}
        alt="Как должны выглядеть сообщения"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md w-full h-auto"
      />
    </div>
  );
}

export default page;
