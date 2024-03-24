import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Получи бонус за отзыв!",
  description: "Получи бонус за отзыв!",
  openGraph: {
    title: "Получи бонус за отзыв!",
    description: "Получи бонус за отзыв!",
    images: ["/og_images_generated/get_discount/og_image.png"],
    url: "/get_discount",
  },
  alternates: {
    canonical: "/get_discount",
  },
};

function Blog() {
  return (
    <div className="w-full flex gap-4 max-w-screen-lg mt-4 mb-6 p-6 rounded-3xl bg-[#0c1430]">
      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-3xl font-semibold tracking-tight">Получи бесплатные лиры за оставленный отзыв!</h1>

        <p className="text-muted-foreground">Выбери где ты совершил свою покупку</p>

        <p className="text-3xl font-semibold tracking-tight mt-4">Выбери где была соврешена покупка</p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 w-full">
          <Link
            className="flex flex-col flex-grow justify-center items-center bg-gradient-to-r from-[#b50fa0] to-[#55117a] shadow-lg rounded-xl p-8 my-4 min-w-[320px]"
            href="/get_discount/wb"
          >
            <p className="font-bold text-2xl text-white">WILDBERRIES</p>
          </Link>
          <Link
            className="flex flex-col flex-grow justify-center items-center bg-primary shadow-lg rounded-xl p-8 my-4 min-w-[320px]"
            href="/get_discount/vk"
          >
            <p className="font-bold text-2xl text-white ">ДАННЫЙ САЙТ</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
