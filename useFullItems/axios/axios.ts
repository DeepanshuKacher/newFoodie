import { constants } from "../constants";
import axios from "axios";

axios.defaults.baseURL = constants.BACKEND_URL;

/* export const initialFetch = async () =>
  await axios
    .get("auth/jwt", { withCredentials: true })
    .then((response) => {
      console.log({ response });
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + response.data.access_token;
    })
    .catch((error: AxiosError) => {
      console.log({ error });
    }); */

export const controllerUrls = {
  auth: "auth",
  chefs: "chefs",
  cart: "cart",
  dishes: "dishes",
  dishSection: "dish-sections",
  restaurant: "restaurants",
  orders: "orders",
  sessions: "sessions",
  tables: "tables",
  waiters: "waiters",
  foodie: "foodie",
} as const;

type KeysOfUrls = keyof typeof controllerUrls;
export type ControllerURLS = typeof controllerUrls[KeysOfUrls];

export { axios };
