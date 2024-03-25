"use client";

import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export type Service = {
  name: string;
  value: string;
  imageSrc: string;
  alt: string;
};

const services: Service[] = [
  {
    name: "Adobe",
    value: "adobe_creative_cloud",
    imageSrc: "/catalogue_icons/adobe_cc.webp",
    alt: "Adobe баннер",
  },
  {
    name: "Discord Nitro",
    value: "discord",
    imageSrc: "/catalogue_icons/discord.webp",
    alt: "Discord баннер",
  },
  {
    name: "Youtube Премиум",
    value: "youtube",
    imageSrc: "/catalogue_icons/youtube.webp",
    alt: "Youtube баннер",
  },
  {
    name: "Netflix",
    value: "netflix",
    imageSrc: "/catalogue_icons/netflix.webp",
    alt: "Netflix баннер",
  },
  {
    name: "Tinder",
    value: "tinder",
    imageSrc: "/catalogue_icons/tinder.webp",
    alt: "Tinder баннер",
  },
  {
    name: "Xbox Game Pass",
    value: "xbox_game_pass",
    imageSrc: "/catalogue_icons/xbox.webp",
    alt: "Xbox баннер",
  },
  {
    name: "Spotify Премиум",
    value: "spotify",
    imageSrc: "/catalogue_icons/spotify.webp",
    alt: "Spotify баннер",
  },
  {
    name: "PlayStation Пополнение",
    value: "playstation",
    imageSrc: "/catalogue_icons/playstation_top_up.webp",
    alt: "Playstation пополнение",
  },

  {
    name: "PlayStation Plus",
    value: "playstation_plus",
    imageSrc: "/catalogue_icons/playstation_plus.webp",
    alt: "PlayStation Plus баннер",
  },
  {
    name: "PlayStation Ea Play",
    value: "playstation_ea_play",
    imageSrc: "/catalogue_icons/playstation_ea_play.webp",
    alt: "PlayStation Ea Play баннер",
  },
  {
    name: "PlayStation Аккаунт",
    value: "playstation_account",
    imageSrc: "/catalogue_icons/playstation_account.webp",
    alt: "PlayStation Аккаунт баннер",
  },
];

export function AllServices() {
  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="w-full flex flex-col max-w-screen-lg px-2">
        <div className="w-full flex justify-between">
          <div className="flex justify-between items-end w-full">
            <h2 className="text-3xl font-semibold tracking-tight">Все услуги</h2>
          </div>
        </div>

        <div className="grid gap-x-4 gap-y-6 md:gap-4 w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
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
