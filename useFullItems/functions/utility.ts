import { Dish, Order } from "../../interfaces";

export const getRandamValue: <T>(arrays: T[]) => T = (arrays) =>
  arrays[Math.floor(Math.random() * arrays.length)];

export const concatString = (...args: string[]) =>
  args.reduce(
    (previousValues, currentValue) =>
      currentValue ? previousValues + "/" + currentValue : previousValues,
    ""
  );

export const convertNumberStringToInt = (numberString: string | undefined) => {
  if (!numberString) return undefined;

  return parseInt(numberString);
};

export const calculatePrice = (order: Order, dish?: Dish) => {
  let returnPrice = 0;
  const { size, fullQuantity, halfQuantity } = order;

  returnPrice =
    (convertNumberStringToInt(fullQuantity) || 0) *
    (dish?.price?.[order.size]?.full || 0);
  returnPrice +=
    (convertNumberStringToInt(halfQuantity) || 0) *
    (dish?.price?.[order.size]?.half || 0);

  return returnPrice;
};
