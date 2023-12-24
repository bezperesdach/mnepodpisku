"use client";

import LeaveVkReview from "@/components/LeaveVkReview/LeaveVkReview";
import { activationTypes } from "@/utils/activationUtils";

import Link from "next/link";
import React from "react";

type Props = {
  code: string;
};

function PsPlusClient({ code }: Props) {
  return (
    <div className="flex flex-col justify-start items-center">
      <LeaveVkReview />
      <h1 className="text-4xl font-bold mt-6 lg:mt-4  text-center">Благодарим за покупку подписки Ps Plus!</h1>
      <p className="text-lg max-w-2xl text-center mt-2">
        Мы успешно проверили вашу оплату! Выполните инструкцию ниже и получите Ps Plus на свой аккаунт :)
      </p>

      <Link className="btn btn-secondary text-white mt-2" href={`/activate/digi?uniquecode=${code}&name=${activationTypes.ps_plus}`}>
        Получить подписку
      </Link>

      <Link className="btn btn-secondary text-white mt-10 mb-12" href="/">
        На главную
      </Link>
    </div>
  );
}

export default PsPlusClient;
