import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../../../interfaces";

interface OrderContainer {
  orders: Order[];
  noRepeatContainer: { [orderId: Order["orderId"]]: Order };
}

type Accepted = {
  chefId: Order["chefAssign"];
  orderId: Order["orderId"];
};

const initialState: OrderContainer = {
  orders: [],
  noRepeatContainer: {},
};

const orderContainer = createSlice({
  name: "orderContainer",
  initialState,
  reducers: {
    loadOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
      for (let x of state.orders) {
        state.noRepeatContainer[x.orderId] = x;
      }
    },
    pushOrder: (
      state,
      action: PayloadAction<{
        order: Order;
        orderNo: number;
      }>
    ) => {
      const { order, orderNo } = action.payload;
      if (state.noRepeatContainer[order.orderId] === undefined)
        state.orders.push(action.payload.order);

      // const todaysDate = new Date().getDate();
      // const totalTodaysOrder = state.orders.reduce((acc, currentValue) => {
      //   if (new Date(currentValue.createdAt).getDate() === todaysDate)
      //     return acc + 1;
      //   else return acc;
      // }, 0);
    },
    orderAccepted: (state, action: PayloadAction<Accepted>) => {
      const orders = [...state.orders];
      const selectedOrder = orders.findIndex(
        (item) => item.orderId === action.payload.orderId
      );

      orders[selectedOrder].chefAssign = action.payload.chefId;

      state.orders = orders;
    },
    orderCompleted: (state, action: PayloadAction<Order["orderId"]>) => {
      const orders = [...state.orders];
      const selectedOrder = orders.findIndex(
        (item) => item.orderId === action.payload
      );

      orders[selectedOrder].completed = "Completed";

      state.orders = orders;
    },
    orderRemove: (state, action: PayloadAction<Order["orderId"]>) => {
      const orders = [...state.orders];
      const selectedOrder = orders.findIndex(
        (item) => item.orderId === action.payload
      );

      orders[selectedOrder].chefAssign = undefined;

      state.orders = orders;
    },
  },
});

export const {
  loadOrders,
  pushOrder,
  orderAccepted,
  orderCompleted,
  orderRemove,
} = orderContainer.actions;

export default orderContainer.reducer;
