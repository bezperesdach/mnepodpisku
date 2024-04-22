import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductHero } from "@/components/product-hero";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import { Metadata } from "next";
// import FormComponent from "./FormComponent";

export const metadata: Metadata = {
  title: "Код активации",
  description: "Страница кода активации",
  openGraph: {
    title: "Код активации",
    description: "Страница кода активации",
    images: ["/og_images_catalogue/rbx_code.png"],
  },
};

function Page({ params }: { params: { slug: string } }) {
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
      {/* <FormComponent /> */}

      <div className="w-full flex justify-center items-center mt-6">
        <div className="w-full flex flex-col gap-2 max-w-screen-lg mx-2 p-6 rounded-3xl bg-[#0c1430]">
          <p className="text-2xl md:text-3xl font-semibold tracking-tight">Ваш подарочный код Roblox</p>
          <p className="tracking-tight text-muted-foreground mb-4">Используйте данный код для получения робуксов на свой аккаунт</p>

          <p className="bg-primary rounded-md font-bold text-2xl px-2 py-4">{params.slug}</p>
          <p className="tracking-tight text-xl pt-2">Используйте данный код не позднее 1 недели с момента активации кода из посылки</p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-6">
        <div className="w-full flex flex-col gap-2 max-w-screen-lg mx-2 p-6 rounded-3xl bg-[#0c1430]">
          <p className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Как активировать данный подарочный код?</p>
          <ol>
            <li className="flex items-center gap-2 before:px-2 before:bg-[#6d28d9] before:rounded-sm before:flex before:justify-center before:content-['1'] before:text-lg before:font-bold mb-2">
              Перейдите на сайт{" "}
              <a className="text-[#8244e5] hover:underline" href="https://roblox.com/redeem" target="_blank" rel="noopener noreferrer">
                roblox.com/redeem
              </a>{" "}
              с помощью вашего браузера
            </li>

            <li className="flex items-center gap-2 before:px-2 before:bg-[#6d28d9] before:rounded-sm before:flex before:justify-center before:content-['2'] before:text-lg before:font-bold mb-2">
              Войдите или создайте аккаунт
            </li>
            <li className="flex items-center gap-2 before:px-2 before:bg-[#6d28d9] before:rounded-sm before:flex before:justify-center before:content-['3'] before:text-lg before:font-bold mb-2">
              Скопируйте ваш подарочный код выше и введите его на сайте
            </li>
            <li className="flex items-center gap-2 before:px-2 before:bg-[#6d28d9] before:rounded-sm before:flex before:justify-center before:content-['4'] before:text-lg before:font-bold mb-2">
              Готово! Робуксы у вас на счету
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}

export default Page;
