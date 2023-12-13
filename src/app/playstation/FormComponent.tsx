"use client";

import PaymentOptions from "@/components/PaymentOptions/PaymentOptions";

type Props = {
  amount?: number;
};

export default function FormComponent({ amount }: Props) {
  return (
    <div className="flex flex-col md:flex-row mt-4 md:mt-14 gap-4 sm:gap-8 md:gap-16">
      <div className="flex flex-col gap-1 lg:gap-6 w-full md:w-1/2">
        <p>{amount}</p>
      </div>
      <div className="flex flex-col w-full md:w-1/2">
        <PaymentOptions />
      </div>
    </div>
  );
}
