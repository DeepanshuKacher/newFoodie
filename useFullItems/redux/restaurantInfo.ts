import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Dish, DishSections } from "../../interfaces";

interface RestaurantInfo {
  allDisheshs: Dish[];
  dishSections: DishSections[];
  restaurantId: string | undefined;
}

const initialState: RestaurantInfo = {
  allDisheshs: [],
  dishSections: [],
  restaurantId: undefined,
};

const restaurantInfo = createSlice({
  name: "restaurantInfo",
  initialState,
  reducers: {
    loadDishesh: (state, action: PayloadAction<Dish[]>) => {
      state.allDisheshs = action.payload;
    },

    loadDishSections: (state, action: PayloadAction<DishSections[]>) => {
      state.dishSections = action.payload;
    },
    loadRestaurantInfo: (state, action: PayloadAction<RestaurantInfo>) => {
      const { allDisheshs, dishSections, restaurantId } = action.payload;
      state.allDisheshs = allDisheshs;
      state.dishSections = dishSections;
      state.restaurantId = restaurantId;
    },
  },
});

export const { loadDishesh, loadDishSections, loadRestaurantInfo } =
  restaurantInfo.actions;

export default restaurantInfo.reducer;
