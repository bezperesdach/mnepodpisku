"use client";

import Image from "next/image";
import { Service } from "./all-services";
import { Skeleton } from "@/components/ui/skeleton";

const services: Service[] = [
  {
    name: "PlayStation пополнение",
    value: "playstation",
    imageSrc: "/catalogue_icons/playstation_top_up.jpg",
    alt: "Playstation пополнение",
  },
  {
    name: "PlayStation Plus",
    value: "playstation_plus",
    imageSrc: "/catalogue_icons/playstation_plus.jpg",
    alt: "PlayStation Plus баннер",
  },
  {
    name: "PlayStation Аккаунт",
    value: "playstation_account",
    imageSrc: "/catalogue_icons/playstation_account.jpg",
    alt: "PlayStation Аккаунт баннер",
  },
  {
    name: "Spotify премиум",
    value: "spotify",
    imageSrc: "/catalogue_icons/spotify.jpg",
    alt: "Spotify премиум",
  },
];

export function PopularServices() {
  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="w-full flex flex-col max-w-screen-lg px-4">
        <div className="w-full flex justify-between">
          <div className="flex justify-between items-end w-full">
            <p className="text-3xl font-semibold tracking-tight">Популярные услуги</p>
          </div>
        </div>
        <div className="grid md:flex gap-x-4 gap-y-6 md:gap-4 w-full grid-cols-2 md:basis-1/4 mt-6">
          {services.map((item) => (
            <div key={item.value} className="flex-1 flex-shrink-0 rounded-md ">
              <div className="min-h-[120px] xs:min-h-[160px] sm:min-h-[170px] lg:min-h-[180px] relative rounded-3xl overflow-hidden">
                <Image
                  className="hover:scale-125 transition-all z-10"
                  src={item.imageSrc}
                  alt={item.alt}
                  style={{ objectFit: "cover" }}
                  fill
                />
                <Skeleton className="absolute w-full h-full rounded-3xl" />
              </div>
              <p className="mt-4 lg:text-lg text-center font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
