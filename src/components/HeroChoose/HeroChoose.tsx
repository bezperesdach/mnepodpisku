"use client";

import React, { useContext } from "react";
import { LinkExternalIcon, TasklistIcon, CodeOfConductIcon } from "@primer/octicons-react";
import { AppContext } from "../AppContextWrapper/AppContextWrapper";

type Props = {
  firstText?: string;
  secondText?: string;
  thirdText?: string;
};

export default function HeroChoose({ firstText, secondText, thirdText }: Props) {
  const { dispatch } = useContext(AppContext);

  return (
    <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-2 lg:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 justify-center lg:justify-start gap-6 mt-6 px-2">
      <div className="flex w-full justify-start gap-2 items-center bg-base-200 rounded-md px-6 py-4 group">
        <LinkExternalIcon className="flex-shrink-0 w-[64px] h-auto text-secondary transition-transform duration-500 group-hover:scale-[105%]" />

        <p className="text-center">
          {firstText ?? (
            <>
              Найди нужный сервис из{" "}
              <button className="underline text-secondary" onClick={() => dispatch({ type: "toggle_catalogue" })}>
                каталога
              </button>
            </>
          )}
        </p>
      </div>

      <div className="flex w-full justify-start gap-2 items-center bg-base-200 rounded-md px-6 py-4 group">
        <TasklistIcon className="flex-shrink-0 w-[64px] h-auto text-secondary transition-transform duration-500 group-hover:scale-[105%]" />

        <p className="text-center">{secondText ?? <>Выбери желаемый тип подписки и оплати</>}</p>
      </div>

      <div className="flex w-full justify-start gap-2 items-center bg-base-200 rounded-md px-6 py-4 group md:col-span-2 lg:col-span-1">
        <CodeOfConductIcon className="flex-shrink-0 w-[64px] h-auto text-secondary transition-transform duration-500 group-hover:scale-[105%]" />

        <p className="text-center">{thirdText ?? <>Получи подписку в течение 10-30 минут после оплаты</>}</p>
      </div>
    </div>
  );
}
