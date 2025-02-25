"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const options = [100, 200, 300, 500, 600, 1200, 1800, 2400];

type Props = {
  className?: string;
  // eslint-disable-next-line no-unused-vars
  setValue: (amount: number) => void;
};

const AmountOptions = ({ className, setValue }: Props) => {
  return (
    <div
      className={cn(
        "w-full h-fit grid items-start grid-cols-2 grid-rows-2 min-[360px]:grid-cols-3 min-[400px]:grid-cols-4 lg:grid-cols-8 sm:grid-rows-1 gap-2",
        className
      )}
    >
      {options.map((option, i) => (
        <Button
          type="button"
          className="bg-[#1b2a63] hover:bg-primary basis-0 text-base max-h-[36px] sm:text-lg hover:scale-[105%] duration-300"
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
