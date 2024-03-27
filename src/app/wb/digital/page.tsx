import { Metadata } from "next";
import WbActivate from "./WbClient";

export const metadata: Metadata = {
  title: "Активация WB Цифровой",
  description: "Страница активации услуги WB Цифровой",
  openGraph: {
    title: "Активация WB Цифровой",
    description: "Страница активации услуги WB Цифровой",
    images: ["/og_images_generated/wb/og_image.png"],
    url: "/wb_digital",
  },
  alternates: {
    canonical: "/wb_digital",
  },
};

async function Page() {
  return <WbActivate />;
}

export default Page;
