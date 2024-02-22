"use client";

import HeroChoose from "@/components/HeroChoose/HeroChoose";

const Description = () => {
  return (
    <div className="mt-10">
      <h2 className="text-xl lg:text-2xl font-bold" id="description">
        Описание
      </h2>
      <p className="text-lg font-medium mt-4">
        <span className="font-bold text-warning">ВНИМАНИЕ!</span> Из-за проблем со стороны PlayStation на данный момент наблюдаются
        сложности при пополнении аккаунтов зарегистрированных после 1.12.2023. При возникновении трудностей пополнение может быть
        преобразовано в приобретение предметов из корзины или отложено на некоторый срок.{" "}
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
        Сервис МНЕПОДПИСКУ позволит вам быстро и удобно пополнить свой кошелек турецкого playstation аккаунта. Пополнение происходит в
        три простых этапа
        <br />
        Если по каким-либо причинам вне нашего контроля пополнение на ваш аккаунт не проходит - услуга превращается в выкуп корзины
      </p>

      <HeroChoose
        firstText="Введите данные и сумму к пополнению"
        secondText="Оплатите удобным для вас способом"
        thirdText="Получите деньги на аккаунт playstation"
      />
    </div>
  );
};

export default Description;
