"use server";

import { roundDownToMaxHundreds } from "@/utils/utils";

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

export async function getPsnBalancePrice(values: { amount: string; oneTimeCard: boolean }) {
  try {
    const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    calcUrl.searchParams.append(
      "product_id",
      values.oneTimeCard ? process.env.DIGISELLER_PSN_ONETIMECARD_ID! : process.env.DIGISELLER_PSN_BASE_ID!
    );
    calcUrl.searchParams.append("currency", "RBX");
    calcUrl.searchParams.append("unit_cnt", values.amount.toString());

    const response = await fetch(calcUrl.toString(), { next: { revalidate: 3600 } });

    if (!response.ok) {
      // Handle non-successful HTTP response (e.g., 404, 500, etc.)
      // throw new Error(`Failed to fetch data. Status: ${response.status}`);
      return { calculated: undefined, sale: undefined };
    }

    const responseData = await response.json();

    const data: {
      price: number;
      count: number;
      amount: number;
      currency: string;
      commission: number;
      free_pay: boolean | null;
      sale_info: { common_base_price: number; sale_percent: number };
    } = responseData.data;

    return { calculated: data.count >= 300 ? salesCalculator(data.count, data.amount) : undefined, sale: Math.round(data.amount) };
  } catch (error) {
    if (error instanceof Error) {
      // Check if the error is an instance of the Error class
      console.error("Error in getPsnBalancePrice:", error.message);
      return { calculated: undefined, sale: undefined };

      // throw error; // Rethrow the error to propagate it to the calling code
    } else {
      // Handle other types of errors (if any)
      console.error("Unknown error in getPsnBalancePrice:", error);
      return { calculated: undefined, sale: undefined };

      // throw new Error("An unknown error occurred."); // Rethrow a new error
    }
  }
}

export async function getPsnAccountPrice() {
  try {
    const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    calcUrl.searchParams.append("product_id", process.env.DIGISELLER_PSN_TURKEY_ACCOUNT_BASE_ID!);
    calcUrl.searchParams.append("currency", "RBX");

    const response = await fetch(calcUrl.toString(), { next: { revalidate: 3600 } });
    if (!response.ok) {
      // Handle non-successful HTTP response (e.g., 404, 500, etc.)
      // throw new Error(`Failed to fetch data. Status: ${response.status}`);
      return { calculated: undefined, sale: undefined };
    }

    const responseData = await response.json();

    const data: {
      price: number;
      count: number;
      amount: number;
      currency: string;
      commission: number;
      free_pay: boolean | null;
      sale_info: { common_base_price: number; sale_percent: number };
    } = responseData.data;

    return { calculated: roundDownToMaxHundreds(Math.round(data.price * 2)), sale: data.price };
  } catch (error) {
    if (error instanceof Error) {
      // Check if the error is an instance of the Error class
      console.error("Error in getPsnAccountPrice:", error.message);
      return { calculated: undefined, sale: undefined };

      // throw error; // Rethrow the error to propagate it to the calling code
    } else {
      // Handle other types of errors (if any)
      console.error("Unknown error in getPsnAccountPrice:", error);
      return { calculated: undefined, sale: undefined };

      // throw new Error("An unknown error occurred."); // Rethrow a new error
    }
  }
}

export async function getPsnPsPlusPrice(values: { subscriptionType: string; duration: string }) {
  try {
    const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    calcUrl.searchParams.append("product_id", process.env.DIGISELLER_PS_PLUS_BASE_ID!);
    calcUrl.searchParams.append("currency", "RBX");

    if (values.subscriptionType !== "essential" || values.duration !== "1month") {
      calcUrl.searchParams.append(
        "options[]",
        `${process.env.DIGISELLER_PS_PLUS_OPTION_ID!}:${
          process.env[`DIGISELLER_PS_PLUS_${values.subscriptionType.toUpperCase()}_${values.duration.toUpperCase()}_VARIANT_ID`]
        }`
      );
    }

    const response = await fetch(calcUrl.toString(), { next: { revalidate: 3600 } });

    if (!response.ok) {
      // Handle non-successful HTTP response (e.g., 404, 500, etc.)
      // throw new Error(`Failed to fetch data. Status: ${response.status}`);
      return { calculated: undefined, sale: undefined };
    }

    const responseData = await response.json();

    const data: {
      price: number;
      count: number;
      amount: number;
      currency: string;
      commission: number;
      free_pay: boolean | null;
      sale_info: { common_base_price: number; sale_percent: number };
    } = responseData.data;

    return { sale: data.amount };
  } catch (error) {
    if (error instanceof Error) {
      // Check if the error is an instance of the Error class
      console.error("Error in getPsnAccountPrice:", error.message);
      return { calculated: undefined, sale: undefined };

      // throw error; // Rethrow the error to propagate it to the calling code
    } else {
      // Handle other types of errors (if any)
      console.error("Unknown error in getPsnAccountPrice:", error);
      return { calculated: undefined, sale: undefined };

      // throw new Error("An unknown error occurred."); // Rethrow a new error
    }
  }
}

