"use client";

import cn from "@/utils/cn";
import { DashIcon, PlusIcon } from "@primer/octicons-react";
import { useState } from "react";

type Props = {
  // eslint-disable-next-line no-unused-vars
  changeValue: (value: number) => void;
};

const psPlusVariants = [
  [
    { price: 310, duration: "1 месяц" },
    { price: 830, duration: "3 месяца" },
    { price: 2740, duration: "12 месяцев" },
  ],
  [
    { price: 260, duration: "1 месяц" },
    { price: 720, duration: "3 месяца" },
    { price: 2340, duration: "12 месяцев" },
  ],
  [
    { price: 180, duration: "1 месяц" },
    { price: 440, duration: "3 месяца" },
    { price: 1400, duration: "12 месяцев" },
  ],
  [
    { price: 180, duration: "1 месяц" },
    { price: 440, duration: "3 месяца" },
    { price: 1400, duration: "12 месяцев" },
  ],
  [
    { price: 40, duration: "1 месяц" },
    { price: 250, duration: "12 месяцев" },
  ],
];

const SubscriptionsSelector = ({ changeValue }: Props) => {
  const [selectedValue, setSelectedValue] = useState(0);

  const setMinAmount = (amount: number) => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    if (amount < 100) {
      return changeValue(100);
    }
    return changeValue(amount);
  };

  return (
    <div>
      <h2 className="text-3xl lg:text-4xl font-bold mt-10">КУПИТЬ PS PLUS</h2>
      <div className="flex flex-col mt-4">
        <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row">
          <div
            className={cn("px-4 lg:px-2 py-4 flex-1 rounded-t-lg transition-colors", {
              "bg-base-200": selectedValue === 0,
            })}
          >
            <button
              className="flex w-full h-full bg-[#0d0f12] px-4 lg:px-2 py-4 gap-2 justify-between rounded-lg"
              type="button"
              onClick={() => setSelectedValue(0)}
            >
              <div className="flex flex-col items-start h-full justify-between rounded-lg">
                <p className="font-black text-lg text-[#fcc000]">DELUXE</p>
                <p className="text-lg lg:text-sm font-semibold text-[#ffffff] text-start">Больше всего возможностей</p>
              </div>

              <label className={cn("swap text-6xl swap-rotate inline-gride lg:hidden h-4", { "swap-active": selectedValue === 0 })}>
                <div className="swap-on">
                  <DashIcon className="text-[#fcc000]" />
                </div>
                <div className="swap-off">
                  <PlusIcon className="text-[#fcc000]" />
                </div>
              </label>
            </button>

            {selectedValue === 0 && (
              <div className="flex flex-col lg:hidden gap-2 bg-base-200 w-full px-2 py-4 rounded-b-lg lg:flex-row">
                {psPlusVariants[selectedValue].map((item, i) => (
                  <div key={item.price} className="flex flex-col flex-1 bg-base-100 px-2 py-4 rounded-lg">
                    <div className="flex justify-between">
                      <p>{psPlusVariants[0][i].duration}</p>
                      <p className="font-bold text-xl">{item.price} TL</p>
                    </div>
                    <button className="btn mt-4 font-semibold" onClick={() => setMinAmount(item.price)}>
                      УЗНАТЬ ЦЕНУ В РУБЛЯХ
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className={cn("px-4 lg:px-2 py-4 flex-1 rounded-t-lg transition-colors", {
              "bg-base-200": selectedValue === 1,
            })}
          >
            <button
              className="flex w-full h-full bg-[#fcc000] px-4 lg:px-2 py-4 gap-2 justify-between rounded-lg"
              type="button"
              onClick={() => setSelectedValue(1)}
            >
              <div className="flex flex-col items-start h-full bg-[#fcc000] justify-between rounded-lg">
                <p className="font-black text-lg text-[#0d0f12]">EXTRA</p>
                <p className="text-lg lg:text-sm font-semibold text-[#0d0f12] text-start">Самая выгодная</p>
              </div>

              <label className={cn("swap text-6xl swap-rotate inline-gride lg:hidden h-4", { "swap-active": selectedValue === 1 })}>
                <div className="swap-on">
                  <DashIcon />
                </div>
                <div className="swap-off">
                  <PlusIcon />
                </div>
              </label>
            </button>
            {selectedValue === 1 && (
              <div className="flex flex-col lg:hidden gap-2 bg-base-200 w-full px-2 py-4 rounded-b-lg lg:flex-row">
                {psPlusVariants[selectedValue].map((item, i) => (
                  <div key={item.price} className="flex flex-col flex-1 bg-base-100 px-2 py-4 rounded-lg">
                    <div className="flex justify-between">
                      <p>{psPlusVariants[1][i].duration}</p>
                      <p className="font-bold text-xl">{item.price} TL</p>
                    </div>
                    <button className="btn mt-4 font-semibold" onClick={() => setMinAmount(item.price)}>
                      УЗНАТЬ ЦЕНУ В РУБЛЯХ
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className={cn("px-4 lg:px-2 py-4 flex-1 rounded-t-lg transition-colors", {
              "bg-base-200": selectedValue === 2,
            })}
          >
            <button
              className="flex w-full h-full bg-base-300 px-4 lg:px-2 py-4 gap-2 justify-between rounded-lg"
              type="button"
              onClick={() => setSelectedValue(2)}
            >
              <div className="flex flex-col items-start h-full justify-between rounded-lg">
                <p className="font-black text-lg text-base-content">ESSENTIAL</p>
                <p className="text-lg lg:text-sm font-semibold text-base-content">Самая дешевая</p>
              </div>

              <label className={cn("swap text-6xl swap-rotate inline-grid lg:hidden h-4", { "swap-active": selectedValue === 2 })}>
                <div className="swap-on">
                  <DashIcon />
                </div>
                <div className="swap-off">
                  <PlusIcon />
                </div>
              </label>
            </button>

            {selectedValue === 2 && (
              <div className="flex flex-col lg:hidden gap-2 bg-base-200 w-full px-2 py-4 rounded-b-lg lg:flex-row">
                {psPlusVariants[selectedValue].map((item, i) => (
                  <div key={item.price} className="flex flex-col flex-1 bg-base-100 px-2 py-4 rounded-lg">
                    <div className="flex justify-between">
                      <p>{psPlusVariants[2][i].duration}</p>
                      <p className="font-bold text-xl">{item.price} TL</p>
                    </div>
                    <button className="btn mt-4 font-semibold" onClick={() => setMinAmount(item.price)}>
                      УЗНАТЬ ЦЕНУ В РУБЛЯХ
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className={cn("px-4 lg:px-2 py-4 flex-1 rounded-t-lg transition-colors", {
              "bg-base-200": selectedValue === 4,
            })}
          >
            <button
              className="flex w-full h-full bg-[#0d1042] px-4 lg:px-2 py-4 gap-2 justify-between rounded-lg"
              type="button"
              onClick={() => setSelectedValue(4)}
            >
              <div className="flex flex-col items-start h-full justify-between rounded-lg">
                <p className="font-black text-lg text-[#dd4040]">EA PLAY</p>
                <p className="text-lg lg:text-sm font-semibold text-white">Разблокируй мир EA</p>
              </div>

              <label className={cn("swap text-6xl swap-rotate inline-gride lg:hidden h-4", { "swap-active": selectedValue === 4 })}>
                <div className="swap-on">
                  <DashIcon className="text-white" />
                </div>
                <div className="swap-off">
                  <PlusIcon className="text-white" />
                </div>
              </label>
            </button>

            {selectedValue === 4 && (
              <div className="flex flex-col lg:hidden gap-2 bg-base-200 w-full px-2 py-4 rounded-b-lg lg:flex-row">
                {psPlusVariants[selectedValue].map((item, i) => (
                  <div key={item.price} className="flex flex-col flex-1 bg-base-100 px-2 py-4 rounded-lg">
                    <div className="flex justify-between">
                      <p>{psPlusVariants[4][i].duration}</p>
                      <p className="font-bold text-xl">{item.price} TL</p>
                    </div>
                    <button className="btn mt-4 font-semibold" onClick={() => setMinAmount(item.price)}>
                      УЗНАТЬ ЦЕНУ В РУБЛЯХ
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden gap-2 bg-base-200 w-full px-2 py-4 rounded-b-lg lg:flex">
          {psPlusVariants[selectedValue].map((item, i) => (
            <div key={item.price} className="flex flex-col flex-1 bg-base-100 px-2 py-4 rounded-lg">
              <div className="flex justify-between">
                <p>{psPlusVariants[selectedValue][i].duration}</p>
                <p className="font-bold text-xl">{item.price} TL</p>
              </div>
              <button className="btn mt-4 text-lg" onClick={() => setMinAmount(item.price)}>
                УЗНАТЬ ЦЕНУ В РУБЛЯХ
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsSelector;
