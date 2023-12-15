export const dynamic = "force-static";
import { Metadata } from "next";
import WbActivate from "./WbClient";

export const metadata: Metadata = {
  title: "Активация",
  description: "Страница активации услуги",
  openGraph: {
    title: "Активация",
    description: "Страница активации услуги",
  },
  alternates: {
    canonical: "/activate/wb",
  },
};

function Page() {
  return <WbActivate />;
}

export default Page;
