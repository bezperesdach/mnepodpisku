import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import { Metadata } from "next";
import Reviews from "@/components/Reviews/review";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import { ProductHero } from "@/components/product-hero";
import Image from "next/image";
import { FlameIcon } from "@primer/octicons-react";

export const metadata: Metadata = {
  title: "Купить Spotify Premium 2024",
  description:
    "Купить spotify premium быстро и дешево в россии. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
  openGraph: {
    title: "Купить Spotify Premium 2024 Россия",
    description:
      "Купить spotify premium быстро и дешево в россии. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
    url: "/spotify",
    images: ["/og_images_catalogue/spotify.png"],
    type: "website",
  },
  alternates: {
    canonical: "/spotify",
  },
};

const checkParams = (slug: string | string[] | undefined) => {
  if (slug && Array.isArray(slug) && slug.length > 0) {
    if (slug[0]) {
      if (["individual"].includes(slug[0])) {
        if (slug[1]) {
          const num = parseInt(slug[1], 10);
          if (!isNaN(num) && Number.isInteger(num) && (num === 1 || num === 3 || num === 6 || num === 12)) {
            return { type: slug[0], duration: slug[1] };
          } else {
            return { type: slug[0], duration: "1" };
          }
        }
        return { type: slug[0], duration: "1" };
      }
    }
  }

  return undefined;
};

export default function PsEaPlay({ params }: { params: { slug: string | string[] | undefined } }) {
  return (
    <div className="flex flex-col">
      <Breadcrumbs>
        <BreadcrumbItem>Spotify Премиум</BreadcrumbItem>
      </Breadcrumbs>

      <ProductHero
        icon={{ src: "/catalogue_icons/spotify.jpg", alt: "Spotify Premium баннер" }}
        title="Купить подписку на Spotify Premium в России"
        description="Spotify это крупнейшая музыкальная стриминговая платформа с доступом к миллионам различных треков."
        tags={[
          {
            icon: (
              <div className="h-6 w-6 relative rounded-lg overflow-hidden">
                <Image className="object-contain" src="/india.png" alt="Регион индия" fill />
              </div>
            ),
            text: "ИНДИЯ",
          },
          {
            icon: <FlameIcon className="text-[#f95721]" />,
            text: "ВЫГОДНО",
          },
          // {
          //   icon: <StarFillIcon className="text-primary" />,
          //   text: "НЕ НУЖЕН VPN",
          // },
        ]}
      />

      <FormComponent subscriptionType={checkParams(params.slug)} />

      <Reviews />

      <Faq>
        <Question title="Как оплатить за пределами РФ?">
          <p>
            Наша платежный провайдер <b>Robokassa</b> принимает карты <b>MasterCard всего мира</b>. Выберите необходимую вам услуг и
            нажмите <b>ОПЛАТИТЬ</b>. После этого вы будете переадресованы на страницу оплаты, на ней выберите способ оплаты как на фото
            ниже
            <Image
              src="/payment_method.jpg"
              alt="Открыть payment management"
              width={0}
              height={0}
              sizes="100vw"
              className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto my-2"
            />
            Укажите свой email на который будет выслана инструкция по активации и чек, нажмите оплатить. На следующей странице вы
            сможете безопасно ввести данные свой карты и оплатить свою покупку
            <br />
            <br /> Если вы находитесь <b>за пределами РФ и СНГ</b>, вы можете выбрать способ оплаты <b>PayPal</b> доступный на странице
            оплаты в <b>ВЫБОР СПОСОБА ОПЛАТЫ</b>
            <br />
            <br />
            По картам MasterCard <b>запрещенные страны</b> -{" "}
            <span className=" text-xs">
              Украина, Азербайджан, США, Афганистан, Багамы, Центрально-Африканская Республика, Демократическая Республика Конго, Куба,
              Гана, Иран, Ирак, Ливан, Ливия, Мали, Мьянма, Монголия, Пакистан, Корея, Палестина, Судан, Сомали, Южный Судан, Сирия,
              Турция, Тринидад и Тобаго, Венесуэла, Йемен, Зимбабве
            </span>
          </p>
        </Question>
        <Question title="Как оплатить через СБП?">
          <p>
            Выберите необходимую вам услуг и нажмите <b>ОПЛАТИТЬ</b>. После этого вы будете переадресованы на страницу оплаты, на ней
            выберите способ оплаты как на фото ниже
            <Image
              src="/payment_method.jpg"
              alt="Открыть payment management"
              width={0}
              height={0}
              sizes="100vw"
              className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto my-2"
            />
            Укажите свой email на который будет выслана инструкция по активации и чек, нажмите оплатить. На следующей странице вы
            найдете кнопку оплаты через СБП
            <Image
              src="/sbp.jpg"
              alt="Открыть payment management"
              width={0}
              height={0}
              sizes="100vw"
              className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto my-2"
            />
          </p>
        </Question>
        <Question title="Как это работает?">
          После успешной оплаты вам на почту придет письмо с ссылкой на активацию
          <br />
          <br />
          На странице активации вам необходимо будет указать данные своего аккаунта Spotify, после чего отправить нам заявку на
          активацию
          <br />
          <br />
          Наш менеджер получит вашу заявку и приобретет необходимую подписку на ваш аккаунт
        </Question>
        <Question title="Нужен ли индийский аккаунт Spotify?">
          <p>Нет, даже если у вас стоит другой регион, мы сами сменим его на нужный и оформим подписку</p>
        </Question>
        <Question title="Работает ли Spotify в России?">
          <p>Для работы Spotify в России может понадобиться однократный вход через Турцию</p>
        </Question>

        <Question title="Сколько времени занимает активация Spotify premium?">
          <p>После отправки заявки среднее время активации 5-30 минут в рабочие часы</p>
        </Question>
      </Faq>
    </div>
  );
}
