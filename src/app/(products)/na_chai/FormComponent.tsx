"use client";

import { AppContext } from "@/components/AppContextWrapper/AppContextWrapper";
import { getDonationPaymentLink } from "@/serverActions/createPaymentUrls";
import { cn } from "@/lib/utils";
import { HashIcon, SyncIcon } from "@primer/octicons-react";
import { useFormik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import TextInputV2 from "@/components/TextInput/TextInput";
import { Button } from "@/components/ui/button";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { ym } from "@/utils/ym";

type Props = {
  receivedAmount?: string;
  ip: string | null;
};

const TopUpSchema = Yup.object().shape({
  amount: Yup.number()
    .required("Необходимо заполнить")
    .test("Сумма больше 10", "Не может быть меньше 10", (value) => value >= 10),
});

export default function FormComponent({ receivedAmount, ip }: Props) {
  const { dispatch } = useContext(AppContext);

  const formik = useFormik({
    initialValues: { amount: receivedAmount ?? "100" },
    validationSchema: TopUpSchema,
    onSubmit: async (values) => {
      formik.setSubmitting(true);

      const res = await getDonationPaymentLink(Number(values.amount), ip);
      dispatch({ type: "change_payment_link", payload: res.data.paymentUrl });
      formik.setSubmitting(false);
    },
    validateOnBlur: true,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-full flex justify-center items-center mt-6">
          <div className="w-full flex flex-col gap-2 max-w-screen-lg mx-2 p-6 rounded-3xl bg-[#0c1430]">
            <p className="text-2xl md:text-3xl font-semibold tracking-tight">Укажите сумму пожертвования</p>

            <TextInputV2
              className="mt-4"
              icon={<HashIcon className="text-inherit" />}
              type="number"
              label="Сумма пополнения в рублях"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="От 10 рублей"
              error={formik.errors.amount}
              {...formik.getFieldProps("amount")}
            />

            <Button
              className={cn("sticky bottom-0 mt-6 text-lg h-12", {
                "bg-accent/50 text-muted-foreground": !formik.values.amount,
                "pointer-events-none": formik.isSubmitting,
              })}
            >
              {!formik.isSubmitting && formik.values.amount ? (
                <p>
                  ПОЖЕРТВОВАТЬ{" "}
                  {formik.values.amount && <span className="text-[#fee525] text-xl font-bold">{formik.values.amount}₽</span>}
                </p>
              ) : (
                <SyncIcon className="animate-spin" />
              )}
            </Button>
          </div>
        </div>
      </form>
      <RedirectingToPayment
        onRedirect={() => {
          ym("reachGoal", "naChaiFund");
          ym("reachGoal", "formaoplatit");
        }}
      />
    </>
  );
}

// "use client";

// import { AppContext } from "@/components/AppContextWrapper/AppContextWrapper";
// import PaymentOptions from "@/components/PaymentOptions/PaymentOptions";
// import PriceComponent from "@/components/PriceComponent.tsx/PriceComponent";
// import TextInput from "@/components/TextInput/TextInput";
// import { getDonationPaymentLink } from "@/serverActions/createPaymentUrls";
// import { cn } from "@/lib/utils";
// import { ym } from "@/utils/ym";
// import { HashIcon, LockIcon } from "@primer/octicons-react";
// import { useFormik } from "formik";
// import { usePathname, useRouter } from "next/navigation";
// import { useContext, useEffect, useState } from "react";
// import * as Yup from "yup";

// type Props = {
//   receivedAmount?: string;
//   ip: string | null;
// };

// const TopUpSchema = Yup.object().shape({
//   amount: Yup.number()
//     .required("Необходимо заполнить")
//     .test("Сумма больше 10", "Не может быть меньше 10", (value) => value >= 10),
// });

// export default function FormComponent({ receivedAmount, ip }: Props) {
//   const pathname = usePathname();
//   const router = useRouter();

//   const { dispatch } = useContext(AppContext);

//   const [loading, setLoading] = useState(false);

//   const formik = useFormik({
//     initialValues: { amount: receivedAmount ?? "" },
//     validationSchema: TopUpSchema,
//     onSubmit: async (values) => {
//       formik.setSubmitting(true);
//       ym("reachGoal", "naChaiFund");
//       ym("reachGoal", "formaoplatit");

//       const res = await getDonationPaymentLink(Number(values.amount), ip);
//       dispatch({ type: "change_payment_link", payload: res.data.paymentUrl });
//       formik.setSubmitting(false);
//     },
//     validateOnBlur: true,
//   });

//   useEffect(() => {
//     // const updatePrices = async (value: number) => {
//     //   const current = new URLSearchParams();
//     //   current.set("amount", value.toString());
//     //   const search = current.toString();
//     //   const query = search ? `?${search}` : "";
//     //   router.replace(`${pathname}${query}`, { scroll: false });

//     //   const updatedPrices = await getPsnBalancePrice(value);
//     //   setCalculatedAmount(updatedPrices.calculated);
//     //   setValue(updatedPrices.sale);
//     //   setLoading(false);
//     //   // console.log("updated");
//     // };

//     setLoading(true);

//     const value = formik.values.amount;
//     const error = formik.errors.amount;

//     if (value && !error) {
//       const current = new URLSearchParams();
//       current.set("amount", value.toString());
//       const search = current.toString();
//       const query = search ? `?${search}` : "";
//       router.replace(`${pathname}${query}`, { scroll: false });
//       setLoading(false);
//       // if (Number(value) >= 100) {
//       //   updatePrices(Number(value));
//       // }
//     } else {
//       setLoading(false);
//       // setCalculatedAmount(undefined);
//       // setValue(undefined);
//     }

//     if (value && error) {
//       setLoading(false);
//       // setCalculatedAmount(undefined);
//       // setValue(undefined);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [formik.values.amount, formik.errors.amount]);

//   return (
//     <>
//       <form onSubmit={formik.handleSubmit}>
//         <div className="flex flex-col md:flex-row mt-4 md:mt-14 gap-4 sm:gap-8 md:gap-16">
//           <div className="flex flex-col gap-1 lg:gap-6 w-full md:w-1/2">
//             <div className="flex flex-col gap-2 mb-2 md:mb-4 lg:mb-0">
//               <p className="label font-medium">Сумма отправления на чай и печеньки:</p>
//               <TextInput
//                 icon={<HashIcon className="text-secondary" />}
//                 type="number"
//                 inputMode="numeric"
//                 pattern="[0-9]*"
//                 placeholder="Сумма пожертвования в рублях"
//                 error={formik.errors.amount}
//                 {...formik.getFieldProps("amount")}
//               />
//             </div>

//             <div className="w-full flex-col gap-1 items-center hidden mt-4 md:flex lg:mt-0">
//               <button
//                 type="submit"
//                 className={cn("btn btn-secondary w-full text-white items-center", { "btn-disabled": formik.isSubmitting })}
//               >
//                 {formik.isSubmitting ? (
//                   <span className="loading loading-spinner loading-xl flex-shrink-0" />
//                 ) : (
//                   <LockIcon className="text-white text-xl" />
//                 )}
//                 Пожертвовать
//               </button>
//               <p className="text-center text-gray-500">После нажатия вы будете перенаправлены на страницу оплаты </p>
//             </div>
//           </div>
//           <div className="flex flex-col w-full md:w-1/2">
//             <PaymentOptions />
//             <PriceComponent
//               loading={loading}
//               value={undefined}
//               sale={
//                 formik.values.amount !== "" ? (Number(formik.values.amount) > 0 ? Number(formik.values.amount) : undefined) : undefined
//               }
//             />
//             <div className="w-full flex-col gap-1 items-center md:hidden mt-4 ">
//               <button
//                 type="submit"
//                 className={cn("btn btn-secondary w-full text-white items-center", { "btn-disabled": formik.isSubmitting })}
//               >
//                 {formik.isSubmitting ? (
//                   <span className="loading loading-spinner loading-xl flex-shrink-0" />
//                 ) : (
//                   <LockIcon className="text-white text-xl" />
//                 )}
//                 Пожертвовать
//               </button>
//               <p className="text-center text-gray-500">После нажатия вы будете перенаправлены на страницу оплаты </p>
//             </div>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }
