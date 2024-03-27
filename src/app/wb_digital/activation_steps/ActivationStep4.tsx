import { useEffect } from "react";
import { UserData } from "../WbClient";

import { Button } from "@/components/ui/button";

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
        <p className="text-center text-muted-foreground mb-4">
          Выбор услуги влияет на то какие данные вам нужно будет заполнить на следующем этапе, сама услуга будет взята из вашего id
          покупки
        </p>
        <Button
          className="w-full"
          variant={userData.type === "пополнение" ? "default" : "secondary"}
          onClick={() => onChange("type", "пополнение")}
        >
          ПОПОЛНЕНИЕ ТУРЕЦКОГО АККАУНТА PSN
        </Button>
        <Button
          className="w-full"
          variant={userData.type === "ps_plus" ? "default" : "secondary"}
          onClick={() => onChange("type", "ps_plus")}
        >
          ПОДПИСКА PS PLUS НА ТУРЕЦКИЙ АККАУНТ PSN
        </Button>
        <Button
          className="w-full"
          variant={userData.type === "игра" ? "default" : "secondary"}
          onClick={() => onChange("type", "игра")}
        >
          ИГРА НА ТУРЕЦКИЙ АККАУНТ PSN
        </Button>
        <Button
          className="w-full"
          variant={userData.type === "аккаунт" ? "default" : "secondary"}
          onClick={() => onChange("type", "аккаунт")}
        >
          СОЗДАНИЕ ТУРЕЦКОГО АККАУНТА PSN
        </Button>
        <Button
          className="w-full"
          variant={userData.type === "аккаунт_баланс" ? "default" : "secondary"}
          onClick={() => onChange("type", "аккаунт_баланс")}
        >
          СОЗДАНИЕ ТУРЕЦКОГО АККАУНТА PSN С БАЛАНСОМ
        </Button>
      </div>
    </div>
  );
};

export default ActivationStep4;
