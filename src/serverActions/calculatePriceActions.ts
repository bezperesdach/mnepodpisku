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

export async function getPsnBalancePrice(amount: number) {
  try {
    const calcUrl = new URL(`https://api.digiseller.ru/api/products/price/calc`);

    calcUrl.searchParams.append("product_id", process.env.DIGISELLER_PSN_BASE_ID!);
    calcUrl.searchParams.append("currency", "RBX");
    calcUrl.searchParams.append("unit_cnt", amount.toString());

    const response = await fetch(calcUrl.toString());

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

    return { calculated: salesCalculator(data.count, data.amount), sale: Math.round(data.amount) };
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

    const response = await fetch(calcUrl.toString());
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

    const response = await fetch(calcUrl.toString());

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

    return { calculated: Math.round(data.price * data.count), sale: data.amount };
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

    const response = await fetch(calcUrl.toString());

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

    return { calculated: Math.round(data.price * data.count), sale: data.amount };
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
