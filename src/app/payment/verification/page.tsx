import { verifyCode } from "@/serverActions/verifyCode";
import VerificationClient from "./verificationClient";
import { isSearchParamValid } from "@/utils/utils";
// import { isSearchParamValid } from "@/utils/utils";

// import { redirect } from "next/navigation";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

async function Page({ searchParams }: Props) {
  const uniquecode = await verifyCode(isSearchParamValid(searchParams["uniquecode"]));

  return <VerificationClient code={uniquecode.code} />;
}

export default Page;
