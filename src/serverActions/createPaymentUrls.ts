"use server";

export async function getPsnBalancePaymentLink(amount: number) {
  const paramsRes = await fetch("https://api.digiseller.ru/api/purchases/options", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_id: process.env.DIGISELLER_PSN_BASE_ID,
      unit_cnt: amount,
      lang: "ru-RU",
      ip: "127.0.0.1",
    }),
  });
  const { id_po } = await paramsRes.json();

  const paymentUrl = new URL("https://oplata.info/asp2/pay_rk.asp");

  paymentUrl.searchParams.append("id_d", process.env.DIGISELLER_PSN_BASE_ID!);
  paymentUrl.searchParams.append("id_po", id_po);
  paymentUrl.searchParams.append("curr", "RBX");
  paymentUrl.searchParams.append("lang", "ru-RU");
  paymentUrl.searchParams.append("failpage", "https://mnepodpisku.ru/playstation");

  return {
    status: "success",
    message: "success",
    data: { paymentUrl: paymentUrl.toString() },
  };
}

export async function getPsnAccountPaymentLink() {
  const paramsRes = await fetch("https://api.digiseller.ru/api/purchases/options", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_id: process.env.DIGISELLER_PSN_TURKEY_ACCOUNT_BASE_ID,
      lang: "ru-RU",
      ip: "127.0.0.1",
    }),
  });
  const { id_po } = await paramsRes.json();

  const paymentUrl = new URL("https://oplata.info/asp2/pay_rk.asp");

  paymentUrl.searchParams.append("id_d", process.env.DIGISELLER_PSN_TURKEY_ACCOUNT_BASE_ID!);
  paymentUrl.searchParams.append("id_po", id_po);
  paymentUrl.searchParams.append("curr", "RBX");
  paymentUrl.searchParams.append("lang", "ru-RU");
  paymentUrl.searchParams.append("failpage", "https://mnepodpisku.ru/playstation_account");

  return {
    status: "success",
    message: "success",
    data: { paymentUrl: paymentUrl.toString() },
  };
}
