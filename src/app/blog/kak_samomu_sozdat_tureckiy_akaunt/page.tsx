/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import GoBack from "../GoBack";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Как создать Турецкий PlayStation аккаунт",
  description: "Как самостоятельно создать Турецкий PlayStation аккаунт в 2023 для PS4/PS5 без VPN и не получить бан на аккаунт",
  openGraph: {
    title: "Как создать Турецкий PlayStation аккаунт 2023",
    description: "Как самостоятельно создать Турецкий PlayStation аккаунт в 2023 для PS4/PS5 без VPN и не получить бан на аккаунт",
    url: "/blog/kak_samomu_sozdat_tureckiy_akaunt",
    images: ["/catalogue_icons/playstation.png"],
    type: "article",
  },
  alternates: {
    canonical: "/blog/kak_samomu_sozdat_tureckiy_akaunt",
  },
};

function KakSamomuSozdatTureckiyAkaunt({}) {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-10">
      <div className="flex flex-col min-[1240px]:flex-row items-center gap-4">
        <GoBack />
        <h1 className="text-3xl lg:text-4xl font-bold" id="heading">
          Как создать турецкий аккаунт в PS Store на PS4/PS5
        </h1>
      </div>

      <div
        className="mt-10 bg-sky-800 flex flex-col items-center pt-6 pb-12 px-5"
        style={{ background: "#00439C", borderRadius: "30px" }}
      >
        <div className="flex w-full max-w-[1029px] flex-col mb-8 max-md:max-w-full">
          <h2 className="text-white text-4xl font-black self-stretch mt-12 max-md:max-w-full max-md:mt-10">
            Как создать турецкий аккаунт в PSN в 2023 <br />и не словить бан?
          </h2>
          <div className="bg-white self-stretch shrink-0 h-px mt-6 max-md:max-w-full"></div>
          <div className="text-white text-2xl self-stretch mt-10 max-md:max-w-full">
            В данной статье вы узнаете:{" "}
            <ul>
              <li>
                <Link className="underline" href="/blog/kak_samomu_sozdat_tureckiy_akaunt#kak-sozdat-tureckiy-ak">
                  1. Как создать турецкий аккаунт из России
                </Link>
              </li>
              <li>
                <Link className="underline" href="/blog/kak_samomu_sozdat_tureckiy_akaunt#kak-kupit-ak">
                  2. К кому обратиться за помощью по созданию аккаунта
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" items-left ">
        <div className="text-3xl font-black self-stretch mt-12 px-6 max-md:max-w-full max-md:mt-10" id="kak-sozdat-tureckiy-ak">
          1. Как создать турецкий аккаунт из России?
        </div>
        <div className="text-1xl justify-center  px-6 py-4 max-md:max-w-full ">
          В настоящее время, создание турецкого аккаунта в PS Store из России остается актуальным запросом для многих геймеров. Однако,
          с учетом изменений в политике доступа, создать аккаунт без использования VPN стало невозможным.
          <br />
          <br />
          Для создания турецкого аккаунта из России Вам потребуется:
          <br />
          <br />
          <ul>
            <li className="mb-2">
              🌐 Выбор подходящего VPN. К сожалению, далеко не все VPN-сервисы предоставят возможность по регистрации турецкого
              аккаунта!
            </li>
            <li className="mb-2">
              📧 Почта. Важно знать, что в 2023 году регистрация на российские почтовые сервисы (с доменом .ru) может негативно
              сказаться в дальнейшем на ваш аккаунт (возможен бан)
            </li>
            <li className="mb-2">
              📱 Аккаунт в PS Store. Даже если у Вас успешно получилось зарегистрировать аккаунт, к сожалению, оплатить с помощью
              российский банковских карт у Вас не получится
            </li>
            <ul>
              Не забывайте, что использование VPN для создания аккаунта может быть запрещено правилами сервиса, поэтому ознакомьтесь с
              политиками использования перед началом процесса.
              <br />
              <br />
              ❗️ Следите за обновлениями, так как политика доступа к сервисам может меняться. Удачи в создании турецкого аккаунта и
              приятной игры!
            </ul>
          </ul>
        </div>

        <div className="text-3xl font-black self-stretch mt-6 px-6 max-md:max-w-full max-md:mt-10">
          2. Регистрация турецкого аккаунта. Подробный гайд (с картинками)
        </div>
        <div className="text-1xl justify-center  px-6 py-4 max-md:max-w-full ">
          Для того, чтобы зарегистрироваться в турецком PSN Вам потребуется подготовить почту Gmail
          <br />
          <br />
          ❗ Важно! Почта, на которую будем регистрировать турецкий аккаунт, не должна быть использована ранее в PSN.
          <br />
          <br />
          Для создания турецкого аккаунта из России Вам потребуется: Для создания турецкого аккаунта из России Вам потребуется:
          <br />
          <ul>
            <li className="mb-2 py-2">
              1. Для начала перейдите на официальный сайт Playstation Store (Турецкий) - <br />
              <a
                href="https://www.playstation.com/en-tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-20  py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                Перейти
              </a>
            </li>

            <Image
              src="/blog_data/kak_samomu_sozdat_tureckiy_akaunt/1.png"
              alt="Открыть сайт PlayStation"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </ul>
          <ul>
            <li className="mb-2 py-2 pt-10">
              2. Нажмите на кнопку <strong>"Создать учетную запись" </strong>
              <br />
            </li>

            <Image
              src="/blog_data/kak_samomu_sozdat_tureckiy_akaunt/2.png"
              alt="Нажать кнопку создать учетную запись"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-1/2 h-auto"
            />
          </ul>
          <ul>
            <li className="mb-2 py-2 pt-10">
              3. Нажмите на кнопку <strong>"Создать"</strong>
              <br />
            </li>

            <Image
              src="/blog_data/kak_samomu_sozdat_tureckiy_akaunt/3.png"
              alt="Нажать кнопку создать"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-1/2 h-auto"
            />
          </ul>
          <ul>
            <li className="mb-2 py-2 pt-10">
              4. Выберите <strong>Turkey</strong> в качестве региона
            </li>

            <Image
              src="/blog_data/kak_samomu_sozdat_tureckiy_akaunt/4.png"
              alt="выбрать turkey"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-1/2 h-auto"
            />
          </ul>
          <ul>
            <li className="mb-2 py-2 pt-10">
              5. Выберите <strong>Дату рождения</strong> и нажмите кнопку <strong>"Next"</strong> <br />
              ❗️ Обязательно введите корректную дату или запишите дату рождения, чтобы не забыть. При восстановлении аккаунта PSN
              попросит ввести именно ее для восстановления
            </li>

            <Image
              src="/blog_data/kak_samomu_sozdat_tureckiy_akaunt/5.png"
              alt="выбрать дату рождения"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-1/2 h-auto"
            />
          </ul>
          <ul>
            <li className="mb-2 py-2 pt-10">
              6. Введите <strong>почту</strong> и <strong>пароль</strong>, после нажмите кнопку <strong>"Next"</strong> <br />
              ❗️ Рекомендуется использовать почту gmail, которая ранее не была зарегистрирована в PSN
            </li>
            <Image
              src="/blog_data/kak_samomu_sozdat_tureckiy_akaunt/6.png"
              alt="Введите почту"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-1/2 h-auto"
            />
          </ul>
          <ul>
            <li className="mb-2 py-2 pt-10">
              7. Далее Вам необходимо указать город, провинцию, индекс <br />
              Пример: <br /> <strong>City: Istanbul</strong> <br />
              <strong>Province: Maltepe</strong> <br />
              <strong>Postcode: 34872</strong> <br />
              После этого нажмите <strong> "Next"</strong> <br />
            </li>
            <Image
              src="/blog_data/kak_samomu_sozdat_tureckiy_akaunt/7.png"
              alt="Указать город"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-1/2 h-auto"
            />
          </ul>
          <ul>
            <li className="mb-2 py-2 pt-10">
              8. Далее Вам необходимо выбрать свободный <strong>Online ID</strong> и ввести <strong> Имя (Name) </strong> <br />
              После этого нажмите <strong> "Next"</strong> <br />
            </li>
            <Image
              src="/blog_data/kak_samomu_sozdat_tureckiy_akaunt/8.png"
              alt="Выберите никнейм"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-1/2 h-auto"
            />
          </ul>
          <ul>
            <li className="mb-2 py-2 pt-10">
              9. На последнем этапе просто нажимаем на кнопку <strong>"Agree and Create Account"</strong>
            </li>
            <Image
              src="/blog_data/kak_samomu_sozdat_tureckiy_akaunt/9.png"
              alt="Создать аккаунт"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-1/2 h-auto"
            />
          </ul>
          <ul>
            <li className="mb-2 py-2 pt-10">
              <strong>ПОЗДРАВЛЯЕМ, ВАШ АККАУНТ СОЗДАН</strong>
            </li>
            <Image
              src="/blog_data/kak_samomu_sozdat_tureckiy_akaunt/10.png"
              alt="Создать аккаунт"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full lg:w-1/2 h-auto"
            />
          </ul>
        </div>

        <div className="text-3xl font-black self-stretch mt-6 px-6 max-md:max-w-full max-md:mt-10" id="kak-kupit-ak">
          3. А можно просто купить готовый аккаунт?
        </div>
        <div className="text-1xl justify-center  px-6 py-4 max-md:max-w-full ">
          Если вы столкнулись со сложностями или попросту нет времени, не отчаивайтесь! <br />
          Самый простой способ решения проблемы купить турецкий аккаунт PS за символическую сумму в "мнеподписку.рф" <br />
          Мы создадим его для вас сами на вашу почту, а все его данные вы сможете сменить позже <br />
        </div>
        <Link href="/playstation_account" className="btn btn-secondary font-black text-2xl w-full max-w-full text-white">
          КУПИТЬ
        </Link>
      </div>
    </div>
  );
}

export default KakSamomuSozdatTureckiyAkaunt;
