import cn from "@/utils/cn";

import Card from "./Card";
import Sbp from "./Sbp";
import Crypto from "./Crypto";
// import SbpYapayQiwi from "@/components/PaymentOptions/SbpYapayQiwi.svg";
// import Crypto from "@/components/PaymentOptions/crypto.svg";

function PaymentOptions() {
  return (
    <div className="flex flex-col gap-2 pb-2">
      <p className="text-lg font-medium">Принимаем к оплате:</p>
      <div className="bg-base-200 rounded-md p-2">
        <div className="grid grid-cols-3 gap-3 pb-2">
          <div
            // type="button"
            className={cn(
              "rounded-md bg-base-100 p-1 sm:p-6 h-[64px] sm:h-[100px] transition-colors duration-300 flex justify-center items-center" /* , {
				"border-primary": value === "card",
				"border-transparent": value !== "card",
			} */
            )}
            // onClick$={() => setValue(store, "paymentOption", "card")}
            // aria-label="Оплата картой"
          >
            <Card className="fill-base-content w-[65%] lg:w-full lg:h-full" />
          </div>
          <div
            // type="button"
            className={cn(
              "rounded-md bg-base-100 p-1 sm:p-4 h-[64px] sm:h-[100px] transition-colors duration-300 flex justify-center items-center" /* , {
				"border-primary": value === "sbp",
				"border-transparent": value !== "sbp",
			} */
            )}
            // onClick$={() => setValue(store, "paymentOption", "sbp")}
            // aria-label="Оплата Яндекс Pay"
          >
            <Sbp className="fill-base-content" />
          </div>
          <div
            className={cn(
              "rounded-md bg-base-100 p-1 sm:p-4 h-[64px] sm:h-[100px]  transition-colors duration-300 flex justify-center items-center" /* , {
				"border-primary": value === "qiwi",
				"border-transparent": value !== "qiwi",
			} */
            )}
            // onClick$={() => setValue(store, "paymentOption", "qiwi")}
            // aria-label="Оплата QIWI"
          >
            <Crypto />
          </div>
        </div>
        <p className="text-sm text-center">Выбор способа оплаты будет доступен на странице оплаты</p>
      </div>
    </div>
  );
}

export default PaymentOptions;
