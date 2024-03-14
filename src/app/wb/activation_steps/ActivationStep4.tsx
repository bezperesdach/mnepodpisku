import { useEffect } from "react";
import { UserData } from "../WbClient";
import { cn } from "@/lib/utils";

type Props = {
  userData: UserData;
  // eslint-disable-next-line no-unused-vars
  onChange: (name: string, value: string) => void;
  // eslint-disable-next-line no-unused-vars
  changeAllowToNextStage: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  changeTitle: (title: string) => void;
};

const ActivationStep4: React.FC<Props> = ({ userData, onChange, changeAllowToNextStage, changeTitle }: Props) => {
  useEffect(() => {
    // onChange("type", "");
    changeAllowToNextStage(false);
    changeTitle("Выбор услуги");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userData.type !== "") {
      changeAllowToNextStage(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.type]);

  return (
    <div className="flex flex-col justify-between items-center px-6 py-2 w-full min-h-[320px]">
      <div className="flex flex-col flex-1 justify-evenly items-center gap-2 w-full h-full">
        <p className="text-center">Выберите какую услугу вы хотите активировать</p>
        <button
          className={cn("btn", {
            "btn-primary text-white": userData.type === "пополнение",
            "btn-outline": userData.type !== "пополнение",
          })}
          onClick={() => onChange("type", "пополнение")}
        >
          ПОПОЛНЕНИЕ ТУРЕЦКОГО АККАУНТА PSN
        </button>
        <button
          className={cn("btn", {
            "btn-primary text-white": userData.type === "ps_plus",
            "btn-outline": userData.type !== "ps_plus",
          })}
          onClick={() => onChange("type", "ps_plus")}
        >
          ПОДПИСКА PS PLUS НА ТУРЕЦКИЙ АККАУНТ PSN
        </button>
        <button
          className={cn("btn", {
            "btn-primary text-white": userData.type === "игра",
            "btn-outline": userData.type !== "игра",
          })}
          onClick={() => onChange("type", "игра")}
        >
          ИГРА НА ТУРЕЦКИЙ АККАУНТ PSN
        </button>
        <button
          className={cn("btn", {
            "btn-primary text-white": userData.type === "аккаунт",
            "btn-outline": userData.type !== "аккаунт",
          })}
          onClick={() => onChange("type", "аккаунт")}
        >
          СОЗДАНИЕ ТУРЕЦКОГО АККАУНТА PSN
        </button>
        <button
          className={cn("btn", {
            "btn-primary text-white": userData.type === "аккаунт_баланс",
            "btn-outline": userData.type !== "аккаунт_баланс",
          })}
          onClick={() => onChange("type", "аккаунт_баланс")}
        >
          СОЗДАНИЕ ТУРЕЦКОГО АККАУНТА PSN С БАЛАНСОМ
        </button>
      </div>
    </div>
  );
};

export default ActivationStep4;
