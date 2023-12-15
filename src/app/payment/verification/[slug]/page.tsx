import { verifyCode } from "@/serverActions/verifyCode";
import { isSearchParamValid } from "@/utils/utils";
import { redirect } from "next/navigation";
import VerificationFailClient from "@/app/payment/verification/VerificationFailClient";
import PsnBalanceClient from "../PsnBalanceClient";
import { ActivationTypes, verifyActivationType } from "@/utils/activationUtils";
import PsPlusClient from "../PsPlusClient";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function Page({ searchParams, params }: Props) {
  const activationTypes = params.slug as ActivationTypes;
  const code = isSearchParamValid(searchParams["uniquecode"]);

  const uniquecode = await verifyCode(code);

  if (uniquecode.notFound) {
    redirect("/");
  }

  if (uniquecode.error) {
    return <VerificationFailClient />;
  }

  if (!verifyActivationType(params.slug)) {
    redirect(`/payment/verification?uniquecode=${uniquecode.code}`);
  }

  switch (activationTypes) {
    case "psn_balance":
      return <PsnBalanceClient code={uniquecode.code} />;
    case "ps_plus":
      return <PsPlusClient code={uniquecode.code} />;
    case "ps_ea_play":
      return <PsPlusClient code={uniquecode.code} />;
  }
}

export default Page;
