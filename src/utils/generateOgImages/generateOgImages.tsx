import { TemplateString } from "next/dist/lib/metadata/types/metadata-types";

import { generateOgImage } from "./generateOgImage";

import { metadata as HomePage } from "@/app/(main)/page";
import { metadata as DigiPage } from "@/app/activate/digi/page";
import { metadata as WbPage } from "@/app/wb/page";
import { metadata as BlogPage } from "@/app/blog/page";
import { metadata as kak_samomu_sozdat_tureckiy_akaunt } from "@/app/blog/kak_samomu_sozdat_tureckiy_akaunt/page";
import { metadata as gde_posmotret_rezervnyi_kod } from "@/app/guides/gde_posmotret_rezervnyi_kod/page";
import { metadata as gde_posmotret_rezervnyi_kod_komputer } from "@/app/guides/gde_posmotret_rezervnyi_kod_komputer/page";
import { metadata as gde_posmotret_rezervnyi_kod_telefon } from "@/app/guides/gde_posmotret_rezervnyi_kod_telefon/page";
import { metadata as kak_dobavit_novogo_polzovatelya_na_PS4 } from "@/app/guides/kak_dobavit_novogo_polzovatelya_na_PS4/page";
import { metadata as kak_dobavit_novogo_polzovatelya_na_PS5 } from "@/app/guides/kak_dobavit_novogo_polzovatelya_na_PS5/page";
import { metadata as kak_otpravit_chek_wb } from "@/app/guides/kak_otpravit_chek_wb/page";
import { metadata as kak_otpravit_chek_wb_komputer } from "@/app/guides/kak_otpravit_chek_wb_komputer/page";
import { metadata as kak_otpravit_chek_wb_prilozhenie } from "@/app/guides/kak_otpravit_chek_wb_prilozhenie/page";
import { metadata as kak_otpravit_chek_wb_telefon } from "@/app/guides/kak_otpravit_chek_wb_telefon/page";
import { metadata as kak_otrpavit_soobshenie_prodavcu_wb } from "@/app/guides/kak_otrpavit_soobshenie_prodavcu_wb/page";
import { metadata as kak_otrpavit_soobshenie_prodavcu_wb_komputer } from "@/app/guides/kak_otrpavit_soobshenie_prodavcu_wb_komputer/page";
import { metadata as kak_otrpavit_soobshenie_prodavcu_wb_telefon } from "@/app/guides/kak_otrpavit_soobshenie_prodavcu_wb_telefon/page";
import { metadata as kak_vkluchit_2fa_na_akaunte_psn } from "@/app/guides/kak_vkluchit_2fa_na_akaunte_psn/page";
import { metadata as kak_vkluchit_2fa_na_akaunte_psn_komputer } from "@/app/guides/kak_vkluchit_2fa_na_akaunte_psn_komputer/page";
import { metadata as kak_vkluchit_2fa_na_akaunte_psn_telefon } from "@/app/guides/kak_vkluchit_2fa_na_akaunte_psn_telefon/page";
import { metadata as kak_privyazat_kartu_k_turezkomu_akauntu_psn } from "@/app/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn/page";
import { metadata as kak_privyazat_kartu_k_turezkomu_akauntu_psn_komputer } from "@/app/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn_komputer/page";
import { metadata as kak_privyazat_kartu_k_turezkomu_akauntu_psn_telefon } from "@/app/guides/kak_privyazat_kartu_k_turezkomu_akauntu_psn_telefon/page";

// import { metadata as raspisanie_raboti_v_nogodnie_prazdniki } from "@/app/blog/raspisanie_raboti_v_nogodnie_prazdniki/page";

import { metadata as get_discount } from "@/app/get_discount/page";
import { metadata as get_discount_wb } from "@/app/get_discount/wb/page";
import { metadata as get_discount_site } from "@/app/get_discount/vk/page";

type Page = {
  path?: string | URL;
  title?: string;
  text?: string | TemplateString;
};

