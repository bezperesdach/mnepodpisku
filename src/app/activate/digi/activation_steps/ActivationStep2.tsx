import TextInput from "@/components/TextInput/TextInput";
import { ActivationTypes } from "@/utils/activationUtils";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  email: string;
  password: string;
  accessCode: string;
  secondAccessCode?: string;
  activationType?: ActivationTypes;
  accessCodeAcknowledge: boolean;
  // eslint-disable-next-line no-unused-vars
  changeAccessCodeAcknowledgement: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  onChange: (name: string, value: string) => void;
  // eslint-disable-next-line no-unused-vars
  changeAllowToNextStage: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  changeTitle: (title: string) => void;
};

const ActivationStep2: React.FC<Props> = ({
  email,
  password,
  accessCode,
  secondAccessCode,
  accessCodeAcknowledge,
  activationType,
  changeAccessCodeAcknowledgement,
  onChange,
  changeAllowToNextStage,
  changeTitle,
}: Props) => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    accessCode: "",
    secondAccessCode: "",
    accessCodeAcknowledge: "",
  });

  useEffect(() => {
    changeTitle("Ввод данных");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;

    switch (name) {
      case "email":
        if (value === "") {
          setErrors((prevErrors) => ({ ...prevErrors, email: "поле не может быть пустым" }));
        } else if (
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
            value
          )
        ) {
          setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, email: "Неверный email" }));
        }
        onChange(name, value);
        break;

      case "password":
        if (value === "") {
          setErrors((prevErrors) => ({ ...prevErrors, password: "поле не может быть пустым" }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
        }
        onChange(name, value);
        break;

      case "accessCode":
        if (value === "") {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "поле не может быть пустым" }));
        } else if (value === password) {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "Резервный код не может совпадать с паролем" }));
        } else if (value.length > 8) {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "Резервный код не может быть больше 8 символов" }));
        } else if (value.length < 4) {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "Резервный код не может быть меньше 4 символов" }));
        } else if (value.indexOf(" ") !== -1) {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "Резервный код не может содержать пробелов" }));
        } else if (/[а-яА-Я]/.test(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "Резервный код не может содержать русских букв" }));
        } else if (/^\d+$/.test(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "Резервный код не может состоять только из цифр" }));
        } else if (value === "FQ9aLc") {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "Резервный код не может совпадать с примером" }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "" }));
        }
        onChange(name, value);
        break;

      case "secondAccessCode":
        if (value === "") {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "поле не может быть пустым" }));
        } else if (value === password) {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "Резервный код не может совпадать с паролем" }));
        } else if (value.length > 8) {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "Резервный код не может быть больше 8 символов" }));
        } else if (value.length < 4) {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "Резервный код не может быть меньше 4 символов" }));
        } else if (value.indexOf(" ") !== -1) {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "Резервный код не может содержать пробелов" }));
        } else if (/[а-яА-Я]/.test(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "Резервный код не может содержать русских букв" }));
        } else if (/^\d+$/.test(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "Резервный код не может состоять только из цифр" }));
        } else if (value === "Lo7Qlx") {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "Резервный код не может совпадать с примером" }));
        } else if (value === accessCode) {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "Резервный код не может совпадать с 1 кодом" }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "" }));
        }
        onChange(name, value);
        break;

      case "accessCodeAcknowledge":
        if (!accessCodeAcknowledge) {
          setErrors((prevErrors) => ({ ...prevErrors, accessCodeAcknowledge: "" }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, accessCodeAcknowledge: "Вы должны согласиться" }));
        }
        changeAccessCodeAcknowledgement(!accessCodeAcknowledge);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (
      errors.email === "" &&
      email.length > 0 &&
      errors.password === "" &&
      password.length > 0 &&
      errors.accessCode === "" &&
      accessCode.length > 0 &&
      errors.accessCodeAcknowledge === "" &&
      accessCodeAcknowledge
    ) {
      if (activationType === "ps_plus" || activationType === "ps_ea_play") {
        if (errors.secondAccessCode === "" && secondAccessCode && secondAccessCode?.length > 0) {
          changeAllowToNextStage(true);
        } else {
          changeAllowToNextStage(false);
        }
      } else {
        changeAllowToNextStage(true);
      }
    } else {
      changeAllowToNextStage(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password, accessCode, secondAccessCode, accessCodeAcknowledge, errors]);

  return (
    <div className="flex flex-col justify-between items-center px-6 py-2 w-full min-h-[320px]">
      <div className="flex flex-col justify-start items-center gap-2 w-full">
        <p>Введите данные своего PlayStation аккаунта</p>

        {/* Other content here */}

        <TextInput
          maxWidth
          label="Email"
          value={email}
          onChange={validateInput}
          name="email"
          type="email"
          className="input input-primary w-full"
          spellCheck={false}
          autoCorrect="off"
          autoComplete="off"
          autoCapitalize="off"
          error={errors.email}
        />

        <TextInput
          maxWidth
          label="Пароль"
          value={password}
          onChange={validateInput}
          name="password"
          type="text"
          className="input input-primary w-full "
          spellCheck={false}
          autoCorrect="off"
          autoComplete="off"
          autoCapitalize="off"
          error={errors.password}
        />

        <TextInput
          maxWidth
          label="Резервный код"
          placeholder="Например, FQ9aLc"
          toolTip="Доступен при включенном 2FA. Обычно состоит из 6 символов. Пример - FQ9aLc. Найти можно по инструкции ниже"
          value={accessCode}
          onChange={validateInput}
          name="accessCode"
          type="text"
          className="input input-primary w-full "
          spellCheck={false}
          autoCorrect="off"
          autoComplete="off"
          autoCapitalize="off"
          error={errors.accessCode}
        />

        {(activationType === "ps_plus" || activationType === "ps_ea_play") && (
          <TextInput
            maxWidth
            label="2 Резервный код"
            placeholder="Например, Lo7Qlx"
            toolTip="Доступен при включенном 2FA. Обычно состоит из 6 символов. Пример - Lo7Qlx. Найти можно по инструкции ниже"
            value={secondAccessCode}
            onChange={validateInput}
            name="secondAccessCode"
            type="text"
            className="input input-primary w-full "
            spellCheck={false}
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            error={errors.secondAccessCode}
          />
        )}

        <div className="flex gap-2 items-start mt-2 max-w-xs ">
          <Checkbox
            checked={accessCodeAcknowledge}
            onCheckedChange={(checked) => {
              changeAccessCodeAcknowledgement(checked as boolean);

              if (checked) {
                setErrors((prevErrors) => ({ ...prevErrors, accessCodeAcknowledge: "" }));
              } else {
                setErrors((prevErrors) => ({ ...prevErrors, accessCodeAcknowledge: "Вы должны согласиться" }));
              }
            }}
          />

          <p className="text-sm">
            Я соглашаюсь с тем, что моя активация может быть отложена на неопределенный срок или отменена, если я выслал неверный
            логин/пароль/резервный код или ранее использованный резервный код
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
          <Button asChild>
            <Link target="_blank" rel="noopener noreferrer" href="/guides/kak_vkluchit_2fa_na_akaunte_psn">
              У меня нет резервного кода
            </Link>
          </Button>
          <Button asChild>
            <Link target="_blank" rel="noopener noreferrer" href="/guides/gde_posmotret_rezervnyi_kod">
              Где найти резервный код?
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActivationStep2;
