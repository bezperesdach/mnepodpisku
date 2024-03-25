"use client";

import * as React from "react";
import { Button } from "../../components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

// import PlayStationTopup from "@/../public";

const Banners = [
  {
    title: "ПОПОЛНЕНИЕ PLAYSTATION",
    description: "Доступно для Турецких аккаунтов",
    callToAction: "ПОПОЛНИТЬ",
    image: "/images/PlaystationTopup.webp",
    alt: "Playstation пополнение банер",
    titleClass: "text-xl font-bold tracking-tight text-[#d72eb5] bg-white px-4 py-2 mr-auto md:text-4xl",
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
  {
    title: "ПОДПИСКА PS PLUS",
    description: "Доступно для Турецких аккаунтов",
    callToAction: "ПРИОБРЕСТИ",
    image: "/images/PlaystationPlus.webp",
    alt: "Playstation plus банер",
    titleClass: "text-xl font-bold tracking-tight text-[#fcc000] bg-[#000000] px-4 py-2 mr-auto md:text-4xl",
    titleStyle: {},
    descriptionClass: "leading-7 max-w-xs text-black px-2 md:px-4 py-[1px] md:py-1",
    descriptionStyle: {},
    callToActionClass: "max-w-sm h-10 z-10 bg-[#333333] hover:bg-[#000000] font-bold text-lg border-r-2 border-b-2 border-[#fcc000]",
    href: "playstation_plus",
  },
  {
    title: "SPOTIFY PREMIUM",
    description: "",
    callToAction: "ПРИОБРЕСТИ",
    image: "/images/SpotifyPremium.webp",
    alt: "Spotify Premium банер",
    titleClass: "text-xl font-bold tracking-tight text-[#000000] bg-[#23d061] px-4 py-2 mr-auto md:text-4xl",
    titleStyle: {},
    descriptionClass: "",
    descriptionStyle: {},
    callToActionClass:
      "max-w-sm h-10 z-10 bg-[#23d061] hover:bg-[#ffffff] text-[#000000] hover:text-[#23d061] font-bold text-lg border-r-2 border-b-2 border-[#000000] hover:border-[#23d061]",
    href: "spotify",
  },
];

export function HeroCard() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full flex justify-center items-center mt-6">
      <div className="w-full max-w-screen-lg px-2 ">
        <div className="w-full flex flex-col gap-2">
          <Carousel
            setApi={setApi}
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
                      <div className="absolute top-0 bottom-0 left-0 right-0 z-0 w-full h-full">
                        <Image
                          className="rounded-3xl z-10"
                          src={item.image}
                          alt={item.alt}
                          style={{ objectFit: "cover" }}
                          fill={true}
                        />
                        <Skeleton className="absolute w-full h-full rounded-3xl" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="w-12 h-12 -left-14 hidden xl:flex" variant="default" />
            <CarouselNext className="w-12 h-12 -right-14 hidden xl:flex" variant="default" />
            <div className="absolute -bottom-6 left-0 right-0 flex gap-1 justify-center">
              {Banners.map((_, index) => (
                <Button
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "flex justify-center items-center px-2 min-w-4 min-h-4 w-4 h-4 bg-accent rounded-full transition-all duration-300",
                    {
                      "bg-primary": current === index + 1,
                    }
                  )}
                  key={index}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
