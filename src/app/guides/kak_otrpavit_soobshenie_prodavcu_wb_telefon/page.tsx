export const dynamic = "force-static";
import GoBack from "../GoBack";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import Image1 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_telefon/chat_phone_1.png";
import Image2 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_telefon/chat_phone_2.png";
import Image3 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_telefon/chat_phone_3.png";
import Image4 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_telefon/chat_phone_4.png";
import Image5 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_telefon/chat_phone_5.png";
import Image6 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_telefon/chat_phone_6.png";
import Image7 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_telefon/chat_phone_7.png";
import Image8 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_telefon/chat_phone_8.png";

export const metadata: Metadata = {
  title: "Как отправить сообщение продавцу ВБ через телефон",
  description: "Как отправить сообщение продавцу ВБ через телефон",
  openGraph: {
    title: "Как отправить сообщение продавцу ВБ через телефон",
    description: "Как отправить сообщение продавцу ВБ через телефон",
    url: "/guides/kak_otrpavit_soobshenie_prodavcu_wb_telefon",
    images: ["/og_images_generated/guides/kak_otrpavit_soobshenie_prodavcu_wb_telefon/og_image.png"],
  },
  alternates: {
    canonical: "/guides/kak_otrpavit_soobshenie_prodavcu_wb_telefon",
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
        <Link role="tab" className="tab" href="/guides/kak_otrpavit_soobshenie_prodavcu_wb_komputer">
          Компьютер
        </Link>

        <p role="tab" className="tab tab-active">
          Телефон
        </p>
      </div>

      <p className="mt-4 border-2 border-warning p-2 rounded-lg">
        <strong>ВНИМАНИЕ!</strong> Отправить сообщение продавцу можно только с сайта Wildberries, в приложении такого функционала нет!
      </p>

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
        className="mt-4 justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-4">
        Как только вы введете учетные данные от вашего аккаунта и успешно войдете, перейдите в раздел
        <strong> &quout;Профиль&quout;</strong> который находится в правом нижнем углу
      </p>
      <Image
        src={Image2}
        alt="Перейти в профиль"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-4">
        В открывшемся окне вам необходимо перейти в раздел <strong>&quout;Покупки&quout;</strong>
      </p>
      <Image
        src={Image3}
        alt="Перейти в покупки"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-4">
        В открывшемся окне найдите покупку нашего товара и нажмите на три точки справа от карточки <br />В открывшемся окне выберите{" "}
        <strong>&quout;Чат с продавцом&quout;</strong>
      </p>
      <Image
        src={Image4}
        alt="Три точки"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />
      <Image
        src={Image5}
        alt="Чат с продавцом"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="mt-4 justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
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
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-4">
        После отправки предложенного сообщения Вам необходимо отправить второе сообщение, в котором вы укажите свой код активации,
        который изображен на полученной карточке и состоит из 8 знаков
      </p>
      <p className="my-4 font-bold">Если вы приобрели товар на котором нет кода активации, вы можете пропустить остальные шаги</p>
      <Image
        src={Image7}
        alt="Отправка кода активации"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
      />

      <p className="my-4">
        Убедитесь, что Ваши сообщения выглядят следующим образом! <br />
        Мы не сможем проверить Вашу покупку если диалог с вами будет пустой или у нас будут иные сообщения, не содержащие вышеуказанную
        информацию.
      </p>
      <Image
        src={Image8}
        alt="Как выглядит изображение"
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
