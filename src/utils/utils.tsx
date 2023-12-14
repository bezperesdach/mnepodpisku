export function roundDownToMaxHundreds(inputNumber: number): number {
  if (!Number.isFinite(inputNumber)) {
    throw new Error("Input must be a finite number");
  }

  const hundreds = Math.round(inputNumber / 100) * 100;

  return hundreds - 1;
}
