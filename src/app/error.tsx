"use client";

import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MainNavbar } from "@/components/ui/main-navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[100svh]">
      <MainNavbar />
      <main className="min-h-[calc(100vh-334px)] flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2 justify-center rounded-lg bg-[#0c1430] p-4">
          <h1 className="text-4xl font-bold">500</h1>
          <h2 className="text-xl font-semibold">Что-то пошло не так</h2>
          <Button asChild>
            <Link className="mt-4" href="/">
              На главную
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
