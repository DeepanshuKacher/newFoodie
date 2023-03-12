const ENVIORNMENT = {
  DEVELOPMENT: "DEVELOPMENT",
  PRODUCTION: "PRODUCTION",
} as const;

const currentEnviornmentENV = process.env.ENVIORNMENT;

const currentEnviornment: typeof ENVIORNMENT[keyof typeof ENVIORNMENT] =
  ENVIORNMENT.DEVELOPMENT;

const IS_DEVELOPMENT = false,
  IS_PRODUCTION = !IS_DEVELOPMENT;

console.log(currentEnviornmentENV, "inside constants");

export const constants = {
  IS_DEVELOPMENT,
  IS_PRODUCTION,
  BACKEND_URL: IS_DEVELOPMENT
    ? "http://192.168.43.48:5000/"
    : "https://api.eatrofoods.com/",

  mqttTopicString: (
    restaurantId: string,
    tableSectionId: string,
    tableNumber: number
  ) => `${restaurantId}/order/${tableSectionId}/${tableNumber}`,
};
