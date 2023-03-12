import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../../../interfaces";

interface OrderContainer {
  orders: Order[];
}

type Accepted = {
  chefId: Order["chefAssign"];
  orderId: Order["orderId"];
};

const initialState: OrderContainer = {
  orders: [],
};

const orderContainer = createSlice({
  name: "orderContainer",
  initialState,
  reducers: {
    loadOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    pushOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
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
