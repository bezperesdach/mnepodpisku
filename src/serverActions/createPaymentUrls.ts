"use server";

export async function getDonationPaymentLink(amount: number, ip: string | null) {
  let singleIp = null;
  if (ip !== null) {
    if (ip.indexOf(",") !== -1) {
      singleIp = ip.split(",")[0];
    }
  }

  const paramsRes = await fetch("https://api.digiseller.ru/api/purchases/options", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_id: process.env.DIGISELLER_DONATION_BASE_ID,
      unit_cnt: amount,
      lang: "ru-RU",
      ip: singleIp ?? "127.0.0.1",
    }),
  });
  const { id_po } = await paramsRes.json();

  const paymentUrl = new URL("https://oplata.info/asp2/pay_rk.asp");

  paymentUrl.searchParams.append("id_d", process.env.DIGISELLER_DONATION_BASE_ID!);
  paymentUrl.searchParams.append("id_po", id_po);
  paymentUrl.searchParams.append("curr", "RBX");
  paymentUrl.searchParams.append("lang", "ru-RU");
  paymentUrl.searchParams.append("failpage", "https://mnepodpisku.ru/na_chai");

  return {
    status: "success",
    message: "success",
    data: { paymentUrl: paymentUrl.toString() },
  };
}

export async function getPsnBalancePaymentLink(amount: number, ip: string | null) {
  let singleIp = null;
  if (ip !== null) {
    if (ip.indexOf(",") !== -1) {
      singleIp = ip.split(",")[0];
    }
  }

  const paramsRes = await fetch("https://api.digiseller.ru/api/purchases/options", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_id: process.env.DIGISELLER_PSN_BASE_ID,
      unit_cnt: amount,
      lang: "ru-RU",
      ip: singleIp ?? "127.0.0.1",
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

export async function getPsnPsPlusPaymentLink(values: { subscriptionType: string; duration: string }) {
  const paramsRes = await fetch("https://api.digiseller.ru/api/purchases/options", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_id: process.env.DIGISELLER_PS_PLUS_BASE_ID,
      options: [
        {
          id: process.env.DIGISELLER_PS_PLUS_OPTION_ID,
          value: {
            id: process.env[`DIGISELLER_PS_PLUS_${values.subscriptionType.toUpperCase()}_${values.duration.toUpperCase()}_VARIANT_ID`],
          },
        },
      ],
      lang: "ru-RU",
      ip: "127.0.0.1",
    }),
  });
  const { id_po } = await paramsRes.json();

  const paymentUrl = new URL("https://oplata.info/asp2/pay_rk.asp");

  paymentUrl.searchParams.append("id_d", process.env.DIGISELLER_PS_PLUS_BASE_ID!);
  paymentUrl.searchParams.append("id_po", id_po);
  paymentUrl.searchParams.append("curr", "RBX");
  paymentUrl.searchParams.append("lang", "ru-RU");
  paymentUrl.searchParams.append("failpage", "https://mnepodpisku.ru/ps_plus");

  return {
    status: "success",
    message: "success",
    data: { paymentUrl: paymentUrl.toString() },
  };
}

export async function getPsEaPlayPaymentLink(duration: string) {
  const paramsRes = await fetch("https://api.digiseller.ru/api/purchases/options", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_id: process.env.DIGISELLER_PS_EA_PLAY_BASE_ID,
      options: [
        {
          id: process.env.DIGISELLER_PS_EA_PLAY_OPTION_ID,
          value: {
            id: process.env[`DIGISELLER_PS_EA_PLAY_${duration.toUpperCase()}_VARIANT_ID`],
          },
        },
      ],
      lang: "ru-RU",
      ip: "127.0.0.1",
    }),
  });
  const { id_po } = await paramsRes.json();

  const paymentUrl = new URL("https://oplata.info/asp2/pay_rk.asp");

  paymentUrl.searchParams.append("id_d", process.env.DIGISELLER_PS_EA_PLAY_BASE_ID!);
  paymentUrl.searchParams.append("id_po", id_po);
  paymentUrl.searchParams.append("curr", "RBX");
  paymentUrl.searchParams.append("lang", "ru-RU");
  paymentUrl.searchParams.append("failpage", "https://mnepodpisku.ru/ps_ea_play");

  return {
    status: "success",
    message: "success",
    data: { paymentUrl: paymentUrl.toString() },
  };
}

