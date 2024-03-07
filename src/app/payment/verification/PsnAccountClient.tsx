"use client";

import LeaveVkReview from "@/components/LeaveVkReview/LeaveVkReview";
import TextInput from "@/components/TextInput/TextInput";

// import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import cn from "@/utils/cn";

type Props = {
  code: string;
};

function PsnAccountClient({ code }: Props) {
  const [canCopyCode, setCanCopyCode] = useState(true);

  const copyCode = () => {
    setCanCopyCode(false);
    setTimeout(() => {
      setCanCopyCode(true);
    }, 500);
  };

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
      if (!value.toLowerCase().endsWith(".ru")) {
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
    <div className="flex flex-col justify-start items-center">
      <LeaveVkReview />
      <h1 className="text-4xl font-bold mt-6 lg:mt-4 text-center">Благодарим за покупку создания PSN аккаунта!</h1>
      <p className="text-lg max-w-2xl text-center mt-2">
        Мы успешно проверили вашу оплату! Пожалуйста, укажите почту на которую вы бы хотели получить аккаунт.
      </p>

      <TextInput
        maxWidth
        value={value}
        onChange={validateEmail}
        type="text"
        placeholder="example@gmail.com"
        className="input input-bordered w-full mt-4"
        spellCheck={false}
        autoCorrect="off"
        autoComplete="off"
        autoCapitalize="off"
        error={error}
      />

      {error === "" && value !== "" && (
        <>
          <p className="flex gap-2 justify-between items-center p-3 mt-4 mb-4 bg-base-300 rounded-md cursor-pointer">
            АКТИВАЦИЯ АККАУНТА PSN
            <br /> Мой код активации - {code}
            <br />
            Моя почта - {value}
          </p>
          <button
            className={cn("btn btn-primary", {
              "pointer-events-none": !canCopyCode,
            })}
            onClick={() => {
              copyCode();

              // @ts-ignore: Clipboard.copy defined in root.tsx
              Clipboard.copy(`АКТИВАЦИЯ АККАУНТА PSN\nМой код активации - ${code}\nМоя почта - ${value}`);
            }}
          >
            {canCopyCode ? `НАЖМИТЕ, ЧТОБЫ СКОПИРОВАТЬ` : "СКОПИРОВАНО"}
          </button>
          <p className="text-center text-lg mt-4">
            Вышлите сообщение выше <strong className="text-warning font-bold">ТЕКСТОМ</strong> удобным для вас способом ниже:
          </p>
          <div className="flex gap-4 mt-2 mb-10">
            <a href="https://vk.com/im?sel=-221413404" target="_blank" rel="noopener noreferrer">
              <Image src="/socials_icons/vk_compact.png" alt="vk" width={48} height={48} />
            </a>

            <a href="https://t.me/pstopup" target="_blank" rel="noopener noreferrer">
              <Image src="/socials_icons/telegram_icon.png" alt="telegram" width={48} height={48} />
            </a>

            <a className="flex gap-1 items-center" href="https://wa.me/79939011007" target="_blank" rel="noopener noreferrer">
              <Image src="/socials_icons/whatsapp_icon.png" alt="whatsapp" width={48} height={48} />
            </a>
          </div>
        </>
      )}
      {!(error === "" && value !== "") && (
        <p className="bg-base-300 py-2 px-4 border-2 border-warning max-w-lg mt-4 rounded-lg">
          <strong>ВНИМАНИЕ!</strong> Проверьте что у вас есть доступ к почте! В случае ошибки мы не сможем вам помочь восстановить
          аккаунт и нужно будет приобретать создание еще раз.
        </p>
      )}

      {/* <Link className="btn btn-secondary text-white mt-10 mb-12" href="/">
        На главную
      </Link> */}
    </div>
  );
}

export default PsnAccountClient;
