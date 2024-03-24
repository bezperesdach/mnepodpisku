"use client";

import { AppContext } from "@/components/AppContextWrapper/AppContextWrapper";
import { getPsnAccountPrice } from "@/serverActions/calculatePriceActions";
import { getPsnAccountPaymentLink } from "@/serverActions/createPaymentUrls";
import { cn } from "@/lib/utils";
import { ym } from "@/utils/ym";
import { useContext, useEffect, useState } from "react";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { Button } from "@/components/ui/button";
import { SyncIcon } from "@primer/octicons-react";

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
            После оплаты на указанную при оплате почту будет выслана инструкция по активации
          </p>

          <div className="flex flex-col gap-2 w-full justify-between mt-6">
            <div className="flex justify-between w-full pb-1 border-b-[1px]">
              <p className="text-lg text-muted-foreground">Заплатите</p>
              <div className="flex gap-1 items-center text-lg text-muted-foreground">
                {loading && <SyncIcon className="animate-spin" />}
                {!loading && value && (
                  <>
                    {calculatedAmount && (
                      <p className="relative mr-2 after:w-[110%] after:-rotate-[15deg] after:absolute after:-left-[5%] after:top-1/2 after:h-[0.15em] after:bg-[#e85426]/50">
                        {calculatedAmount}₽
                      </p>
                    )}
                    {value && <p>{value}₽</p>}
                  </>
                )}
              </div>
            </div>
          </div>

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
}
