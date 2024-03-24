"use client";

import LeaveVkReview from "@/components/LeaveVkReview/LeaveVkReview";
import { Button } from "@/components/ui/button";
import { activationTypes } from "@/utils/activationUtils";

import Link from "next/link";
import React from "react";

type Props = {
  code: string;
};

function PsnBalanceClient({ code }: Props) {
  return (
    <div className="flex flex-col justify-start items-center w-full">
      <LeaveVkReview />

      <div className="w-full flex gap-4 max-w-screen-lg mt-4 mb-6 mx-2 p-6 rounded-3xl bg-[#0c1430]">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-3xl font-semibold tracking-tight">Благодарим за покупку пополнения!</h1>
          <p className="text-muted-foreground">
            Мы успешно проверили вашу оплату! Нажмите на кнопку ниже и получите лиры к себе на аккаунт :)
          </p>
          <Button asChild>
            <Link
              className="btn btn-secondary text-white mt-2"
              href={`/activate/digi?uniquecode=${code}&name=${activationTypes.psn_balance}`}
            >
              Получить лиры на свой аккаунт
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PsnBalanceClient;
