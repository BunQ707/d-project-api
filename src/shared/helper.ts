import Decimal from 'decimal.js';

export const calculateBMI = (weightInKg: number, heightInCm: number) => {
  return new Decimal(weightInKg || 0)
    .div(new Decimal(heightInCm || 0).div(100).pow(2))
    .toDecimalPlaces(2, Decimal.ROUND_DOWN)
    .toNumber();
};
