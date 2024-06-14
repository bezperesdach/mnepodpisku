"use client";

import LeaveVkReview from "@/components/LeaveVkReview/LeaveVkReview";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SyncIcon } from "@primer/octicons-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  code: string;
};

function VerificationSuccessClient({ code }: Props) {
  const [allowCopyTest, setAllowCopyTest] = useState(false);
  const [testingCopy, setTestingCopy] = useState(true);
  const [copySuccess, setCopySuccess] = useState(true);

  const [canCopyCode, setCanCopyCode] = useState(true);

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

  return (
    <div className="flex flex-col justify-start items-center w-full">
      <LeaveVkReview />

      <div className="w-full flex gap-4 max-w-screen-lg mt-4 mb-6 mx-2 p-6 rounded-3xl bg-[#0c1430]">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-3xl font-semibold tracking-tight">Благодарим за покупку!</h1>

          <p className=" text-muted-foreground mb-4">
            Мы успешно проверили вашу оплата! Нажмите на кнопку ниже чтобы приступить к активации!
          </p>

          {!allowCopyTest && (
            <Button
              onClick={() => {
                setAllowCopyTest(true);
              }}
            >
              НАЧАТЬ АКТИВАЦИЮ
            </Button>
          )}

          {allowCopyTest && (
            <>
              <p className="text-3xl font-semibold tracking-tight">Шаг 1</p>
              {testingCopy ? (
                <div className="flex justify-center items-center min-h-[180px]">
                  <SyncIcon className="animate-spin" />
                </div>
              ) : (
                <>
                  <p className=" text-muted-foreground">Скопируйте сообщение ниже</p>

                  <p className="flex gap-2 justify-between items-center p-3 mt-2 mb-4 bg-background rounded-md cursor-text">
                    Мой код активации - {code}
                  </p>

                  {copySuccess && (
                    <Button
                      className={cn("", {
                        "pointer-events-none": !canCopyCode,
                      })}
                      onClick={() => {
                        copyCode();

                        window.CopyToClipboard(`Мой код активации - ${code}`);
                      }}
                    >
                      {canCopyCode ? `НАЖМИТЕ, ЧТОБЫ СКОПИРОВАТЬ` : "СКОПИРОВАНО"}
                    </Button>
                  )}
                  <p className="text-3xl font-semibold tracking-tight">Шаг 2</p>
                  <p className=" text-muted-foreground">Вышлите скопированное сообщение в удобный вам мессенджер</p>

                  <div className="flex gap-4 mt-2">
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
        </div>
      </div>
    </div>
  );
}

export default VerificationSuccessClient;
