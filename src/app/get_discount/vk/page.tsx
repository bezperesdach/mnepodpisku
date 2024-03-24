import { Metadata } from "next";
import GetDiscountClient from "./ClientComponents";

export const metadata: Metadata = {
  title: "Получи скидку на следующую покупку!",
  description: "Получи скидку на следующую покупку!",
  openGraph: {
    title: "Получи скидку на следующую покупку!",
    description: "Получи скидку на следующую покупку!",
    images: ["/og_images_generated/get_discount/vk/og_image.png"],
    url: "/get_discount/vk",
  },
  alternates: {
    canonical: "/get_discount/vk",
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
