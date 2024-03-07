"use client";

import LeaveVkReview from "@/components/LeaveVkReview/LeaveVkReview";
import { activationTypes } from "@/utils/activationUtils";

import Link from "next/link";
import React from "react";

type Props = {
  code: string;
};

function PsnBalanceClient({ code }: Props) {
  return (
    <div className="flex flex-col justify-start items-center">
      <LeaveVkReview />
      <h1 className="text-4xl font-bold mt-6 lg:mt-4  text-center">Благодарим за покупку пополнения!</h1>
      <p className="text-lg max-w-2xl text-center mt-2">
        Мы успешно проверили вашу оплату! Нажмите на кнопку ниже и получите лиры к себе на аккаунт :)
      </p>

      <Link
        className="btn btn-secondary text-white mt-2"
        href={`/activate/digi?uniquecode=${code}&name=${activationTypes.psn_balance}`}
      >
        Получить лиры
      </Link>

      {/* <Link className="btn btn-secondary text-white mt-10 mb-12" href="/">
        На главную
      </Link> */}
    </div>
  );
}

export default PsnBalanceClient;
