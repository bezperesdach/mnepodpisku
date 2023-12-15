import { Metadata } from "next";
import RedirectBasedOnDevice from "../RedirectBasedOnDevice";

export const metadata: Metadata = {
  title: "Как включить 2FA на аккаунте PSN",
  description: "Как включить 2FA на аккаунте PSN",
  openGraph: {
    title: "Как включить 2FA на аккаунте PSN",
    description: "Как включить 2FA на аккаунте PSN",
  },
  alternates: {
    canonical: "/guides/kak_vkluchit_2fa_na_akaunte_psn",
  },
};

function Page() {
  return (
    <RedirectBasedOnDevice
      mobileUrl="/guides/kak_vkluchit_2fa_na_akaunte_psn_telefon"
      desktopUrl="/guides/kak_vkluchit_2fa_na_akaunte_psn_komputer"
    />
  );
}

export default Page;
