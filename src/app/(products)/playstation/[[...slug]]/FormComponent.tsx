"use client";

import AmountOptions from "@/components/AmountOptions/AmountOptions";
import { AppContext } from "@/components/AppContextWrapper/AppContextWrapper";
import { getPsnBalancePrice } from "@/serverActions/calculatePriceActions";
import { getPsnBalancePaymentLink } from "@/serverActions/createPaymentUrls";
import { cn } from "@/lib/utils";
import { HashIcon, SyncIcon } from "@primer/octicons-react";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
// import TextInputV2 from "@/components/TextInput/TextInput";
import { Button } from "@/components/ui/button";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { ym } from "@/utils/ym";
import ToggleSelect from "@/components/ToggleSelect/ToggleSelect";
// import { AprilDealsPrice } from "@/components/AprilDealsPrice";

type Props = {
  receivedAmount?: string;
  card?: string;
  ip: string | null;
};

const TopUpSchema = Yup.object().shape({
  amount: Yup.number()
    .required("Необходимо заполнить")
    .test("Сумма больше 100", "Минимальная сумма 100 лир", (value) => value >= 100)
    .test("Сумма меньше 600", "Максимальная сумма 600 лир", (value) => value <= 600)

    .test("Кратное 10", "Сумма должна быть кратна 10", (value) => value % 250 === 0),
  oneTimeCard: Yup.boolean(),
});

export default function FormComponent({ receivedAmount, ip, card }: Props) {
  const { dispatch } = useContext(AppContext);
  const [calculatedAmount, setCalculatedAmount] = useState<number | undefined>();
  const [value, setValue] = useState<number | undefined>();

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: { amount: receivedAmount ?? "250", oneTimeCard: !!card },
    validationSchema: TopUpSchema,
    onSubmit: async (values) => {
      formik.setSubmitting(true);

      const res = await getPsnBalancePaymentLink(values, ip);
      dispatch({ type: "change_payment_link", payload: res.data.paymentUrl });
      formik.setSubmitting(false);
    },
    validateOnBlur: true,
  });

  useEffect(() => {
    const updatePrices = async (values: { amount: string; oneTimeCard: boolean }) => {
      if (parseInt(values.amount) > 100) {
        window.history.replaceState(window.history.state, "", `/playstation/${values.amount}`);
      } else {
        window.history.replaceState(window.history.state, "", `/playstation`);
      }

      const updatedPrices = await getPsnBalancePrice(values);
      setCalculatedAmount(updatedPrices.calculated);
      setValue(updatedPrices.sale);
      setLoading(false);
    };

    setLoading(true);

    const values = formik.values;
    const error = formik.errors.amount;

    if (values.amount && !error) {
      if (Number(values.amount) >= 100) {
        updatePrices(values);
      }
    } else {
      setLoading(false);
      setCalculatedAmount(undefined);
      setValue(undefined);
    }

    if (value && error) {
      setLoading(false);
      setCalculatedAmount(undefined);
      setValue(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values, formik.errors.amount]);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-full flex justify-center items-center mt-6">
          <div className="w-full flex flex-col gap-2 max-w-screen-lg mx-2 p-6 rounded-3xl bg-[#0c1430]">
            <p className="text-2xl md:text-3xl font-semibold tracking-tight">Укажите сумму пополнения</p>

            {/* <AmountOptions className="mt-4" setValue={(value) => formik.setFieldValue("amount", value)} /> */}

            <ToggleSelect
              options={[
                { name: "250₺", value: "250" },
                { name: "500₺", value: "500" },
                { name: "750₺", value: "750" },
                { name: "1000₺", value: "1000" },
                { name: "1250₺", value: "1250" },
                { name: "1500₺", value: "1500" },
              ]}
              value={formik.values.amount}
              onSelect={(value) => formik.setFieldValue("amount", value)}
            />

            {/* <TextInputV2
              className="mt-4"
              icon={<HashIcon className="text-inherit" />}
              type="number"
              label="Сумма пополнения в лирах ₺"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="От 100 Лир"
              error={formik.errors.amount}
              {...formik.getFieldProps("amount")}
            /> */}
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-6">
          <div className="w-full flex flex-col gap-2 max-w-screen-lg mx-2 p-6 rounded-3xl bg-[#0c1430]">
            <p className="text-2xl md:text-3xl font-semibold tracking-tight">К оплате</p>

            <p className="tracking-tight text-muted-foreground">
              После оплаты на указанную при оплате почту будет выслана инструкция по активации
            </p>
            <p className="tracking-tight text-muted-foreground">
              С помощью этой инструкции вы сможете безопасно передать нам данные своего аккаунта для пополнения
            </p>

            <div className="flex flex-col gap-2 w-full justify-between mt-6">
              {/* <AprilDealsPrice loading={loading} calculatedAmount={calculatedAmount} value={value} /> */}
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
              <div className="flex justify-between w-full pb-1 border-b-[1px] mt-2">
                <p className="text-lg text-muted-foreground">Получите</p>
                {formik.values.amount && !formik.errors.amount && (
                  <p className="text-lg text-muted-foreground">{formik.values.amount}₺</p>
                )}
              </div>
            </div>
            <Button
              className={cn("sticky bottom-0 mt-6 text-lg h-12", {
                "bg-accent/50 text-muted-foreground": !value,
                "pointer-events-none": formik.isSubmitting,
              })}
            >
              {!loading && !formik.isSubmitting && value ? (
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
          ym("reachGoal", "playstationRequest");
          ym("reachGoal", "formaoplatit");
        }}
      />
    </>
  );
}
