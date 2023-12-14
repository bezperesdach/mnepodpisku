"use client";

import { AppContext } from "@/components/AppContextWrapper/AppContextWrapper";
import PaymentOptions from "@/components/PaymentOptions/PaymentOptions";
import PriceComponent from "@/components/PriceComponent.tsx/PriceComponent";
import ToggleSelect from "@/components/ToggleSelect/ToggleSelect";
import { getPsnPsPlusPrice } from "@/serverActions/calculatePriceActions";
import { getPsnPsPlusPaymentLink } from "@/serverActions/createPaymentUrls";
import { LockIcon } from "@primer/octicons-react";
import { useFormik } from "formik";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";

const PsPlusSchema = Yup.object().shape({
  subscriptionType: Yup.string().required("Необходимо заполнить"),
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
    initialValues: { subscriptionType: receivedSubscriptionType ?? "deluxe", duration: receivedDuration ?? "1month" },
    validationSchema: PsPlusSchema,
    onSubmit: async (values) => {
      formik.setSubmitting(true);

      const res = await getPsnPsPlusPaymentLink(values);

      setPaymentLink(res.data.paymentUrl);
      formik.setSubmitting(false);
    },
    validateOnBlur: true,
  });

  useEffect(() => {
    const updatePrices = async (values: { subscriptionType: string; duration: string }) => {
      const current = new URLSearchParams();
      current.set("sub", values.subscriptionType);
      current.set("dur", values.duration);
      const search = current.toString();
      const query = search ? `?${search}` : "";
      router.replace(`${pathname}${query}`);

      const updatedPrices = await getPsnPsPlusPrice(values);
      setCalculatedAmount(updatedPrices.calculated);
      setValue(updatedPrices.sale);
      setLoading(false);
    };

    setLoading(true);

    const duration = formik.values.duration;
    const subscriptionType = formik.values.subscriptionType;

    updatePrices({ subscriptionType, duration });
  }, [formik.values.subscriptionType, formik.values.duration, router, pathname]);

  return (
    <>
      <form className="flex flex-col md:flex-row mt-4 md:mt-14 gap-4 sm:gap-8 md:gap-16" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-1 lg:gap-6 w-full md:w-1/2">
          <div className="flex flex-col gap-2 md:mb-4">
            <p className="label font-medium">Выберите тип подписки:</p>
            <ToggleSelect
              options={[
                { name: "Essential", value: "essential" },
                { name: "Extra", value: "extra" },
                { name: "Deluxe", value: "deluxe" },
              ]}
              value={formik.values.subscriptionType}
              onSelect={(value) => formik.setFieldValue("subscriptionType", value)}
            />
            <div className="flex flex-col gap-2">
              <p className="label font-medium">Выберите срок подписки:</p>
              <ToggleSelect
                options={[
                  { name: "1 мес.", value: "1month" },
                  { name: "3 мес.", value: "3month" },
                  { name: "12 мес.", value: "12month" },
                ]}
                value={formik.values.duration}
                onSelect={(value) => formik.setFieldValue("duration", value)}
              />
            </div>
            <div className="w-full flex-col gap-1 items-center hidden mt-4 md:flex ">
              <button type="submit" className="btn btn-secondary w-full text-white items-center">
                <LockIcon className="text-white text-xl" />
                Оплатить
              </button>
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
