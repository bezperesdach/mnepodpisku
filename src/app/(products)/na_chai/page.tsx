import React from "react";
import FormComponent from "./FormComponent";
import { Metadata } from "next";
import { isAmountValid } from "@/utils/utils";
import Reviews from "@/components/Reviews/review";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "На чай и печеньки",
  description: "Страница приема безвозмездных пожертвований, помоги нам приобрести чай и печеньки и сделать наш сервис еще лучше :3",
  openGraph: {
    title: "На чай и печеньки",
    description: "Страница приема безвозмездных пожертвований, помоги нам приобрести чай и печеньки и сделать наш сервис еще лучше :3",
    url: "/na_chai",
    images: ["/og_images_catalogue/na_chai.png"],
    type: "website",
  },
  alternates: {
    canonical: "/na_chai",
  },
};

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function PsEaPlay({ searchParams }: Props) {
  const ip = headers().get("x-forwarded-for");
  return (
    <div className="flex flex-col w-full max-w-screen-lg mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8">
      <div className="flex flex-col min-[1240px]:flex-row items-center gap-4">
        <h1 className="text-3xl font-semibold tracking-tight" id="heading">
          Пожертвуй деньги на чай и печеньки
        </h1>
      </div>

      <FormComponent receivedAmount={isAmountValid(searchParams["amount"])} ip={ip} />

      <div className="mt-10">
        <h2 className="text-xl lg:text-2xl font-bold" id="description">
          Описание
        </h2>
        <p className="text-lg font-medium mt-4">
          Если вам понравилось как нами была активирована ваша услуга или вы хотите нас похвалить, приобретение данной услуги это
          отличная возможность это сделать!
          <br />
          <br />
          Данные пожертвования помогут нам стать еще лучше и иногда приобретать себе чай с печеньем :3
        </p>
      </div>

      <Reviews />
    </div>
  );
}
