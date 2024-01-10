import { Metadata } from "next";
import RedirectBasedOnDevice from "../RedirectBasedOnDevice";

export const metadata: Metadata = {
  title: "Как привязать карту к Турецкому Аккаунту PSN",
  description: "Как привязать карту к Турецкому Аккаунту PSN",
  openGraph: {
    title: "Как привязать карту к Турецкому Аккаунту PSN",
    description: "Как привязать карту к Турецкому Аккаунту PSN",
    url: "/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn",
    images: ["/og_images_generated/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn/og_image.png"],
  },
  alternates: {
    canonical: "/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn",
  },
};

function Page() {
  return (
    <RedirectBasedOnDevice
      mobileUrl="/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn_telefon"
      desktopUrl="/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn_komputer"
    />
  );
}

export default Page;
