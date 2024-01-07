"use client";

import HeroChoose from "@/components/HeroChoose/HeroChoose";

const Description = () => {
  return (
    <div className="mt-10">
      <h2 className="text-xl lg:text-2xl font-bold" id="description">
        Описание
      </h2>
      <p className="text-lg font-medium mt-4">
        <strong>ВНИМАНИЕ!</strong> Из-за проблем со стороны PlayStation на данный момент наблюдаются сложности при пополнении аккаунтов
        зарегистрированных после 1.12.2023. При возникновении трудностей пополнение может быть преобразовано в приобретение предметов из
        корзины или отложено на некоторый срок.{" "}
        <button
          className="text-secondary underline"
          onClick={() => {
            document.getElementById("NewAccountProblems")!.setAttribute("open", "");
            const elem = document.getElementById("NewAccountProblems");
            window.scrollTo({
              top: elem!.offsetTop,
              behavior: "instant",
            });
          }}
        >
          Подробнее
        </button>
      </p>
      <p className="text-lg font-medium mt-4">
        Быстрое и безопасное приобретение подписки на ваш личный Турецкий аккаунт
        <br />
        Если по каким-либо причинам вне нашего контроля подписка на ваш аккаунт не приобретается - услуга превращается в выкуп корзины
        равноценную стоимости подписки
      </p>
      <HeroChoose
        firstText="Выберите подписку и срок действия"
        secondText="Оплатите удобным для вас способом"
        thirdText="Получите PS PLUS на ваш Турецкий аккаунт"
      />
    </div>
  );
};

export default Description;
