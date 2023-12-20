"use client";

import { shuffle } from "@/utils/utils";
import { useEffect, useRef, useState } from "react";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ReviewComponent from "./ReviewComponent";
import { useWindowSize } from "usehooks-ts";
import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";

type Review = {
  name: string;
  platform: "VK" | "WB";
  review: string;
  rating: number;
};

const reviewsArray: Review[] = [
  {
    name: "Паша",
    platform: "VK",
    review:
      "Приобрел 10 карточек по 400 лир, данный опыт покупки у данного продавца оказался хорошим, так как не смотря на пятничный день, мне ответили быстро и помогли в приобретении товара. Спасибо большое продавцу и его менеджерам!",
    rating: 5,
  },
  {
    name: "Дима",
    platform: "VK",
    review: "Приобрёл аккаунт, всё прошло очень быстро и качественно, очень вежливый человек)",
    rating: 5,
  },
  {
    name: "Алина",
    platform: "VK",
    review: "Все ок! деньги получила и уже играем! Спасибо! 🍭",
    rating: 5,
  },
  {
    name: "Секретарь",
    platform: "VK",
    review: "Всё отлично ,помогли ,вежливо вче разъяснили ,одрозначно буду покупать ишры только с их помощью",
    rating: 5,
  },
  {
    name: "Евгений",
    platform: "VK",
    review: "Заказывал через WB. Все отлично. Ребята помогли оформить предзаказ. Спасибо большое.",
    rating: 5,
  },
  {
    name: "Евгений",
    platform: "VK",
    review: "Заказал через Wb , всё сделали качественно и быстро, буду пользоваться в дальнейшем",
    rating: 5,
  },
  {
    name: "Евгений",
    platform: "VK",
    review: "Беру второй раз все очень быстро",
    rating: 5,
  },
  {
    name: "Lyubov",
    platform: "VK",
    review: "Ура, всё настроили и всё получилось🥰",
    rating: 5,
  },
  {
    name: "Салават",
    platform: "VK",
    review: "Отличный продавец, всегда у него покупаю, все быстро четко и пунктуально)",
    rating: 5,
  },
  {
    name: "Joker",
    platform: "VK",
    review: "Ребята молодцы, всё чётко и оперативно сделали. Пополняю бумажник литрами не первый раз у них. Всем рекомендую их",
    rating: 5,
  },
  {
    name: "Алена",
    platform: "VK",
    review:
      "Добрый день, приобрел карточку на 2400 лир, все без обмана. Купили игру остальные деньги висят в кошельке. Однозначно обращусь еще раз. Спасибо за поддержку Российских игроков на PS.",
    rating: 5,
  },
  {
    name: "Aleksei",
    platform: "VK",
    review: "Все отлично,цены порадовали.Так держать",
    rating: 5,
  },
  {
    name: "Саша",
    platform: "VK",
    review: "Спасибо. Аккаунт рабочий но минус в том что нужно ждать день чтобы посылка пришла с валберес. А так 10/10",
    rating: 5,
  },
  {
    name: "Андрей",
    platform: "VK",
    review: "Все сделали супер благодарю",
    rating: 5,
  },
  {
    name: "Ростислав",
    platform: "VK",
    review: "Мне тоже понравилось тоже через wb заказал",
    rating: 5,
  },
  {
    name: "Дмитрий",
    platform: "VK",
    review:
      "Спасибо большое за вашу работу. Курс лиры ниже остальных магазинов, в выходной день всё сделали супер быстро и качественно, без обмана. Успехов и процветания вам , надеюсь на долгое сотрудничество",
    rating: 5,
  },
  {
    name: "Роман",
    platform: "VK",
    review: "Спасибо большое продавцу, всё быстро и чётко.",
    rating: 5,
  },
  {
    name: "Раян",
    platform: "VK",
    review: "Спасибо, все круто)",
    rating: 5,
  },
  {
    name: "Александр",
    platform: "VK",
    review: "Спасибо большое за вашу работу всё круто",
    rating: 5,
  },
  {
    name: "Дим",
    platform: "VK",
    review: "Все четко быстро! 🤗",
    rating: 5,
  },
  {
    name: "Станислав",
    platform: "WB",
    review:
      "Развод на деньги, кормят завтраками, вешают лапшу на уши, Категорически не рекомендую что-то здесь покупать!!! Так потребовали предоставить данные аккаунта, после предоставления кормили завтраками!!",
    rating: 1,
  },
  {
    name: "Асылбек",
    platform: "VK",
    review: "Все сделано быстро, без проблем. Спасибо большое!!!",
    rating: 5,
  },
  {
    name: "Александр",
    platform: "VK",
    review: "Быстро и качественно 👍",
    rating: 5,
  },
  {
    name: "Александр",
    platform: "VK",
    review: "Брал уже несколько раз всё хорошо быстро буду пользоваться в дальнейшем",
    rating: 5,
  },
  {
    name: "Андрей",
    platform: "VK",
    review: "Все отлично, быстро отвечают на заданные вопросы и помогаю,спасибо!",
    rating: 5,
  },
  {
    name: "Святослав",
    platform: "VK",
    review:
      "Вчера взял пополнение на 1250 лир,все прошло очень гладко и быстро,мне все понравилось. Обращаюсь уже не первый раз,всем доволен",
    rating: 5,
  },
  {
    name: "Никита",
    platform: "VK",
    review:
      "Лучший продавец. Реагирует быстро. Активировали аккаунт в течении 15 минут после того как написал им. Огромное спасибо) обязательно буду заказывать еще🌝",
    rating: 5,
  },

  {
    name: "Егор",
    platform: "VK",
    review: "Все сделано быстро и без проблем, спасибо огромное!",
    rating: 5,
  },
  {
    name: "Вячеслва",
    platform: "VK",
    review:
      "Заказывал на ВБ аккаунт и 100 лир. Все четко, быстро и понятно! Все сделали очень быстро, не смотря на то что выходной. Огромное спасибо! Буду Вас рекомендовать! 🤝",
    rating: 5,
  },
  {
    name: "Игорь",
    platform: "VK",
    review: "Заказывал услугу создания аккаунта, все очень быстро и качественно. Очень доволен",
    rating: 5,
  },
  {
    name: "Константин",
    platform: "WB",
    review: "доволен товаром,заказ пришёл на 2 дня раньше чему очень рад, активировал аккаунт за каких-то 5 минут,рекомендую продавца",
    rating: 5,
  },
  {
    name: "Покупатель",
    platform: "WB",
    review: "Качественный товар",
    rating: 5,
  },
  {
    name: "Вадим и Юлия",
    platform: "WB",
    review: "Всё чётко... отправка в срок, свои обязательства выполнили . Рекомендую.",
    rating: 5,
  },
  {
    name: "Покупатель",
    platform: "WB",
    review:
      "Все четко сделано , продуманно все до мелочей. Позаботились даже о людях с оплатой в тенге. Поддержка на высшем уровне! Спасибо вам!",
    rating: 5,
  },
  {
    name: "Игорь",
    platform: "WB",
    review: "Спасибо! Всё сделано оперативно!",
    rating: 5,
  },
  {
    name: "Александр",
    platform: "WB",
    review: "Всё круто 👍 Всё работает,молодцы!",
    rating: 5,
  },
  {
    name: "Александр",
    platform: "WB",
    review: "Супер! Спасибо огромное !!!",
    rating: 5,
  },
  {
    name: "Артем",
    platform: "WB",
    review: "Просто класс, объяснили хорошо быстро и пополнение произошло так-же быстро, всем советую 👍",
    rating: 5,
  },
  {
    name: "Тимур",
    platform: "WB",
    review: "Активировал всё работает хорошо, сделали всё быстро! спасибо большое!",
    rating: 5,
  },
  {
    name: "Владимир",
    platform: "WB",
    review: "Всё отлично спасибо!",
    rating: 5,
  },
  {
    name: "Анна",
    platform: "WB",
    review:
      "Заказывали в Беларусь 300 лир. Всё пришло! Были вопросы с электронным чеком (оказывается в Беларуси их давно нет), но ребята сработали отлично! Решили все вопросы! Наилучшие рекомендации!",
    rating: 5,
  },
  {
    name: "Сергей",
    platform: "WB",
    review: "Всё чётко, аккаут готов, доставка быстрая, ребята всё объяснили",
    rating: 5,
  },
  {
    name: "Роман",
    platform: "WB",
    review: "Всё хорошо быстро сделали, большое спасибо продавцу.",
    rating: 5,
  },
  {
    name: "Покупатель",
    platform: "WB",
    review: "Всё классно!!!",
    rating: 5,
  },
  {
    name: "Валентина",
    platform: "WB",
    review:
      "Все работает , все хорошо , были небо(тише проблемы с активацией , но продавец все оперативно решил , советую покупать , все без обмана",
    rating: 5,
  },
  {
    name: "Андрей",
    platform: "WB",
    review: "Всё сработало на отлично!!!! ⭐️⭐️⭐️⭐️⭐️",
    rating: 5,
  },
  {
    name: "Валентина",
    platform: "WB",
    review: "Осталась очень довольна покупкой. Продавец ответственный. Все четко, оперативно.👍",
    rating: 5,
  },
  {
    name: "Андрей",
    platform: "WB",
    review: "Ребятам спасибо! Все четко, отзывчивые, баланс пополнили на купленную сумму, обязательно обращусь еще!",
    rating: 5,
  },
  {
    name: "Максим",
    platform: "WB",
    review: "Пришло быстро, все объяснили и пополнили, всем советую!",
    rating: 5,
  },
  {
    name: "Владислав",
    platform: "WB",
    review: "Всё оперативно и понятно.Рекомендую однозначно!",
    rating: 5,
  },
  {
    name: "Александр",
    platform: "WB",
    review: "Отличный продавец 100% поддержка, после нехитрых манипуляций приобрели все что хотел. Рекомендую к покупке👍👍👍",
    rating: 5,
  },
  {
    name: "Виталий",
    platform: "WB",
    review: "Это просто сказка! Сделали всё быстро, качественно👍👍👍👍 Буду постоянно здесь покупать...",
    rating: 5,
  },
  {
    name: "Покупатель",
    platform: "WB",
    review: "Все отлично! Пополнили быстро и без обмана",
    rating: 5,
  },
  {
    name: "Андрей",
    platform: "WB",
    review: "Турецкий аккаунт за 10 минут и без проблем!!! Супер!!!",
    rating: 5,
  },
  {
    name: "Пупкин",
    platform: "WB",
    review: "Заказал с вечера, пришло в первой половине след. дня. Само пополнение оперативно. Спасибо операторам",
    rating: 5,
  },
  {
    name: "Владимир",
    platform: "WB",
    review:
      "Все отлично! Клиентоориентированность на высочайшем уровне! Вечером в воскресенье все сделали! Пополнил кошелек лирами! Ребятам респект! Буду обращаться еще!",
    rating: 5,
  },
  {
    name: "Кирилл",
    platform: "WB",
    review: "Пришло в срок, подробно рассказали что и как делать, получил желаемое 👍",
    rating: 5,
  },
  {
    name: "Алина",
    platform: "WB",
    review: "Все, Ок! деньги получила и уже играем. Спасибо! 🍭",
    rating: 5,
  },
  {
    name: "Ланской",
    platform: "WB",
    review: "все отлично, спасибо",
    rating: 5,
  },
  {
    name: "Покупатель",
    platform: "WB",
    review:
      "Купил 1000 лир, сначала были небольшие проблемы, но с продавцом они не связаны. Помогли, быстро пополнили счет. Все работает",
    rating: 5,
  },
  {
    name: "Игорь",
    platform: "WB",
    review: "Всё круто!!! Товар пришёл точно по графику и быстро всё сделали. Могу рекомендовать",
    rating: 5,
  },
  {
    name: "Олеся",
    platform: "WB",
    review: "все четко и потделу",
    rating: 5,
  },
  {
    name: "Максимилиан",
    platform: "WB",
    review: "Норм",
    rating: 4,
  },
  {
    name: "Игорь",
    platform: "WB",
    review:
      "Отличные ребята, помогли все быстро и эффективно сделать. Покупкой остался доволен, справились со всеми проблемами вознишми во время активации. Ребята, спасибо Вам, ещё раз!)",
    rating: 5,
  },
  {
    name: "Светлана",
    platform: "WB",
    review: "Все отлично будем обращаться еще",
    rating: 5,
  },
  {
    name: "Виктор",
    platform: "WB",
    review:
      "Продавец честный, адекватный, ответственный. Провёл сделку от А до Я, помог с каждым шагом процесса активации. Результат превзошёл ожидания. Доставка дошла до ПВЗ меньше, чем за день) Рекомендую!",
    rating: 5,
  },
  {
    name: "Покупатель",
    platform: "WB",
    review: "Сделали всё быстро и качественно",
    rating: 5,
  },
  {
    name: "Дмитрий",
    platform: "WB",
    review: "Всем рекомендую!",
    rating: 5,
  },
  {
    name: "Дмитрий",
    platform: "WB",
    review: "Все понравилось, все рассказали и произвели пополнение довольно быстро и оперативно",
    rating: 5,
  },
];

