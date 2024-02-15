import { Metadata } from "next";
import GetDiscountClient from "./ClientComponents";

export const metadata: Metadata = {
  title: "Бесплатные лиры за отзыв!",
  description: "Получи бесплатные лиры за оставленный отзыв в счет следующей покупки!",
  openGraph: {
    title: "Бесплатные лиры за отзыв!",
    description: "Получи бесплатные лиры за оставленный отзыв в счет следующей покупки!",
    images: ["/og_images_generated/get_discount/wb/og_image.png"],
    url: "/get_discount/wb",
  },
  alternates: {
    canonical: "/get_discount/wb",
  },
};

function Blog() {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8 items-start">
      <h1 className="text-3xl lg:text-4xl font-bold">Получи бонусные лиры на следующую покупку за отзыв на ВБ!</h1>
      <GetDiscountClient />
    </div>
  );
}

export default Blog;
