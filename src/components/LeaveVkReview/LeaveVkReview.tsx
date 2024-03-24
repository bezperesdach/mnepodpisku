"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

export default function LeaveVkReview() {
  return (
    <div className="w-full flex justify-center items-center mt-4">
      <div className="w-full max-w-screen-lg px-2 ">
        <div className="w-full flex flex-col gap-2"></div>
        <div className="relative h-48 md:h-56">
          <div className="flex flex-col justify-between rounded-3xl border bg-card text-card-foreground shadow p-4 md:p-8 h-full">
            <div className="flex flex-col gap-2 z-10">
              <p className="text-xl font-bold tracking-tight text-[#d72eb5] bg-white px-4 py-2 mr-auto md:text-4xl">
                Получи скидку на следующий заказ
              </p>
            </div>
            <Button
              className="max-w-sm h-10 z-10 bg-[#d72eb5] hover:bg-[#c03ba5] font-bold text-lg border-r-2 border-b-2 border-[#deb004]"
              asChild
            >
              <Link href="/get_discount/vk">Получить</Link>
            </Button>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-0 w-full h-full">
              <Image
                className="rounded-3xl z-10"
                src="/images/PlaystationTopup.jpg"
                alt="Получи скидку баннер"
                style={{ objectFit: "cover" }}
                fill={true}
              />
              <Skeleton className="absolute w-full h-full rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
