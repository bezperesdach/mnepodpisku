"use client"; // Error components must be Client Components
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MainNavbar } from "@/components/ui/main-navbar";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-[100svh]">
      <MainNavbar />
      <main className="min-h-[calc(100vh-334px)] flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-4 mt-10">
          <div className="aspect-square w-[250px] relative rounded-lg overflow-hidden">
            <Image className="object-contain" src="/images/something_went_wrong.png" quality={98} alt="Страница не найдена" fill />
          </div>
          <div className="flex flex-col gap-2 justify-center rounded-lg bg-[#0c1430] p-4 ">
            <h1 className="text-2xl font-semibold">Что-то пошло не так</h1>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button
                onClick={
                  // Attempt to recover by trying to re-render the segment
                  () => reset()
                }
              >
                Попробовать снова
              </Button>
              <Button asChild>
                <Link href="/">На главную</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
