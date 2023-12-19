export const dynamic = "force-static";

import { Metadata } from "next";
import WbActivate from "./WbClient";

export const metadata: Metadata = {
  title: "Активация",
  description: "Страница активации услуги",
  openGraph: {
    title: "Активация",
    description: "Страница активации услуги",
    images: "og_images_generated/activate/wb/og_image.png",
    url: "/activate/wb",
  },
  alternates: {
    canonical: "/activate/wb",
  },
};

async function Page() {
  return <WbActivate />;
}

export default Page;