export async function getPsEaPlayPrice(duration: string) {
  try {
    const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    calcUrl.searchParams.append("product_id", process.env.DIGISELLER_PS_EA_PLAY_BASE_ID!);
    calcUrl.searchParams.append("currency", "RBX");

    if (duration !== "1month") {
      calcUrl.searchParams.append(
        "options[]",
        `${process.env.DIGISELLER_PS_EA_PLAY_OPTION_ID}:${process.env[`DIGISELLER_PS_EA_PLAY_${duration.toUpperCase()}_VARIANT_ID`]}`
      );
    }

    const response = await fetch(calcUrl.toString(), { next: { revalidate: 3600 } });

    if (!response.ok) {
      // Handle non-successful HTTP response (e.g., 404, 500, etc.)
      // throw new Error(`Failed to fetch data. Status: ${response.status}`);
      return { calculated: undefined, sale: undefined };
    }

    const responseData = await response.json();

    const data: {
      price: number;
      count: number;
      amount: number;
      currency: string;
      commission: number;
      free_pay: boolean | null;
      sale_info: { common_base_price: number; sale_percent: number };
    } = responseData.data;

    return { sale: data.amount };
  } catch (error) {
    if (error instanceof Error) {
      // Check if the error is an instance of the Error class
      console.error("Error in getPsEaPlayPrice:", error.message);
      return { calculated: undefined, sale: undefined };

      // throw error; // Rethrow the error to propagate it to the calling code
    } else {
      // Handle other types of errors (if any)
      console.error("Unknown error in getPsEaPlayPrice:", error);
      return { calculated: undefined, sale: undefined };

      // throw new Error("An unknown error occurred."); // Rethrow a new error
    }
  }
}

export async function getSpotifyPrice(values: { subscriptionType: string; duration: string }) {
  try {
    const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    calcUrl.searchParams.append("product_id", process.env.DIGISELLER_SPOTIFY_BASE_ID!);
    calcUrl.searchParams.append("currency", "RBX");

    if (values.subscriptionType !== "individual" || values.duration !== "1month") {
      calcUrl.searchParams.append(
        "options[]",
        `${process.env.DIGISELLER_SPOTIFY_OPTION_ID}:${
          process.env[`DIGISELLER_SPOTIFY_${values.duration.toUpperCase()}_${values.subscriptionType.toUpperCase()}_VARIANT_ID`]
        }`
      );
    }
    const response = await fetch(calcUrl.toString(), { next: { revalidate: 3600 } });

    if (!response.ok) {
      // Handle non-successful HTTP response (e.g., 404, 500, etc.)
      // throw new Error(`Failed to fetch data. Status: ${response.status}`);
      return { calculated: undefined, sale: undefined };
    }

    const responseData = await response.json();

    const data: {
      price: number;
      count: number;
      amount: number;
      currency: string;
      commission: number;
      free_pay: boolean | null;
      sale_info: { common_base_price: number; sale_percent: number };
    } = responseData.data;

    return { sale: data.amount };
  } catch (error) {
    if (error instanceof Error) {
      // Check if the error is an instance of the Error class
      console.error("Error in getSpotifyPrice:", error.message);
      return { calculated: undefined, sale: undefined };

      // throw error; // Rethrow the error to propagate it to the calling code
    } else {
      // Handle other types of errors (if any)
      console.error("Unknown error in getSpotifyPrice:", error);
      return { calculated: undefined, sale: undefined };

      // throw new Error("An unknown error occurred."); // Rethrow a new error
    }
  }
}

export async function getTinderPrice(values: { subscriptionType: string; duration: string }) {
  try {
    const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    calcUrl.searchParams.append("product_id", process.env.DIGISELLER_TINDER_BASE_ID!);
    calcUrl.searchParams.append("currency", "RBX");

    if (values.subscriptionType !== "plus" || values.duration !== "1month") {
      calcUrl.searchParams.append(
        "options[]",
        `${process.env.DIGISELLER_TINDER_OPTION_ID!}:${
          process.env[`DIGISELLER_TINDER_${values.duration.toUpperCase()}_${values.subscriptionType.toUpperCase()}_VARIANT_ID`]
        }`
      );
    }
    const response = await fetch(calcUrl.toString(), { next: { revalidate: 3600 } });

    if (!response.ok) {
      // Handle non-successful HTTP response (e.g., 404, 500, etc.)
      // throw new Error(`Failed to fetch data. Status: ${response.status}`);
      return { calculated: undefined, sale: undefined };
    }

    const responseData = await response.json();

    const data: {
      price: number;
      count: number;
      amount: number;
      currency: string;
      commission: number;
      free_pay: boolean | null;
      sale_info: { common_base_price: number; sale_percent: number };
    } = responseData.data;

    return { sale: data.amount };
  } catch (error) {
    if (error instanceof Error) {
      // Check if the error is an instance of the Error class
      console.error("Error in getTinderPrice:", error.message);
      return { calculated: undefined, sale: undefined };

      // throw error; // Rethrow the error to propagate it to the calling code
    } else {
      // Handle other types of errors (if any)
      console.error("Unknown error in getTinderPrice:", error);
      return { calculated: undefined, sale: undefined };

      // throw new Error("An unknown error occurred."); // Rethrow a new error
    }
  }
}

