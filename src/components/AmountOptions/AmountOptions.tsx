"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const options = [200, 300, 500, 600, 1200, 1800, 2400, 4800];

type Props = {
  className?: string;
  // eslint-disable-next-line no-unused-vars
  setValue: (amount: number) => void;
};

const AmountOptions = ({ className, setValue }: Props) => {
  return (
    <div
      className={cn(
        "w-full grid grid-cols-2 grid-rows-2 min-[360px]:grid-cols-3 min-[400px]:grid-cols-4 sm:grid-rows-1 justify-between gap-4 max-w-lg",
        className
      )}
    >
      {options.map((option, i) => (
        <Button
          type="button"
          className="bg-[#1b2a63] hover:bg-[#030712] basis-0 text-base min-h-[24px] max-h-[36px] flex-1 sm:text-lg hover:scale-[105%]"
          key={option}
          onClick={() => setValue(options[i])}
        >
          {option}₺
        </Button>
      ))}
    </div>
  );
};

export default AmountOptions;
