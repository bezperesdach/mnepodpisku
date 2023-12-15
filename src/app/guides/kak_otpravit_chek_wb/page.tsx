import { Metadata } from "next";
import RedirectBasedOnDevice from "../RedirectBasedOnDevice";

export const metadata: Metadata = {
  title: "Как отправить чек ВБ",
  description: "Как отправить чек ВБ",
  openGraph: {
    title: "Как отправить чек ВБ",
    description: "Как отправить чек ВБ",
  },
  alternates: {
    canonical: "/guides/kak_otpravit_chek_wb",
  },
};

function Page() {
  return <RedirectBasedOnDevice mobileUrl="/guides/kak_otpravit_chek_wb_telefon" desktopUrl="/guides/kak_otpravit_chek_wb_komputer" />;
}

export default Page;