const pages: Page[] = [
  {
    path: HomePage.openGraph?.url,
    text: HomePage.openGraph?.title,
  },
  {
    path: DigiPage.openGraph?.url,
    text: DigiPage.openGraph?.description,
  },
  {
    path: WbPage.openGraph?.url,
    text: WbPage.openGraph?.description,
  },
  {
    path: BlogPage.openGraph?.url,
    text: BlogPage.openGraph?.description,
  },
  {
    path: kak_samomu_sozdat_tureckiy_akaunt.openGraph?.url,
    text: kak_samomu_sozdat_tureckiy_akaunt.openGraph?.title,
  },
  {
    path: gde_posmotret_rezervnyi_kod.openGraph?.url,
    text: gde_posmotret_rezervnyi_kod.openGraph?.title,
  },
  {
    path: gde_posmotret_rezervnyi_kod_komputer.openGraph?.url,
    text: gde_posmotret_rezervnyi_kod_komputer.openGraph?.title,
  },
  {
    path: gde_posmotret_rezervnyi_kod_telefon.openGraph?.url,
    text: gde_posmotret_rezervnyi_kod_telefon.openGraph?.title,
  },
  {
    path: kak_dobavit_novogo_polzovatelya_na_PS4.openGraph?.url,
    text: kak_dobavit_novogo_polzovatelya_na_PS4.openGraph?.title,
  },
  {
    path: kak_dobavit_novogo_polzovatelya_na_PS5.openGraph?.url,
    text: kak_dobavit_novogo_polzovatelya_na_PS5.openGraph?.title,
  },
  {
    path: kak_otpravit_chek_wb.openGraph?.url,
    text: kak_otpravit_chek_wb.openGraph?.title,
  },
  {
    path: kak_otpravit_chek_wb_komputer.openGraph?.url,
    text: kak_otpravit_chek_wb_komputer.openGraph?.title,
  },
  {
    path: kak_otpravit_chek_wb_prilozhenie.openGraph?.url,
    text: kak_otpravit_chek_wb_prilozhenie.openGraph?.title,
  },
  {
    path: kak_otpravit_chek_wb_telefon.openGraph?.url,
    text: kak_otpravit_chek_wb_telefon.openGraph?.title,
  },
  {
    path: kak_otrpavit_soobshenie_prodavcu_wb.openGraph?.url,
    text: kak_otrpavit_soobshenie_prodavcu_wb.openGraph?.title,
  },
  {
    path: kak_otrpavit_soobshenie_prodavcu_wb_komputer.openGraph?.url,
    text: kak_otrpavit_soobshenie_prodavcu_wb_komputer.openGraph?.title,
  },
  {
    path: kak_otrpavit_soobshenie_prodavcu_wb_telefon.openGraph?.url,
    text: kak_otrpavit_soobshenie_prodavcu_wb_telefon.openGraph?.title,
  },
  {
    path: kak_vkluchit_2fa_na_akaunte_psn.openGraph?.url,
    text: kak_vkluchit_2fa_na_akaunte_psn.openGraph?.title,
  },
  {
    path: kak_vkluchit_2fa_na_akaunte_psn_komputer.openGraph?.url,
    text: kak_vkluchit_2fa_na_akaunte_psn_komputer.openGraph?.title,
  },
  {
    path: kak_vkluchit_2fa_na_akaunte_psn_telefon.openGraph?.url,
    text: kak_vkluchit_2fa_na_akaunte_psn_telefon.openGraph?.title,
  },
  {
    path: kak_privyazat_kartu_k_turezkomu_akauntu_psn.openGraph?.url,
    text: kak_privyazat_kartu_k_turezkomu_akauntu_psn.openGraph?.title,
  },
  {
    path: kak_privyazat_kartu_k_turezkomu_akauntu_psn_komputer.openGraph?.url,
    text: kak_privyazat_kartu_k_turezkomu_akauntu_psn_komputer.openGraph?.title,
  },
  {
    path: kak_privyazat_kartu_k_turezkomu_akauntu_psn_telefon.openGraph?.url,
    text: kak_privyazat_kartu_k_turezkomu_akauntu_psn_telefon.openGraph?.title,
  },
  {
    path: get_discount.openGraph?.url,
    text: get_discount.openGraph?.title,
  },
  {
    path: get_discount_wb.openGraph?.url,
    text: get_discount_wb.openGraph?.title,
  },
  {
    path: get_discount_site.openGraph?.url,
    text: get_discount_site.openGraph?.title,
  },
  // {
  //   path: raspisanie_raboti_v_nogodnie_prazdniki.openGraph?.url,
  //   text: raspisanie_raboti_v_nogodnie_prazdniki.openGraph?.title,
  // },
];

const generate = async () => {
  pages.map(async (page) => {
    await generateOgImage({ path: page.path, title: page.title, text: page.text });
  });
};

generate();
