const ENVIORNMENT = {
  DEVELOPMENT: "DEVELOPMENT",
  PRODUCTION: "PRODUCTION",
} as const;

const currentEnviornment: typeof ENVIORNMENT[keyof typeof ENVIORNMENT] =
  ENVIORNMENT.DEVELOPMENT;

const IS_DEVELOPMENT = currentEnviornment === ENVIORNMENT.DEVELOPMENT,
  IS_PRODUCTION = !IS_DEVELOPMENT;

export const constants = {
  IS_DEVELOPMENT,
  IS_PRODUCTION,
  BACKEND_URL: IS_DEVELOPMENT
    ? "http://192.168.43.48:5000/"
    : "https://api.eatrofoods.com/",
};
