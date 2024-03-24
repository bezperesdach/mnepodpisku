"use client";

import LeaveVkReview from "@/components/LeaveVkReview/LeaveVkReview";
import { Button } from "@/components/ui/button";
import { activationTypes } from "@/utils/activationUtils";

import Link from "next/link";
import React from "react";

type Props = {
  code: string;
};

function PsPlusClient({ code }: Props) {
  return (
    <div className="flex flex-col justify-start items-center w-full">
      <LeaveVkReview />

      <div className="w-full flex gap-4 max-w-screen-lg mt-4 mb-6 mx-2 p-6 rounded-3xl bg-[#0c1430]">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-3xl font-semibold tracking-tight">Благодарим за покупку подписки Ps Plus!</h1>

          <p className=" text-muted-foreground">
            Мы успешно проверили вашу оплату! Нажмите на кнопку ниже и получите Ps Plus на свой аккаунт
          </p>
          <Button asChild>
            <Link className="mt-4" href={`/activate/digi?uniquecode=${code}&name=${activationTypes.ps_plus}`}>
              Получить подписку
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PsPlusClient;
