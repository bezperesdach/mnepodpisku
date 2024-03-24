import { Metadata } from "next";
import GetDiscountClient from "./ClientComponents";

export const metadata: Metadata = {
  title: "Бесплатные лиры за отзыв на следующую покупку!",
  description: "Получи бесплатные лиры за оставленный отзыв в счет следующей покупки!",
  openGraph: {
    title: "Бесплатные лиры за отзыв на следующую покупку!",
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
    <div className="flex flex-col w-full max-w-screen-lg mx-auto mt-4 px-2 sm:px-4 mb-8 items-start">
      <GetDiscountClient />
    </div>
  );
}

export default Blog;
