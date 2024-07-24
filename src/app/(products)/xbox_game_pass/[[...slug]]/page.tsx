import React from "react";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import { Metadata } from "next";
import Reviews from "@/components/Reviews/review";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import { FlameIcon } from "@primer/octicons-react";
import { ProductHero } from "@/components/product-hero";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Подписка XBOX GAME PASS",
  description:
    "Быстрая покупка подписки xbox game pass на личный аккаунт. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
  openGraph: {
    title: "Подписка XBOX GAME PASS 2024 Купить",
    description:
      "Быстрая покупка подписки xbox game pass на личный аккаунт. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
    url: "/xbox_game_pass",
    images: ["/og_images_catalogue/xbox.png"],
    type: "website",
  },
  alternates: {
    canonical: "/xbox_game_pass",
  },
};

const checkParams = (slug: string | string[] | undefined) => {
  if (slug && Array.isArray(slug) && slug.length > 0) {
    if (slug[0]) {
      if (["ultimate"].includes(slug[0])) {
        if (slug[1]) {
          const num = parseInt(slug[1], 10);
          if (!isNaN(num) && Number.isInteger(num) && num === 1) {
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

export default function Xbox({ params }: { params: { slug: string | string[] | undefined } }) {
  return (
    <div className="flex flex-col">
      <Breadcrumbs>
        <BreadcrumbItem>Xbox Game Pass</BreadcrumbItem>
      </Breadcrumbs>

      <ProductHero
        icon={{ src: "/catalogue_icons/xbox.jpg", alt: "Xbox баннер" }}
        title="Купить подписку на Xbox Game Pass в России"
        description="Наслаждайтесь сотнями высококачественных игр с друзьями на консоли, ПК и в облаке. Поскольку игры добавляются постоянно, всегда есть во что поиграть."
        tags={[
          {
            icon: <FlameIcon className="text-[#f95721]" />,
            text: "ВЫГОДНО",
          },
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
          <p>
            После успешной оплаты вам на почту придет письмо с ссылкой на активацию
            <br />
            <br />
            На странице активации вам необходимо будет указать данные своего аккаунта Microsoft, после чего отправить нам заявку на
            активацию
            <br />
            <br />
            Наш менеджер получит вашу заявку и приобретет подписку на ваш аккаунт
          </p>
        </Question>

        <Question title="Как быстро я получу подписку Xbox Game Pass на свой аккаунт?">
          <p>После отправки заявки среднее время выполнения заказа 5-30 минут в рабочие часы</p>
        </Question>
      </Faq>
    </div>
  );
}
