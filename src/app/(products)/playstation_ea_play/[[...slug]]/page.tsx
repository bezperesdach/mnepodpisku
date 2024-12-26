import React from "react";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import { Metadata } from "next";
import Reviews from "@/components/Reviews/review";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import { ProductHero } from "@/components/product-hero";
import Image from "next/image";
import { FlameIcon, StarFillIcon } from "@primer/octicons-react";
import { AlsoRecommendToBuy } from "@/components/also-recommend-to-buy";

export const metadata: Metadata = {
  title: "Купить подписку EA PLAY на PlayStation 2024",
  description: "Быстро и безопасно приобретите подписку EA PLAY для своего аккаунта PlayStation. Новые возможности ждут вас!",
  openGraph: {
    title: "Купить подписку EA PLAY на PlayStation 2024",
    description: "Быстро и безопасно приобретите подписку EA PLAY для своего аккаунта PlayStation. Новые возможности ждут вас!",
    url: "/playstation_ea_play",
    images: ["/og_images_catalogue/ps_ea_play.png"],
    type: "website",
  },
  alternates: {
    canonical: "/playstation_ea_play",
  },
};

const checkParams = (slug: string | string[] | undefined) => {
  if (slug && slug[0]) {
    const num = parseInt(slug[0], 10);

    if (!isNaN(num) && Number.isInteger(num) && (num === 1 || num === 12)) {
      return slug[0];
    }
  }

  return undefined;
};

export default function PsEaPlay({ params }: { params: { slug: string | string[] | undefined } }) {
  return (
    <div className="flex flex-col">
      <Breadcrumbs>
        <BreadcrumbItem>PlayStation EA Play</BreadcrumbItem>
      </Breadcrumbs>

      <ProductHero
        icon={{ src: "/catalogue_icons/playstation_ea_play.jpg", alt: "PlayStation EA Play баннер" }}
        title="Купить подписку EA Play для PlayStation в России"
        description="EA Play дает доступ к эксклюзивным ежемесячным наградам, коллекции лучших игр EA, пробным версиям новинок EA и многому другому"
        tags={[
          {
            icon: (
              <div className="h-6 w-6 relative rounded-lg overflow-hidden">
                <Image className="object-contain" src="/tr.png" alt="Регион турция" fill />
              </div>
            ),
            text: "ТУРЦИЯ",
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

      <FormComponent receivedDuration={checkParams(params.slug)} />

      <AlsoRecommendToBuy
        services={[
          {
            name: "PlayStation Аккаунт",
            value: "playstation_account",
            imageSrc: "/catalogue_icons/playstation_account.jpg",
            alt: "PlayStation Аккаунт баннер",
          },
          {
            name: "PlayStation Пополнение",
            value: "playstation",
            imageSrc: "/catalogue_icons/playstation_top_up.jpg",
            alt: "PlayStation Пополнение баннер",
          },
          {
            name: "PlayStation Plus",
            value: "playstation_plus",
            imageSrc: "/catalogue_icons/playstation_plus.jpg",
            alt: "PlayStation Plus баннер",
          },

          {
            name: "",
            value: "",
            imageSrc: "",
            alt: "",
          },
        ]}
      />

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
          <p>
            После успешной оплаты вам на почту придет письмо с ссылкой на активацию пополнения
            <br />
            <br />
            На странице активации вам необходимо будет указать данные своего аккаунта PlayStation, после чего отправить нам заявку на
            активацию
            <br />
            <br />
            Наш менеджер получит вашу заявку и приобретет подписку EA Play на ваш аккаунт PlayStation
          </p>
        </Question>

        <Question title="Как быстро я получу подписку EA Play на свой аккаунт PlayStation?">
          <p>После отправки заявки среднее время выполнения заказа 5-30 минут в рабочие часы</p>
        </Question>
      </Faq>
    </div>
  );
}
