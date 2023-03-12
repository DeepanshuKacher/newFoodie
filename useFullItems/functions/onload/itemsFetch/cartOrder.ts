import { loadCartOrders } from "../../../../pages/orders/cart/redux/cartOrderContainer";
import { axiosGetFunction, controllerUrls } from "../../../axios";
import { store } from "../../../redux";
import { hideLoader, showLoader } from "../../../redux/globalLoader";

export const fetchCartOrderAndStore = async (sessionUUID: string) => {
  const data = await axiosGetFunction({
    parentUrl: controllerUrls.cart,
    childUrl: sessionUUID,
  });

  store.dispatch(loadCartOrders(data));
};
