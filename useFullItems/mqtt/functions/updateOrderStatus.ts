import {
  orderAccepted,
  orderCompleted,
  orderRemove,
} from "../../../pages/orders/summary/redux/orders";
import { store } from "../../redux";

const orderStatusUpdation = {
  Accept: "Accept",
  Completed: "Completed",
  Remove: "Remove",
};

export const updateOrderStatus = (payload: {
  orderId: string;
  orderStatus: keyof typeof orderStatusUpdation;
  chefId: string;
}) => {
  switch (payload.orderStatus) {
    case "Accept":
      store.dispatch(
        orderAccepted({
          chefId: payload.chefId,
          orderId: payload.orderId,
        })
      );
      break;

    case "Completed":
      store.dispatch(orderCompleted(payload.orderId));
      break;

    case "Remove":
      store.dispatch(orderRemove(payload.orderId));
      break;

    default:
      console.log(payload);
      break;
  }
};
