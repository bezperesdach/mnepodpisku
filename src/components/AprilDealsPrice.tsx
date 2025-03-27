import { SyncIcon } from "@primer/octicons-react";
import Image from "next/image";
import React from "react";

type Props = {
  loading: boolean;
  calculatedAmount?: number;
  value?: number;
};

export const AprilDealsPrice = ({ loading, calculatedAmount, value }: Props) => {
  return (
    <div className="relative">
      <div className="flex flex-col py-1 px-6 sm:px-10 bg-black april-discount-banner-cutout-price">
        <div className="flex justify-between items-center gap-2">
          <p className="flex-shrink-0 font-semibold text-white">Заплатите</p>
          <div className="divider w-full my-[14px] before:bg-transparent after:bg-transparent" />
          <div className="flex gap-1 items-center text-xl text-white">
            {loading && <SyncIcon className="animate-spin" />}
            {!loading && value && (
              <>
                {calculatedAmount && (
                  <span className="relative text-lg mr-2 font-medium after:w-[110%] text-[#c6f76a] after:-rotate-[15deg] after:absolute after:-left-[5%] after:top-1/2 after:h-[0.4em] after:bg-[#d9ccb9]/75">
                    {calculatedAmount}₽
                  </span>
                )}
                {value && <span className="font-semibold">{value}₽</span>}
              </>
            )}
          </div>
        </div>
      </div>
      <Image
        src="/tape1.png"
        width={100}
        height={100}
        alt="Tape 1"
        className="w-10 sm:w-12 h-auto absolute -left-1 top-1 sm:left-1 sm:top-0 -rotate-[40deg]"
      />
      <Image
        src="/tape2.png"
        width={100}
        height={100}
        alt="Tape 2"
        className="w-10 sm:w-12 h-auto absolute -right-2 bottom-1 sm:-right-2 -rotate-[35deg]"
      />
    </div>
  );
};