export async function getSpotifyPaymentLink(values: { subscriptionType: string; duration: string }) {
  const paramsRes = await fetch("https://api.digiseller.ru/api/purchases/options", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_id: process.env.DIGISELLER_SPOTIFY_BASE_ID,
      options: [
        {
          id: process.env.DIGISELLER_SPOTIFY_OPTION_ID,
          value: {
            id: process.env[`DIGISELLER_SPOTIFY_${values.duration.toUpperCase()}_${values.subscriptionType.toUpperCase()}_VARIANT_ID`],
          },
        },
      ],
      lang: "ru-RU",
      ip: "127.0.0.1",
    }),
  });
  const { id_po } = await paramsRes.json();

  const paymentUrl = new URL("https://oplata.info/asp2/pay_rk.asp");

  paymentUrl.searchParams.append("id_d", process.env.DIGISELLER_SPOTIFY_BASE_ID!);
  paymentUrl.searchParams.append("id_po", id_po);
  paymentUrl.searchParams.append("curr", "RBX");
  paymentUrl.searchParams.append("lang", "ru-RU");
  paymentUrl.searchParams.append("failpage", "https://mnepodpisku.ru/spotify");

  return {
    status: "success",
    message: "success",
    data: { paymentUrl: paymentUrl.toString() },
  };
}

export async function getTinderPaymentLink(values: { subscriptionType: string; duration: string }) {
  const paramsRes = await fetch("https://api.digiseller.ru/api/purchases/options", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_id: process.env.DIGISELLER_TINDER_BASE_ID,
      options: [
        {
          id: process.env.DIGISELLER_TINDER_OPTION_ID,
          value: {
            id: process.env[`DIGISELLER_TINDER_${values.duration.toUpperCase()}_${values.subscriptionType.toUpperCase()}_VARIANT_ID`],
          },
        },
      ],
      lang: "ru-RU",
      ip: "127.0.0.1",
    }),
  });
  const { id_po } = await paramsRes.json();

  const paymentUrl = new URL("https://oplata.info/asp2/pay_rk.asp");

  paymentUrl.searchParams.append("id_d", process.env.DIGISELLER_TINDER_BASE_ID!);
  paymentUrl.searchParams.append("id_po", id_po);
  paymentUrl.searchParams.append("curr", "RBX");
  paymentUrl.searchParams.append("lang", "ru-RU");
  paymentUrl.searchParams.append("failpage", "https://mnepodpisku.ru/tinder");

  return {
    status: "success",
    message: "success",
    data: { paymentUrl: paymentUrl.toString() },
  };
}

// eslint-disable-next-line no-unused-vars
export async function getXboxPaymentLink(values: { subscriptionType: string; duration: string }) {
  const paramsRes = await fetch("https://api.digiseller.ru/api/purchases/options", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_id: process.env.DIGISELLER_XBOX_GAME_PASS_ULTIMATE_BASE_ID,
      lang: "ru-RU",
      ip: "127.0.0.1",
    }),
  });
  const { id_po } = await paramsRes.json();

  const paymentUrl = new URL("https://oplata.info/asp2/pay_rk.asp");

  paymentUrl.searchParams.append("id_d", process.env.DIGISELLER_XBOX_GAME_PASS_ULTIMATE_BASE_ID!);
  paymentUrl.searchParams.append("id_po", id_po);
  paymentUrl.searchParams.append("curr", "RBX");
  paymentUrl.searchParams.append("lang", "ru-RU");
  paymentUrl.searchParams.append("failpage", "https://mnepodpisku.ru/xbox");

  return {
    status: "success",
    message: "success",
    data: { paymentUrl: paymentUrl.toString() },
  };
}

// eslint-disable-next-line no-unused-vars
export async function getYoutubePaymentLink(duration: string) {
  const paramsRes = await fetch("https://api.digiseller.ru/api/purchases/options", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_id: process.env.DIGISELLER_YOUTUBE_PREMIUM_BASE_ID,
      options: [
        {
          id: process.env.DIGISELLER_YOUTUBE_PREMIUM_OPTION_ID,
          value: {
            id: process.env[`DIGISELLER_YOUTUBE_PREMIUM_${duration.toUpperCase()}_VARIANT_ID`],
          },
        },
      ],
      lang: "ru-RU",
      ip: "127.0.0.1",
    }),
  });
  const { id_po } = await paramsRes.json();

  const paymentUrl = new URL("https://oplata.info/asp2/pay_rk.asp");

  paymentUrl.searchParams.append("id_d", process.env.DIGISELLER_YOUTUBE_PREMIUM_BASE_ID!);
  paymentUrl.searchParams.append("id_po", id_po);
  paymentUrl.searchParams.append("curr", "RBX");
  paymentUrl.searchParams.append("lang", "ru-RU");
  paymentUrl.searchParams.append("failpage", "https://mnepodpisku.ru/youtube");

  return {
    status: "success",
    message: "success",
    data: { paymentUrl: paymentUrl.toString() },
  };
}

