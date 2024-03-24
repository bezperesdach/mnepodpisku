export function roundDownToMaxHundreds(inputNumber: number): number {
  if (!Number.isFinite(inputNumber)) {
    throw new Error("Input must be a finite number");
  }

  const hundreds = Math.round(inputNumber / 100) * 100;

  return hundreds - 1;
}

export const getAmountFromSlug = (slug: string | string[] | undefined) => {
  let amount;
  if (slug) {
    if (typeof slug === "string") {
      amount = slug;
    }

    if (Array.isArray(slug) && slug.length > 0) {
      amount = slug[0];
    }
  }

  if (amount) {
    const num = parseInt(amount, 10);
    if (!isNaN(num) && Number.isInteger(num)) {
      return amount;
    }
  }

  return undefined;
};

export const isAmountValid = (amount: string | string[] | undefined) => {
  if (amount && typeof amount === "string" && !isNaN(Number(amount))) {
    return amount;
  } else if (Array.isArray(amount) && amount.length > 0 && typeof amount[0] === "string" && !isNaN(Number(amount[0]))) {
    if (Number.isInteger(amount[0])) {
      return amount[0];
    }
    return undefined;
  }

  return undefined;
};

export const isSearchParamValid = (searchParam: string | string[] | undefined) => {
  if (searchParam && typeof searchParam === "string" && searchParam.length > 0) {
    return searchParam;
  }
  return undefined;
};

export const getYYYYmmddFromDate = (date: Date) => {
  const offset = date.getTimezoneOffset();
  const accurateDate = new Date(date.getTime() - offset * 60 * 1000);
  return accurateDate.toISOString().split("T")[0];
};

function parseDateString(dateString: string) {
  const [day, month, year, time] = dateString.split(/[. :]/);
  const hours = parseInt(time);
  const minutes = parseInt(time);
  const seconds = parseInt(time);

  return new Date(Number(year), Number(month) - 1, Number(day), hours, minutes, seconds);
}

export function isDateDifferenceGreaterThanOneDay(dateString: string) {
  // Assuming dateString is in a format that can be parsed by Date constructor
  const dateToCheck = new Date(parseDateString(dateString));

  // Adjusting for GMT+3
  dateToCheck.setHours(dateToCheck.getHours() + 3);

  // Current date in GMT+3
  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() + 3);

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate.getTime() - dateToCheck.getTime();

  // Calculate the difference in days
  const differenceInDays = timeDifference / (1000 * 60 * 60 * 24);

  // Return true if the difference is more than 1 day, otherwise false
  return differenceInDays > 1;
}

export function shuffle(originalArray: any[]) {
  // Create a copy of the original array to avoid modifying it directly
  let shuffledArray = originalArray.slice();

  // Fisher-Yates (aka Knuth) Shuffle
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
