import { Metadata } from "next";
import RedirectBasedOnDevice from "../RedirectBasedOnDevice";

export const metadata: Metadata = {
  title: "Где посмотреть резервный код аккаунта PSN",
  description: "Где посмотреть резервный код аккаунта PSN",
  openGraph: {
    title: "Где посмотреть резервный код аккаунта PSN",
    description: "Где посмотреть резервный код аккаунта PSN",
  },
  alternates: {
    canonical: "/guides/gde_posmotret_rezervnyi_kod",
  },
};

function Page() {
  return (
    <RedirectBasedOnDevice
      mobileUrl="/guides/gde_posmotret_rezervnyi_kod_telefon"
      desktopUrl="/guides/gde_posmotret_rezervnyi_kod_komputer"
    />
  );
}

export default Page;
