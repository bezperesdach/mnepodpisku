import { verifyCode } from "@/serverActions/verifyCode";
import { isSearchParamValid } from "@/utils/utils";
import VerificationFailClient from "@/app/payment/verification/VerificationFailClient";
import PsnBalanceClient from "../PsnBalanceClient";
import { ActivationTypes, verifyActivationType } from "@/utils/activationUtils";
import PsPlusClient from "../PsPlusClient";
import VerificationNotFound from "../VerificationNotFound";
import VerificationSuccessClient from "../VerificationSuccessClient";
import PsnAccountClient from "../PsnAccountClient";
import NaChaiClient from "../NaChaiClient";
import PsnBalanceCardClient from "../PsnBalanceCardClient";
import PsEaPlayClient from "../PsEaPlayClient";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function Page({ searchParams, params }: Props) {
  const activationTypes = params.slug as ActivationTypes;
  const code = isSearchParamValid(searchParams["uniquecode"]);

  const uniquecode = await verifyCode(code);

  if (uniquecode.notFound) {
    return <VerificationNotFound />;
  }

  if (uniquecode.error) {
    return <VerificationFailClient />;
  }

  if (!verifyActivationType(params.slug)) {
    return <VerificationSuccessClient code={uniquecode.code} />;
  }

  switch (activationTypes) {
    case "psn_balance":
      return <PsnBalanceClient code={uniquecode.code} />;
    case "psn_balance_card":
      return <PsnBalanceCardClient code={uniquecode.code} />;
    case "psn_account":
      return <PsnAccountClient code={uniquecode.code} />;
    case "ps_plus":
      return <PsPlusClient code={uniquecode.code} />;
    case "ps_ea_play":
      return <PsEaPlayClient code={uniquecode.code} />;

    case "na_chai":
      return <NaChaiClient />;
  }
}

export default Page;
