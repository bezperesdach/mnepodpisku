"use client";

import * as React from "react";
import { Button } from "../../components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const PlayStation_Style = [
  // may - 0
  {
    image: "/images/Playstation_topup_may.webp",
    titleClass: "text-xl font-bold tracking-tight text-[#231d8c] bg-white px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    descriptionClass:
      "text-sm font-medium leading-7 max-w-xs bg-gradient-to-b from-[#2120aa] to-[#110f4f] border-solid border-[1px] border-white px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      // clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    callToActionClass: "max-w-sm h-10 z-10 bg-[#2120aa] hover:bg-[#231d8c] font-bold text-lg",
  },
  // may2 - 1
  {
    image: "/images/Playstation_topup_may_2.webp",
    titleClass:
      "text-xl font-bold tracking-tight text-[#1a0a2c] bg-[#fe6aac] border-b-4 border-r-4 border-white px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      // clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    descriptionClass:
      "text-sm font-medium leading-7 max-w-xs bg-[#08073d] border-b-2 border-r-2 border-white px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      // clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    callToActionClass: "max-w-sm h-10 z-10 text-[#1a0a2c] bg-[#ff6baf] hover:bg-[#af4275] font-bold text-lg",
  },
  // june - 2
  {
    image: "/images/Playstation_topup_june.jpg",
    titleClass: "text-xl font-bold tracking-tight text-[#ffffff] px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      // clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    descriptionClass: "text-sm font-medium leading-7 max-w-xs text-[#ffffff] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      // clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    callToActionClass:
      "max-w-sm h-10 z-10 text-[#01429c] bg-[#ffffff] hover:bg-[#ffffff] border-2 border-transparent hover:border-[#59c8fe] font-bold text-lg",
  },
  // june - 3
  {
    image: "/images/Playstation_topup_june_2.jpg",
    titleClass: "text-xl font-bold tracking-tight text-[#fc247f] bg-white px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    descriptionClass:
      "text-sm font-medium leading-7 max-w-xs text-[#ffffff] bg-[#fc247f] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    callToActionClass: "max-w-sm h-10 z-10 text-[#ffffff] bg-[#009ad8] hover:bg-[#017aaa] font-bold text-lg",
  },
  // june - 4
  {
    image: "/images/Playstation_topup_june_3.jpg",
    titleClass: "text-xl font-bold tracking-tight text-[#0D0D53] bg-white px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    descriptionClass:
      "text-sm font-medium leading-7 max-w-xs text-[#ffffff] bg-[#F9799F] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    callToActionClass: "max-w-sm h-10 z-10 text-[#0D0D53] bg-[#ffffff] hover:bg-[#F9799F] hover:text-[#ffffff] font-bold text-lg",
  },
  // july - 5
  {
    image: "/images/Playstation_topup_july.avif",
    titleClass: "text-xl font-bold tracking-tight text-[#d53c40] bg-white px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    descriptionClass:
      "text-sm font-medium leading-7 max-w-xs text-[#ffffff] bg-[#d53c40] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    callToActionClass: "max-w-sm h-10 z-10 text-[#ffffff] bg-[#d53c40] hover:bg-[#ffffff] hover:text-[#d53c40] font-bold text-lg",
  },
  // july2 - 6
  {
    image: "/images/Playstation_topup_july_2.jpg",
    titleClass: "text-xl font-bold tracking-tight text-[#ff0070] bg-white px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    descriptionClass:
      "text-sm font-medium leading-7 max-w-xs text-[#ffffff] bg-[#ff0070] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    callToActionClass: "max-w-sm h-10 z-10 text-[#ffffff] bg-[#ff0070] hover:bg-[#ffffff] hover:text-[#ff0070] font-bold text-lg",
  },
  // aug1 - 7
  {
    image: "/images/Playstation_topup_august_1.jpg",
    titleClass: "text-xl font-bold tracking-tight text-[#5F55B4] bg-[#FED48F] px-4 py-2 mr-auto md:text-4xl border-[#5F55B4] border-4",
    innerTitleClass: "",
    titleStyle: {
      // clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    descriptionClass:
      "text-sm font-bold leading-7 max-w-xs text-[#FED48F] bg-[#5F55B4] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base border-[#FED48F] border-2 ",
    descriptionStyle: {
      // clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    callToActionClass:
      "max-w-sm h-10 z-10 text-[#5F55B4] bg-[#FED790] hover:bg-[#5F55B4] border-[#5F55B4] border-2 hover:border-[#FED790] hover:text-[#FED790] font-bold text-lg",
  },
  // aug1 - 8
  {
    image: "/images/Playstation_topup_august_2.jpg",
    titleClass: "text-xl font-bold tracking-tight text-[#313131] bg-[#1DFA39] px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      // clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    descriptionClass:
      "text-sm font-bold leading-7 max-w-xs text-[#313131] bg-[#FFFFFF] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base border-[#313131] border-2 ",
    descriptionStyle: {
      // clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    callToActionClass:
      "max-w-sm h-10 z-10 text-[#313131] bg-[#1DFA39] hover:bg-[#FFFFFF] border-transparent border-2 hover:border-[#313131] hover:text-[#313131] font-bold text-lg",
  },
  // september - 9
  {
    image: "/images/Playstation_topup_2024_september.jpg",
    titleClass: "text-xl font-bold tracking-tight text-[#6e41e4] bg-[#ffffff] px-4 py-2 mr-auto md:text-4xl rounded-xl",
    innerTitleClass: "",
    titleStyle: {
      // clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    descriptionClass:
      "text-sm font-bold leading-7 max-w-xs text-[#ffffff] bg-[#6e41e4] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base rounded-md ",
    descriptionStyle: {
      // clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    callToActionClass:
      "max-w-sm h-10 z-10 text-[#6e41e4] bg-[#ffffff] hover:bg-[#6e41e4]  hover:text-[#ffffff] font-bold text-lg rounded-sm",
  },
  // september 2 - 10
  {
    image: "/images/Playstation_topup_2024_september_2.jpg",
    titleClass: "text-xl font-bold tracking-tight text-[#ffffff] bg-[#ff443a] px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      textShadow: "-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000",
    },
    descriptionClass:
      "text-sm font-bold leading-7 max-w-xs text-[#ffffff] bg-[#ff4438] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base ",
    descriptionStyle: {
      textShadow: "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
    },
    callToActionClass: "max-w-sm h-10 z-10 text-[#ffffff] bg-[#ff4438] hover:bg-[#ffffff]  hover:text-[#ff4438] font-bold text-lg",
  },
  // 11
  {
    image: "/images/Playstation_topup_2024_october.jpg",
    titleClass: "text-xl font-bold tracking-tight text-[#FAF6CF] bg-[#401061] px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      // textShadow: "-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000",
    },
    descriptionClass:
      "text-sm font-bold leading-7 max-w-xs text-[#401061] bg-[#FAF6CF] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base ",
    descriptionStyle: {
      // textShadow: "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
    },
    callToActionClass: "max-w-sm h-10 z-10 text-[#FAF6CF] bg-[#401061] hover:bg-[#FAF6CF]  hover:text-[#401061] font-bold text-lg",
  },
  // 12
  {
    image: "/images/Playstation_topup_2024_november_1.avif",
    titleClass: "text-xl font-bold tracking-tight text-[#ffffff] bg-[#db3da9] px-4 py-2 mr-auto md:text-4xl border-2 border-[#783a6d]",
    innerTitleClass: "",
    titleStyle: {
      // textShadow: "-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000",
    },
    descriptionClass:
      "text-sm font-bold leading-7 max-w-xs text-[#db3da9] bg-[#ffffff] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base border-2 border-[#783a6d]",
    descriptionStyle: {
      // textShadow: "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
    },
    callToActionClass:
      "max-w-sm h-10 z-10 text-[#ffffff] bg-[#db3da9] hover:bg-[#ffffff]  hover:text-[#db3da9] font-bold text-lg border-2 border-[#783a6d]",
  },
  // 13
  {
    image: "/images/Playstation_topup_2024_december_1.avif",
    titleClass: "text-xl font-bold tracking-tight text-[#ffffff] bg-[#007CE7] px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      // textShadow: "-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000",
    },
    descriptionClass:
      "text-sm font-bold leading-7 max-w-xs text-[#007CE7] bg-[#ffffff] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      // textShadow: "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
    },
    callToActionClass:
      "max-w-sm h-10 z-10 text-[#ffffff] bg-[#007CE7] hover:bg-[#ffffff]  hover:text-[#007CE7] font-bold text-lg border-2 border-[#007CE7]",
  },
  // 14
  {
    image: "/images/Playstation_topup_2024_december_2.avif",
    titleClass: "text-xl font-bold tracking-tight text-[#fcda77] bg-[#007de8] px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      // textShadow: "-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000",
    },
    descriptionClass:
      "text-sm font-bold leading-7 max-w-xs text-[#007de8] bg-[#ffffff] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      // textShadow: "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
    },
    callToActionClass:
      "max-w-sm h-10 z-10 text-[#ffffff] bg-[#007CE7] hover:bg-[#ffffff]  hover:text-[#007CE7] font-bold text-lg border-2 border-[#007CE7]",
  },
  // 15
  {
    image: "/images/Playstation_topup_2025_january.avif",
    titleClass:
      "text-xl font-bold tracking-tight text-[#ffffff] bg-gradient-to-bl from-fuchsia-300 via-purple-700 to-fuchsia-500 px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      // textShadow: "-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000",
    },
    descriptionClass:
      "text-sm font-bold leading-7 max-w-xs text-[#ffffff] bg-gradient-to-bl from-gray-500 via-indigo-500 to-indigo-600 px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      // textShadow: "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
    },
    callToActionClass:
      "max-w-sm h-10 z-10 text-[#ffffff] bg-gradient-to-bl from-fuchsia-400 via-fuchsia-600 to-fuchsia-400 hover:border-[#1c1975] hover:border-2 font-bold text-lg",
  },
  // 16
  {
    image: "/images/Playstation_topup_2025_february.avif",
    titleClass: "text-xl font-bold tracking-tight text-[#060100] bg-[#faf0da] px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      // textShadow: "-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000",
    },
    descriptionClass:
      "text-sm font-bold leading-7 max-w-xs text-[#bba576] bg-[#060100] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      // textShadow: "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
    },
    callToActionClass: "max-w-sm h-10 z-10 text-[#060100] bg-[#faf0da] hover:text-[#efddac] hover:bg-[#060100] font-bold text-lg",
  },
  // 17
  {
    image: "/images/Playstation_topup_2025_february_2.avif",
    titleClass: "text-xl font-bold tracking-tight text-[#ae006b] bg-[#ffffff] px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      // textShadow: "-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000",
    },
    descriptionClass:
      "text-sm font-bold leading-7 max-w-xs text-[#ffffff] bg-[#ae006b] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      // textShadow: "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
    },
    callToActionClass: "max-w-sm h-10 z-10 text-[#ffffff] bg-[#ae006b] hover:text-[#ae006b] hover:bg-[#ffffff] font-bold text-lg",
  },
  // 18
  {
    image: "/images/Playstation_topup_2025_march.avif",
    titleClass: "text-xl font-bold tracking-tight text-[#ffffff] bg-[#0070a0] px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      // textShadow: "-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000",
    },
    descriptionClass:
      "text-sm font-bold leading-7 max-w-xs text-[#0070a0] bg-[#ffffff] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      // textShadow: "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
    },
    callToActionClass: "max-w-sm h-10 z-10 text-[#ffffff] bg-[#0070a0] hover:text-[#0070a0] hover:bg-[#ffffff] font-bold text-lg",
  },
  // 19
  {
    image: "/images/Playstation_topup_2025_april.avif",
    titleClass: "text-xl font-bold tracking-tight text-[#ffffff] bg-[#007de8] px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      // textShadow: "-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000",
    },
    descriptionClass:
      "text-sm font-bold leading-7 max-w-xs text-[#007de8] bg-[#ffffff] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      // textShadow: "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
    },
    callToActionClass:
      "max-w-sm h-10 z-10 text-[#ffffff] bg-[#007CE7] hover:bg-[#ffffff]  hover:text-[#007CE7] font-bold text-lg border-2 border-[#007CE7]",
  },
  // 20
  {
    image: "/images/Playstation_topup_2025_april_2.avif",
    titleClass: "text-xl font-bold tracking-tight text-[#ffffff] bg-[#ff2d77] px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {
      // textShadow: "-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000",
    },
    descriptionClass:
      "text-sm font-bold leading-7 max-w-xs text-[#ffffff] bg-[#01a8c5] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      // textShadow: "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
    },
    callToActionClass:
      "max-w-sm h-10 z-10 text-[#ffffff] bg-[#ff2d77] hover:bg-[#ffffff]  hover:text-[#ff2d77] font-bold text-lg border-2 border-[#ff2d77]",
  },
  // 21
  {
    image: "/images/Playstation_topup_2025_may.avif",
    titleClass: "text-xl font-bold tracking-tight text-[#ffffff] bg-[#ffffff] px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "bg-gradient-to-b from-[#00b0cc] to-[#008aa4] bg-clip-text text-transparent",
    titleStyle: {
      // textShadow: "-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000",
    },
    descriptionClass:
      "text-sm font-bold leading-7 max-w-xs text-[#ffffff] bg-gradient-to-b from-[#00b0cc] to-[#008aa4] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      // textShadow: "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
    },
    callToActionClass:
      "max-w-sm h-10 z-10 text-[#ffffff] bg-gradient-to-b from-[#00b0cc] to-[#008aa4] hover:bg-[#ffffff] font-bold text-lg border-2 border-transparent hover:border-[#ffffff]",
  },
];

