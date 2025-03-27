import React, { ReactNode } from "react";
import Image from "next/image";

export const AprilDeals: React.FC = () => {
  return (
    <div
      className="max-h-16 relative w-full h-full bg-repeat bg-center bg-contain overflow-hidden"
      style={{ backgroundImage: "url(/april_sales_background.avif)", backgroundColor: "#000000" }}
    >
      <div className="relative justify-between w-full max-w-screen-lg h-full mx-auto hidden sm:flex">
        <BannerBlock text={<p className="sm:text-lg font-bold text-white">АПРЕЛЬСКИЕ СКИДКИ ДО 30%</p>} tapeRotation={-12} />
        <BannerBlock text={<p className="sm:text-lg font-bold text-white">ТОЛЬКО 01.04-15.04</p>} tapeRotation={-8} />
      </div>
      <div className="relative flex justify-center sm:hidden">
        <BannerBlock
          text={
            <p className="sm:text-lg font-bold text-white text-center">
              {"АПРЕЛЬСКИЕ СКИДКИ ДО 30% "}
              <span className="inline-block">ТОЛЬКО 01.04-15.04</span>
            </p>
          }
          tapeRotation={-12}
        />
      </div>
    </div>
  );
};

interface BannerBlockProps {
  text: ReactNode;
  tapeRotation: number;
}

const BannerBlock: React.FC<BannerBlockProps> = ({ text, tapeRotation }) => {
  return (
    <div className="relative w-fit sm:py-1 my-1 max-h-16">
      <div className="h-full bg-black/85 px-4 sm:px-8 april-discount-banner-cutout">{text}</div>
      <Image
        src="/tape1.png"
        width={100}
        height={100}
        alt="Tape 1"
        className="w-8 sm:w-10 h-auto absolute -left-1 -top-1 sm:-left-2 sm:top-0"
        style={{ transform: `rotate(${tapeRotation}deg)` }}
      />
      <Image
        src="/tape2.png"
        width={100}
        height={100}
        alt="Tape 2"
        className="w-8 sm:w-10 h-auto absolute -right-2 -bottom-1 sm:-right-2 sm:bottom-0"
        style={{ transform: `rotate(${tapeRotation - 2}deg)` }}
      />
    </div>
  );
};
