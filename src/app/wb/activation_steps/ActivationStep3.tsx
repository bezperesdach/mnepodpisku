/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import TextInput from "@/components/TextInput/TextInput";
import { ConfirmationType, UserData } from "../WbClient";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModalChequeMessage } from "../modal-cheque-message";
import Image from "next/image";

import ImageDeskMessage1 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_komputer/pc_photo_1.png";
import ImageDeskMessage2 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_komputer/pc_photo_2.png";
import ImageDeskMessage3 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_komputer/pc_photo_3.png";
import ImageDeskMessage4 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_komputer/pc_photo_4.png";
import ImageDeskMessage5 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_komputer/pc_photo_5.png";
import ImageDeskMessage6 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_komputer/pc_photo_6.png";
import ImageDeskMessage7 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_komputer/pc_photo_7.png";
import ImageDeskMessage8 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_komputer/pc_photo_8.png";

import ImageDeskCheque1 from "@/../public/guides_data/kak_otpravit_chek_wb_komputer/pc_image_1.png";
import ImageDeskCheque2 from "@/../public/guides_data/kak_otpravit_chek_wb_komputer/pc_image_2.png";
import ImageDeskCheque3 from "@/../public/guides_data/kak_otpravit_chek_wb_komputer/pc_image_3.png";
import ImageDeskCheque4 from "@/../public/guides_data/kak_otpravit_chek_wb_komputer/pc_image_4.png";
import ImageDeskCheque5 from "@/../public/guides_data/kak_otpravit_chek_wb_komputer/pc_image_5.png";
import ImageDeskCheque6 from "@/../public/guides_data/kak_otpravit_chek_wb_komputer/pc_image_6.png";

import ImageChequeMobIcon from "@/../public/guides_data/kak_otpravit_chek_wb_prilozhenie/send_email_icon.png";
import ImageChequeMob1 from "@/../public/guides_data/kak_otpravit_chek_wb_prilozhenie/prilozhenie_image_1.png";
import ImageChequeMob2 from "@/../public/guides_data/kak_otpravit_chek_wb_prilozhenie/prilozhenie_image_2.png";
import ImageChequeMob3 from "@/../public/guides_data/kak_otpravit_chek_wb_prilozhenie/prilozhenie_image_3.png";
import ImageChequeMob4 from "@/../public/guides_data/kak_otpravit_chek_wb_prilozhenie/prilozhenie_image_4.png";
import ImageChequeMob5 from "@/../public/guides_data/kak_otpravit_chek_wb_prilozhenie/prilozhenie_image_5.png";
import ImageChequeMob6 from "@/../public/guides_data/kak_otpravit_chek_wb_prilozhenie/prilozhenie_image_6.png";

import ImageMessageMob1 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_telefon/chat_phone_1.png";
import ImageMessageMob2 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_telefon/chat_phone_2.png";
import ImageMessageMob3 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_telefon/chat_phone_3.png";
import ImageMessageMob4 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_telefon/chat_phone_4.png";
import ImageMessageMob5 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_telefon/chat_phone_5.png";
import ImageMessageMob6 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_telefon/chat_phone_6.png";
import ImageMessageMob7 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_telefon/chat_phone_7.png";
import ImageMessageMob8 from "@/../public/guides_data/kak_otrpavit_soobshenie_prodavcu_wb_telefon/chat_phone_8.png";

import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

