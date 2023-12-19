import { verifyCode } from "@/serverActions/verifyCode";
import { isSearchParamValid } from "@/utils/utils";
import VerificationFailClient from "@/app/payment/verification/VerificationFailClient";
import VerificationSuccessClient from "./VerificationSuccessClient";
import VerificationNotFound from "./VerificationNotFound";
import { Metadata } from "next";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: "Спасибо за покупку!",
  description: "Спасибо за покупку!",
};

async function Page({ searchParams }: Props) {
  const uniquecode = await verifyCode(isSearchParamValid(searchParams["uniquecode"]));

  if (uniquecode.notFound) {
    return <VerificationNotFound />;
  }

  if (uniquecode.error) {
    return <VerificationFailClient />;
  }

  return <VerificationSuccessClient code={uniquecode.code} />;
}

export default Page;
