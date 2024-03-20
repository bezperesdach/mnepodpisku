"use client";

import AmountOptions from "@/components/AmountOptions/AmountOptions";
import { AppContext } from "@/components/AppContextWrapper/AppContextWrapper";
import DiscountMeter from "@/components/DiscountMeter/DiscountMeter";
import PaymentOptions from "@/components/PaymentOptions/PaymentOptions";
import PriceComponent from "@/components/PriceComponent.tsx/PriceComponent";
import TextInput from "@/components/TextInput/TextInput";
import { getPsnBalancePrice } from "@/serverActions/calculatePriceActions";
import { getPsnBalancePaymentLink } from "@/serverActions/createPaymentUrls";
import { cn } from "@/lib/utils";
import { ym } from "@/utils/ym";
import { HashIcon, LockIcon, SyncIcon } from "@primer/octicons-react";
import { useFormik } from "formik";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import TextInputV2 from "@/components/TextInput/TextInputV2";
import { Button } from "@/components/ui/button";

type Props = {
  receivedAmount?: string;
  card?: string;
  ip: string | null;
};

const TopUpSchema = Yup.object().shape({
  amount: Yup.number()
    .required("Необходимо заполнить")
    .test("Сумма больше 100", "Минимальная сумма 100 лир", (value) => value >= 100)
    .test("Сумма меньше 5000", "Максимальная сумма 5000 лир", (value) => value <= 5000)

    .test("Кратное 10", "Сумма должна быть кратна 10", (value) => value % 10 === 0),
  oneTimeCard: Yup.boolean(),
});

export default function FormComponent({ receivedAmount, ip, card }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const { dispatch } = useContext(AppContext);
  const [calculatedAmount, setCalculatedAmount] = useState<number | undefined>();
  const [value, setValue] = useState<number | undefined>();

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: { amount: receivedAmount ?? "100", oneTimeCard: !!card ?? false },
    validationSchema: TopUpSchema,
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      ym("reachGoal", "playstationRequest");
      ym("reachGoal", "formaoplatit");

      const res = await getPsnBalancePaymentLink(values, ip);
      dispatch({ type: "change_payment_link", payload: res.data.paymentUrl });
      formik.setSubmitting(false);
    },
    validateOnBlur: true,
  });

  useEffect(() => {
    const updatePrices = async (values: { amount: string; oneTimeCard: boolean }) => {
      const current = new URLSearchParams();
      current.set("amount", values.amount.toString());
      // if (values.oneTimeCard) {
      //   current.set("card", "1");
      // }

      const search = current.toString();
      const query = search ? `?${search}` : "";
      if (parseInt(values.amount) > 100) {
        router.replace(`${pathname}${query}`, { scroll: false });
      }

      const updatedPrices = await getPsnBalancePrice(values);
      setCalculatedAmount(updatedPrices.calculated);
      setValue(updatedPrices.sale);
      setLoading(false);
      // console.log("updated");
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
          <div className="w-full flex flex-col lg:flex-row gap-2 max-w-screen-lg mx-4 p-6 rounded-lg bg-[#0c1430]">
            <div className="w-full flex flex-col gap-2">
              <p className="text-2xl md:text-3xl font-semibold tracking-tight">Укажите сумму пополнения</p>

              <TextInputV2
                className="mt-2"
                icon={<HashIcon className="text-primary" />}
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="От 100 Лир"
                error={formik.errors.amount}
                {...formik.getFieldProps("amount")}
              />
            </div>

            <AmountOptions setValue={(value) => formik.setFieldValue("amount", value)} />
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-6">
          <div className="w-full flex flex-col gap-2 max-w-screen-lg mx-4 p-6 rounded-lg bg-[#0c1430]">
            <p className="text-2xl md:text-3xl font-semibold tracking-tight">К оплате</p>

            <div className="flex flex-col gap-2 w-full justify-between mt-6">
              <div className="flex justify-between w-full pb-1 border-b-[1px]">
                <p className="text-lg text-muted-foreground">Заплатите</p>
                <div className="flex gap-1 items-center text-lg text-muted-foreground">
                  {loading && <SyncIcon className="animate-spin" />}
                  {!loading && value && <p>{value}₽</p>}
                </div>
              </div>
              <div className="flex justify-between w-full pb-1 border-b-[1px] mt-2">
                <p className="text-lg text-muted-foreground">Получите</p>
                {formik.values.amount && <p className="text-lg text-muted-foreground">{formik.values.amount}₺</p>}
              </div>
            </div>
            <Button
              className={cn("sticky top-[100vh] mt-6 text-lg h-12", {
                "pointer-events-none bg-accent/50 text-muted-foreground": !value,
              })}
            >
              {!loading ? (
                <p>ОПЛАТИТЬ {value && <span className="text-[#fee525] text-xl font-bold">{value}₽</span>}</p>
              ) : (
                <SyncIcon className="animate-spin" />
              )}
            </Button>
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row mt-4 md:mt-14 gap-4 sm:gap-8 md:gap-16">
          <div className="flex flex-col gap-1 lg:gap-6 w-full md:w-1/2">
            <div className="flex flex-col gap-2 mb-2 md:mb-4 lg:mb-0">
              <p className="label font-medium">Выберите количество ЛИР к зачислению:</p>
            </div>

            <div className="w-full flex-col gap-1 items-center hidden mt-4 md:flex lg:mt-0">
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
          <div className="flex flex-col w-full md:w-1/2">
            <PaymentOptions />
            <PriceComponent
              loading={loading}
              value={calculatedAmount}
              sale={value}
              amount={
                formik.values.amount !== ""
                  ? Number(formik.values.amount) >= 100
                    ? Number(formik.values.amount)
                    : undefined
                  : undefined
              }
              showReceive
            />
            <DiscountMeter value={formik.values.amount !== "" ? Number(formik.values.amount) : undefined} />
            <div className="w-full flex-col gap-1 items-center md:hidden mt-4 ">
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
        </div> */}
      </form>
    </>
  );
}
