"use client";

import { activationTypes } from "@/utils/activationUtils";

import { ym } from "@/utils/ym";
import Link from "next/link";
import React from "react";

type Props = {
  code: string;
};

function PsPlusClient({ code }: Props) {
  return (
    <div className="flex flex-col justify-start items-center">
      <a
        className="flex flex-col w-full justify-center items-center mt-6 lg:mt-10 shadow-lg rounded-xl p-8 bg-secondary mb-4 "
        href="https://vk.com/topic-221413404_49184185"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          ym("reachGoal", "leaveVkReview");
        }}
      >
        <p className="text-2xl font-bold text-white text-center">Оставь отзыв в ВК</p>
        <p className="text-xl mt-2 text-white text-center">Получи скидку на следующую покупку!</p>
        <div className="btn mt-4">ОСТАВИТЬ ОТЗЫВ</div>
      </a>
      <h1 className="text-4xl font-bold mt-6 lg:mt-4  text-center">Благодарим за покупку подписки Ps Plus!</h1>
      <p className="text-lg max-w-2xl text-center mt-2">
        Мы успешно проверили вашу оплату! Выполните инструкцию ниже и получите Ps Plus на свой аккаунт :)
      </p>

      <Link className="btn btn-secondary text-white mt-2" href={`/activate/digi?uniquecode=${code}&name=${activationTypes.ps_plus}`}>
        Открыть инструкцию
      </Link>

      <Link className="btn btn-secondary text-white mt-10 mb-12" href="/">
        На главную
      </Link>
    </div>
  );
}

export default PsPlusClient;
