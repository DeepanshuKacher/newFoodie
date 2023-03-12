import React, { useEffect, useState } from "react";
import { CartNav } from "../../../components/SummaryCartNav";
import { ui_constants } from "../../../useFullItems/constants";
import {
  calculatePrice,
  getRandamValue,
} from "../../../useFullItems/functions";
import { useAppDispatch, useAppSelector } from "../../../useFullItems/redux";
import {
  hideLoader,
  showLoader,
} from "../../../useFullItems/redux/globalLoader";
import DetailModal from "../../../components/pageComponents/summary/DetailModal";
import { fetchOrder } from "../../../useFullItems/functions/onload/itemsFetch/order";
import { OrderDiv } from "../../../components/pageComponents/summary/OrderDiv";

function Summary() {
  const dispatch = useAppDispatch();
  const [showDetailModal, setShowDetailModal] = useState(false);
  const toggleDetailModal = () => setShowDetailModal(!showDetailModal);
  const { sessionUUID } = useAppSelector((store) => store.foodieInfo);
  const { allDisheshs } = useAppSelector((store) => store.restaurantInfo);
  const orders = useAppSelector((store) => store.orderContainer.orders);

  useEffect(() => {
    dispatch(showLoader());

    (async () => {
      if (sessionUUID) await fetchOrder(sessionUUID);
      dispatch(hideLoader());
    })();
  }, []);

  const totalPrice = () => {
    let totalPrice = 0;
    for (let x of orders) {
      const dish = allDisheshs.find((dish) => dish.id === x.dishId);
      totalPrice += calculatePrice(x, dish);
    }
    return totalPrice;
  };

  return (
    <main className="pb-16 bg-gray-100 min-h-screen">
      <CartNav />
      <DetailModal
        handleModal={toggleDetailModal}
        showModal={showDetailModal}
      />
      <section className="space-y-6 mt-4 px-2">
        {orders?.map((item) => {
          const dish = allDisheshs.find((dish) => dish.id === item.dishId);
          const bgColor = getRandamValue(ui_constants.colors.background);
          return (
            <OrderDiv
              backgroundColor={bgColor}
              key={item.orderId}
              dish={dish!}
              order={item}
            />
          );
        })}
      </section>
      <section className="bg-red-300 py-1 m-2 rounded-md">
        <h1 className="text-2xl text-center">Cart Total = ₹{totalPrice()}</h1>
      </section>
    </main>
  );
}

export default Summary;
