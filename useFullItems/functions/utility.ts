import { Dish, Order, PriceStructure } from "../../interfaces";

export const getRandamValue: <T>(arrays: T[]) => T = (arrays) =>
  arrays[Math.floor(Math.random() * arrays.length)];

export const concatString = (...args: string[]) =>
  args.reduce(
    (previousValues, currentValue) =>
      currentValue ? previousValues + "/" + currentValue : previousValues,
    ""
  );

export const foodPriceDataStructure = (dishDetail: Dish) => {
  const foodPrice: PriceStructure = {};

  if (dishDetail?.FullLarge_Price || dishDetail?.HalfLarge_Price) {
    foodPrice.Large = {};
    if (dishDetail.FullLarge_Price)
      foodPrice.Large.full = dishDetail.FullLarge_Price;
    if (dishDetail.HalfLarge_Price)
      foodPrice.Large.half = dishDetail.HalfLarge_Price;
  }
  if (dishDetail?.FullMedium_Price || dishDetail?.HalfMedium_Price) {
    foodPrice.Medium = {};
    if (dishDetail.FullMedium_Price)
      foodPrice.Medium.full = dishDetail.FullMedium_Price;
    if (dishDetail.HalfMedium_Price)
      foodPrice.Medium.half = dishDetail.HalfMedium_Price;
  }
  if (dishDetail?.FullSmall_Price || dishDetail?.HalfSmall_Price) {
    foodPrice.Small = {};
    if (dishDetail.FullSmall_Price)
      foodPrice.Small.full = dishDetail.FullSmall_Price;
    if (dishDetail.HalfSmall_Price)
      foodPrice.Small.half = dishDetail.HalfSmall_Price;
  }

  return foodPrice;
};

export const calculatePrice = (order: Order, dish?: Dish) => {
  let returnPrice = 0;
  const { size, fullQuantity, halfQuantity } = order;

  if (size === "Large") {
    returnPrice = (fullQuantity || 0) * (dish?.FullLarge_Price || 0);
    returnPrice += (halfQuantity || 0) * (dish?.HalfLarge_Price || 0);
  } else if (size === "Medium") {
    returnPrice = (fullQuantity || 0) * (dish?.FullMedium_Price || 0);
    returnPrice += (halfQuantity || 0) * (dish?.HalfMedium_Price || 0);
  } else if (size === "Small") {
    returnPrice = (fullQuantity || 0) * (dish?.FullSmall_Price || 0);
    returnPrice += (halfQuantity || 0) * (dish?.HalfSmall_Price || 0);
  }
  return returnPrice;
};
