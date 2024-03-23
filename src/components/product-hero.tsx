import { ReactElement } from "react";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

type Props = {
  icon: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  tags: { icon: ReactElement; text: string }[];
};

export function ProductHero({ icon, title, description, tags }: Props) {
  return (
    <div className="w-full flex justify-center items-center mt-6">
      <div className="w-full flex gap-4 max-w-screen-lg mx-2 p-6 rounded-3xl bg-[#0c1430]">
        <div className="h-[120px] min-w-[120px] relative rounded-3xl overflow-hidden hidden sm:block">
          <Image className="hover:scale-125 transition-all z-10" src={icon.src} alt={icon.alt} style={{ objectFit: "cover" }} fill />
          <Skeleton className="absolute w-full h-full rounded-3xl" />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-2">
            <div className="flex flex-col justify-center sm:hidden ">
              <div className="h-[64px] min-w-[64px] relative rounded-2xl overflow-hidden ">
                <Image
                  className="hover:scale-125 transition-all z-10"
                  src={icon.src}
                  alt={icon.alt}
                  style={{ objectFit: "cover" }}
                  fill
                />
                <Skeleton className="absolute w-full h-full rounded-3xl" />
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">{title}</h1>
          </div>

          <div className="relative flex gap-2 overflow-x-auto no-scrollbar">
            {tags.map((tag, i) => (
              <div key={i} className="flex flex-nowrap gap-1 items-center bg-[#1b2a63] font-medium px-2 py-1 w-fit rounded-lg">
                {tag.icon}
                <p className="whitespace-nowrap">{tag.text}</p>
              </div>
            ))}

            <div className="sticky right-0 flex items-center py-0 px-3 bg-gradient-to-r from-transparent to-[#0c1430]" />
          </div>

          <p className=" text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}
