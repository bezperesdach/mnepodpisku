"use server";

//write an async dummy function that wait 3 seconds and returns number
export async function saveComment() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { calculated: 150, value: 100 };
}

const salesCalculator = (amount: number, price: number) => {
  let discount = 0;

  if (amount > 2399) {
    discount = 0.05;
  } else if (amount > 1499) {
    discount = 0.04;
  } else if (amount > 1199) {
    discount = 0.03;
  } else if (amount > 599) {
    discount = 0.02;
  } else if (amount > 299) {
    discount = 0.01;
  } else if (amount > 99) {
    discount = 0;
  }

  const discountAmount = price / (1 - discount);

  return Math.round(discountAmount);
};

export async function getPsnBalance(amount: number) {
  const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

  calcUrl.searchParams.append("product_id", process.env.DIGISELLER_PSN_BASE_ID!);
  calcUrl.searchParams.append("currency", "RBX");
  calcUrl.searchParams.append("unit_cnt", amount.toString());

  const response = await fetch(calcUrl.toString());

  const data: {
    price: number;
    count: number;
    amount: number;
    currency: string;
    commission: number;
    free_pay: boolean | null;
    sale_info: { common_base_price: number; sale_percent: number };
  } = (await response.json()).data;

  return { calculated: salesCalculator(data.count, data.amount), sale: Math.round(data.amount) };
}
