"use client";

import { AppContext } from "@/components/AppContextWrapper/AppContextWrapper";
import PaymentOptions from "@/components/PaymentOptions/PaymentOptions";
import PriceComponent from "@/components/PriceComponent.tsx/PriceComponent";
import ToggleSelect from "@/components/ToggleSelect/ToggleSelect";
import { getPsEaPlayPrice } from "@/serverActions/calculatePriceActions";
import { getPsEaPlayPaymentLink } from "@/serverActions/createPaymentUrls";
import { cn } from "@/lib/utils";
import { ym } from "@/utils/ym";
import { LockIcon, SyncIcon } from "@primer/octicons-react";
import { useFormik } from "formik";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";

type Props = {
  receivedDuration?: string;
};

export default function FormComponent({ receivedDuration }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const { dispatch } = useContext(AppContext);
  const [calculatedAmount, setCalculatedAmount] = useState<number | undefined>();
  const [value, setValue] = useState<number | undefined>();

  const [loading, setLoading] = useState(true);

  const formik = useFormik({
    initialValues: { duration: receivedDuration ?? "1" },
    onSubmit: async (values) => {
      formik.setSubmitting(true);

      const res = await getPsEaPlayPaymentLink(values.duration);

      dispatch({ type: "change_payment_link", payload: res.data.paymentUrl });
      formik.setSubmitting(false);
    },
    validateOnBlur: true,
  });

  useEffect(() => {
    const updatePrices = async (duration: string) => {
      if (duration === "1") {
        history.pushState({ duration }, "", `/playstation_ea_play`);
      } else {
        history.pushState({ duration }, "", `/playstation_ea_play/${duration}`);
      }

      const updatedPrices = await getPsEaPlayPrice(duration);
      setCalculatedAmount(updatedPrices.calculated);
      setValue(updatedPrices.sale);
      setLoading(false);
    };

    setLoading(true);

    const duration = formik.values.duration;

    updatePrices(duration);
  }, [formik.values.duration, router, pathname]);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-full flex justify-center items-center mt-6">
          <div className="w-full flex flex-col gap-2 max-w-screen-lg mx-2 p-6 rounded-3xl bg-[#0c1430]">
            <p className="text-2xl md:text-3xl font-semibold tracking-tight">Выберите срок подписки</p>

            <ToggleSelect
              options={[
                { name: "1 мес.", value: "1" },
                { name: "12 мес.", value: "12" },
              ]}
              value={formik.values.duration}
              onSelect={(value) => formik.setFieldValue("duration", value)}
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-6">
          <div className="w-full flex flex-col gap-2 max-w-screen-lg mx-2 p-6 rounded-3xl bg-[#0c1430]">
            <p className="text-2xl md:text-3xl font-semibold tracking-tight">К оплате</p>

            <p className="tracking-tight text-muted-foreground">
              После оплаты на указанную при оплате почту будет выслана инструкция по активации
            </p>
            <p className="tracking-tight text-muted-foreground">
              С помощью этой инструкции вы сможете безопасно передать нам данные своего аккаунта на который будет приобретена подписка
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
                      <p>{value}₽</p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <Button
              className={cn("sticky bottom-0 mt-6 text-lg h-12", {
                "bg-accent/50 text-muted-foreground": !value,
                "pointer-events-none": formik.isSubmitting,
              })}
            >
              {!loading && !formik.isSubmitting ? (
                <p>ОПЛАТИТЬ {value && <span className="text-[#fee525] text-xl font-bold">{value}₽</span>}</p>
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
      </form>
      <RedirectingToPayment
        onRedirect={() => {
          ym("reachGoal", "psEaPlayRequest");
          ym("reachGoal", "formaoplatit");
        }}
      />
    </>
  );

  return (
    <>
      <form className="flex flex-col md:flex-row mt-4 md:mt-14 gap-4 sm:gap-8 md:gap-16" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-1 lg:gap-6 w-full md:w-1/2">
          <div className="flex flex-col gap-2 md:mb-4">
            <div className="flex flex-col gap-2">
              <p className="label font-medium">Выберите срок подписки:</p>
              <ToggleSelect
                options={[
                  { name: "1 мес.", value: "1month" },
                  { name: "12 мес.", value: "12month" },
                ]}
                value={formik.values.duration}
                onSelect={(value) => formik.setFieldValue("duration", value)}
              />
            </div>
            <div className="w-full flex-col gap-1 items-center hidden mt-4 md:flex ">
              <button
                type="submit"
                className={cn("btn btn-secondary w-full text-white items-center", { "btn-disabled": formik.isSubmitting })}
              >
                {formik.isSubmitting ? (
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
        <div className="flex flex-col w-full md:w-1/2">
          <PaymentOptions />
          <PriceComponent loading={loading} value={calculatedAmount} sale={value} />
          <div className="w-full flex-col gap-1 items-center md:hidden mt-4">
            <button
              type="submit"
              className={cn("btn btn-secondary w-full text-white items-center", { "btn-disabled": formik.isSubmitting })}
            >
              {formik.isSubmitting ? (
                <span className="loading loading-spinner loading-xl flex-shrink-0" />
              ) : (
                <LockIcon className="text-white text-xl" />
              )}
              Оплатить
            </button>
            <p className="text-center text-gray-500">После нажатия вы будете перенаправлены на страницу оплаты </p>
          </div>
        </div>
      </form>
    </>
  );
}
