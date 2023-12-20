export const YANDEX_METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID!;

export const ym = (goal: string, goalName: string) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`%c[YandexMetrika](HIT)`, `color: orange`, goal, goalName);
  } else {
    if (window.ym) {
      window.ym(Number(YANDEX_METRIKA_ID), goal, goalName);
    } else {
      console.log("failed to use YM");
    }
  }
};
