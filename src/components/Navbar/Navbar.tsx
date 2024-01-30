"use client";

import { useContext } from "react";
import cn from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { AppContext } from "../AppContextWrapper/AppContextWrapper";
import Catalogue from "../Catalogue/Catalogue";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import MobileMenu from "./MobileMenu";

import spotifyImg from "../../../public/catalogue_icons/spotify.png";
import netflixImg from "../../../public/catalogue_icons/netflix.png";
import discordImg from "../../../public/catalogue_icons/discord.png";
import tinderImg from "../../../public/catalogue_icons/tinder.png";
import xboxImg from "../../../public/catalogue_icons/xbox.png";
import playstationImg from "../../../public/catalogue_icons/playstation.png";
import psplusImg from "../../../public/catalogue_icons/ps_plus.png";
import eaplayImg from "../../../public/catalogue_icons/ea_play.png";
import youtubeImg from "../../../public/catalogue_icons/youtube.png";
import adobeccImage from "../../../public/catalogue_icons/adobe_cc.png";
import credit_card_turkey from "../../../public/catalogue_icons/credit_card_turkey.png";
import na_chai from "../../../public/catalogue_icons/na_chai.png";
import useSWR from "swr";

export const catalogueItems = {
  spotify: {
    name: "Spotify",
    foregroundColor: "#1DB954",
    backgroundColor: "#191414",
    hoverColor: "hover:text-[#69CF81]",
    logo: (
      <div className="relative w-12 h-12 flex justify-center items-center">
        <Image
          className="w-auto h-full"
          src={spotifyImg}
          alt="Spotify логотип"
          fill
          style={{ objectFit: "contain" }}
          sizes="20vw"
          priority
        />
      </div>
    ),
  },
  netflix: {
    name: "Netflix",
    foregroundColor: "#E50914",
    backgroundColor: "#fff",
    hoverColor: "hover:text-[#E55F66]",
    logo: (
      <div className="relative w-12 h-12 flex justify-center items-center">
        <Image src={netflixImg} alt="Netflix логотип" fill style={{ objectFit: "contain" }} sizes="20vw" priority />
      </div>
    ),
  },
  discord: {
    name: "Discord",
    foregroundColor: "#5865F2",
    backgroundColor: "#fff",
    hoverColor: "hover:text-[#747FF2]",
    logo: (
      <div className="relative w-12 h-12 flex justify-center items-center">
        <Image
          className="w-auto h-full"
          src={discordImg}
          alt="Discord логотип"
          fill
          style={{ objectFit: "contain" }}
          sizes="20vw"
          priority
        />
      </div>
    ),
  },
  tinder: {
    name: "Tinder",
    foregroundColor: "#FD3973",
    backgroundColor: "#fff",
    hoverColor: "hover:text-[#FD87AA]",
    logo: (
      <div className="relative w-12 h-12 flex justify-center items-center">
        <Image
          className="w-auto h-full"
          src={tinderImg}
          alt="Tinder логтип"
          fill
          style={{ objectFit: "contain" }}
          sizes="20vw"
          priority
        />
      </div>
    ),
  },
  xbox: {
    name: "Xbox",
    foregroundColor: "#0E7C10",
    backgroundColor: "#fff",
    hoverColor: "hover:text-[#419242]",
    logo: (
      <div className="relative w-12 h-12 flex justify-center items-center">
        <Image className="w-auto h-full" src={xboxImg} alt="Xbox логотип" fill style={{ objectFit: "contain" }} sizes="20vw" priority />
      </div>
    ),
  },
  playstation: {
    name: "Playstation",
    foregroundColor: "#2C63CE",
    backgroundColor: "#ffff",
    hoverColor: "hover:text-[#4C76A6]",
    logo: (
      <div className="relative w-12 h-12 flex justify-center items-center">
        <Image
          className="w-auto h-full"
          src={playstationImg}
          alt="Playstation логотип"
          fill
          style={{ objectFit: "contain" }}
          sizes="20vw"
          priority
        />
      </div>
    ),
  },
  playstation_account: {
    name: "Аккаунт",
    foregroundColor: "#2C63CE",
    backgroundColor: "#ffff",
    hoverColor: "hover:text-[#4C76A6]",
    logo: (
      <div className="relative w-12 h-12 flex justify-center items-center">
        <Image
          className="w-auto h-full"
          src={playstationImg}
          alt="Playstation логотип"
          fill
          style={{ objectFit: "contain" }}
          sizes="20vw"
          priority
        />
      </div>
    ),
  },
  ps_plus: {
    name: "PS PLUS",
    foregroundColor: "#2C63CE",
    backgroundColor: "#ffff",
    hoverColor: "hover:text-[#4C76A6]",
    logo: (
      <div className="relative w-12 h-12 flex justify-center items-center">
        <Image
          className="w-auto h-full"
          src={psplusImg}
          alt="Ps plus логотип"
          fill
          style={{ objectFit: "contain" }}
          sizes="20vw"
          priority
        />
      </div>
    ),
  },
  ps_ea_play: {
    name: "PS EA PLAY",
    foregroundColor: "#2C63CE",
    backgroundColor: "#ffff",
    hoverColor: "hover:text-[#4C76A6]",
    logo: (
      <div className="relative w-12 h-12 flex justify-center items-center">
        <Image
          className="w-auto h-full"
          src={eaplayImg}
          alt="Ps ea play логотип"
          fill
          style={{ objectFit: "contain" }}
          sizes="20vw"
          priority
        />
      </div>
    ),
  },
  youtube: {
    name: "Youtube",
    foregroundColor: "#CD211F",
    backgroundColor: "#fff",
    hoverColor: "hover:text-[#CD5D5C]",
    logo: (
      <div className="relative w-12 h-12 flex justify-center items-center">
        <Image
          className="w-auto h-full"
          src={youtubeImg}
          alt="Youtube логотип"
          fill
          style={{ objectFit: "contain" }}
          sizes="20vw"
          priority
        />
      </div>
    ),
  },
  adobe_creative_cloud: {
    name: "Adobe",
    foregroundColor: "#fa0f00",
    backgroundColor: "#fff",
    hoverColor: "hover:text-[#d40d00]",
    logo: (
      <div className="relative w-12 h-12 flex justify-center items-center">
        <Image
          className="w-auto h-full"
          src={adobeccImage}
          alt="Adobe Creative Cloud логотип"
          fill
          style={{ objectFit: "contain" }}
          sizes="20vw"
          priority
        />
      </div>
    ),
  },
  turkey_card: {
    name: "Тур. карта",
    foregroundColor: "#2450aa",
    backgroundColor: "#fff",
    hoverColor: "hover:text-[#1D4088]",
    logo: (
      <div className="relative w-12 h-12 flex justify-center items-center">
        <Image
          className="w-auto h-full"
          src={credit_card_turkey}
          alt="Одноразовая карта Турция"
          fill
          style={{ objectFit: "contain" }}
          sizes="20vw"
          priority
        />
      </div>
    ),
  },
  na_chai: {
    name: "На чай",
    foregroundColor: "#2450aa",
    backgroundColor: "#fff",
    hoverColor: "hover:text-[#1D4088]",
    logo: (
      <div className="relative w-12 h-12 flex justify-center items-center">
        <Image
          className="w-auto h-full"
          src={na_chai}
          alt="На чай логотип"
          fill
          style={{ objectFit: "contain" }}
          sizes="20vw"
          priority
        />
      </div>
    ),
  },
} as const;

