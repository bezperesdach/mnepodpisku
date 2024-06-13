import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MainNavbar } from "@/components/ui/main-navbar";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[100svh]">
      <MainNavbar />
      <main className="min-h-[calc(100vh-334px)] flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-4 mt-10">
          <div className="aspect-square w-[250px] relative rounded-lg overflow-hidden">
            <Image className="object-contain" src="/images/not_found.png" quality={98} alt="Страница не найдена" fill />
          </div>
          <div className="flex flex-col gap-2 justify-center rounded-lg bg-[#0c1430] p-4">
            <h1 className="text-2xl font-semibold">Страница не найдена</h1>
            <Button asChild>
              <Link className="mt-4" href="/">
                На главную
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
