"use client";

import AmountOptions from "@/components/AmountOptions/AmountOptions";
import { AppContext } from "@/components/AppContextWrapper/AppContextWrapper";
import DiscountMeter from "@/components/DiscountMeter/DiscountMeter";
import PaymentOptions from "@/components/PaymentOptions/PaymentOptions";
import PriceComponent from "@/components/PriceComponent.tsx/PriceComponent";
import SubscriptionsSelector from "@/components/SubscriptionsSelector/SubscriptionsSelector";
import TextInput from "@/components/TextInput/TextInput";
import { getPsnBalancePrice } from "@/serverActions/calculatePriceActions";
import { getPsnBalancePaymentLink } from "@/serverActions/createPaymentUrls";
import cn from "@/utils/cn";
import { HashIcon, LockIcon } from "@primer/octicons-react";
import { useFormik } from "formik";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";

type Props = {
  receivedAmount?: string;
};

const TopUpSchema = Yup.object().shape({
  amount: Yup.number()
    .required("Необходимо заполнить")
    .test("Сумма больше 100", "Не может быть меньше 100", (value) => value >= 100)
    .test("Сумма меньше 5000", "Не может быть больше 5000", (value) => value <= 5000)

    .test("Кратное 10", "Сумма должна быть кратна 10", (value) => value % 10 === 0),
});

export default function FormComponent({ receivedAmount }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const { dispatch } = useContext(AppContext);
  const [calculatedAmount, setCalculatedAmount] = useState<number | undefined>();
  const [value, setValue] = useState<number | undefined>();

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: { amount: receivedAmount ?? "" },
    validationSchema: TopUpSchema,
    onSubmit: async (values) => {
      formik.setSubmitting(true);

      const res = await getPsnBalancePaymentLink(Number(values.amount));
      dispatch({ type: "change_payment_link", payload: res.data.paymentUrl });
      formik.setSubmitting(false);
    },
    validateOnBlur: true,
  });

  useEffect(() => {
    const updatePrices = async (value: number) => {
      const current = new URLSearchParams();
      current.set("amount", value.toString());
      const search = current.toString();
      const query = search ? `?${search}` : "";
      router.replace(`${pathname}${query}`, { scroll: false });

      const updatedPrices = await getPsnBalancePrice(value);
      setCalculatedAmount(updatedPrices.calculated);
      setValue(updatedPrices.sale);
      setLoading(false);
      // console.log("updated");
    };

    setLoading(true);

    const value = formik.values.amount;
    const error = formik.errors.amount;

    if (value && !error) {
      if (Number(value) >= 100) {
        updatePrices(Number(value));
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
  }, [formik.values.amount, formik.errors.amount]);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col md:flex-row mt-4 md:mt-14 gap-4 sm:gap-8 md:gap-16">
          <div className="flex flex-col gap-1 lg:gap-6 w-full md:w-1/2">
            <div className="flex flex-col gap-2 mb-2 md:mb-4 lg:mb-0">
              <p className="label font-medium">Выберите количество ЛИР к зачислению:</p>
              <TextInput
                icon={<HashIcon className="text-secondary" />}
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Количество лир к пополнению"
                error={formik.errors.amount}
                {...formik.getFieldProps("amount")}
              />
              <AmountOptions setValue={(value) => formik.setFieldValue("amount", value)} />
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
                  ? Number(formik.values.amount) > 100
                    ? Number(formik.values.amount)
                    : undefined
                  : undefined
              }
              showReceive
            />
            <DiscountMeter value={formik.values.amount !== "" ? Number(formik.values.amount) : undefined} />
          </div>
        </div>
      </form>
      <SubscriptionsSelector changeValue={(value) => formik.setFieldValue("amount", value)} />
    </>
  );
}
