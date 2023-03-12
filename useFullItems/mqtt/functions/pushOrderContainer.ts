import { Order } from "../../../interfaces";
import { pushOrder } from "../../../pages/orders/summary/redux/orders";
import { store } from "../../redux";

export const pushToOrderContainer = (payload: Order) => {
  store.dispatch(pushOrder(payload));
};
