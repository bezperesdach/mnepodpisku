import React from "react";
import Faq from "@/components/Faq/Faq";
import Question from "@/components/Faq/Question";
import FormComponent from "./FormComponent";
import RedirectingToPayment from "@/components/RedirectingToPayment/RedirectingToPayment";
import { Metadata } from "next";
import { isSearchParamValid } from "@/utils/utils";
import Reviews from "@/components/Reviews/Reviews";
import Description from "./Description";

export const metadata: Metadata = {
  title: "Купить подписку EA PLAY на PlayStation 2023",
  description: "Быстро и безопасно приобретите подписку EA PLAY для своего аккаунта PlayStation. Новые возможности ждут вас!",
  openGraph: {
    title: "Купить подписку EA PLAY на PlayStation 2023",
    description: "Быстро и безопасно приобретите подписку EA PLAY для своего аккаунта PlayStation. Новые возможности ждут вас!",
    url: "/ps_ea_play",
    images: ["/og_images_catalogue/ps_ea_play.png"],
    type: "website",
  },
  alternates: {
    canonical: "/ps_ea_play",
  },
};

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function PsEaPlay({ searchParams }: Props) {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8">
      <div className="flex flex-col min-[1240px]:flex-row items-center gap-4">
        <h1 className="text-3xl lg:text-4xl font-bold" id="heading">
          КУПИТЬ ПОДПИСКУ EA PLAY ДЛЯ PLAYSTATION В РОССИИ
        </h1>
        <div className="flex items-center gap-4 bg-base-300 rounded-lg px-4 py-1 self-end">
          <p className="font-medium text-base">Только для турецких аккаунтов</p>
          <div
            className="tooltip cursor-pointer max-[524px]:before:-translate-x-[90%] max-[524px]:max-w-xs min-[1200px]:before:-translate-x-[90%]"
            data-tip='Вам необходимо зарегистрировать аккаунт PSN с регионом турция и прислать его данные после оплаты. Подробнее в разделе "Вопрос-Ответ".'
          >
            <button className="flex justify-center items-center p-2 w-7 h-7 bg-white rounded-[100%] text-secondary font-bold">?</button>
          </div>
        </div>
      </div>

      <FormComponent receivedDuration={isSearchParamValid(searchParams["dur"])} />

      <Description />

      <Reviews />

      <Faq>
        <Question title="Как происходит приобретение EA PLAY на мой аккаунт PlayStation?" open>
          <p>
            После оплаты вам будет на почту выслана ссылка на инструкцию по активации услуги, в ходе выполнения данной инструкции вы
            предоставите нам данные от своего аккаунта
            <br />
            <br />
            После этого наш менеджер проживающий на территории Турции войдет в ваш аккаунт и приобретет нужную вам подписку
          </p>
        </Question>
        <Question title="Безопасен ли такой вид приобретения EA PLAY?">
          <p>Да, по нашему опыту Sony никогда не блокирует аккаунты на который таким способом была приобретена подписка</p>
        </Question>
        <Question title="Как быстро я получу подписку на свой аккаунт?">
          <p>После приобретения подписки и выполнения всех инструкций в часы нашей работы среднее время активации 5-15 минут</p>
        </Question>
        <Question title="Что будет если вам не удастся приобрести подписку на мой аккаунт?">
          <p>
            Если по каким-либо причинам находящимся вне нашего контроля нам не приобрести подписку ваш аккаунт, мы можем сделать возврат
            всей суммы - 15%.
            <br />
            <br />
            Если проблема будет с нашей стороны, мы сделаем возврат всей суммы - комиссия за обработку перевода.
          </p>
        </Question>
        <Question title="Как быстро происходит приобретение подписки?">
          <p>После выполнения всех инструкций среднее время обработки заказа 5-30 минут при обращении в рабочие часы.</p>
        </Question>
        <Question title="Почему возникают проблемы с новыми аккаунтами?" id="NewAccountProblems">
          <p>
            Начиная от 01.11.23 Sony изменили что-то в своей системе, если раньше после создания аккаунт можно было пополнять без особых
            проблем спустя неделю после создания, то теперь после создания аккаунт стабильно удается пополнять только спустя месяц.
            <br />
            <br />
            Сразу после создания аккаунт можно либо пополнить на 200 ЛИР(Максимальная разовая транзакция пополнения), либо приобрести
            предметы из корзины на сумму до 4800 ЛИР включительно (подписки в корзину не добавляются). После чего на аккаунт со стороны
            Sony накладывается временный &quot;блок&quot; и нужно будет подождать примерно месяц, перед тем как на аккаунт можно будет
            купить что-либо еще или произвести пополнение.
          </p>
        </Question>
      </Faq>

      <RedirectingToPayment />
    </div>
  );
}

// export const head: DocumentHead = {
//   title: "МНЕПОДПИСКУ",
//   meta: [
//     {
//       name: "description",
//       content:
//         "Сервис для приобретения подписок на различные онлайн сервисы. Принимаем к оплате карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
//     },
//   ],
//   links: [
//     {
//       rel: "canonical",
//       href: "https://mnepodpisku.ru/",
//     },
//   ],
// };
