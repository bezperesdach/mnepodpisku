import React from "react";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import { Metadata } from "next";
import Reviews from "@/components/Reviews/review";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import Image from "next/image";
import { AlsoRecommendToBuy } from "@/components/also-recommend-to-buy";
import { ProductHero } from "@/components/product-hero";

export const metadata: Metadata = {
  title: "Cоздание турецкого аккаунта PlayStation",
  description: "Приобрести турецкий аккаунт PlayStation на свою почту в 1 клик. После входа в аккаунт все данные можно сменить.",
  openGraph: {
    title: "Cоздание турецкого аккаунта PlayStation",
    description: "Приобрести турецкий аккаунт PlayStation на свою почту в 1 клик. После входа в аккаунт все данные можно сменить.",
    url: "/playstation_account",
    images: ["/og_images_catalogue/playstation_account.png"],

    type: "website",
  },
  alternates: {
    canonical: "/playstation_account",
  },
};

export default function PlayStationAccountV2() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs>
        <BreadcrumbItem>PlayStation Аккаунт</BreadcrumbItem>
      </Breadcrumbs>

      <ProductHero
        icon={{ src: "/catalogue_icons/playstation_account.jpg", alt: "PlayStation Аккаунт баннер" }}
        title="Создать Турецкий аккаунт PlayStation в России"
        description="PlayStation Store — сервис цифровой дистрибуции компании Sony для пользователей консолей PlayStation 3, PlayStation 4,
        PlayStation 5"
        tags={[
          {
            icon: (
              <div className="h-6 w-6 relative rounded-lg overflow-hidden">
                <Image className="object-contain" src="/tr.png" alt="Регион турция" fill />
              </div>
            ),
            text: "ТУРЦИЯ",
          },
          // {
          //   icon: <StarFillIcon className="text-primary" />,
          //   text: "НЕ НУЖЕН VPN",
          // },
        ]}
      />

      <FormComponent />

      <AlsoRecommendToBuy
        title="Рекомендуем после покупки"
        services={[
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
            name: "PlayStation Ea Play",
            value: "playstation_ea_play",
            imageSrc: "/catalogue_icons/playstation_ea_play.jpg",
            alt: "PlayStation Ea Play баннер",
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
            После успешной оплаты вам на почту придет письмо с ссылкой на активацию
            <br />
            <br />
            На странице активации вам необходимо будет указать email на который будет зарегистрирован новый аккаунт PlayStation и
            выслать заявку на активацию нам
            <br />
            <br />
            Наш менеджер получит вашу заявку и создаст вам турецкий аккаунт PlayStation, после чего вышлет все его данные вам{" "}
          </p>
        </Question>

        <Question title="Как быстро я получу аккаунт?">
          <p>После отправки заявки среднее время выполнения заказа 5-30 минут в рабочие часы</p>
        </Question>

        <Question title="Можно ли менять данные аккаунта?">
          <p>Да, после входа в аккаунт вы сможете изменить абсолютно все данные аккаунта</p>
        </Question>
      </Faq>
    </div>
  );
}
