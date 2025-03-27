"use server";

import { roundDownToMaxHundreds } from "@/utils/utils";

//write an async dummy function that wait 3 seconds and returns number
export async function saveComment() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { calculated: 150, value: 100 };
}

const salesCalculator = (amount: number) => {
  const price = 3.42 * 1.45;

  const discountAmount = amount * price;

  return Math.round(discountAmount);
};

export async function getPsnBalancePrice(values: { amount: string }) {
  try {
    const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    calcUrl.searchParams.append("product_id", process.env.DIGISELLER_PSN_BASE_ID!);
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

    return { calculated: data.count >= 300 ? salesCalculator(data.count) : undefined, sale: Math.round(data.amount) };
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

    if (values.subscriptionType !== "essential" || values.duration !== "1") {
      calcUrl.searchParams.append(
        "options[]",
        `${process.env.DIGISELLER_PS_PLUS_OPTION_ID!}:${
          process.env[`DIGISELLER_PS_PLUS_${values.subscriptionType.toUpperCase()}_${values.duration}MONTH_VARIANT_ID`]
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

    if (duration !== "1") {
      calcUrl.searchParams.append(
        "options[]",
        `${process.env.DIGISELLER_PS_EA_PLAY_OPTION_ID}:${process.env[`DIGISELLER_PS_EA_PLAY_${duration}MONTH_VARIANT_ID`]}`
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

    if (values.subscriptionType !== "individual" || values.duration !== "1") {
      calcUrl.searchParams.append(
        "options[]",
        `${process.env.DIGISELLER_SPOTIFY_OPTION_ID}:${
          process.env[`DIGISELLER_SPOTIFY_${values.duration}MONTH_${values.subscriptionType.toUpperCase()}_VARIANT_ID`]
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
    // const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    // calcUrl.searchParams.append("product_id", process.env.DIGISELLER_TINDER_BASE_ID!);
    // calcUrl.searchParams.append("currency", "RBX");

    // if (values.subscriptionType !== "plus" || values.duration !== "1") {
    //   calcUrl.searchParams.append(
    //     "options[]",
    //     `${process.env.DIGISELLER_TINDER_OPTION_ID!}:${
    //       process.env[`DIGISELLER_TINDER_${values.duration}MONTH_${values.subscriptionType.toUpperCase()}_VARIANT_ID`]
    //     }`
    //   );
    // }
    // const response = await fetch(calcUrl.toString(), { next: { revalidate: 3600 } });

    // if (!response.ok) {
    //   // Handle non-successful HTTP response (e.g., 404, 500, etc.)
    //   // throw new Error(`Failed to fetch data. Status: ${response.status}`);
    //   return { calculated: undefined, sale: undefined };
    // }

    // const responseData = await response.json();

    // const data: {
    //   price: number;
    //   count: number;
    //   amount: number;
    //   currency: string;
    //   commission: number;
    //   free_pay: boolean | null;
    //   sale_info: { common_base_price: number; sale_percent: number };
    // } = responseData.data;

    return { sale: undefined };
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
    // const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    // calcUrl.searchParams.append("product_id", process.env.DIGISELLER_XBOX_GAME_PASS_ULTIMATE_BASE_ID!);
    // calcUrl.searchParams.append("currency", "RBX");

    // if (values.subscriptionType !== "ultimate" || values.duration !== "1") {
    //   calcUrl.searchParams.append(
    //     "options[]",
    //     `${process.env.DIGISELLER_XBOX_GAME_PASS_ULTIMATE_OPTION_ID!}:${process.env[
    //       `DIGISELLER_XBOX_GAME_PASS_ULTIMATE_${values.duration}MONTH_${values.subscriptionType.toUpperCase()}_VARIANT_ID`
    //     ]!}`
    //   );
    // }

    // const response = await fetch(calcUrl.toString(), { next: { revalidate: 3600 } });

    // if (!response.ok) {
    //   // Handle non-successful HTTP response (e.g., 404, 500, etc.)
    //   // throw new Error(`Failed to fetch data. Status: ${response.status}`);
    //   return { calculated: undefined, sale: undefined };
    // }

    // const responseData = await response.json();

    // const data: {
    //   price: number;
    //   count: number;
    //   amount: number;
    //   currency: string;
    //   commission: number;
    //   free_pay: boolean | null;
    //   sale_info: { common_base_price: number; sale_percent: number };
    // } = responseData.data;

    return { sale: undefined };
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
    // const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    // calcUrl.searchParams.append("product_id", process.env.DIGISELLER_YOUTUBE_PREMIUM_BASE_ID!);
    // calcUrl.searchParams.append("currency", "RBX");

    // if (duration !== "1") {
    //   calcUrl.searchParams.append(
    //     "options[]",
    //     `${process.env.DIGISELLER_YOUTUBE_PREMIUM_OPTION_ID!}:${process.env[`DIGISELLER_YOUTUBE_PREMIUM_${duration}MONTH_VARIANT_ID`]!}`
    //   );
    // }

    // const response = await fetch(calcUrl.toString(), { next: { revalidate: 3600 } });

    // if (!response.ok) {
    //   // Handle non-successful HTTP response (e.g., 404, 500, etc.)
    //   // throw new Error(`Failed to fetch data. Status: ${response.status}`);
    //   return { calculated: undefined, sale: undefined };
    // }

    // const responseData = await response.json();

    // const data: {
    //   price: number;
    //   count: number;
    //   amount: number;
    //   currency: string;
    //   commission: number;
    //   free_pay: boolean | null;
    //   sale_info: { common_base_price: number; sale_percent: number };
    // } = responseData.data;

    return { sale: undefined };
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
    // const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    // calcUrl.searchParams.append("product_id", process.env.DIGISELLER_ADOBE_CREATIVE_CLOUD_BASE_ID!);
    // calcUrl.searchParams.append("currency", "RBX");

    // if (duration !== "1") {
    //   calcUrl.searchParams.append(
    //     "options[]",
    //     `${process.env.DIGISELLER_ADOBE_CREATIVE_CLOUD_OPTION_ID!}:${process.env[
    //       `DIGISELLER_ADOBE_CREATIVE_CLOUD_${duration}MONTH_VARIANT_ID`
    //     ]!}`
    //   );
    // }
    // const response = await fetch(calcUrl.toString(), { next: { revalidate: 3600 } });

    // if (!response.ok) {
    //   // Handle non-successful HTTP response (e.g., 404, 500, etc.)
    //   // throw new Error(`Failed to fetch data. Status: ${response.status}`);
    //   return { calculated: undefined, sale: undefined };
    // }

    // const responseData = await response.json();

    // const data: {
    //   price: number;
    //   count: number;
    //   amount: number;
    //   currency: string;
    //   commission: number;
    //   free_pay: boolean | null;
    //   sale_info: { common_base_price: number; sale_percent: number };
    // } = responseData.data;

    return { sale: undefined };
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
    // const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    // calcUrl.searchParams.append("product_id", process.env.DIGISELLER_DISCORD_BASE_ID!);
    // calcUrl.searchParams.append("currency", "RBX");

    // if (values.subscriptionType !== "nitro_basic" || values.duration !== "1") {
    //   calcUrl.searchParams.append(
    //     "options[]",
    //     `${process.env.DIGISELLER_DISCORD_OPTION_ID!}:${process.env[
    //       `DIGISELLER_DISCORD_${values.duration}MONTH_${values.subscriptionType.toUpperCase()}_VARIANT_ID`
    //     ]!}`
    //   );
    // }
    // const response = await fetch(calcUrl.toString(), { next: { revalidate: 3600 } });

    // if (!response.ok) {
    //   // Handle non-successful HTTP response (e.g., 404, 500, etc.)
    //   // throw new Error(`Failed to fetch data. Status: ${response.status}`);
    //   return { calculated: undefined, sale: undefined };
    // }

    // const responseData = await response.json();

    // const data: {
    //   price: number;
    //   count: number;
    //   amount: number;
    //   currency: string;
    //   commission: number;
    //   free_pay: boolean | null;
    //   sale_info: { common_base_price: number; sale_percent: number };
    // } = responseData.data;

    return { sale: undefined };
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
    // const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    // calcUrl.searchParams.append("product_id", process.env.DIGISELLER_NETFLIX_BASE_ID!);
    // calcUrl.searchParams.append("currency", "RBX");

    // if (values.subscriptionType !== "basic" || values.duration !== "1") {
    //   calcUrl.searchParams.append(
    //     "options[]",
    //     `${process.env.DIGISELLER_NETFLIX_OPTION_ID}:${
    //       process.env[`DIGISELLER_NETFLIX_${values.duration}MONTH_${values.subscriptionType.toUpperCase()}_VARIANT_ID`]
    //     }`
    //   );
    // }
    // const response = await fetch(calcUrl.toString(), { next: { revalidate: 3600 } });

    // if (!response.ok) {
    //   // Handle non-successful HTTP response (e.g., 404, 500, etc.)
    //   // throw new Error(`Failed to fetch data. Status: ${response.status}`);
    //   return { calculated: undefined, sale: undefined };
    // }

    // const responseData = await response.json();

    // const data: {
    //   price: number;
    //   count: number;
    //   amount: number;
    //   currency: string;
    //   commission: number;
    //   free_pay: boolean | null;
    //   sale_info: { common_base_price: number; sale_percent: number };
    // } = responseData.data;

    return { sale: undefined };
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

export async function getTurkeyCardPrice(values: { amount: string; service: string }) {
  try {
    const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    calcUrl.searchParams.append("product_id", process.env.DIGISELLER_ONE_TIME_CARD_BASE_ID!);
    calcUrl.searchParams.append("currency", "RUB");

    calcUrl.searchParams.append("product_id", process.env.DIGISELLER_ONE_TIME_CARD_BASE_ID!);
    calcUrl.searchParams.append("currency", "RUB");
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
