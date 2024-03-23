"use client";

import { AppContext } from "@/components/AppContextWrapper/AppContextWrapper";
import PaymentOptions from "@/components/PaymentOptions/PaymentOptions";
import PriceComponent from "@/components/PriceComponent.tsx/PriceComponent";
import { getPsnAccountPrice } from "@/serverActions/calculatePriceActions";
import { getPsnAccountPaymentLink } from "@/serverActions/createPaymentUrls";
import { cn } from "@/lib/utils";
import { ym } from "@/utils/ym";
import { LockIcon, SyncIcon } from "@primer/octicons-react";
import { useContext, useEffect, useState } from "react";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { Button } from "@/components/ui/button";

export default function FormComponent() {
  const { dispatch } = useContext(AppContext);
  const [calculatedAmount, setCalculatedAmount] = useState<number | undefined>();
  const [value, setValue] = useState<number | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPrice = async () => {
      const updatedPrices = await getPsnAccountPrice();
      setCalculatedAmount(updatedPrices.calculated);
      setValue(updatedPrices.sale);
      setLoading(false);
    };

    getPrice();
  }, []);

  const generatePaymentLink = async () => {
    setIsSubmitting(true);

    const res = await getPsnAccountPaymentLink();
    dispatch({ type: "change_payment_link", payload: res.data.paymentUrl });
  };

  return (
    <>
      <div className="w-full flex justify-center items-center mt-6">
        <div className="w-full flex flex-col gap-2 max-w-screen-lg mx-2 p-6 rounded-3xl bg-[#0c1430]">
          <p className="text-2xl md:text-3xl font-semibold tracking-tight">К оплате</p>

          <p className="tracking-tight text-muted-foreground">
            После успешной оплаты вы получите инструкцию по активацию на указанную при оплате почту
          </p>
          <Button
            className={cn("sticky bottom-0 mt-6 text-lg h-12", {
              "bg-accent/50 text-muted-foreground": !value,
              "pointer-events-none": isSubmitting,
            })}
            onClick={generatePaymentLink}
          >
            {!loading && !isSubmitting ? (
              <p>КУПИТЬ {value && <span className="text-[#fee525] text-xl font-bold">{value}₽</span>}</p>
            ) : (
              <SyncIcon className="animate-spin" />
            )}
          </Button>
          <p className=" text-muted-foreground text-sm text-center">
            Нажимая на кнопку «Оплатить», вы соглашаетесь с{" "}
            <a className="text-primary hover:underline" href="/oferta.pdf" target="_blank" rel="noopener noreferrer">
              договором оферты
            </a>
          </p>
        </div>
      </div>

      <RedirectingToPayment
        onRedirect={() => {
          ym("reachGoal", "playstationAccountRequest");
          ym("reachGoal", "formaoplatit");
        }}
      />
    </>
  );

  return (
    <>
      <div className="flex flex-col md:flex-row mt-4 md:mt-14 gap-4 sm:gap-8 md:gap-16">
        <div className="flex flex-col gap-1 lg:gap-6 w-full md:w-1/2">
          <div className="flex flex-col gap-2 mb-2 md:mb-4 lg:mb-0">
            <p className="text-center text-gray-500">
              После оплаты вы сможете указать email, на который будет произведена регистрация аккаунта
            </p>
          </div>

          <div className="w-full flex-col gap-1 items-center hidden mt-4 md:flex lg:mt-0">
            <button
              onClick={generatePaymentLink}
              className={cn("btn btn-secondary w-full text-white items-center", { "btn-disabled": isSubmitting })}
            >
              {isSubmitting ? (
                <span className="loading loading-spinner loading-xl flex-shrink-0" />
              ) : (
                <LockIcon className="text-white text-xl" />
              )}
              Оплатить
            </button>
            <p className="text-center text-gray-500">После нажатия вы будете перенаправлены на страницу оплаты </p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <PaymentOptions />
          <PriceComponent loading={loading} value={calculatedAmount} sale={value} />
          <div className="w-full flex-col gap-1 items-center md:hidden mt-4">
            <button
              onClick={generatePaymentLink}
              className={cn("btn btn-secondary w-full text-white items-center", { "btn-disabled": isSubmitting })}
            >
              {isSubmitting ? (
                <span className="loading loading-spinner loading-xl flex-shrink-0" />
              ) : (
                <LockIcon className="text-white text-xl" />
              )}
              Оплатить
            </button>
            <p className="text-center text-gray-500">После нажатия вы будете перенаправлены на страницу оплаты </p>
          </div>
        </div>
      </div>
    </>
  );
}