const PlayStation_Plus_Style = [
  // 0
  {
    image: "/images/PlaystationPlus_2.jpg",
    titleClass: "text-xl font-bold tracking-tight text-[#fcc000] bg-[#000000] px-4 py-2 mr-auto md:text-4xl",
    innerTitleClass: "",
    titleStyle: {},
    descriptionClass: "leading-7 max-w-xs text-black px-2 md:px-4 py-[1px] md:py-1",
    descriptionStyle: {},
    callToActionClass: "max-w-sm h-10 z-10 bg-[#333333] hover:bg-[#000000] font-bold text-lg border-r-2 border-b-2 border-[#fcc000]",
  },
  // 1
  {
    image: "/images/PlaystationPlus_june.jpg",
    titleClass: "flex gap-2 items-center text-xl font-bold tracking-tight text-[#ffffff] px-4 py-2 mr-auto md:text-4xl ",
    innerTitleClass: "",
    titleStyle: {
      // clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    descriptionClass: "text-sm font-medium leading-7 max-w-xs text-[#ffffff] px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
    descriptionStyle: {
      // clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
    },
    callToActionClass:
      "max-w-sm h-10 z-10 text-[#01429c] bg-[#ffffff] hover:bg-[#ffffff] border-2 border-transparent hover:border-[#59c8fe] font-bold text-lg",
  },
];

const Banners = [
  // {
  //   title: "СКОРО ВЕРНЕМСЯ!",
  //   description: "Узнайте расписание нашей работы в эти праздники",
  //   callToAction: "ПОДРОБНЕЕ",
  //   image: "/images/Playstation_topup_2024_december_holiday.avif",
  //   alt: "Расписание работы на праздниках",
  //   titleClass: "text-xl font-bold tracking-tight text-primary bg-white px-4 py-2 mr-auto md:text-4xl",
  //   titleStyle: {
  //     clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
  //   },
  //   descriptionClass:
  //     "text-sm font-medium leading-7 max-w-xs text-[#ffffff] bg-primary px-2 md:px-4 py-[1px] md:py-1 mr-auto md:text-base",
  //   descriptionStyle: {
  //     clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
  //   },
  //   callToActionClass: "max-w-sm h-10 z-10 text-[#ffffff] bg-primary hover:bg-primary font-bold text-lg",
  //   href: "blog/raspisanie_raboti_v_nogodnie_prazdniki",
  // },
  {
    title: "ПОПОЛНЕНИЕ PLAYSTATION",
    description: "PSN СКИДКИ ДО 75%",
    callToAction: "ПОПОЛНИТЬ",
    image: PlayStation_Style[21].image,
    alt: "Playstation пополнение банер",
    titleClass: PlayStation_Style[21].titleClass,
    innerTitleClass: PlayStation_Style[21].innerTitleClass,
    titleStyle: PlayStation_Style[21].titleStyle,
    descriptionClass: PlayStation_Style[21].descriptionClass,
    descriptionStyle: PlayStation_Style[21].descriptionStyle,
    callToActionClass: PlayStation_Style[21].callToActionClass,
    href: "playstation",
  },
  {
    title: "ПОДПИСКА PS PLUS",
    description: "Получи доступ к сотням игр",
    callToAction: "ПРИОБРЕСТИ",
    image: PlayStation_Plus_Style[0].image,
    alt: "Playstation plus банер",
    titleClass: PlayStation_Plus_Style[0].titleClass,
    titleStyle: PlayStation_Plus_Style[0].titleStyle,
    descriptionClass: PlayStation_Plus_Style[0].descriptionClass,
    descriptionStyle: PlayStation_Plus_Style[0].descriptionStyle,
    callToActionClass: PlayStation_Plus_Style[0].callToActionClass,
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
    <div className="w-full flex justify-center items-center mt-6 ">
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
                          <span className={item.innerTitleClass}>{item.title}</span>
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
                          quality={95}
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
