/* eslint-disable react/no-unescaped-entities */
import { ChangeEvent, useEffect, useState } from "react";
import TextInput from "@/components/TextInput/TextInput";
import { UserData } from "../WbClient";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import Image from "next/image";

import ImageWhereToFind2FA1 from "@/../public/guides_data/gde_posmotret_rezervnyi_kod_komputer/2fa_1.png";
import ImageWhereToFind2FA2 from "@/../public/guides_data/gde_posmotret_rezervnyi_kod_komputer/2fa_2.png";
import ImageWhereToFind2FA3 from "@/../public/guides_data/gde_posmotret_rezervnyi_kod_komputer/2fa_3.png";
import ImageWhereToFind2FA4 from "@/../public/guides_data/gde_posmotret_rezervnyi_kod_komputer/2fa_4.png";
import ImageWhereToFind2FA5 from "@/../public/guides_data/gde_posmotret_rezervnyi_kod_komputer/2fa_5.png";

import ImageWhereToFind2FATelefon1 from "@/../public//guides_data/gde_posmotret_rezervnyi_kod_telefon/2fa_mobile_1.png";
import ImageWhereToFind2FATelefon2 from "@/../public//guides_data/gde_posmotret_rezervnyi_kod_telefon/2fa_mobile_2.png";
import ImageWhereToFind2FATelefon3 from "@/../public//guides_data/gde_posmotret_rezervnyi_kod_telefon/2fa_mobile_3.png";
import ImageWhereToFind2FATelefon4 from "@/../public//guides_data/gde_posmotret_rezervnyi_kod_telefon/2fa_mobile_4.png";
import ImageWhereToFind2FATelefon5 from "@/../public//guides_data/gde_posmotret_rezervnyi_kod_telefon/2fa_mobile_5.png";
import ImageWhereToFind2FATelefon6 from "@/../public//guides_data/gde_posmotret_rezervnyi_kod_telefon/2fa_mobile_6.png";
import ImageWhereToFind2FATelefon7 from "@/../public//guides_data/gde_posmotret_rezervnyi_kod_telefon/2fa_mobile_7.png";

import Image2FAKomputer1 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_1.png";
import Image2FAKomputer2 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_2.png";
import Image2FAKomputer3 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_3.png";
import Image2FAKomputer4 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_4.png";
import Image2FAKomputer5 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_5.png";
import Image2FAKomputer6 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_6.png";
import Image2FAKomputer7 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_7.png";
import Image2FAKomputer8 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_8.png";
import Image2FAKomputer9 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_9.png";
import Image2FAKomputer10 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_10.png";
import Image2FAKomputer11 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_komputer/pc_image_11.png";

import Image2FATelefon1 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_1.png";
import Image2FATelefon2 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_2.png";
import Image2FATelefon3 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_3.png";
import Image2FATelefon4 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_4.png";
import Image2FATelefon5 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_5.png";
import Image2FATelefon6 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_6.png";
import Image2FATelefon7 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_7.png";
import Image2FATelefon8 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_8.png";
import Image2FATelefon9 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_9.png";
import Image2FATelefon10 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_10.png";
import Image2FATelefon11 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_11.png";
import Image2FATelefon12 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_12.png";
import Image2FATelefon13 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/telefon_image_13.png";

import ImageAuthenticator1 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/google_authenticator_1.png";
import ImageAuthenticator2 from "@/../public/guides_data/kak_vkluchit_2fa_na_akaunte_psn_telefon/google_authenticator_2.png";
import { ModalChequeMessage } from "../../modal-cheque-message";

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

