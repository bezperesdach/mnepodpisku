"use client";

import { AppContext } from "@/components/AppContextWrapper/AppContextWrapper";
import PaymentOptions from "@/components/PaymentOptions/PaymentOptions";
import PriceComponent from "@/components/PriceComponent.tsx/PriceComponent";
import ToggleSelect from "@/components/ToggleSelect/ToggleSelect";
import { getTinderPrice } from "@/serverActions/calculatePriceActions";
import { getTinderPaymentLink } from "@/serverActions/createPaymentUrls";
import cn from "@/utils/cn";
import { LockIcon } from "@primer/octicons-react";
import { useFormik } from "formik";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";

const PsPlusSchema = Yup.object().shape({
  duration: Yup.string().required("Необходимо заполнить"),
});

type Props = {
  receivedSubscriptionType?: string;
  receivedDuration?: string;
};

export default function FormComponent({ receivedSubscriptionType, receivedDuration }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const { setPaymentLink } = useContext(AppContext);
  const [calculatedAmount, setCalculatedAmount] = useState<number | undefined>();
  const [value, setValue] = useState<number | undefined>();

  const [loading, setLoading] = useState(true);

  const formik = useFormik({
    initialValues: { duration: receivedDuration ?? "6month", subscriptionType: receivedSubscriptionType ?? "plus" },
    validationSchema: PsPlusSchema,
    onSubmit: async (values) => {
      formik.setSubmitting(true);

      const res = await getTinderPaymentLink(values);

      setPaymentLink(res.data.paymentUrl);
      formik.setSubmitting(false);
    },
    validateOnBlur: true,
  });

  useEffect(() => {
    const updatePrices = async (values: { subscriptionType: string; duration: string }) => {
      const current = new URLSearchParams();
      current.set("dur", values.duration);
      current.set("sub", values.subscriptionType);

      const search = current.toString();
      const query = search ? `?${search}` : "";
      router.replace(`${pathname}${query}`);

      const updatedPrices = await getTinderPrice(values);
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
      <form className="flex flex-col md:flex-row mt-4 md:mt-14 gap-4 sm:gap-8 md:gap-16" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-1 lg:gap-6 w-full md:w-1/2">
          <div className="flex flex-col gap-2 md:mb-4">
            <div className="flex flex-col gap-2">
              <p className="label font-medium">Выберите тип подписки:</p>
              <ToggleSelect
                options={[{ name: "Плюс", value: "plus" }]}
                value={formik.values.subscriptionType}
                onSelect={(value) => formik.setFieldValue("subscriptionType", value)}
              />
            </div>

            <div className="flex flex-col gap-2 md:mb-4">
              <p className="label font-medium">Выберите срок подписки:</p>
              <ToggleSelect
                options={[{ name: "6 мес.", value: "6month" }]}
                value={formik.values.duration}
                onSelect={(value) => formik.setFieldValue("duration", value)}
              />
            </div>
            <div className="w-full flex-col gap-1 items-center hidden mt-4 md:flex ">
              <button
                type="submit"
                className={cn("btn btn-disabled w-full text-white items-center", { "btn-disabled": formik.isSubmitting })}
              >
                {formik.isSubmitting ? (
                  <span className="loading loading-spinner loading-xl flex-shrink-0" />
                ) : (
                  <LockIcon className="text-white/20 text-xl" />
                )}
                Оплатить
              </button>
              <p>Нет в наличии</p>
              <p className="text-center text-gray-500">После нажатия вы будете перенаправлены на страницу оплаты </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <PaymentOptions />
          <PriceComponent loading={loading} value={calculatedAmount} sale={value} />
        </div>
      </form>
    </>
  );
}
