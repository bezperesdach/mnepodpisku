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
    <main className="h-[calc(100%-260px)] flex flex-col justify-start items-start w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8">
      <h1 className="text-3xl font-semibold tracking-tight">Получи бесплатные лиры за оставленный отзыв!</h1>

      <div className=" bg-base-200 mt-6 lg:mt-10 w-full py-4 px-6 rounded-md">
        <p className="text-2xl lg:text-3xl w-full text-center">Где была совершена покупка?</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 w-full">
          <Link
            className="flex flex-col flex-grow justify-center items-center bg-gradient-to-r from-[#b50fa0] to-[#55117a] shadow-lg rounded-xl p-8 my-4 min-w-[320px]"
            href="/get_discount/wb"
          >
            <p className="font-bold text-2xl text-white">WILDBERRIES</p>
          </Link>
          <Link
            className="flex flex-col flex-grow justify-center items-center bg-secondary shadow-lg rounded-xl p-8 my-4 min-w-[320px]"
            href="/get_discount/vk"
          >
            <p className="font-bold text-2xl text-white">ДАННЫЙ САЙТ</p>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Blog;
