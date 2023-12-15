import { isSearchParamValid } from "@/utils/utils";
import DigiClient from "./DigiClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Активация",
  description: "Страница активации услуги",
  openGraph: {
    title: "Активация",
    description: "Страница активации услуги",
  },
  alternates: {
    canonical: "/activate/digi",
  },
};

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

function Page({ searchParams }: Props) {
  return (
    <DigiClient
      activationCode={isSearchParamValid(searchParams["uniquecode"])}
      activationName={isSearchParamValid(searchParams["name"])}
    />
  );
}

export default Page;
