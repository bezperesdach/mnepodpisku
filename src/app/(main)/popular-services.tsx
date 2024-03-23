"use client";

import Image from "next/image";
import { Service } from "./all-services";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const services: Service[] = [
  {
    name: "PlayStation Пополнение",
    value: "playstation",
    imageSrc: "/catalogue_icons/playstation_top_up.jpg",
    alt: "Playstation Пополнение",
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
    name: "Spotify Премиум",
    value: "spotify",
    imageSrc: "/catalogue_icons/spotify.jpg",
    alt: "Spotify Премиум",
  },
];

export function PopularServices() {
  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="w-full flex flex-col max-w-screen-lg px-2">
        <div className="w-full flex justify-between">
          <h2 className="text-3xl font-semibold tracking-tight">Популярные услуги</h2>
        </div>
        <div className="grid md:flex gap-x-4 gap-y-6 md:gap-4 w-full grid-cols-2 md:basis-1/4 mt-6">
          {services.map((item) => (
            <Link href={"/" + item.value} key={item.value} className="flex-1 flex-shrink-0 rounded-md ">
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
