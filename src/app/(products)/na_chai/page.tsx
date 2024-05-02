import React from "react";
import FormComponent from "./FormComponent";
import { Metadata } from "next";
import Reviews from "@/components/Reviews/review";
import { headers } from "next/headers";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import { ProductHero } from "@/components/product-hero";
import { getAmountFromSlug } from "@/utils/utils";

export const metadata: Metadata = {
  title: "Благодтворительность",
  description: "Страница приема безвозмездных пожертвований, помоги нам приобрести чай и печеньки и сделать наш сервис еще лучше",
  openGraph: {
    title: "Благодтворительность",
    description: "Страница приема безвозмездных пожертвований, помоги нам приобрести чай и печеньки и сделать наш сервис еще лучше",
    url: "/na_chai",
    images: ["/og_images_catalogue/na_chai.png"],
    type: "website",
  },
  alternates: {
    canonical: "/na_chai",
  },
};

export default function PsEaPlay({ params }: { params: { slug: string } }) {
  const ip = headers().get("x-forwarded-for");
  return (
    <div className="flex flex-col">
      <Breadcrumbs>
        <BreadcrumbItem>Благодтворительность</BreadcrumbItem>
      </Breadcrumbs>

      <ProductHero
        icon={{ src: "/catalogue_icons/playstation_top_up.jpg", alt: "Благодтворительность" }}
        title="Пожертвование на развитие и улучшение проекта"
        description="Воспользовавшись данной услугой вы можете пожертвовать любую сумму, которая пойдет на развитие и улучшение нашего проекта"
        tags={[]}
      />

      <FormComponent receivedAmount={getAmountFromSlug(params.slug)} ip={ip} />

      <Reviews />

      {/* <Faq>
        <Question title="Как это работает?">
          <p>
            После успешной оплаты вам на почту придет письмо с ссылкой на активацию пополнения
            <br />
            <br />
            На странице активации вам необходимо будет указать данные своего аккаунта PlayStation, после чего отправить нам заявку на
            активацию
            <br />
            <br />
            Наш менеджер получит вашу заявку и пополнит ваш аккаунт{" "}
          </p>
        </Question>

        <Question title="Как быстро я получу деньги на свой аккаунт?">
          <p>После отправки заявки среднее время выполнения заказа 5-30 минут в рабочие часы</p>
        </Question>

        <Question title="У меня нет турецкого аккаунта PlayStation">
          <p>
            Вы можете воспользоваться нашей услугой по{" "}
            <a className="link text-primary" href="/playstation_account" target="_blank" rel="noopener noreferrer">
              созданию аккаунта
            </a>{" "}
            или создать себе аккаунт самостоятельно по нашей{" "}
            <a className="link text-primary" href="/blog/kak_samomu_sozdat_tureckiy_akaunt" target="_blank" rel="noopener noreferrer">
              инструкции
            </a>
          </p>
        </Question>
      </Faq> */}

      {/* <InstructionsSection>
      <Instruction name="Как включить 2FA на аккаунте PSN?" file="kak_vkluchit_2fa_na_akaunte_psn" />
      <Instruction name="Где найти резервные коды аккаунта PSN?" file="gde_posmotret_rezervnyi_kod" />
      <Instruction name="Как изменить почту на PSN аккаунте" file="psn/how-to-change-email-psn.pdf" />
      <Instruction name="Как создать турецкий аккаунт PSN" file="psn/how-to-create-turkish-psn.pdf" />
      <Instruction name="Как добавить нового пользователя на PS4?" file="kak_dobavit_novogo_polzovatelya_na_PS4" />
      <Instruction name="Как добавить нового пользователя на PS5?" file="kak_dobavit_novogo_polzovatelya_na_PS5" />
    </InstructionsSection> */}
    </div>
    // <div className="flex flex-col w-full max-w-screen-lg mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8">
    //   <div className="flex flex-col min-[1240px]:flex-row items-center gap-4">
    //     <h1 className="text-3xl font-semibold tracking-tight" id="heading">
    //       Пожертвуй деньги на чай и печеньки
    //     </h1>
    //   </div>

    //   <FormComponent receivedAmount={isAmountValid(searchParams["amount"])} ip={ip} />

    //   <div className="mt-10">
    //     <h2 className="text-xl lg:text-2xl font-bold" id="description">
    //       Описание
    //     </h2>
    //     <p className="text-lg font-medium mt-4">
    //       Если вам понравилось как нами была активирована ваша услуга или вы хотите нас похвалить, приобретение данной услуги это
    //       отличная возможность это сделать!
    //       <br />
    //       <br />
    //       Данные пожертвования помогут нам стать еще лучше и иногда приобретать себе чай с печеньем :3
    //     </p>
    //   </div>

    //   <Reviews />
    // </div>
  );
}
