import TextInput from "@/components/TextInput/TextInput";
import React, { ChangeEvent, useEffect, useState } from "react";

type Props = {
  email: string;
  password: string;
  accessCode: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (name: string, value: string) => void;
  // eslint-disable-next-line no-unused-vars
  changeAllowToNextStage: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  changeTitle: (title: string) => void;
};

const ActivationStep2: React.FC<Props> = ({ email, password, accessCode, onChange, changeAllowToNextStage, changeTitle }: Props) => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    accessCode: "",
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
        } else if (/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/.test(value)) {
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
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "" }));
        }
        onChange(name, value);
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
      accessCode.length > 0
    ) {
      changeAllowToNextStage(true);
    } else {
      changeAllowToNextStage(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password, accessCode]);

  return (
    <div className="flex flex-col justify-between items-center px-6 py-2 w-full min-h-[320px]">
      <div className="flex flex-col justify-start items-center gap-2 w-full">
        <p>Введите данные своего PlayStation аккаунта</p>
        <div className="flex flex-wrap justify-center items-center gap-2">
          <a
            className="btn btn-secondary text-white my-2"
            target="_blank"
            rel="noopener noreferrer"
            href="/guides/kak_vkluchit_2fa_na_akaunte_psn"
          >
            Как включить 2FA?
          </a>
          <a
            className="btn btn-secondary text-white my-2"
            target="_blank"
            rel="noopener noreferrer"
            href="/guides/gde_posmotret_rezervnyi_kod"
          >
            Где найти резервный код?
          </a>
        </div>
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
      </div>
    </div>
  );
};

export default ActivationStep2;