type Props = {
  userData: UserData;
  confirmationShow: boolean;
  confirmationType: ConfirmationType;
  confirmationSent: boolean;
  // eslint-disable-next-line no-unused-vars
  changeConfirmationShow: (type: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  changeConfirmationType: (type: ConfirmationType) => void;
  // eslint-disable-next-line no-unused-vars
  changeConfirmationSent: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  onChange: (name: string, value: string) => void;
  // eslint-disable-next-line no-unused-vars
  changeAllowToNextStage: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  changeTitle: (title: string) => void;
};

function padZero(value: number) {
  return value < 10 ? `0${value}` : value;
}

const ActivationStep3 = ({
  userData,
  onChange,
  confirmationShow,
  confirmationType,
  confirmationSent,
  changeConfirmationShow,
  changeConfirmationSent,
  changeConfirmationType,
  changeAllowToNextStage,
  changeTitle,
}: Props) => {
  const [openGuideModal, setOpenGuideModal] = useState(false);
  const [inputError, setInputError] = useState("");
  // const [canCopyCode, setCanCopyCode] = useState(true);

  // const copyCode = () => {
  //   setCanCopyCode(false);
  //   setTimeout(() => {
  //     setCanCopyCode(true);
  //   }, 1000);
  // };

  useEffect(() => {
    changeTitle("Подтверждение покупки");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const validatePrice = (value: string) => {
      if (value.length > 0 && !/^[\d]+(?:[.,]\d*)?$/.test(value)) {
        setInputError("Сумма должна состоять только из цифр");
      } else {
        setInputError("");
      }
    };

    validatePrice(userData.price);
  }, [userData.price]);

  useEffect(() => {
    if (confirmationSent) {
      const currentDate = new Date();

      // Adjust the date to GMT+3
      currentDate.setHours(currentDate.getHours() + 3);

      // Format the date as DD.MM.YY HH:MM
      const formattedDate = `${padZero(currentDate.getUTCDate())}.${padZero(currentDate.getUTCMonth() + 1)}.${currentDate
        .getUTCFullYear()
        .toString()
        .slice(-2)} ${padZero(currentDate.getUTCHours())}:${padZero(currentDate.getUTCMinutes())}`;

      onChange("priceDate", formattedDate);
    } else {
      onChange("priceDate", "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmationSent]);

  useEffect(() => {
    if (userData.price !== "") {
      if (inputError === "" && confirmationSent) {
        changeAllowToNextStage(true);
      } else {
        changeAllowToNextStage(false);
      }
    } else {
      changeAllowToNextStage(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.price, inputError, confirmationSent]);

  return (
    <div
      className={cn("flex flex-col justify-between items-center px-6 py-2 w-full min-h-[340px]", {
        "justify-center": !confirmationShow,
      })}
    >
      {confirmationType === "message" ? (
        <>
          <div className="flex flex-col justify-start items-center gap-2 w-full">
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                className="my-2"
                onClick={() => {
                  changeConfirmationShow(true);
                  setOpenGuideModal(true);
                }}
              >
                Отправить сообщение продавцу
              </Button>

              <Button variant="secondary" className="my-2" onClick={() => changeConfirmationType("cheque")}>
                У меня есть чек
              </Button>
            </div>

            {confirmationShow && (
              <>
                <p className="text-sm text-center bg-[#030712] border-2 border-red-400 p-2 rounded-lg mt-2">
                  При ошибочном или намеренном несоблюдении инструкций мы оставляем за собой право в переносе активации на установленный
                  нами срок и/или отказе в активации
                </p>

                <div className="flex justify-between items-center gap-2 w-full max-w-xs mt-4">
                  <p className="text-xl font-semibold">Сообщение отправлено</p>
                  <Switch checked={confirmationSent} onCheckedChange={() => changeConfirmationSent(!confirmationSent)} />
                </div>

                <TextInput
                  maxWidth
                  label="Укажите сумму приобретения в валюте вашей страны"
                  hidden={!confirmationSent}
                  value={userData.price}
                  onChange={(e) => {
                    const value = e.currentTarget.value.trim().toUpperCase().slice(0, 8);

                    onChange("price", value);
                  }}
                  type="text"
                  inputMode="numeric"
                  className="input input-primary w-full max-w-xs"
                  spellCheck={false}
                  autoCorrect="off"
                  autoComplete="off"
                  autoCapitalize="off"
                  error={inputError}
                />
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-start items-center gap-2 w-full">
            <div className="flex flex-wrap justify-center gap-2 ">
              <Button
                className="my-2"
                onClick={() => {
                  changeConfirmationShow(true);
                  setOpenGuideModal(true);
                }}
              >
                Отправить чек
              </Button>
              <Button
                variant="secondary"
                className="btn btn-secondary text-white my-2"
                onClick={() => changeConfirmationType("message")}
              >
                У меня нет чека
              </Button>
            </div>

            {confirmationShow && (
              <>
                <p className={"text-sm text-center bg-[#030712] border-2 border-red-400 p-2 rounded-lg mt-2"}>
                  <strong>СКРИНШОТЫ, ПДФ ФАЙЛЫ ИЛИ СООБЩЕНИЯ С ЛИЧНОЙ ПОЧТЫ НЕ ПРИНИМАЕМ.</strong> При ошибочном или намеренном
                  несоблюдении инструкций мы оставляем за собой право в переносе активации на установленный нами срок и/или отказе в
                  активации
                </p>

                <div className="flex justify-between items-center gap-2 w-full max-w-xs mt-4">
                  <p className="text-xl font-semibold">Чек отправлен</p>
                  <Switch checked={confirmationSent} onCheckedChange={() => changeConfirmationSent(!confirmationSent)} />
                </div>

                <TextInput
                  maxWidth
                  label="Укажите сумму чека в рублях"
                  hidden={!confirmationSent}
                  value={userData.price}
                  onChange={(e) => {
                    const value = e.currentTarget.value.trim().toUpperCase().slice(0, 8);

                    onChange("price", value);
                  }}
                  type="text"
                  inputMode="numeric"
                  className="input input-primary w-full max-w-xs"
                  spellCheck={false}
                  autoCorrect="off"
                  autoComplete="off"
                  autoCapitalize="off"
                  error={inputError}
                />
              </>
            )}
          </div>
        </>
      )}
      <ModalChequeMessage
        title={confirmationType === "message" ? "Как отправить сообщение продавцу?" : "Как отправить чек?"}
        closeActionText={confirmationType === "message" ? "СООБЩЕНИЕ О ПОКУПКЕ И КОД ОТПРАВЛЕНЫ" : "ЧЕК ОТПРАВЛЕН"}
        open={openGuideModal}
        onCloseModal={() => {
          setOpenGuideModal(false);
        }}
        onClose={() => {
          changeConfirmationSent(true);
          setOpenGuideModal(false);
        }}
        desktopChildren={
          confirmationType === "message" ? (
            <>
              <p className="my-4">
                Для того чтобы отправить сообщение продавцу на Wildberries необходимо перейти на официальный сайт Wildberries <br />
                Убедитесь, что вы вошли под учетной записью, через которую была совершена покупка
              </p>

              <Button asChild>
                <Link
                  href="https://www.wildberries.ru/security/login?returnUrl=https%3A%2F%2Fwww.wildberries.ru%2Fsecurity%2Flogin%2F/"
                  className="mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Войти на Wildberries под своей учетной записью
                </Link>
              </Button>

              <Image
                src={ImageDeskMessage1}
                alt="Войти на сайт"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="mt-4 justify-center rounded-md w-full h-auto"
              />

              <p className="my-4">
                Как только вы введете учетные данные от вашего аккаунта и успешно войдете, наведитесь мышкой на раздел
                <strong>"Профиль"</strong> и перейдите в <strong> "Покупки"</strong>
              </p>
              <Image
                src={ImageDeskMessage2}
                alt="Профиль"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md w-full h-auto"
              />
              <Image
                src={ImageDeskMessage3}
                alt="Покупки"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="mt-4 justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
              />

              <p className="my-4">
                В открывшемся окне вам необходимо найти покупку нашей карточки <br />
                Снизу от изображения товара вы найдете надпись <strong>"Чат с продавцом"</strong> - Вам необходимо перейти по данной
                кнопке
              </p>
              <Image
                src={ImageDeskMessage4}
                alt="Карточка товара"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md"
              />
              <Image
                src={ImageDeskMessage5}
                alt="Чат с продавцом"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="mt-6 justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
              />

              <p className="my-4">
                В открывшемся окне Вам будет предложено отправить первое сообщение, которое поможет нам увидеть, что Ваша карточка была
                выкуплена <br />
                <strong>Обязательно отправьте данное сообщение</strong>
              </p>
              <Image
                src={ImageDeskMessage6}
                alt="Отправка сообщения от WB"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md w-full h-auto"
              />

              <p className="my-4">
                После отправки предложенного сообщения Вам необходимо отправить второе сообщение, в котором вы укажите свой код
                активации, который изображен на полученной карточке и состоит из 8 знаков
              </p>
              <Image
                src={ImageDeskMessage7}
                alt="Отправка кода активации"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md w-full h-auto"
              />

              <p className="my-4">
                Убедитесь, что Ваши сообщения выглядят следующим образом! <br />
                Мы не сможем проверить Вашу покупку если диалог с вами будет пустой или у нас будут иные сообщения, не содержащие
                вышеуказанную информацию.
              </p>
              <Image
                src={ImageDeskMessage8}
                alt="Как должны выглядеть сообщения"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md w-full h-auto"
              />
            </>
          ) : (
            <>
              <p className="my-4">
                Для отправки чека с компьютера Вам необходимо открыть{" "}
                <Link className="text-primary underline" href="https://www.wildberries.ru/" target="_blank" rel="noopener noreferrer">
                  Сайт Wildberries
                </Link>{" "}
                и войти под пользователем, который осуществлял покупку карточки
              </p>

              <Button asChild>
                <Link href="https://www.wildberries.ru/" className="mt-2" target="_blank" rel="noopener noreferrer">
                  Перейти на сайт Wildberries
                </Link>
              </Button>

              <p className="my-4">
                После успешного входа в аккаунт перейдите в раздел <strong>"Профиль"</strong>
              </p>
              <Image
                src={ImageDeskCheque1}
                alt="Открыть профиль"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md w-full h-auto"
              />

              <p className="my-4">
                После этого Вам необходимо перейти в раздел <strong>"Чеки"</strong>
              </p>
              <Image
                src={ImageDeskCheque2}
                alt="Открыть раздел чеки"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md w-full h-auto"
              />

              <p className="my-4">
                После найдите чек, в котором указана наша карточка и наведите мышкой на значок <br />
                Данный значок является кнопкой <strong>"Отправить на Email"</strong>
              </p>

              <Image
                src={ImageDeskCheque3}
                alt="Кнопка отправить чек"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md w-full h-auto"
              />
              <Image
                src={ImageDeskCheque4}
                alt="Кнопка отправить чек - 2"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="mt-4 justify-center rounded-md w-full h-auto"
              />

              <p className="my-4">
                В открывшемся окне укажите нашу почту: <br />
                <span className="text-lg font-bold">help@mnepodpisku.ru</span>
                <br /> и нажмите <strong>"Отправить"</strong>
              </p>
              <Image
                src={ImageDeskCheque5}
                alt="Окно отправки чека"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md w-full h-auto"
              />
              <Image
                src={ImageDeskCheque6}
                alt="Окно отправки чека"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="mt-4 justify-center rounded-md w-full h-auto"
              />
            </>
          )
        }
        mobileChildren={
          confirmationType === "message" ? (
            <>
              <p className="mt-4 border-2 border-yellow-300 p-2 rounded-lg sm:text-lg">
                <span className="font-black">ВНИМАНИЕ!</span> Отправить сообщение продавцу можно только с сайта Wildberries,{" "}
                <span className="font-black text-red-400">В ПРИЛОЖЕНИИ ТАКОГО ФУНКЦИОНАЛА НЕТ!</span>
              </p>

              <p className="my-4">
                Для того чтобы отправить сообщение продавцу на Wildberries необходимо перейти на официальный сайт Wildberries <br />
                Убедитесь, что вы вошли под учетной записью, через которую была совершена покупка
              </p>

              <p className="my-4">Скопируйте ссылку ниже, откройте в браузере новую вкладку и вставьте ее туда</p>

              <p className="md:text-2xl font-bold">https://www.wildberries.ru/security/login</p>

              <Image
                src={ImageMessageMob1}
                alt="Войти на сайт"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="mt-4 justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
              />

              <p className="my-4">
                Как только вы введете учетные данные от вашего аккаунта и успешно войдете, перейдите в раздел
                <strong> &quot;Профиль&quot;</strong> который находится в правом нижнем углу
              </p>
              <Image
                src={ImageMessageMob2}
                alt="Перейти в профиль"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
              />

              <p className="my-4">
                В открывшемся окне вам необходимо перейти в раздел <strong>&quot;Покупки&quot;</strong>
              </p>

              <Image
                src={ImageMessageMob3}
                alt="Перейти в покупки"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
              />

              <p className="my-4">
                В открывшемся окне найдите покупку нашего товара и нажмите на три точки справа от карточки <br />В открывшемся окне
                выберите <strong>&quot;Чат с продавцом&quot;</strong>
              </p>
              <Image
                src={ImageMessageMob4}
                alt="Три точки"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
              />

              <p className="mt-4 border-2 border-yellow-300 p-2 rounded-lg text-lg">
                <span className="font-black text-yellow-400">НЕ НАШЛИ КНОПКУ &quot;ЧАТ С ПРОДАВЦОМ&quot;?</span> <br />
                <br />
                ОТПРАВИТЬ СООБЩЕНИЕ ПРОДАВЦУ МОЖНО ТОЛЬКО <span className="font-black text-yellow-400">С САЙТА WILDBERRIES</span>,{" "}
                <br />
                <br />
                <span className="font-black text-red-400">В ПРИЛОЖЕНИИ ТАКОГО ФУНКЦИОНАЛА НЕТ!</span>
              </p>
              <Image
                src={ImageMessageMob5}
                alt="Чат с продавцом"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="mt-4 justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
              />

              <p className="my-4">
                В открывшемся окне Вам будет предложено отправить первое сообщение, которое поможет нам увидеть, что Ваша карточка была
                выкуплена <br />
                <strong>Обязательно отправьте данное сообщение</strong>
              </p>
              <Image
                src={ImageMessageMob6}
                alt="Отправка сообщения от WB"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
              />

              <p className="my-4">
                После отправки предложенного сообщения Вам необходимо отправить второе сообщение, в котором вы укажите свой код
                активации, который изображен на полученной карточке и состоит из 8 знаков
              </p>
              <Image
                src={ImageMessageMob7}
                alt="Отправка кода активации"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
              />

              <p className="my-4">
                Убедитесь, что Ваши сообщения выглядят следующим образом! <br />
                Мы не сможем проверить Вашу покупку если диалог с вами будет пустой или у нас будут иные сообщения, не содержащие
                вышеуказанную информацию.
              </p>
              <Image
                src={ImageMessageMob8}
                alt="Как выглядит изображение"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
              />
            </>
          ) : (
            <>
              <p className="my-4">
                Для отправки чека с приложения телефона Вам необходимо открыть приложение Wildberries и войти под пользователем, который
                осуществлял покупку карточки
              </p>

              <p className="my-4">
                После успешного входа в аккаунт перейдите в раздел <strong>"Профиль"</strong>
              </p>
              <Image
                src={ImageChequeMob1}
                alt="Открыть профиль"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
              />

              <p className="my-4">
                После этого Вам необходимо перейти в раздел <strong>"Финансы"</strong>
              </p>
              <Image
                src={ImageChequeMob2}
                alt="Открыть раздел финансы"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
              />

              <p className="my-4">
                После Вам необходимо перейти в раздел <strong>"Эл. чеки"</strong>
              </p>

              <Image
                src={ImageChequeMob3}
                alt="Открыть раздел финансы эл. чеки"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
              />
              <div className="my-4 inline-flex items-center gap-2">
                <p>После найдите чек, в котором указана наша карточка и нажмите на значок</p>
                <Image src={ImageChequeMobIcon} alt="Значок отправки чеки" width={0} height={0} sizes="10vw" className="w-9 h-9" />
              </div>
              <p className="my-4">
                Данный значок является кнопкой <strong>"Отправить на Email"</strong>
              </p>
              <Image
                src={ImageChequeMob4}
                alt="Открыть раздел финансы эл. чеки"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
              />

              <p className="my-4">
                В открывшемся окне укажите нашу почту: <br />
                <span className="text-lg font-bold">help@mnepodpisku.ru</span>
                <br /> и нажмите <strong>"Отправить"</strong>
              </p>
              <Image
                src={ImageChequeMob5}
                alt="Окно отправки чека"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
              />
              <Image
                src={ImageChequeMob6}
                alt="Успешная отправка чека"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                className="mt-4 mb-10 justify-center rounded-md lg:w-1/3 sm:w-1/2 w-full h-auto"
              />
            </>
          )
        }
      />
    </div>
  );
};

export default ActivationStep3;
