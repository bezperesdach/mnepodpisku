import { Metadata } from "next";
import RedirectBasedOnDevice from "../RedirectBasedOnDevice";

export const metadata: Metadata = {
  title: "Как отправить сообщение продавцу ВБ",
  description: "Как отправить сообщение продавцу ВБ",
  openGraph: {
    title: "Как отправить сообщение продавцу ВБ",
    description: "Как отправить сообщение продавцу ВБ",
  },
  alternates: {
    canonical: "/guides/kak_otrpavit_soobshenie_prodavcu_wb",
  },
};

function Page() {
  return (
    <RedirectBasedOnDevice
      mobileUrl="/guides/kak_otrpavit_soobshenie_prodavcu_wb_telefon"
      desktopUrl="/guides/kak_otrpavit_soobshenie_prodavcu_wb_komputer"
    />
  );
}

export default Page;
