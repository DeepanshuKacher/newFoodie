import { CartNav } from "../../../components/SummaryCartNav";
import { useAppDispatch, useAppSelector } from "../../../useFullItems/redux";
import { Order } from "../../../interfaces";
import { NewOrderDiv } from "../../../components/pageComponents/cart/OrderDiv";
import { calculatePrice } from "../../../useFullItems/functions";
import { useEffect, useState } from "react";
import {
  axiosDeleteFunction,
  axiosGetFunction,
  axiosPostFunction,
  controllerUrls,
} from "../../../useFullItems/axios";
import {
  hideLoader,
  showLoader,
} from "../../../useFullItems/redux/globalLoader";
import { fetchCartOrderAndStore } from "../../../useFullItems/functions/onload/itemsFetch/cartOrder";

function Cart() {
  const dispatch = useAppDispatch();

  const { sessionUUID, tableNumber, tableSectionId } = useAppSelector(
    (store) => store.foodieInfo
  );

  const cartItems = useAppSelector((store) => store.cartOrderContainer.orders);

  const { allDisheshs } = useAppSelector((store) => store.restaurantInfo);

  useEffect(() => {
    dispatch(showLoader());
    // this is here because foodie mqtt is not connected to cart order
    (async () => {
      if (sessionUUID) await fetchCartOrderAndStore(sessionUUID);

      dispatch(hideLoader());
    })();
  }, []);

  const deleteCartItem = (item: Order) => {
    dispatch(showLoader());
    axiosDeleteFunction({
      parentUrl: "cart",
      data: {
        tableSessionId: sessionUUID,
        cartOrder: [item.orderId],
      },
      thenFunction: async () => {
        if (sessionUUID) await fetchCartOrderAndStore(sessionUUID);
        dispatch(hideLoader());
      },
    });
  };

  const convertCartOrderToRealOrder = () => {
    dispatch(showLoader());
    axiosPostFunction({
      parentUrl: controllerUrls.cart,
      childUrl: "order",
      data: {
        tableSessionId: sessionUUID,
        cartOrder: cartItems.map((item) => item.orderId),
        tableNumber: tableNumber,
        tableSectionId: tableSectionId,
      },
      thenFunction: async () => {
        if (sessionUUID) await fetchCartOrderAndStore(sessionUUID);
        dispatch(hideLoader());
      },
    });
  };

  const totalPrice = () => {
    let totalPrice = 0;
    for (let x of cartItems) {
      const dish = allDisheshs.find((dish) => dish.id === x.dishId);
      totalPrice += calculatePrice(x, dish);
    }
    return totalPrice;
  };
  return (
    <main className="pb-16 bg-gray-100 min-h-screen">
      <CartNav />
      <section className="space-y-6 mt-4 px-2">
        {cartItems?.map((item, index) => {
          const dish = allDisheshs.find((dish) => dish.id === item.dishId);
          return (
            <NewOrderDiv
              deleteCartItem={deleteCartItem}
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
      {cartItems.length > 0 && (
        <section className="py-1 m-2 rounded-md text-right">
          <button
            onClick={convertCartOrderToRealOrder}
            className="border-4 border-green-500 text-green-600 text-xl mr-2 px-2 rounded-md py-1 font-bold "
          >
            Place Order
          </button>
        </section>
      )}
    </main>
  );
}

export default Cart;
