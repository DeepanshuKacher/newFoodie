import { Order } from "../../../interfaces";
import { pushOrder } from "../../../pages/orders/summary/redux/orders";
import { store } from "../../redux";

export const pushToOrderContainer = (payload: {
  order: Order;
  orderNo: number;
}) => {
  store.dispatch(pushOrder(payload));
};
