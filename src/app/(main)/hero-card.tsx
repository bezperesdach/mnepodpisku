"use client";

import * as React from "react";
import { Button } from "../../components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import PlayStationTopup from "@/../public/images/PlaystationTopup.jpg";

const Banners = [
  {
    title: "ПОПОЛНЯЙТЕ PLAYSTATION",
    description: "Доступно для Турецких аккаунтов",
    callToAction: "ПОПОЛНИТЬ",
    image: PlayStationTopup,
    alt: "Playstation банер",
  },
  // {
  //   title: "АККАУНТ PLAYSTATION",
  //   description: "Создадим вам Турецкий аккаунт на вашу почту",
  //   callToAction: "СОЗДАТЬ",
  // },
  // {
  //   title: "ПОДПИСКА PS PLUS",
  //   description: "Доступно для Турецких аккаунтов",
  //   callToAction: "ПРИОБРЕСТИ",
  // },
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
                <div className="relative lg:h-64">
                  <div className="flex flex-col justify-between rounded-3xl border bg-card text-card-foreground shadow p-8 h-full">
                    <div className="flex flex-col gap-4 w-fit z-10 ">
                      <p
                        className="text-4xl font-bold tracking-tight text-[#d72eb5] bg-white px-4 py-2"
                        style={{ clipPath: "polygon(0% 0%, 99% 0%, 100% 100%, 1% 100%)" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-lg leading-7 max-w-xs bg-[#4f4f4f] px-4 py-1"
                        style={{ clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                    <Button className="max-w-sm h-10 z-10 bg-[#d72eb5] hover:bg-[#c03ba5] font-bold text-lg border-r-2 border-b-2 border-[#deb004]">
                      {item.callToAction}
                    </Button>
                    <div className="absolute top-0 bottom-0 left-0 right-0 z-0 bg-black w-full h-full">
                      <Image className="rounded-3xl" src={item.image} alt={item.alt} style={{ objectFit: "cover" }} fill={true} />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="default" />
          <CarouselNext variant="default" />
        </Carousel>
      </div>
    </div>
  );
}
