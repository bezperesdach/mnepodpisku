import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductHero } from "@/components/product-hero";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import { Metadata } from "next";
import FormComponent from "./FormComponent";

export const metadata: Metadata = {
  title: "Получение кода",
  description: "Страница получения кода",
  openGraph: {
    title: "Получение кода",
    description: "Страница получения кода",
    images: ["/og_images_catalogue/rbx_code.png"],
    url: "/rbx",
  },
  alternates: {
    canonical: "/rbx",
  },
};

function Page() {
  return (
    <main className="min-h-[calc(100vh-334px)] flex flex-col justify-start items-center flex-1">
      <Breadcrumbs>
        <BreadcrumbItem>Roblox активация</BreadcrumbItem>
      </Breadcrumbs>
      <ProductHero
        icon={{ src: "/catalogue_icons/rbx_code.jpg", alt: "Roblox активация кода баннер" }}
        title="Активация кода Roblox"
        description="На данной странице вы сможете получить подарочный код для добавления робуксов на свой аккаунт"
        tags={[]}
      />
      <FormComponent />
    </main>
  );
}

export default Page;
