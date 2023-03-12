import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../../../interfaces";

interface OrderContainer {
  orders: Order[];
}

const initialState: OrderContainer = {
  orders: [],
};

const orderContainer = createSlice({
  name: "orderContainer",
  initialState,
  reducers: {
    loadCartOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    pushCartOrders: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
  },
});

export const { loadCartOrders, pushCartOrders } = orderContainer.actions;

export default orderContainer.reducer;