type CatalogueItemTypes = keyof typeof catalogueItems;

type Props = {
  colorPallette?: CatalogueItemTypes;
  isNotFound?: boolean;
};

const fetcher = (url: string | URL | Request) => fetch(url).then<{ amount: number }>((r) => r.json());

export default function Navbar({ colorPallette, isNotFound }: Props) {
  const { state, dispatch } = useContext(AppContext);
  const { data } = useSWR("/api/reviews/get_reviews_count", fetcher);

  return (
    <div className={cn("navbar h-16 shadow-md")}>
      <div className="flex w-full max-w-[1240px] h-[64px] mx-auto">
        <div
          className="flex-1 h-full items-center"
          style={colorPallette ? { color: catalogueItems[colorPallette].foregroundColor } : {}}
        >
          <div className="flex h-full w-full items-center justify-start">
            <Link className="flex gap-2 items-center justify-start" href="/">
              {colorPallette ? (
                catalogueItems[colorPallette].logo
              ) : (
                <Image className="rounded-full" src="/catalogue_icons/logo.jpg" width={48} height={48} alt="логотип" />
              )}
              <p className="text-2xl font-bold">МНЕПОДПИСКУ.РФ</p>
            </Link>
          </div>
        </div>
        <div className="flex-none gap-4 md:text-lg font-medium items-center hidden lg:flex ">
          <button onClick={() => dispatch({ type: "toggle_catalogue" })}>Каталог</button>

          <a href="https://oplata.info/info/" target="_blank" rel="noopener noreferrer">
            Мои покупки
          </a>

          <div className="indicator">
            {data?.amount && <span className="indicator-item badge badge-secondary">{data?.amount}+</span>}
            <a className="mr-2" href="/reviews" target="_blank" rel="noopener noreferrer">
              Отзывы
            </a>
          </div>

          <ThemeSwitcher />
        </div>
        <div className="flex items-center flex-none lg:hidden">
          <MobileMenu reviewsAmount={data?.amount} /* color={colorPallette ? catalogueItems[colorPallette].foregroundColor : ""} */ />
        </div>
      </div>
      <div
        className={cn(
          "fixed transform transition-all duration-300 opacity-0 flex flex-col right-0 left-0 top-0 bottom-0 z-[9999999] justify-end lg:justify-start pb-2 bg-black/90 pointer-events-none",
          {
            "opacity-100 pointer-events-auto": state.showCatalogue,
          }
        )}
      >
        <Catalogue showCatalogue={state.showCatalogue} toggleCatalogue={() => dispatch({ type: "toggle_catalogue" })} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 top-0 z-[10] pointer-events-none flex items-end justify-end p-2 ">
        <div className="pointer-events-auto lg:pointer-events-none lg:opacity-0 bg-base-200 w-12 h-12 rounded-full">
          <MobileMenu dropdownDirection="top" isNotFound={isNotFound} />
        </div>
      </div>
    </div>
  );
}
