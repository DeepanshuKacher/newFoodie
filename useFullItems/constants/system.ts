const ENVIORNMENT = {
  DEVELOPMENT: "DEVELOPMENT",
  PRODUCTION: "PRODUCTION",
} as const;

const currentEnviornment = process.env.ENVIORNMENT;

const IS_DEVELOPMENT = ENVIORNMENT.DEVELOPMENT === currentEnviornment,
  IS_PRODUCTION = !IS_DEVELOPMENT;

export const constants = {
  IS_DEVELOPMENT,
  IS_PRODUCTION,
  BACKEND_URL: IS_DEVELOPMENT
    ? "http://192.168.202.14:5000/"
    : "https://api.eatrofoods.com/",

  mqttTopicString: (
    restaurantId: string,
    tableSectionId: string,
    tableNumber: number
  ) => `${restaurantId}/order/${tableSectionId}/${tableNumber}`,
};
