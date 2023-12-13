"use client";

import { useContext, useEffect } from "react";
import cn from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { AppContext } from "../AppContextWrapper/AppContextWrapper";
import Catalogue from "../Catalogue/Catalogue";

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
          src="/catalogue_icons/spotify.png"
          alt="Spotify логотип"
          fill
          style={{ objectFit: "contain" }}
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
        <Image src="/catalogue_icons/netflix.png" alt="Netflix логотип" fill style={{ objectFit: "contain" }} />
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
          src="/catalogue_icons/discord.png"
          alt="Discord логотип"
          fill
          style={{ objectFit: "contain" }}
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
        <Image className="w-auto h-full" src="/catalogue_icons/tinder.png" alt="Tinder логтип" fill style={{ objectFit: "contain" }} />
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
        <Image className="w-auto h-full" src="/catalogue_icons/xbox.png" alt="Xbox логотип" fill style={{ objectFit: "contain" }} />
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
          src="/catalogue_icons/playstation.png"
          alt="Playstation логотип"
          fill
          style={{ objectFit: "contain" }}
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
          src="/catalogue_icons/playstation.png"
          alt="Playstation логотип"
          fill
          style={{ objectFit: "contain" }}
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
          src="/catalogue_icons/ps_plus.png"
          alt="Ps plus логотип"
          fill
          style={{ objectFit: "contain" }}
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
          src="/catalogue_icons/ea_play.png"
          alt="Ps Ea play логотип"
          fill
          style={{ objectFit: "contain" }}
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
          src="/catalogue_icons/youtube.png"
          alt="Youtube логотип"
          fill
          style={{ objectFit: "contain" }}
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
          src="/catalogue_icons/adobe_cc.png"
          alt="Adobe Creative Cloud логотип"
          fill
          style={{ objectFit: "contain" }}
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

// export const CatalogueContext = createContextId<Signal<boolean>>("showNavbar");

export default function Navbar({ colorPallette, isNotFound }: Props) {
  const { showCatalogue, toggleCatalogue } = useContext(AppContext);

  return (
    <div className={cn("navbar h-16 shadow-md")}>
      <div className="flex w-full max-w-[1240px] h-[64px] mx-auto">
        <div
          className="flex-1 h-full items-center" /*  style={colorPallette ? { color: catalogueItems[colorPallette].foregroundColor } : {}} */
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
          {/* <div className="bg-[url('/logo.png')] h-full w-[200px] bg-no-repeat bg-[contain] bg-center" /> */}
        </div>
        <div
          className="flex-none gap-4 md:text-lg font-medium items-center hidden lg:flex "
          // style={colorPallette ? { color: catalogueItems[colorPallette].foregroundColor } : {}}
        >
          <button
            className={cn({ "text-2xl": showCatalogue })}
            onClick={toggleCatalogue}
            // className={cn(`hover:text-secondary`, { [`${catalogueItems[colorPallette!]?.hoverColor}`]: colorPallette })}
            // onClick$={() => (showCatalogue.value = true)}
          >
            Каталог
          </button>
          {/* {loc.url.pathname !== "/" && (
            <button
              className={cn(`hover:text-secondary`, { [`${catalogueItems[colorPallette!]?.hoverColor}`]: colorPallette })}
              onClick$={() => scrollInView("description")}
            >
              Описание
            </button>
          )} */}
          {/* <Link className="hover:text-secondary" href="#">
            Отзывы
          </Link> */}

          <a
            // className={cn(`hover:text-secondary`, { [`${catalogueItems[colorPallette!]?.hoverColor}`]: colorPallette })}
            href="https://vk.com/topic-221413404_49184185"
            target="_blank"
            rel="noopener noreferrer"
          >
            Отзывы
          </a>
          <a
            // className={cn(`hover:text-secondary`, { [`${catalogueItems[colorPallette!]?.hoverColor}`]: colorPallette })}
            href="https://oplata.info/info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Мои покупки
          </a>

          {/* {loc.url.pathname !== "/" && !isNotFound && (
            <button
              // className={cn(`hover:text-secondary`, { [`${catalogueItems[colorPallette!]?.hoverColor}`]: colorPallette })}
              onClick$={() => scrollInView("contacts")}
            >
              Контакты
            </button>
          )} */}
          {/* <ToggleTheme /> */}
        </div>
        <div className="flex items-center flex-none lg:hidden">
          {/* <MobileMenu
            scrollInView={scrollInView}
            color={colorPallette ? catalogueItems[colorPallette].foregroundColor : ""}
            showCatalogue={showCatalogue}
          /> */}
        </div>
      </div>
      <div
        className={cn(
          "fixed transform transition-all duration-300 opacity-0 flex flex-col right-0 left-0 top-0 bottom-0 z-[9999999] justify-end lg:justify-start pb-2 bg-black/90 pointer-events-none",
          {
            "opacity-100 pointer-events-auto": showCatalogue,
          }
        )}
      >
        <Catalogue toggleCatalogue={toggleCatalogue} />
      </div>
      {/* <div className="fixed bottom-0 left-0 right-0 top-0 z-[10] pointer-events-none flex items-end justify-end p-2 ">
        <div className="pointer-events-auto lg:pointer-events-none lg:opacity-0 bg-base-200 w-12 h-12 rounded-full">
          <MobileMenu scrollInView={scrollInView} showCatalogue={showCatalogue} dropdownDirection="top" isNotFound={isNotFound} />
        </div>
      </div> */}
    </div>
  );
}

// export default component$(({ colorPallette, isNotFound = false }: Props) => {
//   const scrollInView = $((id: string) => {
//     const elem = document.getElementById(id);
//     if (elem) {
//       scrollIntoView(elem, { time: 350, maxSynchronousAlignments: 1, align: { top: 0 } });
//     }
//   });

//   const showCatalogue = useContext(CatalogueContext);

//   useVisibleTask$(({ track }) => {
//     track(() => showCatalogue.value);

//     let scrollPos;
//     if (showCatalogue.value) {
//       document.body.style.top = `-${scrollPos}px`;
//       document.body.style.position = "fixed";
//       document.body.style.left = "0";
//       document.body.style.right = "0";
//     } else {
//       scrollPos = window.scrollY;
//       document.body.style.setProperty("left", null);
//       document.body.style.setProperty("right", null);
//       document.body.style.setProperty("position", "static");
//     }
//   });

// 	useEffect(()=>{

// 	},[])

// });
