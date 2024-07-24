import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import { Metadata } from "next";
import Reviews from "@/components/Reviews/review";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import { ProductHero } from "@/components/product-hero";
import { FlameIcon, StarFillIcon } from "@primer/octicons-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Купить Youtube premium 2024",
  description:
    "Быстро купить youtube premium на личный аккаунт. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
  openGraph: {
    title: "Купить Youtube premium 2024 Россия",
    description:
      "Быстро купить youtube premium на личный аккаунт. Оплатить можно используя карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
    url: "/youtube",
    images: ["/og_images_catalogue/youtube.png"],
    type: "website",
  },
  alternates: {
    canonical: "/youtube",
  },
};

const checkParams = (slug: string | string[] | undefined) => {
  if (slug && slug[0]) {
    const num = parseInt(slug[0], 10);
    if (!isNaN(num) && Number.isInteger(num) && num === 1) {
      return slug[0];
    }
  }

  return undefined;
};

export default function Youtube({ params }: { params: { slug: string | string[] | undefined } }) {
  return (
    <div className="flex flex-col">
      <Breadcrumbs>
        <BreadcrumbItem>YouTube Premium</BreadcrumbItem>
      </Breadcrumbs>

      <ProductHero
        icon={{ src: "/catalogue_icons/youtube.jpg", alt: "Adobe Creative Cloud баннер" }}
        title="Купить подписку YouTube Premium"
        description="YouTube Premium предоставляет доступ к контенту без рекламы, а также доступ к премиальным YouTube Originals."
        tags={[
          {
            icon: <FlameIcon className="text-[#f95721]" />,
            text: "ВЫГОДНО",
          },
          {
            icon: <StarFillIcon className="text-primary" />,
            text: "НЕ НУЖЕН VPN",
          },
        ]}
      />

      <FormComponent receivedDuration={checkParams(params.slug)} />

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
            На странице активации вам необходимо будет указать данные вашего YouTube аккаунта и выслать запрос на активацию
            <br />
            <br />
            Наш менеджер получит вашу заявку и приобретет на ваш аккаунт премиум подписку
          </p>
        </Question>

        <Question title="Входит ли Youtube Music в подписку?">
          <p>Да, вы сможете использовать youtube music без ограничений при активной премиум подписке.</p>
        </Question>

        <Question title="Работает ли Youtube Premium в России?">
          <p>Да, при активации подписки Вы сможете пользоваться всеми возможностями из России.</p>
        </Question>

        <Question title="Как быстро я получу подписку YouTube Premium?">
          <p>После отправки заявки среднее время выполнения заказа 5-30 минут в рабочие часы</p>
        </Question>
      </Faq>
    </div>
  );
}
