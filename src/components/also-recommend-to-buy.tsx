"use client";

import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { Service } from "@/app/(main)/all-services";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  title?: string;
  className?: string;
  services: Service[];
};

export function AlsoRecommendToBuy({ title, className, services }: Props) {
  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="w-full flex flex-col max-w-screen-lg px-2">
        <div className="w-full flex justify-between">
          <h2 className="text-3xl font-semibold tracking-tight">{title ?? "Также рекомендуем"}</h2>
        </div>
        <div className={cn("grid md:flex gap-x-4 gap-y-6 md:gap-4 w-full grid-cols-2 md:grid-cols-3 mt-6", className)}>
          {services.map((item) => (
            <div key={item.value} className="flex-1 flex-shrink-0 rounded-md ">
              {item.name !== "" ? (
                <Link href={item.value}>
                  <div className="min-h-[120px] xs:min-h-[160px] sm:min-h-[170px] lg:min-h-[180px] relative rounded-3xl overflow-hidden">
                    <Image
                      className="hover:scale-125 transit`ion-all z-10"
                      src={item.imageSrc}
                      alt={item.alt}
                      style={{ objectFit: "cover" }}
                      fill
                    />
                    <Skeleton className="absolute w-full h-full rounded-3xl" />
                  </div>
                  <p className="mt-4 lg:text-lg text-center font-medium">{item.name}</p>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
