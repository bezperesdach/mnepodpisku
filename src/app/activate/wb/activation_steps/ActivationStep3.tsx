import { ChangeEvent, useEffect, useState } from "react";
import TextInput from "@/components/TextInput/TextInput";
import { UserData } from "../WbClient";
import cn from "@/utils/cn";

type Props = {
  userData: UserData;
  accessCodeAcknowledge: boolean;
  // eslint-disable-next-line no-unused-vars
  changeAccessCodeAcknowledgement: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  onChange: (name: string, value: string) => void;
  // eslint-disable-next-line no-unused-vars
  changeAllowToNextStage: (value: boolean) => void;
  increaseActivationStep: () => void;
  // eslint-disable-next-line no-unused-vars
  changeTitle: (title: string) => void;
};

const ActivationStep3: React.FC<Props> = ({
  userData,
  accessCodeAcknowledge,
  changeAccessCodeAcknowledgement,
  increaseActivationStep,
  onChange,
  changeAllowToNextStage,
  changeTitle,
}: Props) => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    accessCode: "",
    accessCodeAcknowledge: "",
  });

  const validateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;

    switch (name) {
      case "email":
        if (value === "") {
          setErrors((prevErrors) => ({ ...prevErrors, email: "поле не может быть пустым" }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
        }

        if (/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/.test(value)) {
          if (userData.type === "аккаунт") {
            if (!value.toLowerCase().endsWith(".ru")) {
              setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
            } else {
              setErrors((prevErrors) => ({ ...prevErrors, email: "Email не должен оканчиваться на '.ru'" }));
            }
          } else {
            setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
          }
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, email: "Неверный email" }));
        }

        onChange("email", value);
        break;
      case "password":
        if (value === "") {
          setErrors((prevErrors) => ({ ...prevErrors, password: "поле не может быть пустым" }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
        }

        onChange("password", value);
        break;
      case "accessCode":
        if (value === "") {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "поле не может быть пустым" }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "" }));
        }

        if (value === userData.password) {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "Резервный код не может совпадать с паролем" }));
        }

        if (value.length > 8) {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "Резервный код не может быть больше 8 символов" }));
        }

        if (value.indexOf(" ") !== -1) {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "Резервный не может содержать пробелов" }));
        }

        if (value.length < 4) {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "Резервный код не может быть меньше 4 символов" }));
        }

        if (/[а-яА-Я]/.test(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "Резервный код не может содержать русских букв" }));
        }

        if (/^\d+$/.test(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "Резервный код не может состоять только из цифр" }));
        }

        if (value === "FQ9aLc") {
          setErrors((prevErrors) => ({ ...prevErrors, accessCode: "Резервный код не может совпадать с примером" }));
        }

        onChange("accessCode", value);
        break;
      case "accessCodeAcknowledge":
        if (!accessCodeAcknowledge) {
          setErrors((prevErrors) => ({ ...prevErrors, accessCodeAcknowledge: "" }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, accessCodeAcknowledge: "Вы должны согласиться" }));
        }
        changeAccessCodeAcknowledgement(!accessCodeAcknowledge);
        break;
    }
  };

  useEffect(() => {
    if (userData.type === "пополнение" || userData.type === "игра") {
      if (
        errors.email === "" &&
        userData.email.length > 0 &&
        errors.password === "" &&
        userData.password.length > 0 &&
        errors.accessCode === "" &&
        userData.accessCode.length > 0 &&
        errors.accessCodeAcknowledge === "" &&
        accessCodeAcknowledge
      ) {
        changeAllowToNextStage(true);
      } else {
        changeAllowToNextStage(false);
      }
    } else if (userData.type === "аккаунт") {
      if (errors.email === "" && userData.email.length > 0) {
        changeAllowToNextStage(true);
      } else {
        changeAllowToNextStage(false);
      }
    } else {
      changeAllowToNextStage(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData, errors]);

  useEffect(() => {
    onChange("type", "");
    changeTitle("Ввод данных");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-between items-center px-6 py-2 w-full min-h-[320px]">
      {userData.type === "" && (
        <div className="flex flex-col flex-1 justify-evenly items-center gap-2 w-full h-full">
          <p className="text-center">Выберите какую услугу вы хотите активировать</p>
          <button className="btn btn-primary text-white" onClick={() => onChange("type", "пополнение")}>
            ПОПОЛНЕНИЕ АККАУНТА PSN
          </button>
          <button
            className="btn btn-primary text-white"
            onClick={() => {
              onChange("type", "одноразовая_карта");
              increaseActivationStep();
            }}
          >
            ОДНОРАЗОВАЯ ТУРЕЦКАЯ КАРТА ДЛЯ PSN
          </button>
          <button className="btn btn-primary text-white" onClick={() => onChange("type", "игра")}>
            ИГРА НА ТУРЕЦКИЙ АККАУНТ PSN
          </button>
          <button className="btn btn-primary text-white" onClick={() => onChange("type", "аккаунт")}>
            СОЗДАНИЕ ТУРЕЦКОГО АККАУНТА PSN
          </button>
        </div>
      )}
      {(userData.type === "пополнение" || userData.type === "игра") && (
        <div className="flex flex-col justify-start items-center gap-2 w-full">
          <p className="text-center">Введите данные своего PlayStation аккаунта</p>

          <TextInput
            maxWidth
            label="Email"
            value={userData.email}
            onChange={validateInput}
            name="email"
            type="email"
            className="input input-primary w-full max-w-xs"
            spellCheck={false}
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            error={errors.email}
          />

          <TextInput
            maxWidth
            label="Пароль"
            value={userData.password}
            onChange={validateInput}
            name="password"
            type="text"
            className="input input-primary w-full max-w-xs"
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
            toolTip="Доступен при включенном 2FA. Обычно состоит из 6 символов. Пример - FQ9aLc. Найти можно по инструкции выше"
            value={userData.accessCode}
            onChange={validateInput}
            name="accessCode"
            type="text"
            className="input input-primary w-full max-w-xs"
            spellCheck={false}
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            error={errors.accessCode}
          />

          <div className="flex gap-2 items-start mt-2 max-w-xs ">
            <input
              name="accessCodeAcknowledge"
              type="checkbox"
              className={cn("checkbox checkbox-secondary", { "checkbox-error": !accessCodeAcknowledge })}
              checked={accessCodeAcknowledge}
              onChange={validateInput}
            />

            <p className="text-sm">
              Я соглашаюсь с тем, что моя активация может быть отложена на неопределенный срок или отменена, если я выслал неверный
              логин/пароль/резервный код или ранее использованный резервный код
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2">
            <a
              className="btn btn-secondary text-white my-2"
              target="_blank"
              rel="noopener noreferrer"
              href="/guides/kak_vkluchit_2fa_na_akaunte_psn"
            >
              У меня нет резервного кода
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
        </div>
      )}
      {userData.type === "аккаунт" && (
        <div className="flex flex-col justify-start items-center gap-2 w-full">
          <p className="text-center">
            Введите Email на который <span className="font-bold text-warning">НЕ ЗАРЕГИСТРИРОВАН</span> аккаунт PlayStation
          </p>
          <p className="text-center">На нее будет зарегистрирован новый Турецкий аккаунт PlayStation!</p>

          <TextInput
            maxWidth
            label="Email"
            value={userData.email}
            onChange={validateInput}
            name="email"
            type="email"
            className="input input-primary w-full max-w-xs"
            spellCheck={false}
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            error={errors.email}
          />

          <div className="border-2 border-warning flex justify-center items-center gap-2 max-w-3xl bg-base-300 rounded-md p-4 my-4">
            <p className="z-[1] font-bold text-center">
              Убедитесь, что у вас есть доступ к данной почте. После регистрации мы НЕ СМОЖЕМ восстановить аккаунт в случае ошибки.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivationStep3;
