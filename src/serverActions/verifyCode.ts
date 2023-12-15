import { getDIGISellerToken } from "@/utils/digiServerUtils";
import { isDateDifferenceGreaterThanOneDay } from "@/utils/utils";

// function sleep(ms: number): Promise<void> {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export async function verifyCode(code?: string) {
  if (!code) {
    return { verified: false, error: false, notFound: true, code: "" };
  }

  const token = await getDIGISellerToken(process.env.DIGISELLERID, process.env.DIGISELLERAPIKET);

  if (!token) {
    // console.log("failed to get digi token");
    return { verified: false, error: true, notFound: false, code: "" };
  }

  try {
    const verifyPaymentRequest = await fetch(`https://api.digiseller.ru/api/purchases/unique-code/${code}?token=${token}`);

    if (!verifyPaymentRequest.ok) {
      const err = await verifyPaymentRequest.json();
      if (err.retdesc && err.retdesc === "отсутствует или неверно задан параметр unique_code") {
        return { verified: false, error: false, notFound: true, code: "" };
      }

      // console.log("failed to verify payment:", err.retdesc);
      return { verified: false, error: true, notFound: false, code: "" };
    }

    const data = await verifyPaymentRequest.json();

    if (isDateDifferenceGreaterThanOneDay(data?.unique_code_state?.date_check)) {
      return { verified: false, error: false, notFound: true, code: "" };
    }

    // const verifyPaymentRes = await verifyPaymentRequest.json();
    // const delivered = verifyPaymentRes?.unique_code_state?.date_check;
    // if (delivered) {
    //   // console.log(delivered);
    //   return { verified: false, error: false, notFound: false };
    // }
    return { verified: true, error: false, notFound: false, code: code };
  } catch (err) {
    // console.log("Unexpected error:", err);
    return { verified: false, error: true, notFound: false, code: "" };
  }
}
