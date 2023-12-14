import cn from "@/utils/cn";
import React from "react";

type Props = {
  value?: number;
};

const discounts = [
  { from: 300, discount: "1" },
  { from: 600, discount: "2" },
  { from: 1200, discount: "3" },
  { from: 1500, discount: "4" },
  { from: 2400, discount: "5" },
];

const DiscountMeter = ({ value }: Props) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex border-base-content/20">
        {discounts.map((item, i) =>
          value ? (
            <div
              className={cn("flex-1 flex justify-between py-1 px-2 border-base-content/20", {
                "border-y-4": i !== discounts.length - 1 && i !== 0,
                "border-l-4 border-t-4 border-b-4 rounded-l-lg": i === 0,
                "border-r-4 border-t-4 border-b-4 rounded-r-lg": i === discounts.length - 1,
              })}
              key={item.from + i}
              style={{
                borderColor: value >= item.from ? `rgba(36, 80, 170,${((255 / discounts.length) * (i + 2)) / 255})` : "inherit",
                backgroundColor: value >= item.from ? "rgba(36, 80, 170, 0.09)" : "inherit",
              }}
            >
              <p className="text-sm font-bold">от {item.from}₺</p> <p className="text-sm font-bold">{item.discount}%</p>
            </div>
          ) : (
            <div
              className={cn("flex-1 flex justify-between py-1 px-2 border-base-content/20", {
                "border-y-4 ": i !== discounts.length - 1 && i !== 0,
                "border-l-4 border-t-4 border-b-4 rounded-l-lg": i === 0,
                "border-r-4 border-t-4 border-b-4 rounded-r-lg": i === discounts.length - 1,
              })}
              key={item.from + i}
            >
              <p className="text-sm font-bold">от {item.from}₺</p> <p className="text-sm font-bold">{item.discount}%</p>
            </div>
          )
        )}
      </div>
      <p className="text-center text-sm">Динамическая скидка при заказе</p>
    </div>
  );
};

export default DiscountMeter;
