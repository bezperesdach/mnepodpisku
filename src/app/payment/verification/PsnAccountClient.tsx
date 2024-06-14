"use client";

import LeaveVkReview from "@/components/LeaveVkReview/LeaveVkReview";
import TextInput from "@/components/TextInput/TextInput";

// import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SyncIcon } from "@primer/octicons-react";

type Props = {
  code: string;
};

function PsnAccountClient({ code }: Props) {
  const [allowCopyTest, setAllowCopyTest] = useState(false);
  const [testingCopy, setTestingCopy] = useState(true);
  const [copySuccess, setCopySuccess] = useState(true);

  const [canCopyCode, setCanCopyCode] = useState(true);

  const allowCopyTestRun = () => {
    if (!allowCopyTest) {
      setAllowCopyTest(true);
    }
  };

  const copyCode = () => {
    setCanCopyCode(false);
    setTimeout(() => {
      setCanCopyCode(true);
    }, 500);
  };

  useEffect(() => {
    if (allowCopyTest) {
      const copyTest = async () => {
        try {
          await window.CopyToClipboard("");
        } catch (err) {
          console.log(err);
          setCopySuccess(false);
        } finally {
          setTestingCopy(false);
        }
      };
      copyTest();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allowCopyTest]);

  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  const validateEmail = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.currentTarget.value;
    if (value === "") {
      setError("поле не может быть пустым");
    } else if (
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        value
      )
    ) {
      if (!value.trimEnd().toLowerCase().endsWith(".ru")) {
        setError("");
      } else {
        setError("Email не должен оканчиваться на '.ru'");
      }
    } else {
      setError("Неверный email");
    }

    setValue(value);
  };

  return (
    <div className="flex flex-col justify-start items-center w-full" onClick={allowCopyTestRun}>
      <LeaveVkReview />

      <div className="w-full flex gap-4 max-w-screen-lg mt-4 mb-6 mx-2 p-6 rounded-3xl bg-[#0c1430]">
        <div className="flex flex-col gap-2 w-full mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">Благодарим за покупку создания PSN аккаунта!</h1>

          <p className=" text-muted-foreground">Мы успешно проверили вашу оплату! Пожалуйста, выполните инструкцию ниже.</p>

          <p className="text-3xl font-semibold tracking-tight mt-4">Шаг 1</p>
          <p className=" text-muted-foreground">Укажите почту на которую будет создан аккаунт PlayStation</p>

          <TextInput
            value={value}
            onChange={validateEmail}
            type="text"
            placeholder="example@gmail.com"
            className="max-w-xs"
            spellCheck={false}
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            error={error}
          />

          {error === "" && value !== "" && (
            <>
              <p className="text-3xl font-semibold tracking-tight">Шаг 2</p>
              {testingCopy ? (
                <div className="flex justify-center items-center min-h-[180px]">
                  <SyncIcon className="animate-spin" />
                </div>
              ) : (
                <>
                  <p className=" text-muted-foreground">Скопируйте сообщение ниже</p>

                  <p className="flex gap-2 justify-between items-center p-3 mt-2 mb-4 bg-background rounded-md cursor-pointer">
                    АКТИВАЦИЯ АККАУНТА PSN
                    <br /> Мой код активации - {code}
                    <br />
                    Моя почта - {value}
                  </p>

                  {copySuccess && (
                    <Button
                      className={cn("", {
                        "pointer-events-none": !canCopyCode,
                      })}
                      onClick={() => {
                        copyCode();

                        window.CopyToClipboard(`АКТИВАЦИЯ АККАУНТА PSN\nМой код активации - ${code}\nМоя почта - ${value}`);
                      }}
                    >
                      {canCopyCode ? `НАЖМИТЕ, ЧТОБЫ СКОПИРОВАТЬ` : "СКОПИРОВАНО"}
                    </Button>
                  )}

                  <p className="text-3xl font-semibold tracking-tight">Шаг 3</p>
                  <p className=" text-muted-foreground">Скопируйте сообщение из шага 2 и вышлите его удобным вам способом</p>

                  <div className="flex gap-4 mt-2 ">
                    <a href="https://t.me/pstopup" target="_blank" rel="noopener noreferrer">
                      <Image src="/socials_icons/telegram_icon.png" alt="telegram" width={48} height={48} />
                    </a>

                    <a className="flex gap-1 items-center" href="https://wa.me/79939011007" target="_blank" rel="noopener noreferrer">
                      <Image src="/socials_icons/whatsapp_icon.png" alt="whatsapp" width={48} height={48} />
                    </a>
                  </div>

                  <p className="text-muted-foreground">(Нажмите на один из логотипов выше чтобы открыть)</p>
                </>
              )}
            </>
          )}
          {!(error === "" && value !== "") && (
            <p className="bg-background py-2 px-4 border-2 border-yellow-400 max-w-lg rounded-lg">
              <strong>ВНИМАНИЕ!</strong> Проверьте что у вас есть доступ к почте! В случае ошибки мы не сможем вам помочь восстановить
              аккаунт и нужно будет приобретать создание еще раз.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PsnAccountClient;
