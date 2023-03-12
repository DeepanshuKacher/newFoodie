import { Order } from "../../../../interfaces";
import { loadOrders } from "../../../../pages/orders/summary/redux/orders";
import { axiosGetFunction, controllerUrls } from "../../../axios";
import { store } from "../../../redux";
import { hideLoader, showLoader } from "../../../redux/globalLoader";

export const fetchOrder = async (sessionUUID: string) => {
  const orders = await axiosGetFunction({
    parentUrl: controllerUrls.sessions,
    childUrl: sessionUUID,
  });
  store.dispatch(loadOrders(orders));
};