export async function getAdobeCCPaymentLink(duration: string) {
  const paramsRes = await fetch("https://api.digiseller.ru/api/purchases/options", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_id: process.env.DIGISELLER_ADOBE_CREATIVE_CLOUD_BASE_ID,
      options: [
        {
          id: process.env.DIGISELLER_ADOBE_CREATIVE_CLOUD_OPTION_ID,
          value: {
            id: process.env[`DIGISELLER_ADOBE_CREATIVE_CLOUD_${duration.toUpperCase()}_VARIANT_ID`],
          },
        },
      ],
      lang: "ru-RU",
      ip: "127.0.0.1",
    }),
  });

  const { id_po } = await paramsRes.json();

  const paymentUrl = new URL("https://oplata.info/asp2/pay_rk.asp");

  paymentUrl.searchParams.append("id_d", process.env.DIGISELLER_ADOBE_CREATIVE_CLOUD_BASE_ID!);
  paymentUrl.searchParams.append("id_po", id_po);
  paymentUrl.searchParams.append("curr", "RBX");
  paymentUrl.searchParams.append("lang", "ru-RU");
  paymentUrl.searchParams.append("failpage", "https://mnepodpisku.ru/adobe_creative_cloud");

  return {
    status: "success",
    message: "success",
    data: { paymentUrl: paymentUrl.toString() },
  };
}

export async function getDiscordPaymentLink(values: { subscriptionType: string; duration: string }) {
  const paramsRes = await fetch("https://api.digiseller.ru/api/purchases/options", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_id: process.env.DIGISELLER_DISCORD_BASE_ID,
      options: [
        {
          id: process.env.DIGISELLER_DISCORD_OPTION_ID,
          value: {
            id: process.env[`DIGISELLER_DISCORD_${values.duration.toUpperCase()}_${values.subscriptionType.toUpperCase()}_VARIANT_ID`],
          },
        },
      ],
      lang: "ru-RU",
      ip: "127.0.0.1",
    }),
  });
  const { id_po } = await paramsRes.json();

  const paymentUrl = new URL("https://oplata.info/asp2/pay_rk.asp");

  paymentUrl.searchParams.append("id_d", process.env.DIGISELLER_DISCORD_BASE_ID!);
  paymentUrl.searchParams.append("id_po", id_po);
  paymentUrl.searchParams.append("curr", "RBX");
  paymentUrl.searchParams.append("lang", "ru-RU");
  paymentUrl.searchParams.append("failpage", "https://mnepodpisku.ru/discord");

  return {
    status: "success",
    message: "success",
    data: { paymentUrl: paymentUrl.toString() },
  };
}

export async function getNetflixPaymentLink(values: { subscriptionType: string; duration: string }) {
  const paramsRes = await fetch("https://api.digiseller.ru/api/purchases/options", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_id: process.env.DIGISELLER_NETFLIX_BASE_ID,
      options: [
        {
          id: process.env.DIGISELLER_NETFLIX_OPTION_ID,
          value: {
            id: process.env[`DIGISELLER_NETFLIX_${values.duration.toUpperCase()}_${values.subscriptionType.toUpperCase()}_VARIANT_ID`],
          },
        },
      ],
      lang: "ru-RU",
      ip: "127.0.0.1",
    }),
  });

  const { id_po } = await paramsRes.json();

  const paymentUrl = new URL("https://oplata.info/asp2/pay_rk.asp");

  paymentUrl.searchParams.append("id_d", process.env.DIGISELLER_NETFLIX_BASE_ID!);
  paymentUrl.searchParams.append("id_po", id_po);
  paymentUrl.searchParams.append("curr", "RBX");
  paymentUrl.searchParams.append("lang", "ru-RU");
  paymentUrl.searchParams.append("failpage", "https://mnepodpisku.ru/netflix");

  return {
    status: "success",
    message: "success",
    data: { paymentUrl: paymentUrl.toString() },
  };
}