export async function getXboxPrice(values: { subscriptionType: string; duration: string }) {
  try {
    const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    calcUrl.searchParams.append("product_id", process.env.DIGISELLER_XBOX_GAME_PASS_ULTIMATE_BASE_ID!);
    calcUrl.searchParams.append("currency", "RBX");

    if (values.subscriptionType !== "ultimate" || values.duration !== "1month") {
      calcUrl.searchParams.append(
        "options[]",
        `${process.env.DIGISELLER_XBOX_GAME_PASS_ULTIMATE_OPTION_ID!}:${process.env[
          `DIGISELLER_XBOX_GAME_PASS_ULTIMATE_${values.duration.toUpperCase()}_${values.subscriptionType.toUpperCase()}_VARIANT_ID`
        ]!}`
      );
    }

    const response = await fetch(calcUrl.toString(), { next: { revalidate: 3600 } });

    if (!response.ok) {
      // Handle non-successful HTTP response (e.g., 404, 500, etc.)
      // throw new Error(`Failed to fetch data. Status: ${response.status}`);
      return { calculated: undefined, sale: undefined };
    }

    const responseData = await response.json();

    const data: {
      price: number;
      count: number;
      amount: number;
      currency: string;
      commission: number;
      free_pay: boolean | null;
      sale_info: { common_base_price: number; sale_percent: number };
    } = responseData.data;

    return { sale: data.amount };
  } catch (error) {
    if (error instanceof Error) {
      // Check if the error is an instance of the Error class
      console.error("Error in getTinderPrice:", error.message);
      return { calculated: undefined, sale: undefined };

      // throw error; // Rethrow the error to propagate it to the calling code
    } else {
      // Handle other types of errors (if any)
      console.error("Unknown error in getTinderPrice:", error);
      return { calculated: undefined, sale: undefined };

      // throw new Error("An unknown error occurred."); // Rethrow a new error
    }
  }
}

export async function getYoutubePrice(duration: string) {
  try {
    const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    calcUrl.searchParams.append("product_id", process.env.DIGISELLER_YOUTUBE_PREMIUM_BASE_ID!);
    calcUrl.searchParams.append("currency", "RBX");

    if (duration !== "1month") {
      calcUrl.searchParams.append(
        "options[]",
        `${process.env.DIGISELLER_YOUTUBE_PREMIUM_OPTION_ID!}:${process.env[
          `DIGISELLER_YOUTUBE_PREMIUM_${duration.toUpperCase()}_VARIANT_ID`
        ]!}`
      );
    }

    const response = await fetch(calcUrl.toString(), { next: { revalidate: 3600 } });

    if (!response.ok) {
      // Handle non-successful HTTP response (e.g., 404, 500, etc.)
      // throw new Error(`Failed to fetch data. Status: ${response.status}`);
      return { calculated: undefined, sale: undefined };
    }

    const responseData = await response.json();

    const data: {
      price: number;
      count: number;
      amount: number;
      currency: string;
      commission: number;
      free_pay: boolean | null;
      sale_info: { common_base_price: number; sale_percent: number };
    } = responseData.data;

    return { sale: data.amount };
  } catch (error) {
    if (error instanceof Error) {
      // Check if the error is an instance of the Error class
      console.error("Error in getTinderPrice:", error.message);
      return { calculated: undefined, sale: undefined };

      // throw error; // Rethrow the error to propagate it to the calling code
    } else {
      // Handle other types of errors (if any)
      console.error("Unknown error in getTinderPrice:", error);
      return { calculated: undefined, sale: undefined };

      // throw new Error("An unknown error occurred."); // Rethrow a new error
    }
  }
}

