export function roundDownToMaxHundreds(inputNumber: number): number {
  if (!Number.isFinite(inputNumber)) {
    throw new Error("Input must be a finite number");
  }

  const hundreds = Math.round(inputNumber / 100) * 100;

  return hundreds - 1;
}

export const isAmountValid = (amount: string | string[] | undefined) => {
  if (amount && typeof amount === "string" && !isNaN(Number(amount))) {
    return amount;
  }
  return undefined;
};

export const isSearchParamValid = (searchParam: string | string[] | undefined) => {
  if (searchParam && typeof searchParam === "string" && searchParam.length > 0) {
    return searchParam;
  }
  return undefined;
};
