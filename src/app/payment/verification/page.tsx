import { verifyCode } from "@/serverActions/verifyCode";
import { isSearchParamValid } from "@/utils/utils";
import { redirect } from "next/navigation";
import VerificationFailClient from "./verificationFailClient";
import VerificationSuccessClient from "./VerificationSuccessClient";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

async function Page({ searchParams }: Props) {
  const uniquecode = await verifyCode(isSearchParamValid(searchParams["uniquecode"]));

  if (uniquecode.notFound) {
    redirect("/");
  }

  if (uniquecode.error) {
    return <VerificationFailClient />;
  }

  return <VerificationSuccessClient code={uniquecode.code} />;
}

export default Page;