export async function getAdobeCCPrice(duration: string) {
  try {
    const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    calcUrl.searchParams.append("product_id", process.env.DIGISELLER_ADOBE_CREATIVE_CLOUD_BASE_ID!);
    calcUrl.searchParams.append("currency", "RBX");

    if (duration !== "1month") {
      calcUrl.searchParams.append(
        "options[]",
        `${process.env.DIGISELLER_ADOBE_CREATIVE_CLOUD_OPTION_ID!}:${process.env[
          `DIGISELLER_ADOBE_CREATIVE_CLOUD_${duration.toUpperCase()}_VARIANT_ID`
        ]!}`
      );
    }
    const response = await fetch(calcUrl.toString(), { next: { revalidate: 3600 } });

    if (!response.ok) {
      // Handle non-successful HTTP response (e.g., 404, 500, etc.)
      // throw new Error(`Failed to fetch data. Status: ${response.status}`);
      return { calculated: undefined, sale: undefined };
    }

    const responseData = await response.json();

    const data: {
      price: number;
      count: number;
      amount: number;
      currency: string;
      commission: number;
      free_pay: boolean | null;
      sale_info: { common_base_price: number; sale_percent: number };
    } = responseData.data;

    return { sale: data.amount };
  } catch (error) {
    if (error instanceof Error) {
      // Check if the error is an instance of the Error class
      console.error("Error in getTinderPrice:", error.message);
      return { calculated: undefined, sale: undefined };

      // throw error; // Rethrow the error to propagate it to the calling code
    } else {
      // Handle other types of errors (if any)
      console.error("Unknown error in getTinderPrice:", error);
      return { calculated: undefined, sale: undefined };

      // throw new Error("An unknown error occurred."); // Rethrow a new error
    }
  }
}

export async function getDiscordPrice(values: { subscriptionType: string; duration: string }) {
  try {
    const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    calcUrl.searchParams.append("product_id", process.env.DIGISELLER_DISCORD_BASE_ID!);
    calcUrl.searchParams.append("currency", "RBX");

    if (values.subscriptionType !== "nitro_basic" || values.duration !== "1month") {
      calcUrl.searchParams.append(
        "options[]",
        `${process.env.DIGISELLER_DISCORD_OPTION_ID!}:${process.env[
          `DIGISELLER_DISCORD_${values.duration.toUpperCase()}_${values.subscriptionType.toUpperCase()}_VARIANT_ID`
        ]!}`
      );
    }
    const response = await fetch(calcUrl.toString(), { next: { revalidate: 3600 } });

    if (!response.ok) {
      // Handle non-successful HTTP response (e.g., 404, 500, etc.)
      // throw new Error(`Failed to fetch data. Status: ${response.status}`);
      return { calculated: undefined, sale: undefined };
    }

    const responseData = await response.json();

    const data: {
      price: number;
      count: number;
      amount: number;
      currency: string;
      commission: number;
      free_pay: boolean | null;
      sale_info: { common_base_price: number; sale_percent: number };
    } = responseData.data;

    return { sale: data.amount };
  } catch (error) {
    if (error instanceof Error) {
      // Check if the error is an instance of the Error class
      console.error("Error in getTinderPrice:", error.message);
      return { calculated: undefined, sale: undefined };

      // throw error; // Rethrow the error to propagate it to the calling code
    } else {
      // Handle other types of errors (if any)
      console.error("Unknown error in getTinderPrice:", error);
      return { calculated: undefined, sale: undefined };

      // throw new Error("An unknown error occurred."); // Rethrow a new error
    }
  }
}

export async function getNetflixPrice(values: { subscriptionType: string; duration: string }) {
  try {
    const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    calcUrl.searchParams.append("product_id", process.env.DIGISELLER_NETFLIX_BASE_ID!);
    calcUrl.searchParams.append("currency", "RBX");

    if (values.subscriptionType !== "basic" || values.duration !== "1month") {
      calcUrl.searchParams.append(
        "options[]",
        `${process.env.DIGISELLER_NETFLIX_OPTION_ID}:${
          process.env[`DIGISELLER_NETFLIX_${values.duration.toUpperCase()}_${values.subscriptionType.toUpperCase()}_VARIANT_ID`]
        }`
      );
    }
    const response = await fetch(calcUrl.toString(), { next: { revalidate: 3600 } });

    if (!response.ok) {
      // Handle non-successful HTTP response (e.g., 404, 500, etc.)
      // throw new Error(`Failed to fetch data. Status: ${response.status}`);
      return { calculated: undefined, sale: undefined };
    }

    const responseData = await response.json();

    const data: {
      price: number;
      count: number;
      amount: number;
      currency: string;
      commission: number;
      free_pay: boolean | null;
      sale_info: { common_base_price: number; sale_percent: number };
    } = responseData.data;

    return { sale: data.amount };
  } catch (error) {
    if (error instanceof Error) {
      // Check if the error is an instance of the Error class
      console.error("Error in getTinderPrice:", error.message);
      return { calculated: undefined, sale: undefined };

      // throw error; // Rethrow the error to propagate it to the calling code
    } else {
      // Handle other types of errors (if any)
      console.error("Unknown error in getTinderPrice:", error);
      return { calculated: undefined, sale: undefined };

      // throw new Error("An unknown error occurred."); // Rethrow a new error
    }
  }
}
