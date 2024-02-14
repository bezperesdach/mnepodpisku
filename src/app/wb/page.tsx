export const dynamic = "force-static";

import { Metadata } from "next";
import WbActivate from "./WbClient";
import { isSearchParamValid } from "@/utils/utils";

export const metadata: Metadata = {
  title: "Активация",
  description: "Страница активации услуги",
  openGraph: {
    title: "Активация",
    description: "Страница активации услуги",
    images: ["/og_images_generated/wb/og_image.png"],
    url: "/wb",
  },
  alternates: {
    canonical: "/wb",
  },
};

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

async function Page({ searchParams }: Props) {
  return <WbActivate foreign={isSearchParamValid(searchParams["foreign"])} />;
}

export default Page;
