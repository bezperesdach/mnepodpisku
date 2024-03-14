"use client";

import * as React from "react";
import { Button } from "../../components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

// import PlayStationTopup from "@/../public";

const Banners = [
  {
    title: "ПОПОЛНЯЙТЕ PLAYSTATION",
    description: "Доступно для Турецких аккаунтов",
    callToAction: "ПОПОЛНИТЬ",
    image: "/images/PlaystationTopup.jpg",
    alt: "Playstation пополнение банер",
    titleClass: "text-2xl font-bold tracking-tight text-[#d72eb5] bg-white px-4 py-2 mr-auto md:text-4xl",
    titleStyle: {
      clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    descriptionClass: "text-sm leading-7 max-w-xs bg-[#4f4f4f] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    callToActionClass: "max-w-sm h-10 z-10 bg-[#d72eb5] hover:bg-[#c03ba5] font-bold text-lg border-r-2 border-b-2 border-[#deb004]",
    href: "playstation",
  },
  // {
  //   title: "АККАУНТ PLAYSTATION",
  //   description: "Создадим вам Турецкий аккаунт на вашу почту",
  //   callToAction: "СОЗДАТЬ",
  // },
  {
    title: "ПОДПИСКА PS PLUS",
    description: "Доступно для Турецких аккаунтов",
    callToAction: "ПРИОБРЕСТИ",
    image: "/images/PlaystationPlus.jpg",
    alt: "Playstation plus банер",
    titleClass: "text-2xl font-bold tracking-tight text-[#fcc000] bg-[#000000] px-4 py-2 mr-auto md:text-4xl",
    titleStyle: {},
    descriptionClass: "leading-7 max-w-xs text-black px-2 md:px-4 py-[1px] md:py-1",
    descriptionStyle: {},
    callToActionClass: "max-w-sm h-10 z-10 bg-[#333333] hover:bg-[#000000] font-bold text-lg border-r-2 border-b-2 border-[#fcc000]",
    href: "ps_plus",
  },
  // {
  //   title: "SPOTIFY ПРЕМИУМ",
  //   description: "Получи доступ к любимым трекам без рекламы",
  //   callToAction: "ПРИОБРЕСТИ",
  // },
];

export function HeroCard() {
  return (
    <div className="w-full flex justify-center items-center mt-6">
      {/* <Button>
        <ArrowLeftIcon />
      </Button>

      <Button>
        <ArrowRightIcon />
      </Button> */}

      <div className="w-full max-w-screen-lg px-4 ">
        <Carousel
          className="w-full"
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {Banners.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative h-48 md:h-64">
                  <div className="flex flex-col justify-between rounded-3xl border bg-card text-card-foreground shadow p-4 md:p-8 h-full">
                    <div className="flex flex-col gap-2 z-10">
                      <p className={item.titleClass} style={item.titleStyle}>
                        {item.title}
                      </p>
                      <p className={item.descriptionClass} style={item.descriptionStyle}>
                        {item.description}
                      </p>
                    </div>
                    <Button className={item.callToActionClass} asChild>
                      <Link href={item.href}>{item.callToAction}</Link>
                    </Button>
                    <div className="absolute top-0 bottom-0 left-0 right-0 z-0 bg-black w-full h-full">
                      <Image className="rounded-3xl" src={item.image} alt={item.alt} style={{ objectFit: "cover" }} fill={true} />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="w-12 h-12 -left-14 hidden lg:flex" variant="default" />
          <CarouselNext className="w-12 h-12 -right-14 hidden lg:flex" variant="default" />
        </Carousel>
      </div>
    </div>
  );
}
