/* eslint-disable react/no-unescaped-entities */
"use client";

import cn from "@/utils/cn";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContextWrapper/AppContextWrapper";

const RedirectingToPayment = () => {
  const { paymentLink } = useContext(AppContext);

  useEffect(() => {
    if (paymentLink) {
      setTimeout(() => (window.location.href = paymentLink), 200);
    }
  }, [paymentLink]);

  return (
    <div
      className={cn("relative z-10 pointer-events-none", {
        "pointer-events-auto": paymentLink,
      })}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={cn("fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-300 opacity-0", {
          "opacity-100": paymentLink,
        })}
      ></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className={cn(
              "relative transform transition-all duration-300 overflow-hidden rounded-lg bg-base-100 text-center shadow-xl sm:my-8 sm:w-full sm:max-w-lg opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              {
                "opacity-100 translate-y-0 sm:scale-100": paymentLink,
              }
            )}
          >
            <div className="flex flex-col items-center px-4 py-8 mx-1 sm:mx-4">
              <p className="text-lg sm:text-2xl lg:text-2xl font-medium text-center">Перенаправляем вас на страницу оплаты</p>
              <p className="sm:text-lg lg:text-xlfont-medium mt-10 text-center">
                Нажмите "Далее", если не происходит переход на страницу оплаты{" "}
              </p>

              <a className="btn btn-secondary btn-wide mt-10 text-white" href={paymentLink}>
                Далее
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectingToPayment;
