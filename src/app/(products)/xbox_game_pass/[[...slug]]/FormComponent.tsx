"use client";

import { AppContext } from "@/components/AppContextWrapper/AppContextWrapper";
import ToggleSelect from "@/components/ToggleSelect/ToggleSelect";
import { getXboxPrice } from "@/serverActions/calculatePriceActions";
import { getXboxPaymentLink } from "@/serverActions/createPaymentUrls";
import { cn } from "@/lib/utils";
import { ym } from "@/utils/ym";
import { SyncIcon } from "@primer/octicons-react";
import { useFormik } from "formik";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";

type Props = {
  subscriptionType?: {
    type: string;
    duration: string;
  };
};

export default function FormComponent({ subscriptionType }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const { dispatch } = useContext(AppContext);
  const [calculatedAmount, setCalculatedAmount] = useState<number | undefined>();
  const [value, setValue] = useState<number | undefined>();

  const [loading, setLoading] = useState(true);

  const formik = useFormik({
    initialValues: { duration: subscriptionType?.duration ?? "1", subscriptionType: subscriptionType?.type ?? "ultimate" },
    onSubmit: async (_) => {
      formik.setSubmitting(true);

      const res = await getXboxPaymentLink();

      dispatch({ type: "change_payment_link", payload: res.data.paymentUrl });
      formik.setSubmitting(false);
    },
    validateOnBlur: true,
  });

  useEffect(() => {
    const updatePrices = async (values: { subscriptionType: string; duration: string }) => {
      if (values.subscriptionType === "ultimate" && values.duration === "1") {
        window.history.replaceState(window.history.state, "", `/xbox_game_pass`);
      } else {
        window.history.replaceState(window.history.state, "", `/xbox_game_pass/${values.subscriptionType}/${values.duration}`);
      }

      const updatedPrices = await getXboxPrice(values);
      setCalculatedAmount(updatedPrices.calculated);
      setValue(updatedPrices.sale);
      setLoading(false);
    };

    setLoading(true);

    const values = formik.values;

    updatePrices(values);
  }, [formik.values.duration, router, pathname, formik.values]);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-full flex justify-center items-center mt-6">
          <div className="w-full flex flex-col gap-2 max-w-screen-lg mx-2 p-6 rounded-3xl bg-[#0c1430]">
            <p className="text-2xl md:text-3xl font-semibold tracking-tight">Выберите тип подписки</p>

            <ToggleSelect
              options={[{ name: "Ultimate", value: "ultimate" }]}
              value={formik.values.subscriptionType}
              onSelect={(value) => {
                formik.setFieldValue("subscriptionType", value);
              }}
            />

            <p className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">Выберите срок подписки</p>

            <ToggleSelect
              options={[{ name: "1 мес.", value: "1" }]}
              value={formik.values.duration}
              onSelect={(value) => formik.setFieldValue("duration", value)}
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-6">
          <div className="w-full flex flex-col gap-2 max-w-screen-lg mx-2 p-6 rounded-3xl bg-[#0c1430]">
            <p className="text-2xl md:text-3xl font-semibold tracking-tight">К оплате</p>

            <p className="tracking-tight text-muted-foreground">
              После оплаты на указанную при оплате почту будет выслан промокод для самостоятельной активации
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
              className={cn("pointer-events-none bg-secondary text-muted-foreground sticky bottom-0 mt-6 text-lg h-12", {
                "bg-accent/50 text-muted-foreground": !value,
              })}
            >
              Нет в наличии
            </Button>
            <p className=" text-muted-foreground text-sm text-center">
              Нажимая на кнопку «Оплатить», вы соглашаетесь с{" "}
              <a className="text-primary hover:underline" href="/oferta.pdf" target="_blank" rel="noopener noreferrer">
                договором оферты
              </a>
            </p>
          </div>
        </div>
      </form>
      <RedirectingToPayment
        onRedirect={() => {
          ym("reachGoal", "xboxRequest");
          ym("reachGoal", "formaoplatit");
        }}
      />
    </>
  );
}
