"use client";

import AmountOptions from "@/components/AmountOptions/AmountOptions";
import { AppContext } from "@/components/AppContextWrapper/AppContextWrapper";
import { getPsnBalancePrice } from "@/serverActions/calculatePriceActions";
import { getPsnBalancePaymentLink } from "@/serverActions/createPaymentUrls";
import { cn } from "@/lib/utils";
import { HashIcon, SyncIcon } from "@primer/octicons-react";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import TextInputV2 from "@/components/TextInput/TextInput";
import { Button } from "@/components/ui/button";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { ym } from "@/utils/ym";
import { useRouter } from "next/navigation";
import { VerifyCodeResponse } from "../api/verify_code/[...slug]/route";

export default function FormComponent() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [responseCode, setResponseCode] = useState<VerifyCodeResponse>({ codeFound: false, robloxCode: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const retrieveCode = async (code: string) => {
    if (isLoading || err) {
      return;
    }
    setIsLoading(true);

    if (value === "") {
      setErr("Поле кода не может быть пустым");
      setTimeout(() => setErr(""), 2500);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/verify_code/${code}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = (await response.json()) as VerifyCodeResponse;

      setResponseCode(result);

      if (result.codeFound) {
        router.push(`/rbx/${result.robloxCode}`);
      } else {
        setErr("Код не был найден");
        setTimeout(() => setErr(""), 5000);
        setIsLoading(false);
      }
    } catch (err) {
      if (err instanceof Error) {
        setErr("Поле кода не может быть пустым");
        setTimeout(() => setErr(""), 2500);
        setIsLoading(false);
      } else {
        setErr("Неожиданная ошибка, попробуйте позже");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center mt-6">
        <div className="w-full flex flex-col gap-2 max-w-screen-lg mx-2 p-6 rounded-3xl bg-[#0c1430]">
          <p className="text-2xl md:text-3xl font-semibold tracking-tight">Укажите код активации</p>
          <p className="tracking-tight text-muted-foreground">Данный код вы найдете внутри полученной посылки с Вайлдберрис</p>
          <p className="tracking-tight text-yellow-200 mb-3">
            Проверить код можно 1 раз в несколько минут, перед проверкой убедитесь в правильности кода
          </p>

          {/* <AmountOptions className="mt-4" setValue={(value) => formik.setFieldValue("amount", value)} /> */}

          <TextInputV2
            className="mt-4 max-w-xs"
            // icon={<HashIcon className="text-inherit" />}
            value={value}
            type="text"
            label="Код из посылки"
            onChange={(e) => setValue(e.target.value)}
            inputMode="text"
          />

          <p className="tracking-tight text-red-500 font-semibold">{err}</p>

          <Button
            onClick={async () => await retrieveCode(value)}
            className={cn("sticky bottom-0 text-lg", {
              "bg-red-500 hover:bg-red-500 cursor-not-allowed": err,
              "bg-accent/50 hover:bg-accent/50 text-muted-foreground cursor-wait": isLoading,
            })}
          >
            {!isLoading ? (
              err ? (
                <p>ОШИБКА</p>
              ) : (
                <p>ПОЛУЧИТЬ ROBLOX КОД</p>
              )
            ) : (
              <>
                <SyncIcon className="animate-spin" />
                <p className=" pl-1">ПРОВЕРЯЕМ</p>
              </>
            )}
          </Button>
        </div>
      </div>
    </>
  );
}
