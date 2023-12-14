"use client";

import PaymentOptions from "@/components/PaymentOptions/PaymentOptions";
import TextInput from "@/components/TextInput/TextInput";
import { HashIcon, LockIcon } from "@primer/octicons-react";
import { Formik } from "formik";
import * as Yup from "yup";

type Props = {
  receivedAmount?: string;
};

const TopUpSchema = Yup.object().shape({
  amount: Yup.number()
    .required("Необходимо заполнить")
    .positive()
    .test("Кратное 10", "Сумма должна быть кратна 10", (value) => value % 10 === 0),
});

export default function FormComponent({ receivedAmount }: Props) {
  return (
    <div className="flex flex-col md:flex-row mt-4 md:mt-14 gap-4 sm:gap-8 md:gap-16">
      <div className="flex flex-col gap-1 lg:gap-6 w-full md:w-1/2">
        <Formik
          initialValues={{ amount: receivedAmount ?? "" }}
          validationSchema={TopUpSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
          validateOnBlur
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 mb-2 md:mb-4 lg:mb-0">
                <p className="label font-medium">Выберите количество ЛИР к зачислению:</p>
                <TextInput
                  icon={<HashIcon className="text-secondary" />}
                  type="number"
                  name="amount"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Количество лир к пополнению"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.amount}
                  error={errors.amount}
                />
                <p>{errors.amount}</p>
              </div>

              <div className="w-full flex-col gap-1 items-center hidden mt-4 md:flex lg:mt-0">
                <button type="submit" className="btn btn-secondary w-full text-white items-center">
                  <LockIcon className="text-white text-xl" />
                  Оплатить
                </button>
                <p className="text-center text-gray-500">
                  После нажатия вы будете перенаправлены на страницу оплаты{" "}
                  {/* <a className="underline" href="https://plati.market/" target="_blank" rel="noopener noreferrer">
                    plati.ru
                  </a> */}
                </p>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <div className="flex flex-col w-full md:w-1/2">
        <PaymentOptions />
      </div>
    </div>
  );
}
