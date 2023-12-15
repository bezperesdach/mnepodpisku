export const dynamic = "force-static";
import { Metadata } from "next";
import SearchableGuides from "./SearchableGuides";

const instructions = [
  {
    name: "Как включить 2FA на аккаунте PSN?",
    url: "/guides/kak_vkluchit_2fa_na_akaunte_psn",
    tags: ["2fa", "psn", "playstation", "псн", "плейстейшн", "пс"],
  },

  {
    name: "Где посмотреть резервные коды на аккаунте PSN?",
    url: "/guides/gde_posmotret_rezervnyi_kod",
    tags: ["2fa", "psn", "playstation", "псн", "плейстейшн", "пс", "резервный код"],
  },
  {
    name: "Как отправить чек покупки на ВБ?",
    url: "/guides/kak_otpravit_chek_wb",
    tags: ["wildberries", "wb", "вб"],
  },
  {
    name: "Как отправить сообщение в чат продавцу на ВБ?",
    url: "/guides/kak_otrpavit_soobshenie_prodavcu_wb",
    tags: ["wildberries", "wb", "вб"],
  },
  {
    name: "Как добавить нового пользователя на PS5?",
    url: "/guides/kak_dobavit_novogo_polzovatelya_na_PS5",
    tags: ["psn", "playstation", "псн", "плейстейшн", "пс", "пользователь", "ps5"],
  },
  {
    name: "Как добавить нового пользователя на PS4?",
    url: "/guides/kak_dobavit_novogo_polzovatelya_na_PS4",
    tags: ["psn", "playstation", "псн", "плейстейшн", "пс", "пользователь", "ps4"],
  },
];

export const metadata: Metadata = {
  title: "Инструкции",
  description: "Страница со всеми инструкциями",
  openGraph: {
    title: "Инструкции",
    description: "Страница со всеми инструкциями",
  },
  alternates: {
    canonical: "/guides",
  },
};

function Guides() {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8 items-start">
      <h1 className="text-3xl lg:text-4xl font-bold">Инструкции</h1>
      <SearchableGuides instructions={instructions} />
    </div>
  );
}

export default Guides;