const ActivationStep4: React.FC<Props> = ({
  userData,
  accessCodeAcknowledge,
  changeAccessCodeAcknowledgement,
  // increaseActivationStep,
  onChange,
  changeAllowToNextStage,
  changeTitle,
}: Props) => {
  const [modalType, setModalType] = useState<"Enable2FA" | "WhereToFind" | "">("");
  const [openGuideModal, setOpenGuideModal] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    accessCode: "",
    secondAccessCode: "",
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

        if (
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
            value
          )
        ) {
          if (userData.type === "аккаунт" || userData.type === "аккаунт_баланс") {
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

      case "secondAccessCode":
        if (value === "") {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "поле не может быть пустым" }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "" }));
        }

        if (value === userData.password) {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "Резервный код не может совпадать с паролем" }));
        }

        if (value.length > 8) {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "Резервный код не может быть больше 8 символов" }));
        }

        if (value.indexOf(" ") !== -1) {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "Резервный не может содержать пробелов" }));
        }

        if (value.length < 4) {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "Резервный код не может быть меньше 4 символов" }));
        }

        if (/[а-яА-Я]/.test(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "Резервный код не может содержать русских букв" }));
        }

        if (/^\d+$/.test(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "Резервный код не может состоять только из цифр" }));
        }

        if (value === "Lo7Qlx") {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "Резервный код не может совпадать с примером" }));
        }

        if (value === userData.accessCode) {
          setErrors((prevErrors) => ({ ...prevErrors, secondAccessCode: "Резервный код не может совпадать с 1 кодом" }));
        }

        onChange("secondAccessCode", value);
        break;
    }
  };

  useEffect(() => {
    if (userData.type === "пополнение" || userData.type === "игра" || userData.type === "ps_plus") {
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
        if (userData.type === "ps_plus") {
          if (errors.secondAccessCode === "" && userData.secondAccessCode.length > 0) {
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
    } else if (userData.type === "аккаунт" || userData.type === "аккаунт_баланс") {
      if (errors.email === "" && userData.email.length > 0) {
        changeAllowToNextStage(true);
      } else {
        changeAllowToNextStage(false);
      }
    } else if (userData.type === "spotify") {
      if (errors.email === "" && userData.email.length > 0 && errors.password === "" && userData.password.length > 0) {
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
    changeTitle("Ввод данных");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-between items-center px-6 py-2 w-full min-h-[320px]">
      {userData.type === "spotify" && (
        <div className="flex flex-col justify-start items-center gap-2 w-full">
          <p className="text-center">Введите данные своего Spotify аккаунта</p>
          <TextInput
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
        </div>
      )}
      {(userData.type === "пополнение" || userData.type === "игра" || userData.type === "ps_plus") && (
        <div className="flex flex-col justify-start items-center gap-2 w-full">
          <p className="text-center">Введите данные своего PlayStation аккаунта</p>

          <TextInput
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
            label="Резервный код"
            placeholder="Например, FQ9aLc"
            toolTip="Доступен при включенном 2FA. Обычно состоит из 6 символов. Пример - FQ9aLc. Найти можно по инструкции ниже"
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

          {userData.type === "ps_plus" && (
            <TextInput
              label="2 Резервный код"
              placeholder="Например, Lo7Qlx"
              toolTip="Доступен при включенном 2FA. Обычно состоит из 6 символов. Пример - Lo7Qlx. Найти можно по инструкции ниже"
              value={userData.secondAccessCode}
              onChange={validateInput}
              name="secondAccessCode"
              type="text"
              className="input input-primary w-full max-w-xs"
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
            <Button
              onClick={() => {
                setModalType("Enable2FA");
                setOpenGuideModal(true);
              }}
            >
              Как включить резервные коды
            </Button>

            <Button
              onClick={() => {
                setModalType("WhereToFind");
                setOpenGuideModal(true);
              }}
            >
              Где найти резервный код?
            </Button>
          </div>
        </div>
      )}
      {(userData.type === "аккаунт" || userData.type === "аккаунт_баланс") && (
        <div className="flex flex-col justify-start items-center gap-2 w-full">
          <p className="text-center">
            Введите Email на который <span className="font-bold text-yellow-400">НЕ ЗАРЕГИСТРИРОВАН</span> аккаунт PlayStation
          </p>
          <p className="text-center">На него будет зарегистрирован новый Турецкий аккаунт PlayStation!</p>

          <TextInput
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

          <div className="border-2 border-yellow-400 flex justify-center items-center gap-2 max-w-3xl bg-background rounded-md p-4 my-4">
            <p className="z-[1] font-bold text-center">
              Убедитесь, что у вас есть доступ к данной почте. После регистрации мы НЕ СМОЖЕМ восстановить аккаунт в случае ошибки.
            </p>
          </div>
        </div>
      )}
      <ModalChequeMessage
        title={modalType !== "" && modalType === "Enable2FA" ? "Как включить резервные коды?" : "Где найти резервыный код?"}
        closeActionText={"ПРОДОЛЖИТЬ АКТИВАЦИЮ"}
        open={openGuideModal}
        onCloseModal={() => {
          setOpenGuideModal(false);
        }}
        onClose={() => {
          setOpenGuideModal(false);
          setModalType("");
        }}
        desktopChildren={
          <>
            {modalType === "Enable2FA" && (
              <>
                <p className="my-6">Перейдите на официальный сайт Playstation и войдите в свой Турецкий аккаунт</p>

                <Button asChild>
                  <Link
                    href="https://store.playstation.com/en-tr/pages/latest"
                    className="mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Войти на сайт PlayStation
                  </Link>
                </Button>

                <p className="my-6">
                  Нажмите кнопку <strong>Sing in</strong> и войдите в аккаунт
                </p>

                <Image
                  src={Image2FAKomputer1}
                  alt="Войти на сайт"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md  w-full h-auto"
                />

                <p className="my-6">Нажмите на свой аватар</p>

                <Image
                  src={Image2FAKomputer2}
                  alt="Открыть меню"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md  w-full h-auto"
                />

                <p className="my-6">
                  В открывшемся меню нажмите на <strong>Account Settings</strong>
                </p>

                <Image
                  src={Image2FAKomputer3}
                  alt="Перейти в Account Settings"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md  w-full h-auto"
                />

                <p className="my-6">
                  Перейдите во вкладку <strong>Security</strong>
                </p>

                <Image
                  src={Image2FAKomputer4}
                  alt="Перейти в Security"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md  w-full h-auto"
                />

                <p className="my-6">
                  Во вкладке <strong>Security</strong> найдите текст <strong>2-Step Verification</strong>
                  <br />
                  Если напротив надписи <strong>Status</strong> стоит <strong>Active</strong>, то вы можете сразу перейти в инструкцию{" "}
                  <Link className="cursor-pointer underline text-secondary" href="/guides/gde_posmotret_rezervnyi_kod">
                    Как посмотреть резервные коды
                  </Link>
                  <br />
                  Если напротив надписи <strong>Status</strong> стоит <strong>Disabled</strong>, нажмите справа кнопку{" "}
                  <strong>Edit</strong>
                </p>

                <Image
                  src={Image2FAKomputer5}
                  alt="Включить 2FA"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md  w-full h-auto"
                />

                <p className="my-6">
                  На следующем этапе включения 2FA мы рекомендуем выбирать <strong>Authenticator App</strong>, т.к. с кодами по номеру
                  телефона иногда бывают проблемы
                </p>

                <Image
                  src={Image2FAKomputer6}
                  alt="Выбрать Authenticator App"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md  w-full h-auto"
                />

                <p className="my-6">
                  Подтвердите свои действия, введя пароль от аккаунта
                  <br />
                  Также, если у вас не установлено приложение для подтверждения логина, вам будет предложено установить его
                </p>

                <Image
                  src={Image2FAKomputer7}
                  alt="Подтвердить пароль и установить приложение"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md  w-full h-auto"
                />

                <p className="my-6">
                  После установки приложения Google Authenticator, откройте его и отсканируйте QR-код, который отображается на экране
                </p>

                <Image
                  src={Image2FAKomputer8}
                  alt="Отсканировать QR-код или ввести код"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md  w-full h-auto"
                />

                <p className="my-6">
                  Вы почти у цели, коды на экране - это ваши <strong>резервные коды</strong>, вы можете их сфотографировать или куда-то
                  записать, каждый код можно использовать только один раз для входа в ваш аккаунт
                  <br />
                </p>

                <Image
                  src={Image2FAKomputer9}
                  alt="Сохранение резервных кодов"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md  w-full h-auto"
                />

                <p className="my-6">
                  Теперь <strong>ОБЯЗАТЕЛЬНО нажмите</strong> на пустой квадрат рядом с надписью{" "}
                  <strong>"I saved these backup codes for future use"</strong> и нажмите кнопку <strong>OK</strong>
                </p>

                <Image
                  src={Image2FAKomputer10}
                  alt="Нажать пустой квадрат и OK"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md  w-full h-auto"
                />

                <p className="my-6">
                  Если все было сделано успешно, то после нажатия кнопки <strong>OK</strong> вас перебросит на страницу входа в аккаунт
                  <br />
                  Выполнив вход используя код из приложения-аутентификатора вы попадете обратно на страницу включения 2FA
                  <br />
                  На этой странице справа от надписи <strong>Status</strong> вы увидите текст <strong>Active</strong>
                </p>

                <Image
                  src={Image2FAKomputer11}
                  alt="Нажать пустой квадрат и OK"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md  w-full h-auto"
                />

                <p className="my-6">
                  Поздравляем, вы успешно подключили 2FA на свой аккаунт PSN!
                  <br />
                  Один из резервных кодов запишите, он понадобится вам далее на странице активации
                </p>
              </>
            )}
            {modalType === "WhereToFind" && (
              <>
                <p className="mt-4 border-2 border-yellow-300 p-2 rounded-lg text-lg">
                  Резервные коды нужны для входа в аккаунт PSN при <strong>включенном 2FA</strong>, для включения 2FA ознакомьтесь с
                  нашей{" "}
                  <Link href="/guides/kak_vkluchit_2fa_na_akaunte_psn" className="text-yellow-500 font-semibold underline">
                    ИНСТРУКЦИЕЙ
                  </Link>
                </p>

                <p className="my-4">
                  Для того чтобы получить резервный код через веб-браузер вашего компьютера, необходимо перейти на официальный сайт Sony
                  PlayStation и войти, используя учетные данные <strong>вашей турецкой учетной записи</strong>
                </p>

                <Button asChild>
                  <Link
                    href="https://www.playstation.com/en-tr/"
                    className="btn btn-outline mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Перейти на официальный сайт
                  </Link>
                </Button>

                <Image
                  src={ImageWhereToFind2FA1}
                  alt="Зайти на сайт"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="mt-4 w-full h-auto rounded-md"
                  placeholder="blur"
                />

                <p className="my-4">
                  Как только вы введете учетные данные от турецкого аккаунта и успешно войдете, перейдите в раздел
                  <strong>"Настройки профиля"</strong>/<strong>"Account Settings"</strong>
                </p>
                <Image
                  src={ImageWhereToFind2FA2}
                  alt="Открыть настройки профиля"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="mt-4 w-full h-auto rounded-md"
                  placeholder="blur"
                />

                <p className="my-4">
                  В открывшемся окне необходимо перейти во вкладку <strong>"Безопасность"</strong>/<strong>"Security"</strong>
                </p>
                <Image
                  src={ImageWhereToFind2FA3}
                  alt="Зайти в раздел безопасность"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="mt-4 w-full h-auto rounded-md"
                  placeholder="blur"
                />

                <p className="my-4">
                  В открывшемся окне найдите пункт <strong>"Резервные коды"</strong>/<strong>"Backup Codes"</strong>
                </p>

                <p className="mb-4 border-2 border-warning p-2 rounded-lg text-lg">
                  Если вы не нашли пункт <strong>"Резервные коды"</strong>/<strong>"Backup Codes"</strong> значит у вас не включен 2FA -
                  вам нужно выполнить{" "}
                  <Link href="/guides/kak_vkluchit_2fa_na_akaunte_psn" className="text-secondary underline">
                    ИНСТРУКЦИЮ
                  </Link>
                </p>

                <Image
                  src={ImageWhereToFind2FA4}
                  alt="Зайти в раздел резервные коды"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="mt-4 w-full h-auto rounded-md"
                  placeholder="blur"
                />

                <p className="my-4">
                  В открывшейся вкладке хранятся ваши <strong>резервные коды</strong> <br />
                </p>

                <p className="my-4">Один из этих кодов вам нужно указать на странице активации на 4 этапе</p>

                <Image
                  src={ImageWhereToFind2FA5}
                  alt="Увидеть резервные коды"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="mt-4 w-full h-auto rounded-md"
                  placeholder="blur"
                />
              </>
            )}
          </>
        }
        mobileChildren={
          <>
            {modalType === "Enable2FA" && (
              <>
                <p className="my-6">Перейдите на официальный сайт Playstation и войдите в свой Турецкий аккаунт</p>

                <Button asChild>
                  <Link
                    href="https://store.playstation.com/en-tr/pages/latest"
                    className="mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Войти на сайт PlayStation
                  </Link>
                </Button>

                <p className="my-6">
                  Нажмите кнопку <strong>Sing in</strong> и войдите в аккаунт
                </p>

                <Image
                  src={Image2FATelefon1}
                  alt="Войти на сайт"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="my-6">Нажмите на свой аватар</p>
                <Image
                  src={Image2FATelefon2}
                  alt="Открыть меню"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="my-6">
                  На данной странице нажмите на <strong>Account Settings</strong>
                </p>

                <Image
                  src={Image2FATelefon3}
                  alt="Перейти в Account Settings"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="my-6">
                  Перейдите во вкладку <strong>Security</strong>
                </p>

                <Image
                  src={Image2FATelefon4}
                  alt="Перейти в Security"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="my-6">
                  Нажмите <strong>Continue</strong>
                </p>

                <Image
                  src={Image2FATelefon5}
                  alt="Нажать continue"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="my-6">
                  Во вкладке <strong>Security</strong> найдите текст <strong>2-Step Verification</strong>
                  <br />
                  Если напротив надписи <strong>Status</strong> стоит <strong>Active</strong>, то вы можете сразу перейти в инструкцию{" "}
                  <Link className="cursor-pointer underline text-secondary" href="/guides/gde_posmotret_rezervnyi_kod">
                    Как посмотреть резервные коды
                  </Link>
                  <br />
                  Если напротив надписи <strong>Status</strong> стоит <strong>Disabled</strong>, нажмите справа кнопку{" "}
                  <strong>Edit</strong>
                </p>

                <Image
                  src={Image2FATelefon6}
                  alt="Нажать на Edit"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="my-6">
                  На следующем этапе включения 2FA мы рекомендуем выбирать <strong>Authenticator App</strong>, т.к. с кодами по номеру
                  телефона иногда бывают проблемы
                </p>

                <Image
                  src={Image2FATelefon7}
                  alt="Выбрать authenticator app"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="my-6">
                  Теперь вам нужно отсканировать QR код любым приложением-аутентификатором, мы рекомендуем{" "}
                  <strong>Google Authenticator</strong>, вы можете скачать его на свой телефон из магазина приложений
                  <br />
                  После того как вы отсканируете данный QR код у вас на телефоне в приложении-аутентификаторе появится новый аккаунт,
                  после этого нажмите на данной странице <strong>Continue</strong>
                </p>

                <Image
                  src={Image2FATelefon8}
                  alt="Введите код и нажмите verify"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p>
                  {" "}
                  Если у вас нет второго телефона чтобы отсканировать QR код, вы можете скопировать строку под QR кодом и в ручном
                  режиме добавить ее в приложение <strong>Google Authenticator</strong>
                </p>

                <p className="my-6">
                  Откройте приложение <strong>Google Authenticator</strong>, нажмите на + справа снизу экрана и выберите{" "}
                  <strong>Enter setup key/Добавить вручную</strong>
                </p>

                <Image
                  src={ImageAuthenticator1}
                  alt="Добавить вручную"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="my-6">
                  В поле <strong>Account</strong> введите почту вашего PSN аккаунта
                  <br />В поле <strong>Key/Ключ</strong> вставьте ранее скопированную строку
                  <br />
                  Нажмите <strong>Add/Добавить</strong>
                </p>

                <Image
                  src={ImageAuthenticator2}
                  alt="Заполнить поля account и key"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="my-6">
                  После этого у вас на телефоне в приложении-аутентификаторе появится новый аккаунт, после этого нажмите на странице
                  браузера <strong>Continue</strong> <strong>Continue</strong>
                </p>

                <Image
                  src={Image2FATelefon9}
                  alt="Нажмите continue"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="my-6">
                  Теперь у вас в приложении-аутентификаторе начнут генерироваться коды каждые 30 секунд
                  <br />
                  Введите этот код в поле на экране и нажмите <strong>Verify</strong>
                </p>

                <Image
                  src={Image2FATelefon10}
                  alt="Введите код и нажмите verify"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="my-6">
                  Вы почти у цели, коды на экране - это ваши <strong>резервные коды</strong>, вы можете их сфотографировать или куда-то
                  записать, каждый код можно использовать только один раз для входа в ваш аккаунт
                  <br />
                </p>

                <p className="my-6">Один из кодов запишите отдельно, он понадобится на странице активации</p>

                <Image
                  src={Image2FATelefon11}
                  alt="Сохранение резервных кодов"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="my-6">
                  Теперь <strong>ОБЯЗАТЕЛЬНО нажмите</strong> на пустой квадрат рядом с надписью{" "}
                  <strong>"I saved these backup codes for future use"</strong> и нажмите кнопку <strong>OK</strong>
                </p>

                <Image
                  src={Image2FATelefon12}
                  alt="Нажать пустой квадрат и OK"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="my-6">
                  Если все было сделано успешно, то после нажатия кнопки <strong>OK</strong> вас перебросит на страницу входа в аккаунт
                  <br />
                  Выполнив вход используя код из приложения-аутентификатора вы попадете обратно на страницу включения 2FA
                  <br />
                  На этой странице справа от надписи <strong>Status</strong> вы увидите текст <strong>Active</strong>
                </p>

                <Image
                  src={Image2FATelefon13}
                  alt="Нажать пустой квадрат и OK"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="mt-6 mb-10">Поздравляем, вы успешно подключили 2FA на свой аккаунт PSN!</p>
              </>
            )}
            {modalType === "WhereToFind" && (
              <>
                <p className="mt-4 border-2 border-yellow-300 p-2 rounded-lg text-lg">
                  Резервные коды нужны для входа в аккаунт PSN при <strong>включенном 2FA</strong>, для включения 2FA ознакомьтесь с
                  нашей{" "}
                  <Link href="/guides/kak_vkluchit_2fa_na_akaunte_psn" className="text-yellow-400 font-semibold underline">
                    ИНСТРУКЦИЕЙ
                  </Link>
                </p>

                <p className="my-4">
                  Для того чтобы получить резервный код через веб-браузер вашего компьютера, необходимо перейти на официальный сайт Sony
                  PlayStation и войти, используя учетные данные <strong>вашей турецкой учетной записи</strong>
                </p>

                <Button asChild>
                  <Link
                    href="https://www.playstation.com/en-tr/"
                    className="btn btn-outline mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Перейти на официальный сайт
                  </Link>
                </Button>

                <Image
                  src={ImageWhereToFind2FATelefon1}
                  alt="Зайти на сайт"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="mt-4 justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="my-4">
                  Как только вы введете учетные данные от турецкого аккаунта и успешно войдете, перейдите в раздел
                  <strong>"Настройки профиля"</strong>/<strong>"Account Settings"</strong>
                </p>
                <Image
                  src={ImageWhereToFind2FATelefon2}
                  alt="Открыть меню"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />
                <Image
                  src={ImageWhereToFind2FATelefon3}
                  alt="Зайти в раздел настройки профиля"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="mt-4 justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="my-4">
                  В открывшемся окне необходимо перейти во вкладку <strong>"Безопасность"</strong>/<strong>"Security"</strong> и
                  подтвердите действие
                </p>
                <Image
                  src={ImageWhereToFind2FATelefon4}
                  alt="Зайти в раздел безопасность"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />
                <Image
                  src={ImageWhereToFind2FATelefon5}
                  alt="Подтвердить вход в раздел безопасность"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="mt-4 justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="my-4">
                  В открывшемся окне пролистайте страницу до пункта <strong>"Резервные коды"</strong>/<strong>"Backup Codes"</strong>
                </p>

                <p className="mb-4 border-2 border-warning p-2 rounded-lg text-lg">
                  Если вы не нашли пункт <strong>"Резервные коды"</strong>/<strong>"Backup Codes"</strong> значит у вас не включен 2FA -
                  вам нужно выполнить{" "}
                  <Link href="/guides/kak_vkluchit_2fa_na_akaunte_psn" className="text-secondary underline">
                    ИНСТРУКЦИЮ
                  </Link>
                </p>

                <Image
                  src={ImageWhereToFind2FATelefon6}
                  alt="Зайти в раздел резервные коды"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />

                <p className="my-4">
                  В открывшейся вкладке хранятся ваши <strong>резервные коды</strong> <br />
                </p>

                <p className="my-4">Один из этих кодов вам нужно указать на странице активации на 4 этапе</p>

                <Image
                  src={ImageWhereToFind2FATelefon7}
                  alt="Увидеть резервные коды"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
                />
              </>
            )}
          </>
        }
      />
    </div>
  );
};

export default ActivationStep4;