const shuffledArray = shuffle(reviewsArray);

function Reviews() {
  // eslint-disable-next-line no-unused-vars
  const [reviews, setReviews] = useState<Review[]>(shuffledArray);

  const ref = useRef<HTMLDivElement>(null);

  // Current width of element
  const { width } = useWindowSize();

  const visibleItemsCalculate = (width: number) => {
    if (width > 1020) {
      return 3;
    }
    if (width > 768) {
      return 2;
    }

    return 1;
  };

  const satisfiedCustomers = Math.round((reviews.filter((item) => item.rating >= 4).length / reviews.length) * 100);

  return (
    <div className="flex flex-col gap-2 mt-10 overflow-hidden" ref={ref}>
      <p className="text-xl lg:text-2xl font-bold" id="description">
        Отзывы
      </p>
      <div className="flex justify-between flex-wrap">
        <p className="text-medium text-lg lg:text-xl">Всем бы такую репутацию</p>
        <p className="text-medium text-lg lg:text-xl">
          <span className="font-bold text-xl lg:text-2xl">{satisfiedCustomers}%</span> довольных покупателей
        </p>
      </div>

      {width !== 0 ? (
        <CarouselProvider
          interval={6000}
          isPlaying={true}
          touchEnabled={false}
          dragEnabled={false}
          disableKeyboard
          infinite
          visibleSlides={visibleItemsCalculate(width)}
          naturalSlideWidth={320}
          isIntrinsicHeight
          naturalSlideHeight={360}
          totalSlides={reviews.length}
        >
          <Slider classNameTray="md:gap-4 ">
            {reviews.map((item, i) => (
              <Slide index={i} key={item.name + item.review + item.platform}>
                <ReviewComponent item={item} />
              </Slide>
            ))}
          </Slider>
          <div className="flex gap-1 mt-2">
            <div className="flex flex-1 items-center justify-center lg:justify-end">
              <ButtonBack className="btn text-secondary w-full lg:w-12">
                <ChevronLeftIcon size={36} />
              </ButtonBack>
            </div>
            <div className="flex flex-1 items-center justify-center lg:justify-start">
              <ButtonNext className="btn text-secondary w-full lg:w-12">
                <ChevronRightIcon size={36} />
              </ButtonNext>
            </div>
          </div>
        </CarouselProvider>
      ) : (
        <div className="flex flex-col justify-center items-center p-4 min-h-[296px] max-h-[296px] mx-1">
          <span className="loading loading-spinner loading-xl flex-shrink-0" />
        </div>
      )}
    </div>
  );
}

export default Reviews;
