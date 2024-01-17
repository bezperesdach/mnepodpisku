"use client";

import { AppContext } from "@/components/AppContextWrapper/AppContextWrapper";
import PaymentOptions from "@/components/PaymentOptions/PaymentOptions";
import PriceComponent from "@/components/PriceComponent.tsx/PriceComponent";
import TextInput from "@/components/TextInput/TextInput";
import { getTurkeyCardPrice } from "@/serverActions/calculatePriceActions";
import { getTurkeyCardPaymentLink } from "@/serverActions/createPaymentUrls";
import cn from "@/utils/cn";
import { ym } from "@/utils/ym";
import { HashIcon, LockIcon } from "@primer/octicons-react";
import { useFormik } from "formik";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";

type Props = {
  receivedAmount?: string;
  service?: string;
  ip: string | null;
};

const TopUpSchema = Yup.object().shape({
  amount: Yup.number()
    .required("Необходимо заполнить")
    .test("Сумма больше 100", "Не может быть меньше 100", (value) => value >= 100)
    .test("Сумма меньше 5000", "Не может быть больше 5000", (value) => value <= 5000),
  service: Yup.string().required("Необходимо выбрать сервис"),
});

const availableServices = [
  { name: "Skillshare", value: "skill_share" },
  { name: "Adobe", value: "adobe" },
  { name: "Другое", value: "other" },
];

export default function FormComponent({ receivedAmount, ip, service }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const { dispatch } = useContext(AppContext);
  const [calculatedAmount, setCalculatedAmount] = useState<number | undefined>();
  const [value, setValue] = useState<number | undefined>();

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: { amount: receivedAmount ?? "", service: service ?? "" },
    validationSchema: TopUpSchema,
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      ym("reachGoal", "turkeyCardRequest");

      const res = await getTurkeyCardPaymentLink(values, ip);
      dispatch({ type: "change_payment_link", payload: res.data.paymentUrl });
      formik.setSubmitting(false);
    },
    validateOnBlur: true,
  });

  useEffect(() => {
    const updatePrices = async (values: { amount: string; service: string }) => {
      const current = new URLSearchParams();
      current.set("amount", values.amount.toString());
      current.set("service", values.service.toString());

      const search = current.toString();
      const query = search ? `?${search}` : "";
      router.replace(`${pathname}${query}`, { scroll: false });

      const updatedPrices = await getTurkeyCardPrice(values);
      setCalculatedAmount(updatedPrices.calculated);
      setValue(updatedPrices.sale);
      setLoading(false);
    };

    setLoading(true);

    const values = formik.values;
    const error = formik.errors.amount;

    if (values.amount && !error) {
      if (Number(values.amount) >= 10) {
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
        <div className="flex flex-col md:flex-row mt-4 md:mt-14 gap-4 sm:gap-8 md:gap-16">
          <div className="flex flex-col gap-1 lg:gap-6 w-full md:w-1/2">
            <div className="flex flex-col gap-2 mb-2 md:mb-4 lg:mb-0">
              <p className="label font-medium">Выберите количество ЛИР к зачислению на баланс:</p>
              <TextInput
                icon={<HashIcon className="text-secondary" />}
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Количество лир"
                error={formik.errors.amount}
                {...formik.getFieldProps("amount")}
              />
              <p className="label font-medium">Выберите сервис для которого нужна карта</p>
              <select
                className="select select-bordered w-full"
                onChange={(ev) => formik.setFieldValue("service", ev.currentTarget.value)}
                defaultValue={formik.values.service}
              >
                <option disabled value="">
                  Выберите сервис
                </option>
                {availableServices.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
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
                  ? Number(formik.values.amount) >= 10
                    ? Number(formik.values.amount)
                    : undefined
                  : undefined
              }
              showReceive
            />

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
        </div>
      </form>
    </>
  );
}
