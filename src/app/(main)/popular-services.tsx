"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export function PopularServices() {
  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="w-full flex flex-col max-w-screen-lg px-4 lg:h-64">
        <div className="w-full flex justify-between">
          {/* <Carousel
            opts={{
              align: "start",
              slidesToScroll: 4,
            }}
            className="w-full"
          > */}
          <div className="flex justify-between items-end w-full">
            <p className="text-3xl font-semibold tracking-tight">Популярные услуги</p>
            <div className="flex gap-4">
              {/* <CarouselPrevious className="static w-12 h-12 -left-14 translate-y-0" variant="default" />
              <CarouselNext className="static w-12 h-12 -left-14 translate-y-0" variant="default" /> */}
            </div>
          </div>

          {/* <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    xd
                    
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel> */}
        </div>
        <div className="flex w-full lg:basis-1/4">
          <div className="flex-1 p-4 rounded-md overflow-hidden">
            <div className="min-h-[180px] rounded-md bg-[url('/catalogue_icons/playstation.png')] bg-contain bg-no-repeat bg-center hover:scale-110 transition-all">
              &nbsp;
            </div>
            <p className="mt-4">PlayStation пополнение</p>
          </div>
          <div className="flex-1 p-4 rounded-md overflow-hidden">
            <div className="min-h-[180px] rounded-md bg-[url('/catalogue_icons/spotify.png')] bg-contain bg-no-repeat bg-center hover:scale-110 transition-all">
              &nbsp;
            </div>
            <p className="mt-4">PlayStation пополнение</p>
          </div>
          <div className="flex-1 p-4 rounded-md overflow-hidden">
            <div className="min-h-[180px] rounded-md bg-[url('/catalogue_icons/ps_plus.png')] bg-contain bg-no-repeat bg-center hover:scale-110 transition-all">
              &nbsp;
            </div>
            <p className="mt-4">PlayStation пополнение</p>
          </div>
          <div className="flex-1 p-4 rounded-md overflow-hidden">
            <div className="min-h-[180px] rounded-md bg-[url('/catalogue_icons/playstation.png')] bg-contain bg-no-repeat bg-center hover:scale-110 transition-all">
              &nbsp;
            </div>
            <p className="mt-4">PlayStation пополнение</p>
          </div>
        </div>
      </div>
    </div>
  );
}
